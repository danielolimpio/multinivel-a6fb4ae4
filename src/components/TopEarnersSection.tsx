import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Crown, TrendingUp, DollarSign } from "lucide-react";
import { SolarienBanner } from "@/components/SolarienBanner";

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
    <section className="py-8 sm:py-16 pb-20 sm:pb-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Single column, Desktop: Grid layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Table */}
          <div className="lg:col-span-3 order-1">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Top Earners na Carreira de Vendas Diretas
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Pesquisar..." className="pl-10 h-10" />
                </div>
                <Button variant="outline" size="sm" className="h-10 whitespace-nowrap">
                  Filtrar por país
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto -mx-0">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="text-left p-2 sm:p-3 lg:p-4 font-semibold text-xs sm:text-sm w-12 sm:w-16">Rank</th>
                      <th className="text-left p-2 sm:p-3 lg:p-4 font-semibold text-xs sm:text-sm">Nome</th>
                      <th className="text-left p-2 sm:p-3 lg:p-4 font-semibold text-xs sm:text-sm">Empresa</th>
                      <th className="text-left p-2 sm:p-3 lg:p-4 font-semibold text-xs sm:text-sm hidden sm:table-cell">Renda</th>
                      <th className="text-left p-2 sm:p-3 lg:p-4 font-semibold text-xs sm:text-sm hidden lg:table-cell">Total</th>
                      <th className="text-left p-2 sm:p-3 lg:p-4 font-semibold text-xs sm:text-sm w-16 sm:w-24">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topEarners.map((earner) => (
                      <tr key={earner.rank} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-2 sm:p-3 lg:p-4">
                          <div className={`inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full text-xs font-bold ${getRankBadgeColor(earner.rank)}`}>
                            {earner.rank <= 3 ? <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : earner.rank}
                          </div>
                        </td>
                        <td className="p-2 sm:p-3 lg:p-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex-shrink-0">
                              <AvatarImage src={earner.avatar} alt={earner.name} />
                              <AvatarFallback className="bg-accent text-accent-foreground text-[10px] sm:text-xs">
                                {earner.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-foreground text-xs sm:text-sm truncate max-w-[80px] sm:max-w-[120px] lg:max-w-none">{earner.name}</div>
                              <div className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                                <span className="fi fi-br w-3 h-3 rounded-sm"></span>
                                <span className="hidden sm:inline">Brasil</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 sm:p-3 lg:p-4">
                          <span className="font-medium text-foreground text-xs sm:text-sm">{earner.company}</span>
                        </td>
                        <td className="p-2 sm:p-3 lg:p-4 hidden sm:table-cell">
                          <div className="flex items-center gap-1 text-accent font-semibold text-xs sm:text-sm">
                            <DollarSign className="w-3 h-3" />
                            <span className="truncate">{earner.monthlyEarnings}</span>
                          </div>
                        </td>
                        <td className="p-2 sm:p-3 lg:p-4 hidden lg:table-cell">
                          <span className="font-semibold text-foreground text-sm">{earner.totalEarnings}</span>
                        </td>
                        <td className="p-2 sm:p-3 lg:p-4">
                          {earner.isVerified ? (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-[10px] sm:text-xs px-1.5 sm:px-2">
                              <span className="hidden sm:inline">Verificado</span>
                              <span className="sm:hidden">✓</span>
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-[10px] sm:text-xs px-1.5 sm:px-2">
                              <span className="hidden sm:inline">Pendente</span>
                              <span className="sm:hidden">⏳</span>
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-3 sm:p-4 border-t border-border bg-muted/30">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                  <span className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                    Mostrando 8 de 1,247 resultados
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs h-8">Anterior</Button>
                    <Button variant="outline" size="sm" className="text-xs h-8">Próximo</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Mobile: Grid 2 cols, Desktop: Single column */}
          <div className="order-2 lg:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:space-y-4">
              <Card className="p-3 sm:p-4 lg:p-6">
                <h3 className="font-semibold text-foreground mb-2 sm:mb-3 lg:mb-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-accent flex-shrink-0" />
                  <span className="truncate">Ranking por categoria</span>
                </h3>
                <div className="space-y-2 sm:space-y-2.5 lg:space-y-3 text-[10px] sm:text-xs lg:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground truncate pr-2">Top Monthly</span>
                    <span className="font-medium text-foreground">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground truncate pr-2">Top Career</span>
                    <span className="font-medium text-foreground">856</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground truncate pr-2">Rising Stars</span>
                    <span className="font-medium text-foreground">342</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground truncate pr-2">Hall of Fame</span>
                    <span className="font-medium text-foreground">89</span>
                  </div>
                </div>
              </Card>

              <Card className="p-3 sm:p-4 lg:p-6">
                <h3 className="font-semibold text-foreground mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">Estatísticas</h3>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="text-center">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-accent">R$ 2.4M+</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-sm text-muted-foreground">Renda distribuída</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-turquoise">1,247</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-sm text-muted-foreground">Distribuidores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary">234</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-sm text-muted-foreground">Empresas</div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="hidden lg:block mt-4">
              <SolarienBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}