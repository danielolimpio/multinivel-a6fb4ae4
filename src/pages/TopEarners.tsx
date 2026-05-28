import { useMemo, useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Crown, Search, TrendingUp, DollarSign, Trophy } from "lucide-react";
import { topEarnersGlobal, companyWebsites } from "@/data/topEarnersGlobal";


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

const getInitials = (name: string) =>
  name
    .replace(/[^A-Za-zÀ-ÿ\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

const TopEarners = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return topEarnersGlobal;
    return topEarnersGlobal.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.company.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Top 100 Earners do Marketing Multinível 2026"
        description="Ranking atualizado dos 100 maiores ganhadores (top earners) do Marketing de Rede e Vendas Diretas no mundo, com ganhos mensais e anuais estimados."
        canonical="/top-earners/"
      />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-blue text-white py-12 md:py-16 border-b-2 border-[hsl(40_85%_50%)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="inline-flex items-center gap-2 badge-premium mb-4">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold">Ranking Global 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-[hsl(40_85%_60%)]">
            Top 100 Earners do Mundo
          </h1>
          <p className="text-white/85 max-w-3xl text-sm md:text-base leading-relaxed">
            Os 100 maiores cheques do Marketing Multinível e Vendas Diretas no mundo,
            com ganhos mensais e anuais estimados. Fonte: pesquisa internacional
            consolidada (atualizado em 2026).
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 md:py-8 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome ou empresa..."
              className="pl-9"
            />
          </div>
          <p className="mt-3 text-xs md:text-sm text-muted-foreground">
            Mostrando {filtered.length} de {topEarnersGlobal.length} líderes
          </p>
        </div>
      </section>

      {/* List */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-xl border-2 border-[hsl(40_85%_50%)] bg-gradient-blue">
            <table className="w-full text-sm">
              <thead className="bg-gradient-blue text-[hsl(40_85%_60%)] border-b border-[hsl(40_85%_50%)]/40">
                <tr>
                  <th className="px-4 py-3 text-left w-16">#</th>
                  <th className="px-4 py-3 text-left">Nome</th>
                  <th className="px-4 py-3 text-right whitespace-nowrap">Ganho Mensal</th>
                  <th className="px-4 py-3 text-right whitespace-nowrap">Ganho Anual</th>
                  <th className="px-4 py-3 text-left">Empresa</th>
                </tr>
              </thead>
              <tbody className="bg-background">
                {filtered.map((e) => (
                  <tr
                    key={e.rank}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <span className="position-badge inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold">
                        {e.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-9 h-9 ring-1 ring-[hsl(40_85%_50%)]/50">
                          {e.avatar && <AvatarImage src={e.avatar} alt={e.name} />}
                          <AvatarFallback className="bg-gradient-blue text-[hsl(40_85%_60%)] text-xs">
                            {getInitials(e.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-foreground">{e.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-foreground whitespace-nowrap">
                      {e.monthly}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-[hsl(40_85%_45%)] whitespace-nowrap">
                      {e.yearly}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{e.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {filtered.map((e) => (
              <Card
                key={e.rank}
                className="p-4 border-2 border-[hsl(40_85%_50%)]/60 bg-card"
              >
                <div className="flex items-start gap-3">
                  <span className="position-badge inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-bold shrink-0">
                    {e.rank}
                  </span>
                  <Avatar className="w-10 h-10 ring-1 ring-[hsl(40_85%_50%)]/50 shrink-0">
                    {e.avatar && <AvatarImage src={e.avatar} alt={e.name} />}
                    <AvatarFallback className="bg-gradient-blue text-[hsl(40_85%_60%)] text-xs">
                      {getInitials(e.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground leading-tight">
                      {e.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {e.company}
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-[hsl(40_85%_55%)]" />
                        <span className="font-semibold text-foreground">
                          {e.monthly}
                        </span>
                        <span className="text-muted-foreground">/mês</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[hsl(40_85%_55%)]" />
                        <span className="font-semibold text-[hsl(40_85%_45%)]">
                          {e.yearly}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              Nenhum resultado encontrado.
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-5 border border-[hsl(40_85%_50%)]/40 bg-muted/30">
            <div className="flex gap-3">
              <Crown className="w-5 h-5 text-[hsl(40_85%_55%)] shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aviso:</strong> Os ganhos
                apresentados são estimativas baseadas em pesquisa pública, declarações
                em convenções, informações de upline/downline/crossline e reportagens
                do setor. Resultados individuais variam significativamente. Nenhum
                ganho é garantido pelas empresas listadas.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TopEarners;
