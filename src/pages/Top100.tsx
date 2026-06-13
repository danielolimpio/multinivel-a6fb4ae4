import { useMemo, useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Crown,
  Trophy,
  Search,
  Globe2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Building2,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import {
  top100Companies,
  TOTAL_REVENUE_2024_M,
  TOTAL_REVENUE_2025_M,
} from "@/data/top100DirectSales";
import { CompanyLogo } from "@/components/CompanyLogo";
import { Link } from "react-router-dom";
import { internalCompanyUrl } from "@/data/companySlugs";


const fmtRevenue = (m: number) => {
  if (m >= 1000) return `US$ ${(m / 1000).toFixed(2)} bi`;
  return `US$ ${m} mi`;
};

const RankNumber = ({ rank }: { rank: number }) => {
  const isTop1 = rank === 1;
  const isTop3 = rank <= 3;
  const isTop10 = rank <= 10;
  const base =
    "tabular-nums font-black leading-none flex items-center gap-1";
  const color = isTop3
    ? "text-transparent bg-clip-text bg-gradient-gold drop-shadow-[0_1px_0_hsl(40_85%_30%/0.25)]"
    : isTop10
      ? "text-[hsl(40_85%_42%)]"
      : "text-foreground/70";
  const size = isTop3 ? "text-2xl" : "text-xl";
  return (
    <span className={`${base} ${color} ${size}`}>
      {isTop1 && <Crown className="w-4 h-4 text-[hsl(40_85%_50%)]" />}
      {rank}
      <span className={`text-[10px] font-bold ${isTop3 ? "text-[hsl(40_85%_45%)]" : "text-muted-foreground"}`}>º</span>
    </span>
  );
};

const ChangePill = ({ change }: { change: string }) => {
  const n = parseInt(change.replace("%", ""), 10);
  const positive = n > 0;
  const neutral = n === 0;
  const cls = neutral
    ? "bg-muted text-muted-foreground"
    : positive
      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
      : "bg-rose-500/10 text-rose-700 dark:text-rose-400";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${cls}`}
    >
      {!neutral && (
        <TrendingUp
          className={`w-3 h-3 ${positive ? "" : "rotate-180"}`}
        />
      )}
      {change}
    </span>
  );
};

const Top100 = () => {
  const [query, setQuery] = useState("");
  const [continent, setContinent] = useState<string>("Todos");

  const continents: Record<string, string[]> = {
    Américas: ["US", "BR", "MX", "CA", "PE"],
    Europa: ["DE", "LU", "GB", "SE", "IT", "RU", "CH", "CZ", "CY", "AT", "NO"],
    Ásia: ["KR", "CN", "JP", "MY", "SG", "IN", "TH", "TW", "PH", "AE"],
    Oceania: ["NZ"],
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return top100Companies.filter((c) => {
      const matchQ =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        c.countryCode.toLowerCase().includes(q);
      const matchC =
        continent === "Todos" ||
        continents[continent]?.includes(c.countryCode);
      return matchQ && matchC;
    });
  }, [query, continent]);

  const verifiedCount = top100Companies.filter((c) => c.verified).length;
  const countriesCount = new Set(
    top100Companies.map((c) => c.countryCode),
  ).size;

  const faqs = [
    {
      q: "Qual é a maior empresa de venda direta do mundo?",
      a: "Segundo o ranking 2026 da Business For Home (dados de 2025), a Amway é a maior empresa de vendas diretas do mundo, com receita estimada em US$ 7,3 bilhões. Em seguida aparecem Herbalife (US$ 5,0 bi), eXp Realty (US$ 4,8 bi), Natura &Co (US$ 4,35 bi) e Vorwerk (US$ 4,2 bi).",
    },
    {
      q: "O que é venda direta?",
      a: "Venda direta é o modelo comercial em que produtos ou serviços são vendidos diretamente ao consumidor final, sem intermediários como lojas físicas tradicionais. Engloba a venda direta porta a porta, por catálogo, pela internet e o marketing multinível (MMN/MLM).",
    },
    {
      q: "Qual a diferença entre venda direta e venda indireta?",
      a: "Na venda direta, a empresa comercializa seus produtos diretamente ao consumidor — geralmente por meio de revendedores autônomos. Já na venda indireta, a comercialização ocorre por intermediários como distribuidores, atacadistas e varejistas. Ambos os modelos coexistem em muitas marcas globais.",
    },
    {
      q: "Quais são as maiores empresas de vendas diretas do mundo em 2026?",
      a: "As 10 maiores empresas de vendas diretas do mundo em 2026 são: Amway, Herbalife, eXp Realty, Natura &Co, Vorwerk, PM-International, Coway, Primerica, Infinitus e Sunrun. Juntas, somam mais de US$ 40 bilhões em receita anual no setor de venda direta.",
    },
    {
      q: "Vale a pena trabalhar com venda direta?",
      a: "Muitas pessoas utilizam a venda direta como fonte de renda principal ou complementar, aproveitando a flexibilidade do modelo, a baixa barreira de entrada e a possibilidade de revenda de produtos com margens atrativas. O sucesso depende de treinamento, disciplina e escolha de uma empresa séria e regulamentada.",
    },
    {
      q: "Quais são os melhores produtos para venda direta?",
      a: "Cosméticos, perfumes, suplementos nutricionais, produtos de bem-estar, utensílios para casa, cuidados pessoais e serviços financeiros estão entre os melhores produtos para venda direta, dominando o ranking mundial de vendas diretas.",
    },
    {
      q: "Existe venda direta pela internet?",
      a: "Sim. Atualmente, praticamente todas as grandes empresas de vendas diretas combinam o modelo tradicional com ferramentas digitais — redes sociais, aplicativos próprios, catálogos online, lojas virtuais e marketing de venda direta digital — multiplicando o alcance dos revendedores.",
    },
    {
      q: "O que é marketing de venda direta?",
      a: "Marketing de venda direta é o conjunto de estratégias usadas para promover e vender produtos diretamente ao consumidor, sem intermediários, utilizando canais físicos (porta a porta, catálogo, reuniões) e digitais (redes sociais, marketing multinível digital, funis de vendas).",
    },
    {
      q: "Como funciona o mercado de vendas diretas no Brasil?",
      a: "O mercado de venda direta no Brasil é representado pela ABEVD (Associação Brasileira de Empresas de Vendas Diretas), que reúne empresas associadas como Natura, O Boticário, Hinode e UP! Essência — todas presentes no ranking das maiores empresas de vendas diretas do mundo.",
    },
    {
      q: "Quais são as maiores empresas de cosméticos em venda direta?",
      a: "Entre as maiores empresas de cosméticos em venda direta e marketing multinível estão Natura &Co, Mary Kay, Nu Skin, Oriflame, Belcorp, Amore Pacific, Faberlic e Hinode Cosméticos — líderes globais em venda direta de cosméticos.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "As 100 Maiores Empresas de Vendas Diretas do Mundo 2026",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: top100Companies.length,
    itemListElement: top100Companies.map((c) => ({
      "@type": "ListItem",
      position: c.rank,
      name: c.name,
      url: c.url,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="As 100 Maiores Empresas de Vendas Diretas do Mundo 2026"
        description="Ranking atualizado das 100 maiores empresas de vendas diretas do mundo em 2026. Veja líderes globais de venda direta, marketing multinível, receita anual e país de origem."
        canonical="/top-100/"
      />
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO Premium */}
      <section className="relative overflow-hidden bg-gradient-blue text-white border-b-2 border-[hsl(40_85%_50%)]">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(40 85% 55% / 0.35), transparent 50%), radial-gradient(circle at 80% 80%, hsl(40 85% 55% / 0.25), transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(40_85%_55%)]/50 bg-[hsl(40_85%_55%)]/10 mb-6">
              <Sparkles className="w-4 h-4 text-[hsl(40_85%_60%)]" />
              <span className="text-sm font-bold tracking-wide text-[hsl(40_85%_75%)]">
                RANKING PREMIUM • ATUALIZADO 2026
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              As <span className="bg-gradient-gold bg-clip-text text-transparent">100 Maiores Empresas</span> de Vendas Diretas do Mundo
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ranking atualizado das maiores empresas de vendas diretas do mundo
              em 2026. Conheça as líderes globais do mercado de venda direta,
              marketing multinível (MMN) e marketing de rede, com receita anual,
              variação e país de origem.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                {
                  icon: Trophy,
                  label: "Empresas",
                  value: "100",
                },
                {
                  icon: BarChart3,
                  label: "Receita 2025",
                  value: `US$ ${(TOTAL_REVENUE_2025_M / 1000).toFixed(1)} bi`,
                },
                {
                  icon: ShieldCheck,
                  label: "Verificadas",
                  value: `${verifiedCount}`,
                },
                {
                  icon: Globe2,
                  label: "Países",
                  value: `${countriesCount}`,
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[hsl(40_85%_55%)]/30 bg-white/5 backdrop-blur-sm p-4 text-left"
                >
                  <s.icon className="w-5 h-5 text-[hsl(40_85%_65%)]" />
                  <div className="mt-2 text-2xl font-black bg-gradient-gold bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/70 font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro SEO */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-base md:text-lg leading-relaxed text-foreground/85">
            Nesta página você encontra o <strong>ranking das maiores empresas
            de vendas diretas do mundo</strong>. O <strong>mercado de vendas
            diretas</strong> movimenta bilhões de dólares todos os anos e reúne
            empresas dos segmentos de cosméticos, nutrição, bem-estar,
            marketing multinível e produtos para revenda direta. Confira quais
            organizações lideram o <strong>mercado global de vendas
            diretas</strong> e descubra como funciona esse modelo de negócio.
          </p>
          <p className="mt-4 text-sm text-muted-foreground italic">
            Fonte de dados: ranking global Business For Home — atualização de
            março/2026, baseada em receita reportada de 2025 (em milhões de
            dólares).
          </p>
        </div>
      </section>

      {/* Filtros & Ranking */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar empresa de vendas diretas, país..."
                className="pl-10 h-12 rounded-full border-[hsl(40_85%_55%)]/40 focus-visible:ring-[hsl(40_85%_55%)]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {["Todos", "Américas", "Europa", "Ásia", "Oceania"].map((c) => (
                <button
                  key={c}
                  onClick={() => setContinent(c)}
                  className={`px-4 h-12 rounded-full text-sm font-bold border transition-all ${
                    continent === c
                      ? "bg-gradient-gold text-[hsl(220_60%_15%)] border-transparent shadow-gold"
                      : "bg-card border-border hover:border-[hsl(40_85%_55%)]/60"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Premium Table card */}
          <Card className="overflow-hidden border-0 shadow-[0_8px_40px_-12px_hsl(40_85%_52%/0.25)] bg-card">
            <div
              className="h-1 w-full"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[hsl(220_60%_15%)] text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold w-16">#</th>
                    <th className="text-left px-4 py-3 font-bold">Empresa</th>
                    <th className="text-left px-4 py-3 font-bold hidden md:table-cell">
                      País
                    </th>
                    <th className="text-right px-4 py-3 font-bold">
                      Receita 2025
                    </th>
                    <th className="text-right px-4 py-3 font-bold hidden sm:table-cell">
                      Receita 2024
                    </th>
                    <th className="text-right px-4 py-3 font-bold">Var.</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c, i) => (
                    <tr
                      key={c.rank}
                      className={`border-t border-border/60 hover:bg-[hsl(40_85%_95%)]/40 transition-colors ${
                        i % 2 === 0 ? "bg-background" : "bg-muted/30"
                      }`}
                    >
                      <td className="px-4 py-3 align-middle">
                        <RankNumber rank={c.rank} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <CompanyLogo name={c.name} size={44} />
                          <div className="min-w-0">
                            {(() => {
                              const internal = internalCompanyUrl(c.name);
                              return internal ? (
                                <Link
                                  to={internal}
                                  className="font-bold text-foreground hover:text-[hsl(40_85%_45%)] transition-colors"
                                  title={`Ver página completa de ${c.name}`}
                                >
                                  {c.name}
                                </Link>
                              ) : (
                                <a
                                  href={c.url}
                                  target="_blank"
                                  rel="noopener noreferrer nofollow"
                                  className="font-bold text-foreground hover:text-[hsl(40_85%_45%)] transition-colors"
                                >
                                  {c.name}
                                </a>
                              );
                            })()}
                            {c.verified && (
                              <Badge
                                variant="secondary"
                                className="ml-2 align-middle gap-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                              >
                                <CheckCircle2 className="w-3 h-3" />
                                Verificada
                              </Badge>
                            )}
                            <div className="md:hidden mt-1 text-xs text-muted-foreground">
                              <span className="mr-1">{c.flag}</span>
                              {c.country}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="inline-flex items-center gap-2">
                          <span className="text-lg leading-none">{c.flag}</span>
                          <span className="text-foreground/80">
                            {c.country}
                          </span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-extrabold text-[hsl(40_85%_40%)]">
                        {fmtRevenue(c.rev2025)}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">
                        {fmtRevenue(c.rev2024)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <ChangePill change={c.change} />
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center py-12 text-muted-foreground"
                      >
                        Nenhuma empresa encontrada com este filtro.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div
              className="h-1 w-full"
              style={{ background: "var(--gradient-gold)" }}
            />
          </Card>

          <p className="mt-4 text-xs text-muted-foreground text-center">
            Valores de receita expressos em milhões/bilhões de dólares (USD). O
            ranking é atualizado anualmente conforme novas informações são
            validadas pela Business For Home.
          </p>
        </div>
      </section>

      {/* Conteúdo SEO – O que é venda direta */}
      <section className="py-12 md:py-16 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            O que é Venda Direta?
          </h2>
          <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed">
            <p>
              <strong>Venda direta</strong> é um modelo comercial em que
              produtos e serviços chegam ao consumidor final sem passar pelo
              varejo tradicional. <strong>Tudo sobre venda direta</strong> gira
              em torno de uma rede de revendedores independentes que utilizam
              <strong> venda direta porta a porta</strong>,{" "}
              <strong>venda direta por catálogo</strong>,{" "}
              <strong>venda direta pela internet</strong> e marketing multinível
              para distribuir <strong>produtos para venda direta</strong>.
            </p>
            <p>
              A diferença entre <strong>venda direta e venda indireta</strong> é
              simples: na <strong>venda direta de produtos</strong>, o
              consumidor compra diretamente do revendedor; na venda indireta,
              existem intermediários (atacadistas, lojas, marketplaces). O
              modelo é uma das maiores expressões do empreendedorismo no mundo,
              com mais de 120 milhões de revendedores ativos.
            </p>
          </div>
        </div>
      </section>

      {/* Mercado global */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            Mercado Global de Vendas Diretas
          </h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">
            O <strong>mercado de vendas diretas</strong> movimentou mais de{" "}
            <strong>US$ {(TOTAL_REVENUE_2025_M / 1000).toFixed(1)} bilhões</strong>{" "}
            apenas entre as 100 maiores empresas do setor em 2025. As
            estratégias modernas de <strong>marketing de venda direta</strong>{" "}
            combinam relacionamento humano com{" "}
            <strong>venda direta marketing digital</strong>: redes sociais,
            funis de conversão, automações e conteúdo. O resultado é um setor
            resiliente, que cresce em mercados maduros e emergentes,
            beneficiando tanto grandes corporações quanto pequenas empresas e
            consultores independentes.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Receita 2025 (Top 100)",
                value: `US$ ${(TOTAL_REVENUE_2025_M / 1000).toFixed(1)} bi`,
              },
              {
                label: "Receita 2024 (Top 100)",
                value: `US$ ${(TOTAL_REVENUE_2024_M / 1000).toFixed(1)} bi`,
              },
              {
                label: "Variação anual",
                value: `${(((TOTAL_REVENUE_2025_M - TOTAL_REVENUE_2024_M) / TOTAL_REVENUE_2024_M) * 100).toFixed(1)}%`,
              },
            ].map((s) => (
              <Card
                key={s.label}
                className="p-5 border-0 shadow-[0_4px_18px_-6px_hsl(40_85%_52%/0.25)]"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  {s.label}
                </div>
                <div className="mt-1 text-2xl font-black bg-gradient-gold bg-clip-text text-transparent">
                  {s.value}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cosméticos */}
      <section className="py-12 md:py-16 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            Empresas de Cosméticos e Venda Direta
          </h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">
            A <strong>venda direta cosméticos</strong> é um dos pilares do
            setor. Marcas como <strong>Natura</strong> (líder em vendas diretas
            Natura no Brasil), <strong>Mary Kay</strong>,{" "}
            <strong>Nu Skin</strong>, <strong>Oriflame</strong>,{" "}
            <strong>Belcorp</strong>, <strong>Amore Pacific</strong>,{" "}
            <strong>Faberlic</strong> e{" "}
            <strong>Hinode Cosméticos</strong> dominam o ranking global de{" "}
            <strong>empresas venda direta cosmeticos</strong> e mostram a força
            do <strong>marketing multinivel cosmeticos</strong>. São{" "}
            <strong>empresas de cosmeticos marketing multinivel</strong> que
            combinam catálogo, lojas digitais e equipes de consultoras para
            alcançar milhões de consumidores.
          </p>
        </div>
      </section>

      {/* Como trabalhar */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            Como Trabalhar com Venda Direta
          </h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">
            <strong>Trabalhar com venda direta</strong> é uma das formas mais
            acessíveis de empreender. O <strong>vendedor venda direta</strong>{" "}
            atua como <strong>revenda direta</strong>, comprando{" "}
            <strong>produtos para venda direta</strong> com desconto e
            revendendo com margem. Os <strong>melhores produtos para venda
            direta</strong> normalmente são de consumo recorrente —{" "}
            <strong>produtos para vendas diretas</strong> nas áreas de beleza,
            bem-estar, suplementos, utensílios e moda.
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3">
            {[
              "Escolha uma empresa de vendas diretas regulamentada e com tradição.",
              "Estude o plano de compensação e o portfólio de produtos venda direta.",
              "Construa uma estratégia de venda direta combinando offline e online.",
              "Aplique dicas de vendas diretas: pós-venda, recompra e indicação.",
              "Invista em treinamentos e mentorias do setor.",
              "Use sistemas e softwares para venda direta para escalar.",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <CheckCircle2 className="w-5 h-5 text-[hsl(40_85%_45%)] shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Associações */}
      <section className="py-12 md:py-16 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            Associações do Setor de Venda Direta
          </h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">
            A <strong>Associação Brasileira de Empresas de Vendas Diretas
            (ABEVD)</strong> — também chamada{" "}
            <strong>associação brasileira de venda direta</strong> ou{" "}
            <strong>associação de vendas diretas</strong> — é a principal
            entidade do setor no país. Entre as{" "}
            <strong>ABEVD empresas associadas</strong> estão Natura, O Boticário
            e várias <strong>empresas associadas a ABEVD</strong> presentes
            neste ranking global. Globalmente, a{" "}
            <strong>associação brasileira de marketing multinivel</strong> e a
            WFDSA (World Federation of Direct Selling Associations) atuam para
            regulamentar e dar credibilidade ao{" "}
            <strong>ABVD venda direta</strong>.
          </p>
        </div>
      </section>

      {/* Sistemas */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-foreground">
            Sistemas e Softwares para Venda Direta
          </h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">
            Um bom <strong>sistema venda direta</strong> faz toda a diferença na
            operação. As maiores empresas do ranking utilizam{" "}
            <strong>sistema de venda direta</strong> próprio para gerenciar
            consultoras, pedidos, comissões e logística. Existem hoje diversas
            opções de <strong>software para venda direta</strong> e{" "}
            <strong>sistema para venda direta</strong> em SaaS — soluções que
            integram CRM, e-commerce, MLM, app do revendedor e BI. Para quem
            está começando, vale buscar <strong>consultoria venda direta</strong>{" "}
            para escolher a tecnologia certa e <strong>gera venda direta</strong>{" "}
            de forma sustentável.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(40_85%_55%)]/50 bg-[hsl(40_85%_55%)]/10 mb-4">
              <HelpCircle className="w-4 h-4 text-[hsl(40_85%_50%)]" />
              <span className="text-sm font-bold tracking-wide text-[hsl(40_85%_45%)]">
                PERGUNTAS FREQUENTES
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-foreground">
              Tudo sobre as Maiores Empresas de Vendas Diretas
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-0 rounded-2xl bg-card shadow-[0_4px_18px_-10px_hsl(40_85%_52%/0.25)] overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline text-left font-bold">
                  <span className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-gold text-[hsl(220_60%_15%)] text-xs font-black shrink-0">
                      {i + 1}
                    </span>
                    <span>{f.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-0 text-foreground/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Top100;
