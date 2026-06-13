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

const stats = [
  { icon: Crown, label: "Ranking Mundial 2026", value: "#1", hint: "Maior empresa de vendas diretas do mundo" },
  { icon: Calendar, label: "Fundação", value: "1959", hint: "65+ anos de história" },
  { icon: MapPin, label: "País de Origem", value: "EUA 🇺🇸", hint: "Ada, Michigan" },
  { icon: Globe2, label: "Países & Territórios", value: "100+", hint: "Operação global" },
  { icon: Users, label: "Empresários Independentes", value: "3+ milhões", hint: "Distribuidores ativos ABO" },
  { icon: Package, label: "Produtos no Portfólio", value: "450+", hint: "Em mais de 10 categorias" },
  { icon: DollarSign, label: "Faturamento 2025", value: "US$ 7,3 bi", hint: "Fonte: Business For Home" },
  { icon: Factory, label: "Funcionários Globais", value: "17.000+", hint: "Em fábricas, P&D e operações" },
];

const milestones = [
  { year: "1959", title: "Fundação da Amway", text: "Jay Van Andel e Rich DeVos fundam a Amway Corporation em Ada, Michigan, lançando o LOC (Liquid Organic Cleaner), o primeiro detergente biodegradável do mercado." },
  { year: "1962", title: "Primeira expansão internacional", text: "A Amway inicia operações no Canadá, dando o primeiro passo da expansão internacional." },
  { year: "1972", title: "Aquisição da Nutrilite", text: "A Amway adquire a Nutrilite, marca pioneira em suplementos à base de plantas fundada em 1934 — hoje a #1 do mundo em vitaminas e suplementos dietéticos." },
  { year: "1979", title: "Vitória histórica na FTC", text: "A Federal Trade Commission dos EUA reconhece a Amway como modelo legítimo de venda direta, estabelecendo o precedente regulatório do marketing multinível moderno." },
  { year: "1990", title: "Entrada no Brasil", text: "A Amway estrutura sua operação latino-americana e leva os produtos Nutrilite e Artistry para milhões de novos consumidores." },
  { year: "1995", title: "Entrada na China", text: "A Amway se torna a maior empresa de vendas diretas estrangeira na China, hoje seu maior mercado individual." },
  { year: "2007", title: "Reorganização global como Alticor", text: "Amway, Quixtar e Access Business Group são unificadas sob a holding Alticor, modernizando a operação global." },
  { year: "2014", title: "Pico histórico de US$ 10,8 bi", text: "A Amway atinge o maior faturamento da história do MMN, US$ 10,8 bilhões, consolidando-se como a líder absoluta do setor." },
  { year: "2020", title: "Transformação digital", text: "A Amway acelera a digitalização do negócio, lançando apps, e-commerce direto-ao-consumidor e ferramentas de social selling para seus ABOs." },
  { year: "2026", title: "Liderança consolidada", text: "Mantém a posição #1 no ranking global Business For Home com US$ 7,3 bilhões em receita anual, presente em mais de 100 países." },
];

const productLines = [
  {
    name: "Nutrilite™",
    tag: "Nutrição & Suplementos",
    color: "from-emerald-500/15 to-emerald-700/5",
    text: "A marca #1 do mundo em vitaminas e suplementos dietéticos. Único portfólio com cultivo, colheita e processamento em fazendas orgânicas certificadas próprias (mais de 2.400 hectares nos EUA, México e Brasil), com rastreabilidade total da semente ao frasco.",
    items: ["Double X Multivitamínico", "Nutrilite Daily", "Proteína Vegetal", "Cálcio Magnésio D", "Ômega-3 Salmão", "Probióticos", "Concentrado de Frutas e Vegetais"],
  },
  {
    name: "Artistry™",
    tag: "Beleza & Skincare Premium",
    color: "from-rose-500/15 to-rose-700/5",
    text: "Linha premium de cuidados com a pele, maquiagem e fragrâncias. Reconhecida entre as 5 maiores marcas de skincare prestige do mundo, com tecnologia anti-idade patenteada e fórmulas testadas dermatologicamente.",
    items: ["Artistry Signature Select", "Supreme LX", "Youth Xtend", "Ideal Radiance", "Studio NYC Maquiagem", "Hydra-V"],
  },
  {
    name: "eSpring™",
    tag: "Purificação de Água",
    color: "from-sky-500/15 to-sky-700/5",
    text: "Sistema de purificação de água #1 em vendas no mundo segundo a Verify Markets. Combina filtragem por carbono ativado em bloco com lâmpada UV-C, removendo mais de 145 contaminantes potenciais e preservando minerais essenciais.",
    items: ["eSpring Sistema Completo", "Cartucho de Reposição", "Acessório de Instalação", "Torneira Auxiliar"],
  },
  {
    name: "Atmosphere™ Sky",
    tag: "Purificação de Ar",
    color: "from-indigo-500/15 to-indigo-700/5",
    text: "Purificadores de ar com tecnologia HEPA de grau hospitalar, capazes de capturar até 99,99% das partículas em suspensão, incluindo vírus, bactérias, pólen, fumaça e poluentes químicos.",
    items: ["Atmosphere Sky", "Atmosphere Mini", "Atmosphere Drive (automotivo)", "Filtros de Reposição"],
  },
  {
    name: "Amway Home™",
    tag: "Limpeza Sustentável",
    color: "from-lime-500/15 to-lime-700/5",
    text: "Linha de produtos de limpeza concentrados, biodegradáveis e sem fosfato, com o icônico LOC™ — o detergente que originou a Amway em 1959. Fórmulas concentradas reduzem embalagens plásticas em mais de 75%.",
    items: ["LOC Multiuso", "SA8 Lava-Roupas", "Dish Drops", "Glass Cleaner", "See Spray Tira-Manchas", "Pursue Desinfetante"],
  },
  {
    name: "XS™ Energy",
    tag: "Performance & Energia",
    color: "from-amber-500/15 to-amber-700/5",
    text: "Bebidas energéticas e suplementos esportivos com zero açúcar, vitaminas do complexo B e adaptógenos. Patrocinador oficial de atletas de elite e equipes de e-sports em mais de 50 países.",
    items: ["XS Energy Drink", "XS Protein Pods", "XS Sports Nutrition", "XS Pre-Workout"],
  },
  {
    name: "Bodykey™ by Nutrilite",
    tag: "Gestão de Peso & Estilo de Vida",
    color: "from-fuchsia-500/15 to-fuchsia-700/5",
    text: "Programa completo de gerenciamento de peso baseado em genética nutricional, shakes funcionais, barras proteicas e plano personalizado de acompanhamento com coach digital.",
    items: ["Shake Bodykey", "Barras Proteicas", "Bloqueador de Carboidrato", "Termogênico"],
  },
  {
    name: "Glister™ & Satinique™",
    tag: "Cuidados Pessoais",
    color: "from-cyan-500/15 to-cyan-700/5",
    text: "Linha completa de higiene oral (Glister) e haircare (Satinique), com fórmulas livres de parabenos, sulfatos e silicones, desenvolvidas em parceria com dermatologistas e dentistas.",
    items: ["Glister Creme Dental", "Glister Enxaguante", "Satinique Shampoo", "Satinique Condicionador", "G&H Linha Corporal"],
  },
];

const planRanks = [
  { rank: "ABO", payout: "Até 25%", text: "Empresário Amway: ponto de entrada, com 6% a 25% de bônus de performance conforme volume mensal." },
  { rank: "Silver Producer", payout: "+ Bônus Líder", text: "Atinge 7.500 PV de grupo ou patrocina 3 ABOs com performance — primeira graduação de liderança." },
  { rank: "Gold Producer", payout: "+ Bônus Reconhecimento", text: "Mantém Silver por 3 meses no ano fiscal." },
  { rank: "Platinum", payout: "+ 4% Liderança", text: "Mantém Silver por 6 meses no ano fiscal. Primeira viagem internacional de reconhecimento (Founders Achievement Award)." },
  { rank: "Ruby", payout: "+ 2% Ruby", text: "Atinge 15.000 PV de Ruby em um mês." },
  { rank: "Sapphire / Pearl", payout: "+ 1% Pérola", text: "Patrocina 3 Platinum em diferentes pernas — primeiro nível de breakaway." },
  { rank: "Emerald", payout: "+ 4% Emerald", text: "Patrocina 3 Platinum qualificados — reconhecido com Emerald Pin e bônus anual em dinheiro." },
  { rank: "Diamond", payout: "+ Diamond Bonus", text: "Patrocina 6 Platinum qualificados — reconhecimento global em convenções e Diamond Club." },
  { rank: "Executive Diamond", payout: "Bônus Internacional", text: "Mantém Diamond + grupos internacionais qualificados." },
  { rank: "Crown Ambassador", payout: "Topo do Plano", text: "Patrocina 20+ Platinum qualificados em 20+ pernas — patamar mais alto da Amway, atingido por menos de 0,001% dos ABOs." },
];

const countries = [
  "🇺🇸 Estados Unidos", "🇨🇦 Canadá", "🇲🇽 México", "🇧🇷 Brasil", "🇦🇷 Argentina", "🇨🇴 Colômbia",
  "🇨🇱 Chile", "🇵🇪 Peru", "🇩🇴 Rep. Dominicana", "🇬🇧 Reino Unido", "🇩🇪 Alemanha", "🇫🇷 França",
  "🇮🇹 Itália", "🇪🇸 Espanha", "🇵🇹 Portugal", "🇳🇱 Países Baixos", "🇸🇪 Suécia", "🇵🇱 Polônia",
  "🇷🇺 Rússia", "🇹🇷 Turquia", "🇨🇳 China", "🇯🇵 Japão", "🇰🇷 Coreia do Sul", "🇮🇳 Índia",
  "🇹🇭 Tailândia", "🇮🇩 Indonésia", "🇲🇾 Malásia", "🇵🇭 Filipinas", "🇻🇳 Vietnã", "🇦🇺 Austrália",
  "🇳🇿 Nova Zelândia", "🇿🇦 África do Sul", "🇦🇪 Emirados Árabes", "🇸🇦 Arábia Saudita",
];

const awards = [
  "#1 Direct Selling News Global 100 — 2014 a 2026 (líder histórica)",
  "Forbes Largest Private Companies — Top 50 mundial",
  "World's Best Employers — Forbes (várias edições)",
  "Sustainability Leadership Award — Direct Selling Association",
  "Top Workplace USA",
  "China Charity Award (mais alta honraria filantrópica chinesa)",
  "Prêmio ABEVD de Excelência em Vendas Diretas",
];

const certifications = [
  "NSF International (qualidade Nutrilite)",
  "USDA Organic (fazendas Nutrilite)",
  "Non-GMO Project Verified",
  "Rainforest Alliance",
  "ISO 9001 (Gestão da Qualidade)",
  "ISO 14001 (Gestão Ambiental)",
  "ISO 45001 (Saúde e Segurança Ocupacional)",
  "EWG VERIFIED™ (linhas selecionadas)",
];

const faqs = [
  {
    q: "A Amway é uma empresa séria ou é pirâmide?",
    a: "A Amway é a empresa de venda direta mais antiga e regulada do mundo. Em 1979, a Federal Trade Commission (FTC) dos EUA julgou oficialmente que a Amway NÃO é pirâmide, criando o precedente legal — conhecido como 'Amway Safeguards Rule' — que rege todo o setor de marketing multinível até hoje. A empresa é membro fundadora da World Federation of Direct Selling Associations (WFDSA) e da ABEVD no Brasil.",
  },
  {
    q: "Quanto custa começar como Empresário Amway (ABO)?",
    a: "O kit de inscrição como Empresário Amway no Brasil custa entre R$ 150 e R$ 400, dependendo do conteúdo escolhido. Não há mensalidade obrigatória, e a renovação anual gira em torno de R$ 120. A Amway oferece garantia de devolução de 100% no kit nos primeiros 90 dias.",
  },
  {
    q: "Quais são os principais produtos da Amway?",
    a: "Os carros-chefe da Amway são Nutrilite (suplementos #1 do mundo), Artistry (skincare premium), eSpring (purificador de água #1 mundial), Atmosphere (purificador de ar), Amway Home (limpeza concentrada) e XS Energy. No total são mais de 450 produtos exclusivos em mais de 10 categorias.",
  },
  {
    q: "Em quantos países a Amway opera?",
    a: "A Amway está presente em mais de 100 países e territórios, com escritórios próprios em mais de 50 mercados. Seu maior mercado individual é a China, seguido pela Coreia do Sul, EUA, Japão, Tailândia e Índia.",
  },
  {
    q: "Quanto fatura a Amway?",
    a: "Em 2025 a Amway faturou US$ 7,3 bilhões, segundo o ranking oficial da Business For Home 2026, mantendo a posição #1 mundial entre todas as empresas de vendas diretas. No pico histórico (2014), chegou a US$ 10,8 bilhões.",
  },
  {
    q: "Como funciona o plano de compensação da Amway?",
    a: "A Amway opera com um plano stairstep/breakaway clássico, com bônus de performance de 3% a 25% sobre o volume mensal, acrescido de bônus de liderança a partir do nível Platinum. Existem 10+ degraus de reconhecimento, indo de ABO até Crown Ambassador, e a Amway já distribuiu mais de US$ 60 bilhões em bônus desde 1959.",
  },
  {
    q: "A Amway é regulamentada no Brasil?",
    a: "Sim. A Amway do Brasil é registrada na Receita Federal, na ABEVD (Associação Brasileira de Empresas de Vendas Diretas) e possui Certificado de Boas Práticas da ANVISA para seus produtos. Está em operação no Brasil desde 1990.",
  },
  {
    q: "Qual é a posição da Amway no ranking das maiores empresas de vendas diretas?",
    a: "A Amway é a #1 do ranking mundial Business For Home 2026 das 100 maiores empresas de vendas diretas do mundo, posição que ocupa de forma quase ininterrupta desde 1992.",
  },
];

const Amway = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amway Corporation",
    alternateName: ["Amway", "Alticor"],
    url: "https://www.amway.com.br/",
    logo: "https://img.logo.dev/amway.com?token=pk_X-1ZO13GSgeOoUrIuJ6GMQ&size=512&format=png&retina=true",
    foundingDate: "1959-11-09",
    founders: [
      { "@type": "Person", name: "Jay Van Andel" },
      { "@type": "Person", name: "Richard DeVos" },
    ],
    foundingLocation: { "@type": "Place", name: "Ada, Michigan, EUA" },
    numberOfEmployees: { "@type": "QuantitativeValue", value: 17000 },
    description:
      "A Amway é a maior empresa de vendas diretas e marketing multinível do mundo, com US$ 7,3 bilhões em receita anual e operação em mais de 100 países.",
    sameAs: [
      "https://en.wikipedia.org/wiki/Amway",
      "https://www.linkedin.com/company/amway/",
      "https://businessforhome.org/companies/amway/",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Amway: A Maior Empresa de Vendas Diretas do Mundo | Ranking #1 2026"
        description="Amway é a #1 do ranking mundial 2026 com US$ 7,3 bi de receita. Conheça a história, produtos Nutrilite, Artistry, eSpring, plano de compensação, países e tudo sobre a maior empresa de Marketing Multinível do mundo."
        canonical="/empresa/amway/"
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
              <CompanyLogo name="Amway" size={140} className="!ring-4" />

              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(40_85%_55%)]/60 bg-[hsl(40_85%_55%)]/10 mb-3">
                  <Crown className="w-4 h-4 text-[hsl(40_85%_60%)]" />
                  <span className="text-xs font-bold tracking-wide text-[hsl(40_85%_75%)]">
                    #1 RANKING MUNDIAL • BUSINESS FOR HOME 2026
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                  Amway: <span className="bg-gradient-gold bg-clip-text text-transparent">A Maior Empresa</span> de Vendas Diretas do Mundo
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/90 leading-relaxed">
                  Pioneira do Marketing Multinível moderno, fundada em 1959 em Ada,
                  Michigan, presente em mais de 100 países, com mais de 3 milhões
                  de Empresários Independentes e US$ 7,3 bilhões em receita anual.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <Badge className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Receita verificada
                  </Badge>
                  <Badge className="bg-white/10 text-white border border-white/20 gap-1">
                    <Calendar className="w-3 h-3" /> 65+ anos
                  </Badge>
                  <Badge className="bg-white/10 text-white border border-white/20 gap-1">
                    <Globe2 className="w-3 h-3" /> 100+ países
                  </Badge>
                  <Badge className="bg-white/10 text-white border border-white/20 gap-1">
                    <Users className="w-3 h-3" /> 3 mi de ABOs
                  </Badge>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="https://www.amway.com.br/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
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
            {stats.map((s) => (
              <Card
                key={s.label}
                className="p-4 md:p-5 border-2 border-[hsl(40_85%_55%)]/30 bg-gradient-to-br from-background to-[hsl(40_85%_55%)]/5 hover:border-[hsl(40_85%_55%)]/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <s.icon className="w-5 h-5 text-[hsl(40_85%_50%)]" />
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
            ))}
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
            Quem é a Amway?
          </h2>
          <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed text-base md:text-lg">
            <p>
              A <strong>Amway Corporation</strong> é uma empresa americana de
              vendas diretas e <strong>marketing multinível</strong> fundada em
              1959 por <em>Jay Van Andel</em> e <em>Rich DeVos</em> na pequena
              cidade de Ada, em Michigan. O nome vem da expressão{" "}
              <em>American Way</em> (jeito americano), em referência aos valores
              de livre iniciativa e empreendedorismo que sempre nortearam o
              negócio.
            </p>
            <p>
              Hoje, a Amway é a <strong>maior empresa de vendas diretas do
              mundo</strong>, ocupando a posição <strong>#1 do ranking
              Business For Home 2026</strong>, com receita anual de{" "}
              <strong>US$ 7,3 bilhões</strong>. A operação é controlada pela
              holding <strong>Alticor</strong>, que reúne Amway, Access Business
              Group (fabricação e logística) e Amway Wellness Institute (P&D).
              Trata-se de uma empresa <strong>100% familiar</strong>, sem capital
              aberto, mantida pelos descendentes dos fundadores há três gerações.
            </p>
            <p>
              A Amway é a casa de marcas globais consagradas como{" "}
              <strong>Nutrilite</strong> (a #1 do mundo em vitaminas e
              suplementos dietéticos), <strong>Artistry</strong> (top 5 em
              skincare prestige), <strong>eSpring</strong> (#1 em purificação de
              água) e <strong>Atmosphere</strong> (purificação de ar). Mais de{" "}
              <strong>3 milhões de Empresários Amway (ABOs)</strong>{" "}
              comercializam mais de 450 produtos em mais de 100 países.
            </p>
          </div>
        </div>
      </section>

      {/* HISTÓRIA — TIMELINE */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <Badge className="bg-[hsl(40_85%_55%)]/15 text-[hsl(40_85%_42%)] border border-[hsl(40_85%_55%)]/40 gap-1.5">
              <History className="w-3.5 h-3.5" /> Linha do tempo
            </Badge>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-foreground">
              65 anos de história — da garagem em Michigan ao topo do mundo
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(40_85%_55%)] via-[hsl(40_85%_55%)]/40 to-transparent md:-translate-x-1/2" />
            <ol className="space-y-8">
              {milestones.map((m, i) => (
                <li
                  key={m.year}
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
              Tipos de produtos da Amway
            </h2>
            <p className="mt-3 text-foreground/75 max-w-3xl mx-auto">
              Mais de <strong>450 produtos</strong> exclusivos divididos em{" "}
              <strong>10+ categorias</strong>, todos com selo de qualidade
              próprio e garantia de satisfação de 180 dias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {productLines.map((p) => (
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
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  {p.text}
                </p>
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
              Plano de compensação Amway (Stairstep / Breakaway)
            </h2>
            <p className="mt-3 text-foreground/75 max-w-3xl mx-auto">
              A Amway opera com o clássico plano <strong>Stairstep
              Breakaway</strong>, com bônus de performance de 3% a 25% sobre o
              volume mensal e bônus de liderança a partir de Platinum. Já foram
              distribuídos mais de <strong>US$ 60 bilhões</strong> em bônus
              desde 1959.
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-[hsl(40_85%_55%)]/40">
            <div className="h-1 w-full bg-gradient-gold" />
            <div className="divide-y divide-border">
              {planRanks.map((r, i) => (
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
                {["Empresa mais sólida e antiga do setor (65+ anos)", "Plano de compensação testado em escala global", "Treinamentos de classe mundial e ferramentas digitais", "Produtos premium com fórmulas exclusivas e garantia de 180 dias", "Bonificações em dinheiro, viagens, carros e fundos de aposentadoria", "Sem mensalidade obrigatória — apenas renovação anual baixa"].map((p) => (
                  <li key={p} className="flex gap-2"><Star className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>{p}</span></li>
                ))}
              </ul>
            </Card>
            <Card className="p-5 border-2 border-rose-500/30 bg-rose-500/5">
              <h3 className="font-black text-foreground flex items-center gap-2">
                <Target className="w-5 h-5 text-rose-600" /> Pontos de atenção
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                {["Plano de carreira tradicional, exige consistência de longo prazo", "Crescimento mais lento que planos binários modernos", "Alta competição interna em mercados maduros", "Reconhecimentos de alto nível são extremamente seletivos", "Margens de produto menores que de concorrentes asiáticos"].map((p) => (
                  <li key={p} className="flex gap-2"><Target className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" /><span>{p}</span></li>
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
              Em mais de 100 países e territórios
            </h2>
            <p className="mt-3 text-foreground/75 max-w-3xl mx-auto">
              Principais mercados da Amway em 2026. China, Coreia do Sul,
              Estados Unidos, Japão, Tailândia e Índia respondem por mais de 70%
              do faturamento global.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {countries.map((c) => (
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
              {awards.map((a) => (
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
              {certifications.map((c) => (
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
              Tudo o que você precisa saber sobre a Amway
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
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
            Quer comparar a Amway com outras empresas do <span className="bg-gradient-gold bg-clip-text text-transparent">Top 100 mundial</span>?
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
            <Link to="/quiz/comece/">
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

export default Amway;
