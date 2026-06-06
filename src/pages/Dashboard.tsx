import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Award, 
  LogOut,
  Download,
  MessageSquare,
  Copy,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from "lucide-react";

interface Profile {
  id: string;
  user_id: string;
  user_type: string;
  full_name: string;
  email: string;
  phone: string;
  pix_key: string;
  referral_code: string;
  total_earnings: number;
  available_balance: number;
  total_withdrawals: number;
  is_active: boolean;
}

interface Commission {
  id: string;
  amount: number;
  level: number;
  created_at: string;
  status: string;
  vote_id: string;
}

interface Withdrawal {
  id: string;
  amount: number;
  status: string;
  created_at: string;
  processed_at: string;
}

const Dashboard = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        loadUserData(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
      return;
    }
    setUser(session.user);
    await loadUserData(session.user.id);
  };

  const loadUserData = async (userId: string) => {
    try {
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (profileError) throw profileError;
      setProfile(profileData);

      const { data: commissionsData, error: commissionsError } = await supabase
        .from("commissions")
        .select("*")
        .eq("referrer_id", userId)
        .order("created_at", { ascending: false })
        .limit(10);

      if (commissionsError) throw commissionsError;
      setCommissions(commissionsData || []);

      const { data: withdrawalsData, error: withdrawalsError } = await supabase
        .from("withdrawals")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(10);

      if (withdrawalsError) throw withdrawalsError;
      setWithdrawals(withdrawalsData || []);

    } catch (error: any) {
      console.error("Error loading user data:", error);
      toast({
        title: "Erro ao carregar dados",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Erro ao sair",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate("/");
    }
  };

  const copyReferralLink = () => {
    const referralLink = `${window.location.origin}/auth?ref=${profile?.referral_code}`;
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link copiado!",
      description: "Seu link de referência foi copiado para a área de transferência.",
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: "Pendente", variant: "secondary" as const },
      paid: { label: "Pago", variant: "default" as const },
      processing: { label: "Processando", variant: "secondary" as const },
      completed: { label: "Concluído", variant: "default" as const },
      rejected: { label: "Rejeitado", variant: "destructive" as const },
    };
    
    const statusInfo = statusMap[status as keyof typeof statusMap] || { label: status, variant: "secondary" as const };
    return <Badge variant={statusInfo.variant} className="bg-gradient-gold text-gold-foreground">{statusInfo.label}</Badge>;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2332] to-[#0f1729] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gradient-gold"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2332] to-[#0f1729] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Perfil não encontrado</h2>
          <Button onClick={() => navigate("/auth")}>Voltar ao Login</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2332] to-[#0f1729]">
      {/* Header */}
      <header className="bg-[#1a2332]/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png" 
                alt="Logo" 
                width={512}
                height={512}
                className="h-12 w-12 object-contain" 
              />
              <div>
                <h1 className="text-2xl font-bold text-gradient-gold">Dashboard</h1>
                <p className="text-white/70 text-sm">Bem-vindo, {profile.full_name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate("/")} className="border-white/20 text-white hover:bg-white/10">
                Voltar ao Site
              </Button>
              <Button variant="ghost" onClick={handleLogout} className="text-white hover:bg-white/10">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10 hover:border-white/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-gold rounded-lg">
                  <DollarSign className="h-6 w-6 text-gold-foreground" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-green-400" />
              </div>
              <div className="space-y-1">
                <p className="text-white/70 text-sm">Saldo Disponível</p>
                <h3 className="text-3xl font-bold text-gradient-gold">
                  {formatCurrency(profile.available_balance)}
                </h3>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10 hover:border-white/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-gold rounded-lg">
                  <TrendingUp className="h-6 w-6 text-gold-foreground" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-green-400" />
              </div>
              <div className="space-y-1">
                <p className="text-white/70 text-sm">Total de Ganhos</p>
                <h3 className="text-3xl font-bold text-white">
                  {formatCurrency(profile.total_earnings)}
                </h3>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10 hover:border-white/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-gold rounded-lg">
                  <CreditCard className="h-6 w-6 text-gold-foreground" />
                </div>
                <ArrowDownRight className="h-5 w-5 text-orange-400" />
              </div>
              <div className="space-y-1">
                <p className="text-white/70 text-sm">Total Sacado</p>
                <h3 className="text-3xl font-bold text-white">
                  {formatCurrency(profile.total_withdrawals)}
                </h3>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10 hover:border-white/20 transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-gold rounded-lg">
                  <Award className="h-6 w-6 text-gold-foreground" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-white/70 text-sm">Meu Código</p>
                <h3 className="text-3xl font-bold text-gradient-gold">
                  {profile.referral_code}
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyReferralLink}
                className="mt-3 w-full text-white hover:bg-white/10"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copiar Link
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-[#1a2332]/80 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-gold-foreground">Visão Geral</TabsTrigger>
            <TabsTrigger value="commissions" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-gold-foreground">Comissões</TabsTrigger>
            <TabsTrigger value="withdrawals" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-gold-foreground">Saques</TabsTrigger>
            <TabsTrigger value="network" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-gold-foreground">Rede</TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-gold-foreground">Suporte</TabsTrigger>
            <TabsTrigger value="downloads" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-gold-foreground">Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-gold rounded-lg">
                      <Clock className="h-5 w-5 text-gold-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Últimas Comissões</h3>
                      <p className="text-white/60 text-sm">Suas comissões mais recentes</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {commissions.slice(0, 5).map((commission) => (
                      <div key={commission.id} className="flex items-center justify-between p-4 bg-[#0f1729]/50 rounded-lg border border-white/5 hover:border-white/10 transition-all">
                        <div>
                          <p className="font-medium text-white">Nível {commission.level}</p>
                          <p className="text-sm text-white/60">
                            {new Date(commission.created_at).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gradient-gold text-lg">
                            {formatCurrency(commission.amount)}
                          </p>
                          {getStatusBadge(commission.status)}
                        </div>
                      </div>
                    ))}
                    {commissions.length === 0 && (
                      <p className="text-white/60 text-center py-8">
                        Nenhuma comissão encontrada
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-gold rounded-lg">
                      <Award className="h-5 w-5 text-gold-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Link de Referência</h3>
                      <p className="text-white/60 text-sm">Compartilhe para ganhar comissões</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#0f1729]/50 rounded-lg border border-white/10">
                      <p className="text-sm text-white/80 break-all">
                        {`${window.location.origin}/auth?ref=${profile.referral_code}`}
                      </p>
                    </div>
                    <Button onClick={copyReferralLink} className="w-full">
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar Link de Referência
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="commissions">
            <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-gold rounded-lg">
                    <TrendingUp className="h-5 w-5 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Histórico de Comissões</h3>
                    <p className="text-white/60 text-sm">Todas as suas comissões recebidas</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {commissions.map((commission) => (
                    <div key={commission.id} className="flex items-center justify-between p-4 bg-[#0f1729]/50 rounded-lg border border-white/5 hover:border-white/10 transition-all">
                      <div>
                        <p className="font-medium text-white">Comissão Nível {commission.level}</p>
                        <p className="text-sm text-white/60">
                          {new Date(commission.created_at).toLocaleString('pt-BR')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gradient-gold text-lg">
                          {formatCurrency(commission.amount)}
                        </p>
                        {getStatusBadge(commission.status)}
                      </div>
                    </div>
                  ))}
                  {commissions.length === 0 && (
                    <p className="text-white/60 text-center py-8">
                      Nenhuma comissão encontrada
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="withdrawals">
            <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-gold rounded-lg">
                    <CreditCard className="h-5 w-5 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Histórico de Saques</h3>
                    <p className="text-white/60 text-sm">Seus saques realizados e pendentes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {withdrawals.map((withdrawal) => (
                    <div key={withdrawal.id} className="flex items-center justify-between p-4 bg-[#0f1729]/50 rounded-lg border border-white/5 hover:border-white/10 transition-all">
                      <div>
                        <p className="font-medium text-white">Saque PIX</p>
                        <p className="text-sm text-white/60">
                          {new Date(withdrawal.created_at).toLocaleString('pt-BR')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white text-lg">
                          {formatCurrency(withdrawal.amount)}
                        </p>
                        {getStatusBadge(withdrawal.status)}
                      </div>
                    </div>
                  ))}
                  {withdrawals.length === 0 && (
                    <p className="text-white/60 text-center py-8">
                      Nenhum saque encontrado
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network">
            <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10">
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <div className="p-4 bg-gradient-gold/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-10 w-10 text-gradient-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Minha Rede</h3>
                  <p className="text-white/60">
                    Funcionalidade em desenvolvimento
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10">
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <div className="p-4 bg-gradient-gold/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <MessageSquare className="h-10 w-10 text-gradient-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Suporte</h3>
                  <p className="text-white/60">
                    Sistema de tickets em desenvolvimento
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="downloads">
            <Card className="bg-gradient-to-br from-[#1e2a3f] to-[#2a3548] border-white/10">
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <div className="p-4 bg-gradient-gold/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Download className="h-10 w-10 text-gradient-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Material para Download</h3>
                  <p className="text-white/60">
                    Materiais serão disponibilizados em breve
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
