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
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      country: "BR",
      isVerified: true
    },
    {
      rank: 2, 
      name: "Ana Beatriz Santos",
      company: "Herbalife", 
      monthlyEarnings: "R$ 67.200",
      totalEarnings: "R$ 1.8M",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
      country: "BR",
      isVerified: true
    },
    {
      rank: 3,
      name: "Carlos Eduardo Silva",
      company: "Jeunesse",
      monthlyEarnings: "R$ 54.800",
      totalEarnings: "R$ 1.5M", 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
      country: "BR",
      isVerified: true
    },
    {
      rank: 4,
      name: "Mariana Costa",
      company: "4Life",
      monthlyEarnings: "R$ 48.300",
      totalEarnings: "R$ 1.2M",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
      country: "BR", 
      isVerified: false
    },
    {
      rank: 5,
      name: "Roberto Ferreira",
      company: "Nu Skin",
      monthlyEarnings: "R$ 41.700",
      totalEarnings: "R$ 980K",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
      country: "BR",
      isVerified: true
    },
    {
      rank: 6,
      name: "Patricia Oliveira", 
      company: "Amway",
      monthlyEarnings: "R$ 38.900",
      totalEarnings: "R$ 850K",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
      country: "BR",
      isVerified: false
    },
    {
      rank: 7,
      name: "Fernando Lima",
      company: "Natura", 
      monthlyEarnings: "R$ 35.600",
      totalEarnings: "R$ 720K",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces",
      country: "BR",
      isVerified: true
    },
    {
      rank: 8,
      name: "Juliana Rocha",
      company: "Mary Kay",
      monthlyEarnings: "R$ 32.400",
      totalEarnings: "R$ 650K",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces", 
      country: "BR",
      isVerified: false
    }
  ];

  const renderRank = (rank: number) => (
    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold border border-[hsl(40_85%_50%)] text-white bg-gradient-blue">
      {rank}º
    </div>
  );

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
              {/* Mobile Card View */}
              <div className="block sm:hidden divide-y divide-border">
                {topEarners.map((earner) => (
                  <div key={earner.rank} className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      {renderRank(earner.rank)}
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <AvatarImage src={earner.avatar} alt={earner.name} />
                        <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                          {earner.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground text-sm">{earner.name}</div>
                        <div className="text-xs text-muted-foreground">{earner.company}</div>
                      </div>
                      {earner.isVerified ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-xs px-2 flex-shrink-0">
                          ✓
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs px-2 flex-shrink-0">
                          ⏳
                        </Badge>
                      )}
                    </div>
                    <div className="mt-3 flex justify-between items-center text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span className="fi fi-br w-3 h-3 rounded-sm"></span>
                        <span>Brasil</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-gradient-gold font-semibold">{earner.monthlyEarnings}</div>
                          <div className="text-muted-foreground text-[10px]">mensal</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-foreground">{earner.totalEarnings}</div>
                          <div className="text-muted-foreground text-[10px]">total</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm w-16">Rank</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm">Nome</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm">Empresa</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm">Renda</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm hidden lg:table-cell">Total</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm w-24">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topEarners.map((earner) => (
                      <tr key={earner.rank} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-3 lg:p-4">
                          {renderRank(earner.rank)}
                        </td>
                        <td className="p-3 lg:p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10 flex-shrink-0">
                              <AvatarImage src={earner.avatar} alt={earner.name} />
                              <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                                {earner.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-foreground text-sm">{earner.name}</div>
                              <div className="text-xs text-muted-foreground flex items-center gap-1">
                                <span className="fi fi-br w-3 h-3 rounded-sm"></span>
                                <span>Brasil</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 lg:p-4">
                          <span className="font-medium text-foreground text-sm">{earner.company}</span>
                        </td>
                        <td className="p-3 lg:p-4">
                          <div className="flex items-center gap-1 text-gradient-gold font-semibold text-sm">
                            <DollarSign className="w-3 h-3" />
                            <span>{earner.monthlyEarnings}</span>
                          </div>
                        </td>
                        <td className="p-3 lg:p-4 hidden lg:table-cell">
                          <span className="font-semibold text-foreground text-sm">{earner.totalEarnings}</span>
                        </td>
                        <td className="p-3 lg:p-4">
                          {earner.isVerified ? (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 text-xs px-2">
                              Verificado
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs px-2">
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
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                  <span className="text-sm text-muted-foreground text-center sm:text-left">
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
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[hsl(40_85%_50%)] flex-shrink-0" />
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
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary">R$ 2.4M+</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-sm text-muted-foreground">Renda distribuída</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary">1,247</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-sm text-muted-foreground">Distribuidores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary">234</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-sm text-muted-foreground">Empresas</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}