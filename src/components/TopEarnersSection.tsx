import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Crown, TrendingUp, DollarSign } from "lucide-react";

export function TopEarnersSection() {
  const topEarners = [
    {
      rank: 1,
      name: "Igor Almeida",
      company: "Hinode",
      monthlyEarnings: "R$ 89.500",
      totalEarnings: "R$ 2.4M",
      avatar: "/placeholder.svg",
      country: "BR",
      isVerified: true
    },
    {
      rank: 2, 
      name: "Ana Beatriz Santos",
      company: "Herbalife", 
      monthlyEarnings: "R$ 67.200",
      totalEarnings: "R$ 1.8M",
      avatar: "/placeholder.svg",
      country: "BR",
      isVerified: true
    },
    {
      rank: 3,
      name: "Carlos Eduardo Silva",
      company: "Jeunesse",
      monthlyEarnings: "R$ 54.800",
      totalEarnings: "R$ 1.5M", 
      avatar: "/placeholder.svg",
      country: "BR",
      isVerified: true
    },
    {
      rank: 4,
      name: "Mariana Costa",
      company: "4Life",
      monthlyEarnings: "R$ 48.300",
      totalEarnings: "R$ 1.2M",
      avatar: "/placeholder.svg",
      country: "BR", 
      isVerified: false
    },
    {
      rank: 5,
      name: "Roberto Ferreira",
      company: "Nu Skin",
      monthlyEarnings: "R$ 41.700",
      totalEarnings: "R$ 980K",
      avatar: "/placeholder.svg",
      country: "BR",
      isVerified: true
    },
    {
      rank: 6,
      name: "Patricia Oliveira", 
      company: "Amway",
      monthlyEarnings: "R$ 38.900",
      totalEarnings: "R$ 850K",
      avatar: "/placeholder.svg",
      country: "BR",
      isVerified: false
    },
    {
      rank: 7,
      name: "Fernando Lima",
      company: "Natura", 
      monthlyEarnings: "R$ 35.600",
      totalEarnings: "R$ 720K",
      avatar: "/placeholder.svg",
      country: "BR",
      isVerified: true
    },
    {
      rank: 8,
      name: "Juliana Rocha",
      company: "Mary Kay",
      monthlyEarnings: "R$ 32.400",
      totalEarnings: "R$ 650K",
      avatar: "/placeholder.svg", 
      country: "BR",
      isVerified: false
    }
  ];

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1: return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case 2: return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case 3: return "bg-gradient-to-r from-amber-600 to-amber-800 text-white";
      default: return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section className="py-16 pb-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Table */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Top Earners na Carreira de Vendas Diretas
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Pesquisar..." className="pl-10" />
                </div>
                <Button variant="outline">Filtrar por país</Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="text-left p-4 font-semibold">Rank</th>
                      <th className="text-left p-4 font-semibold">Nome</th>
                      <th className="text-left p-4 font-semibold">Empresa</th>
                      <th className="text-left p-4 font-semibold">Renda Mensal</th>
                      <th className="text-left p-4 font-semibold">Total de Carreira</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topEarners.map((earner) => (
                      <tr key={earner.rank} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${getRankBadgeColor(earner.rank)}`}>
                            {earner.rank <= 3 ? <Crown className="w-4 h-4" /> : earner.rank}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={earner.avatar} alt={earner.name} />
                              <AvatarFallback className="bg-accent text-accent-foreground text-sm">
                                {earner.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-foreground">{earner.name}</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <span className="fi fi-br w-4 h-4 rounded-sm"></span>
                                Brasil
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-foreground">{earner.company}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1 text-accent font-semibold">
                            <DollarSign className="w-4 h-4" />
                            {earner.monthlyEarnings}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-semibold text-foreground">{earner.totalEarnings}</span>
                        </td>
                        <td className="p-4">
                          {earner.isVerified ? (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                              Verificado
                            </Badge>
                          ) : (
                            <Badge variant="outline">
                              Pendente
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t border-border bg-muted/30">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-feedforeground">
                    Mostrando 8 de 1,247 resultados
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Anterior</Button>
                    <Button variant="outline" size="sm">Próximo</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Ranking por categoria
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Top Monthly Earners</span>
                  <span className="font-medium text-foreground">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Top Career Earners</span>
                  <span className="font-medium text-foreground">856</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rising Stars</span>
                  <span className="font-medium text-foreground">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Hall of Fame</span>
                  <span className="font-medium text-foreground">89</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Estatísticas</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">R$ 2.4M+</div>
                  <div className="text-sm text-muted-foreground">Renda total distribuída</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-turquoise">1,247</div>
                  <div className="text-sm text-muted-foreground">Distribuidores ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">234</div>
                  <div className="text-sm text-muted-foreground">Empresas listadas</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}