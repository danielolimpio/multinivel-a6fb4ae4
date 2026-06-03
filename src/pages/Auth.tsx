import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

interface AuthProps {
  userType?: "admin" | "affiliate";
}

const Auth = ({ userType = "affiliate" }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      // Check user type and redirect accordingly
      const { data: profile } = await supabase
        .from("profiles")
        .select("user_type")
        .eq("user_id", session.user.id)
        .single();
      
      if (profile?.user_type === "admin" && userType === "admin") {
        navigate("/admin");
      } else if (profile?.user_type === "affiliate" && userType === "affiliate") {
        navigate("/dashboard");
      }
    }
  };
    checkUser();

    // Get referral code from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get("ref");
    if (ref) {
      setReferralCode(ref);
    }

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        // Check user type and redirect accordingly
        const { data: profile } = await supabase
          .from("profiles")
          .select("user_type")
          .eq("user_id", session.user.id)
          .single();
        
        if (profile?.user_type === "admin" && userType === "admin") {
          navigate("/admin");
        } else if (profile?.user_type === "affiliate" && userType === "affiliate") {
          navigate("/dashboard");
        } else if (userType === "admin" && profile?.user_type !== "admin") {
          toast({
            title: "Acesso negado",
            description: "Você não tem permissão de administrador.",
            variant: "destructive",
          });
          await supabase.auth.signOut();
        } else if (userType === "affiliate" && profile?.user_type !== "affiliate") {
          toast({
            title: "Acesso negado", 
            description: "Esta área é apenas para afiliados.",
            variant: "destructive",
          });
          await supabase.auth.signOut();
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, userType, toast]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if referral code exists if provided
      let referrerId = null;
      if (referralCode) {
        const { data: referrer } = await supabase
          .from("profiles")
          .select("user_id")
          .eq("referral_code", referralCode.toUpperCase())
          .single();
        
        if (!referrer) {
          toast({
            title: "Código de referência inválido",
            description: "O código de referência informado não existe.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        referrerId = referrer.user_id;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            full_name: fullName,
            phone: phone,
            referred_by: referrerId,
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        // Update profile with additional information
        const { error: profileError } = await supabase
          .from("profiles")
          .update({
            full_name: fullName,
            phone: phone,
            referred_by: referrerId,
          })
          .eq("user_id", data.user.id);

        if (profileError) {
          console.error("Error updating profile:", profileError);
        }

        toast({
          title: "Conta criada com sucesso!",
          description: "Verifique seu email para confirmar sua conta.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Erro ao criar conta",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Check user type and redirect accordingly
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("user_type")
          .eq("user_id", session.user.id)
          .single();
        
        if (profile?.user_type === "admin" && userType === "admin") {
          navigate("/admin");
        } else if (profile?.user_type === "affiliate" && userType === "affiliate") {
          navigate("/dashboard");
        } else if (userType === "admin" && profile?.user_type !== "admin") {
          toast({
            title: "Acesso negado",
            description: "Você não tem permissão de administrador.",
            variant: "destructive",
          });
          await supabase.auth.signOut();
          return;
        } else if (userType === "affiliate" && profile?.user_type !== "affiliate") {
          toast({
            title: "Acesso negado", 
            description: "Esta área é apenas para afiliados.",
            variant: "destructive",
          });
          await supabase.auth.signOut();
          return;
        }
      }
    } catch (error: any) {
      toast({
        title: "Erro ao fazer login",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/auth/auth-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-blue-800/75 backdrop-blur-sm" />
      <div className="relative z-10 w-full flex items-center justify-center">
      <Card className="w-full max-w-md relative overflow-visible mt-20">
        <img
          src="/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png"
          alt="Universidade Multinível"
          className="absolute left-1/2 -translate-x-1/2 -top-20 h-32 w-32 object-contain z-20"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }}
        />
        <CardHeader className="text-center pt-16">
          <CardDescription>
            {userType === "admin"
              ? "Acesso restrito para administradores"
              : "Faça login ou crie sua conta para acessar a plataforma"
            }
          </CardDescription>
        </CardHeader>

        <CardContent>
              <Tabs defaultValue="login" className="w-full">
                {userType === "affiliate" && (
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Cadastro</TabsTrigger>
                  </TabsList>
                )}
                {userType === "admin" && (
                  <TabsList className="grid w-full grid-cols-1">
                    <TabsTrigger value="login">Login Administrativo</TabsTrigger>
                  </TabsList>
                )}
            
            <TabsContent value="login">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button type="submit" variant="premium" className="w-full" disabled={loading}>
                  {loading ? "Entrando..." : "Entrar"}
                </Button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => { setResetEmail(email); setShowForgot(true); }}
                    className="text-sm text-primary hover:text-accent underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha?
                  </button>
                </div>
              </form>
            </TabsContent>
            
            {userType === "affiliate" && (
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nome Completo</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="referralCode">Código de Referência (Opcional)</Label>
                    <Input
                      id="referralCode"
                      type="text"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                      placeholder="Digite o código do seu indicador"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Criando conta..." : "Criar Conta"}
                  </Button>
                </form>
              </TabsContent>
            )}
          </Tabs>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default Auth;