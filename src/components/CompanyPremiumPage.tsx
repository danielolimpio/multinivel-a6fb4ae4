import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyLogo } from "@/components/CompanyLogo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Crown,
  Globe2,
  Users,
  Building2,
  Calendar,
  DollarSign,
  Package,
  Trophy,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  History,
  Factory,
  Leaf,
  MapPin,
  ExternalLink,
  ArrowRight,
  Star,
  Target,
  Layers,
  Heart,
} from "lucide-react";

export interface CompanyPremiumData {
  // Identity
  name: string;
  slug: string; // used for canonical /empresa/<slug>/
  officialUrl: string; // external website
  domain: string; // for logo + JSON-LD
  // SEO
  seoTitle: string;
  seoDescription: string;
  // Hero
  rankingLabel: string; // e.g. "#2 RANKING MUNDIAL • BUSINESS FOR HOME 2026"
  heroHeadlineSuffix: string; // e.g. "A Gigante da Nutrição Esportiva"
  heroParagraph: string;
  heroBadges?: { label: string; icon?: "check" | "calendar" | "globe" | "users" }[];
  // Stats (8 ideal)
  stats: { icon: string; label: string; value: string; hint: string }[];
  // About paragraphs (rich rendered as HTML allowed)
  aboutHtml: string;
  // Timeline
  timelineTitle?: string;
  milestones: { year: string; title: string; text: string }[];
  // Products
  productsIntro?: string;
  productLines: {
    name: string;
    tag: string;
    color: string;
    text: string;
    items: string[];
  }[];
  // Plan
  planTitle: string;
  planIntro: string;
  planRanks: { rank: string; payout: string; text: string }[];
  pros: string[];
  cons: string[];
  // Global
  presenceIntro?: string;
  countries: string[];
  // Awards & certifications
  awards: string[];
  certifications: string[];
  // FAQ
  faqs: { q: string; a: string }[];
  // JSON-LD extras
  founders?: string[];
  foundingDate?: string;
  foundingLocation?: string;
  employees?: number;
  alternateNames?: string[];
  wikipediaUrl?: string;
  // CTA
  ctaHeadline?: string;
}

const iconMap: Record<string, typeof Crown> = {
  crown: Crown,
  globe: Globe2,
  users: Users,
  building: Building2,
  calendar: Calendar,
  dollar: DollarSign,
  package: Package,
  trophy: Trophy,
  factory: Factory,
  map: MapPin,
  shield: ShieldCheck,
  leaf: Leaf,
  star: Star,
  award: Award,
};

const heroBadgeIconMap = {
  check: CheckCircle2,
  calendar: Calendar,
  globe: Globe2,
  users: Users,
} as const;

export const CompanyPremiumPage = ({ data }: { data: CompanyPremiumData }) => {
  const orgJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.officialUrl,
    logo: `https://img.logo.dev/${data.domain}?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=512&format=png&retina=true`,
    description: data.seoDescription,
  };
  if (data.alternateNames) orgJsonLd.alternateName = data.alternateNames;
  if (data.foundingDate) orgJsonLd.foundingDate = data.foundingDate;
  if (data.foundingLocation)
    orgJsonLd.foundingLocation = { "@type": "Place", name: data.foundingLocation };
  if (data.employees)
    orgJsonLd.numberOfEmployees = { "@type": "QuantitativeValue", value: data.employees };
  if (data.founders)
    orgJsonLd.founders = data.founders.map((f) => ({ "@type": "Person", name: f }));
  if (data.wikipediaUrl) orgJsonLd.sameAs = [data.wikipediaUrl];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        canonical={`/empresa/${data.slug}/`}
      />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-blue text-white border-b-2 border-[hsl(40_85%_50%)]">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(40 85% 55% / 0.35), transparent 50%), radial-gradient(circle at 80% 80%, hsl(40 85% 55% / 0.25), transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/top-100/"
              className="inline-flex items-center gap-2 text-sm text-[hsl(40_85%_75%)] hover:text-[hsl(40_85%_85%)] mb-6"
            >
              ← Voltar para o Top 100
            </Link>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <CompanyLogo name={data.name} size={140} className="!ring-4" />

              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(40_85%_55%)]/60 bg-[hsl(40_85%_55%)]/10 mb-3">
                  <Crown className="w-4 h-4 text-[hsl(40_85%_60%)]" />
                  <span className="text-xs font-bold tracking-wide text-[hsl(40_85%_75%)]">
                    {data.rankingLabel}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                  {data.name}:{" "}
                  <span className="bg-gradient-gold bg-clip-text text-transparent">
                    {data.heroHeadlineSuffix}
                  </span>
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">
                  {data.heroParagraph}
                </p>

                {data.heroBadges && (
                  <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                    {data.heroBadges.map((b) => {
                      const Icon = heroBadgeIconMap[b.icon ?? "check"];
                      return (
                        <Badge
                          key={b.label}
                          className="bg-white/10 text-white border border-white/20 gap-1"
                        >
                          <Icon className="w-3 h-3" /> {b.label}
                        </Badge>
                      );
                    })}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href={data.officialUrl} target="_blank" rel="noopener noreferrer nofollow">
                    <Button className="bg-[hsl(40_85%_55%)] hover:bg-[hsl(40_85%_50%)] text-[hsl(220_60%_15%)] font-bold gap-2">
                      Visitar site oficial <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                  <Link to="/comparativo/">
                    <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 gap-2">
                      Comparar com outras <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {data.stats.map((s) => {
              const Icon = iconMap[s.icon] ?? Star;
              return (
                <Card
                  key={s.label}
                  className="p-4 md:p-5 border-2 border-[hsl(40_85%_55%)]/30 bg-gradient-to-br from-background to-[hsl(40_85%_55%)]/5 hover:border-[hsl(40_85%_55%)]/60 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-5 h-5 text-[hsl(40_85%_50%)]" />
                    <Sparkles className="w-3.5 h-3.5 text-[hsl(40_85%_55%)]/50" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    {s.label}
                  </div>
                  <div className="text-xl md:text-2xl font-black text-foreground mt-1 leading-tight">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    {s.hint}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUEM É */}
      <section className="py-10 md:py-14 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(40_85%_55%)]/60 to-transparent" />
            <Building2 className="w-5 h-5 text-[hsl(40_85%_50%)]" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(40_85%_55%)]/60 to-transparent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-foreground text-center">
            Quem é a {data.name}?
          </h2>
          <div
            className="mt-6 space-y-4 text-foreground/85 leading-relaxed text-base md:text-lg [&_p]:mb-4 [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{ __html: data.aboutHtml }}
          />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <Badge className="bg-[hsl(40_85%_55%)]/15 text-[hsl(40_85%_42%)] border border-[hsl(40_85%_55%)]/40 gap-1.5">
              <History className="w-3.5 h-3.5" /> Linha do tempo
            </Badge>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-foreground">
              {data.timelineTitle ?? `História da ${data.name}`}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(40_85%_55%)] via-[hsl(40_85%_55%)]/40 to-transparent md:-translate-x-1/2" />
            <ol className="space-y-8">
              {data.milestones.map((m, i) => (
                <li
                  key={m.year + m.title}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  <div className="pl-12 md:pl-0 md:pr-8 md:text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-gold text-[hsl(220_60%_15%)] font-black text-sm">
                      {m.year}
                    </div>
                  </div>
                  <div className="pl-12 md:pl-8 mt-2 md:mt-0">
                    <Card className="p-5 border-2 border-[hsl(40_85%_55%)]/25 hover:border-[hsl(40_85%_55%)]/60 transition-colors">
                      <h3 className="font-black text-foreground text-lg">{m.title}</h3>
                      <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed">
                        {m.text}
                      </p>
                    </Card>
                  </div>
                  <span className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-[hsl(40_85%_55%)] ring-4 ring-[hsl(40_85%_55%)]/20" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <Badge className="bg-[hsl(40_85%_55%)]/15 text-[hsl(40_85%_42%)] border border-[hsl(40_85%_55%)]/40 gap-1.5">
              <Package className="w-3.5 h-3.5" /> Catálogo
            </Badge>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-foreground">
              Tipos de produtos da {data.name}
            </h2>
            {data.productsIntro && (
              <p
                className="mt-3 text-foreground/75 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: data.productsIntro }}
              />
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {data.productLines.map((p) => (
              <Card
                key={p.name}
                className={`p-6 border-2 border-[hsl(40_85%_55%)]/25 bg-gradient-to-br ${p.color} hover:border-[hsl(40_85%_55%)]/60 transition-colors`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-foreground">{p.name}</h3>
                    <span className="text-xs uppercase tracking-widest text-[hsl(40_85%_42%)] font-bold">
                      {p.tag}
                    </span>
                  </div>
                  <Layers className="w-5 h-5 text-[hsl(40_85%_50%)] shrink-0" />
                </div>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{p.text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.items.map((it) => (
                    <span
                      key={it}
                      className="text-[11px] px-2 py-1 rounded-full bg-background/70 border border-border text-foreground/80"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PLANO DE COMPENSAÇÃO */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <Badge className="bg-[hsl(40_85%_55%)]/15 text-[hsl(40_85%_42%)] border border-[hsl(40_85%_55%)]/40 gap-1.5">
              <Trophy className="w-3.5 h-3.5" /> Plano de carreira
            </Badge>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-foreground">
              {data.planTitle}
            </h2>
            <p
              className="mt-3 text-foreground/75 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: data.planIntro }}
            />
          </div>

          <Card className="overflow-hidden border-2 border-[hsl(40_85%_55%)]/40">
            <div className="h-1 w-full bg-gradient-gold" />
            <div className="divide-y divide-border">
              {data.planRanks.map((r, i) => (
                <div
                  key={r.rank}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 md:p-5 hover:bg-[hsl(40_85%_55%)]/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-gold text-[hsl(220_60%_15%)] font-black flex items-center justify-center text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-black text-foreground">{r.rank}</h3>
                    <p className="text-sm text-foreground/75 mt-0.5">{r.text}</p>
                  </div>
                  <Badge className="bg-[hsl(40_85%_55%)]/15 text-[hsl(40_85%_42%)] border border-[hsl(40_85%_55%)]/40 whitespace-nowrap">
                    {r.payout}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="h-1 w-full bg-gradient-gold" />
          </Card>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <Card className="p-5 border-2 border-emerald-500/30 bg-emerald-500/5">
              <h3 className="font-black text-foreground flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Vantagens
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                {data.pros.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Star className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5 border-2 border-rose-500/30 bg-rose-500/5">
              <h3 className="font-black text-foreground flex items-center gap-2">
                <Target className="w-5 h-5 text-rose-600" /> Pontos de atenção
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                {data.cons.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Target className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* PRESENÇA GLOBAL */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-8">
            <Badge className="bg-[hsl(40_85%_55%)]/15 text-[hsl(40_85%_42%)] border border-[hsl(40_85%_55%)]/40 gap-1.5">
              <Globe2 className="w-3.5 h-3.5" /> Presença global
            </Badge>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-foreground">
              Presença internacional da {data.name}
            </h2>
            {data.presenceIntro && (
              <p
                className="mt-3 text-foreground/75 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: data.presenceIntro }}
              />
            )}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {data.countries.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full bg-background border border-border text-sm font-medium text-foreground/85 hover:border-[hsl(40_85%_55%)]/60 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRÊMIOS E CERTIFICAÇÕES */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-2 border-[hsl(40_85%_55%)]/30">
            <h3 className="font-black text-foreground text-xl flex items-center gap-2">
              <Award className="w-5 h-5 text-[hsl(40_85%_50%)]" /> Prêmios e reconhecimentos
            </h3>
            <ul className="mt-4 space-y-2.5">
              {data.awards.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-foreground/85">
                  <Trophy className="w-4 h-4 text-[hsl(40_85%_50%)] shrink-0 mt-0.5" /> {a}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6 border-2 border-[hsl(40_85%_55%)]/30">
            <h3 className="font-black text-foreground text-xl flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[hsl(40_85%_50%)]" /> Certificações de qualidade
            </h3>
            <ul className="mt-4 space-y-2.5">
              {data.certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-foreground/85">
                  <Leaf className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> {c}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-8">
            <Badge className="bg-[hsl(40_85%_55%)]/15 text-[hsl(40_85%_42%)] border border-[hsl(40_85%_55%)]/40 gap-1.5">
              <Heart className="w-3.5 h-3.5" /> Perguntas frequentes
            </Badge>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-foreground">
              Tudo o que você precisa saber sobre a {data.name}
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-2 border-[hsl(40_85%_55%)]/25 rounded-lg px-4 bg-background"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-blue text-white border-t-2 border-[hsl(40_85%_50%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-black">
            {data.ctaHeadline ?? (
              <>
                Quer comparar a {data.name} com outras empresas do{" "}
                <span className="bg-gradient-gold bg-clip-text text-transparent">Top 100 mundial</span>?
              </>
            )}
          </h2>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">
            Use nosso ranking atualizado e nossa ferramenta de comparação para
            encontrar a empresa de vendas diretas ideal para o seu perfil.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/top-100/">
              <Button className="bg-[hsl(40_85%_55%)] hover:bg-[hsl(40_85%_50%)] text-[hsl(220_60%_15%)] font-bold gap-2">
                Ver Top 100 Mundial <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/comparativo/">
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 gap-2">
                Comparar empresas
              </Button>
            </Link>
            <Link to="/quiz/papel-no-mmn/">
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 gap-2">
                Descobrir minha empresa ideal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
