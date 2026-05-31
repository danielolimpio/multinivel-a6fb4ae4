import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { topEarnersGlobal, companyWebsites, upgradeAvatar } from "@/data/topEarnersGlobal";

const getInitials = (name: string) =>
  name
    .replace(/[^A-Za-zÀ-ÿ\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

const CompanyLink = ({ company, className }: { company: string; className?: string }) => {
  const url = companyWebsites[company];
  if (!url) return <span className={className}>{company}</span>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`${className ?? ""} underline-offset-2 hover:underline hover:text-[hsl(40_85%_55%)] transition-colors`}
      title={`Visitar site oficial de ${company}`}
    >
      {company}
    </a>
  );
};

export function TopEarnersSection() {
  const topEarners = topEarnersGlobal.slice(0, 8);

  const renderRank = (rank: number) => (
    <div className="inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold border border-[hsl(40_85%_50%)] text-[hsl(40_85%_60%)] bg-gradient-blue">
      {rank}º
    </div>
  );

  return (
    <section className="py-8 sm:py-16 pb-20 sm:pb-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <Button asChild variant="outline" size="sm" className="h-10 whitespace-nowrap">
                  <Link to="/top-earners/">Ver Top 100</Link>
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
                      <Avatar className="w-10 h-10 flex-shrink-0 ring-1 ring-[hsl(40_85%_50%)]/50">
                        {earner.avatar && <AvatarImage src={earner.avatar} alt={earner.name} />}
                        <AvatarFallback className="bg-gradient-blue text-[hsl(40_85%_60%)] text-xs">
                          {getInitials(earner.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground text-sm">{earner.name}</div>
                        <div className="text-xs text-muted-foreground">
                          <CompanyLink company={earner.company} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end items-center text-xs">
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-gradient-gold font-semibold">{earner.monthly}</div>
                          <div className="text-muted-foreground text-[10px]">mensal</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-foreground">{earner.yearly}</div>
                          <div className="text-muted-foreground text-[10px]">anual</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-blue text-[hsl(40_85%_60%)] border-b border-[hsl(40_85%_50%)]/40">
                    <tr>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm w-16">Rank</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm">Nome</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm">Empresa</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm">Mensal</th>
                      <th className="text-left p-3 lg:p-4 font-semibold text-sm hidden lg:table-cell">Anual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topEarners.map((earner) => (
                      <tr key={earner.rank} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-3 lg:p-4">{renderRank(earner.rank)}</td>
                        <td className="p-3 lg:p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10 flex-shrink-0 ring-1 ring-[hsl(40_85%_50%)]/50">
                              {earner.avatar && <AvatarImage src={earner.avatar} alt={earner.name} />}
                              <AvatarFallback className="bg-gradient-blue text-[hsl(40_85%_60%)] text-xs">
                                {getInitials(earner.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="font-medium text-foreground text-sm">{earner.name}</div>
                          </div>
                        </td>
                        <td className="p-3 lg:p-4">
                          <span className="font-medium text-foreground text-sm">
                            <CompanyLink company={earner.company} />
                          </span>
                        </td>
                        <td className="p-3 lg:p-4">
                          <div className="flex items-center gap-1 text-gradient-gold font-semibold text-sm whitespace-nowrap">
                            <DollarSign className="w-3 h-3" />
                            <span>{earner.monthly}</span>
                          </div>
                        </td>
                        <td className="p-3 lg:p-4 hidden lg:table-cell">
                          <span className="font-semibold text-[hsl(40_85%_45%)] text-sm whitespace-nowrap">{earner.yearly}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-border bg-muted/30">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                  <span className="text-sm text-muted-foreground text-center sm:text-left">
                    Mostrando 8 de {topEarnersGlobal.length} líderes globais
                  </span>
                  <Button asChild size="sm" className="text-xs h-8 bg-gradient-blue text-[hsl(40_85%_60%)] border border-[hsl(40_85%_50%)] hover:opacity-90">
                    <Link to="/top-earners/">Ver ranking completo</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
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
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary">US$ 2.4M+</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-sm text-muted-foreground">Renda mensal top</div>
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
