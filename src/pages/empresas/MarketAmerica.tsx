import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Market America",
  slug: "market-america",
  officialUrl: "https://www.marketamerica.com/",
  domain: "marketamerica.com",
  seoTitle: "Market America | SHOP.COM: Cashback e MMN | Top 42 Mundial 2026",
  seoDescription:
    "Market America opera SHOP.COM, um dos maiores e-commerces com cashback do mundo. Fundada em 1992, US$ 620 mi em 2025 e Top 42 no ranking Business For Home. Modelo UnFranchise.",
  rankingLabel: "TOP 42 MUNDIAL • E-COMMERCE + MMN",
  heroHeadlineSuffix: "SHOP.COM, Cashback e o Modelo UnFranchise",
  heroParagraph:
    "Fundada em 1992 na Carolina do Norte por JR e Loren Ridinger, a Market America criou o conceito UnFranchise: donos de negócio próprio dentro do ecossistema SHOP.COM, um dos maiores marketplaces com cashback do mundo. US$ 620 mi em 2025 e Top 42 mundial no Business For Home 2026.",
  heroBadges: [
    { label: "33+ anos", icon: "calendar" },
    { label: "SHOP.COM", icon: "globe" },
    { label: "UnFranchise", icon: "check" },
    { label: "US$ 620 mi", icon: "dollar" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 42", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "1992", hint: "Greensboro, Carolina do Norte" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Greensboro, NC" },
    { icon: "globe", label: "Países", value: "10+", hint: "EUA, Canadá, UK, HK, Taiwan, Austrália, etc." },
    { icon: "users", label: "UnFranchise Owners", value: "800 mil", hint: "Distribuidores ativos" },
    { icon: "package", label: "Marcas próprias", value: "Isotonix, Motives, TLS…", hint: "35+ marcas exclusivas" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 620 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Plataforma", value: "SHOP.COM", hint: "5 mi+ produtos parceiros" },
  ],
  aboutHtml: `
    <p>A <strong>Market America Worldwide</strong> foi fundada em <strong>1992</strong> em <strong>Greensboro (Carolina do Norte)</strong> pelos empresários <em>JR Ridinger</em> (falecido em 2022) e <em>Loren Ridinger</em>. É pioneira do conceito <strong>"UnFranchise"</strong> — negócio próprio dentro de uma plataforma central sem royalties de franquia tradicional.</p>
    <p>Em 2010 adquiriu a SHOP.COM e passou a operar <strong>um dos maiores e-commerces com cashback do mundo</strong>: mais de 5 milhões de produtos de milhares de parceiros (Walmart, Nike, Sephora, Best Buy) mais 35+ <strong>marcas exclusivas</strong> como <em>Isotonix</em> (suplementos), <em>Motives Cosmetics</em>, <em>TLS Weight Loss</em>, <em>Snap</em> (bebidas) e <em>DNA Miracles</em> (bebês).</p>
    <p>Em 2026 faturou <strong>US$ 620 milhões</strong>, ocupando o <strong>Top 42 mundial no Business For Home</strong>, com 800 mil UnFranchise Owners ativos em 10+ países. Keywords: <em>Market America SHOP.COM</em>, <em>UnFranchise Owner</em>, <em>Isotonix Brasil</em>, <em>Motives cosméticos</em>, <em>Market America é pirâmide</em>.</p>
  `,
  timelineTitle: "Do garage business ao marketplace SHOP.COM",
  milestones: [
    { year: "1992", title: "Fundação", text: "JR e Loren Ridinger criam Market America." },
    { year: "1999", title: "Isotonix", text: "Lançamento da linha de suplementos hero product." },
    { year: "2010", title: "Compra SHOP.COM", text: "Adquire domínio SHOP.COM da Altura Ventures." },
    { year: "2015", title: "US$ 700 mi de picos", text: "Ápice histórico com SHOP.COM em alta." },
    { year: "2020", title: "Digitalização acelerada", text: "Pandemia impulsiona e-commerce." },
    { year: "2022", title: "Morte de JR Ridinger", text: "Fundador falece; Loren assume CEO." },
    { year: "2026", title: "Top 42 mundial", text: "US$ 620 mi e reposicionamento estratégico." },
  ],
  productsIntro:
    "Market America opera <strong>2 modelos combinados</strong>: (1) marketplace SHOP.COM com cashback em milhões de produtos parceiros, e (2) marcas próprias exclusivas com maior margem:",
  productLines: [
    { name: "Isotonix", tag: "Suplementos hero", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos isotônicos em pó — melhor absorção pelo organismo.",
      items: ["Multivitamínico", "OPC-3", "B-Complex", "Digestive Enzymes"] },
    { name: "Motives Cosmetics", tag: "Beleza", color: "from-pink-500/15 to-pink-700/5",
      text: "Cosméticos personalizados por consultoria online (co-founder Loren Ridinger).",
      items: ["Base custom", "Batons", "Paletas", "Skincare"] },
    { name: "TLS Weight Loss", tag: "Emagrecimento", color: "from-orange-500/15 to-orange-700/5",
      text: "Sistema completo de emagrecimento com programa, shakes e suplementos.",
      items: ["Shakes proteína", "Fat Burner", "Meal Plans"] },
    { name: "SHOP.COM Marketplace", tag: "Cashback global", color: "from-blue-500/15 to-blue-700/5",
      text: "5 milhões+ de produtos de milhares de lojas parceiras com cashback.",
      items: ["Walmart", "Nike", "Sephora", "Best Buy", "Nordstrom"] },
  ],
  planTitle: "Plano de Compensação UnFranchise (Market America)",
  planIntro:
    "Modelo proprietário <strong>UnFranchise Business Development System (UBDS)</strong> — binário com BV (Business Volume) e ciclos semanais. Comissão paga por ciclo fechado (não por rank).",
  planRanks: [
    { rank: "UFO (UnFranchise Owner)", payout: "Retail + Cashback SHOP.COM", text: "Cadastro após compra de kit." },
    { rank: "Coordinator", payout: "+ Ciclo US$ 300-1.500", text: "1.500 BV pareado no binário." },
    { rank: "Executive Coordinator", payout: "+ Múltiplos ciclos", text: "6 UFOs pessoais cadastrados." },
    { rank: "Field Vice President / Presidential Director", payout: "+ Leadership Pool", text: "Elite mundial." },
  ],
  pros: [
    "SHOP.COM oferece cashback em milhões de produtos parceiros",
    "Marcas próprias (Isotonix, Motives, TLS) com boa reputação",
    "33+ anos de operação — longevidade comprovada",
    "Modelo UnFranchise com pagamento por ciclo (não por rank)",
    "Sistema de treinamento estruturado (UBDS)",
    "Loren Ridinger tem forte presença na mídia e Instagram",
  ],
  cons: [
    "Sem operação oficial no Brasil (cross-border via EUA)",
    "Cashback do SHOP.COM em produtos parceiros é baixo (1-15%)",
    "Kit inicial + inventário exigem investimento (US$ 400+)",
    "Curva de aprendizado do UnFranchise System é íngreme",
    "Concorrência forte de Amazon e apps de cashback",
    "Faturamento em declínio vs pico de 2015",
  ],
  presenceIntro:
    "Presente em <strong>10+ países</strong>: EUA, Canadá, Reino Unido, Hong Kong, Taiwan, Austrália, Cingapura, Filipinas, Malásia e Espanha. Sem CNPJ no Brasil.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇬🇧 Reino Unido", "🇦🇺 Austrália",
    "🇭🇰 Hong Kong", "🇹🇼 Taiwan", "🇸🇬 Singapura", "🇵🇭 Filipinas",
  ],
  awards: [
    "Top 42 Business For Home Global 100 — 2026",
    "DSN Global 100 — múltiplos anos",
    "Best Places to Work North Carolina",
  ],
  certifications: [
    "NSF Certified (Isotonix)",
    "cGMP (Good Manufacturing Practice)",
    "DSA Member (Direct Selling Association EUA)",
    "PCI DSS (SHOP.COM payments)",
  ],
  faqs: [
    { q: "O que é a Market America?",
      a: "Market America é uma empresa americana fundada em 1992 pela família Ridinger, pioneira do modelo UnFranchise (negócio próprio dentro de plataforma central). Opera o marketplace SHOP.COM com cashback e vende marcas próprias como Isotonix, Motives Cosmetics e TLS. Faturou US$ 620 mi em 2025." },
    { q: "O que é o SHOP.COM?",
      a: "SHOP.COM é um marketplace de e-commerce com cashback operado pela Market America desde 2010. Reúne mais de 5 milhões de produtos de milhares de lojas parceiras (Walmart, Nike, Sephora, Best Buy) mais as marcas próprias da Market America. Cashback varia de 1% a 30% conforme o parceiro." },
    { q: "Market America é pirâmide?",
      a: "Não. É empresa com 33+ anos de operação, produtos físicos reais (marcas próprias + marketplace), receita majoritária de venda ao consumidor final, plano de compensação registrado, membro da DSA e listada no ranking Business For Home. O modelo UnFranchise combina e-commerce com MLM de forma legítima." },
    { q: "Como funciona o UnFranchise Business?",
      a: "UnFranchise é um modelo proprietário: você tem seu próprio negócio (loja SHOP.COM personalizada + venda de marcas próprias) sem pagar royalties de franquia. Ganha por: (1) retail nas marcas próprias, (2) cashback próprio no SHOP.COM, (3) ciclos binários no plano de compensação (US$ 300-1.500 por ciclo)." },
    { q: "Market America opera no Brasil?",
      a: "Não oficialmente. Não há CNPJ, ANVISA ou escritório no Brasil em 2026. Brasileiros que se cadastram fazem cross-border pelos EUA — sem suporte local em português, sem entrega otimizada e com taxas de importação a pagar." },
    { q: "Quanto custa começar na Market America?",
      a: "Kit inicial: aproximadamente US$ 400 (cadastro + primeiro pedido). Investimento recomendado para operar sério: US$ 1.500-3.000 (inventário + treinamento UBDS). Taxa anual: cerca de US$ 130." },
    { q: "Quem é Loren Ridinger?",
      a: "Loren Ridinger é co-fundadora e atual CEO da Market America (após o falecimento do marido JR Ridinger em 2022). Empresária e influenciadora, é a criadora da linha Motives Cosmetics e tem milhões de seguidores no Instagram. É uma das mulheres mais influentes do MMN mundial." },
    { q: "O Isotonix funciona?",
      a: "Isotonix é uma linha de suplementos em pó com formulação isotônica (mesma pressão osmótica dos fluidos corporais), teoricamente permitindo absorção mais rápida. Tem certificação NSF e cGMP, avaliações positivas dos consumidores há 25+ anos. É o hero product da Market America." },
  ],
  founders: ["JR Ridinger (†2022)", "Loren Ridinger"],
  foundingDate: "1992-01-01",
  foundingLocation: "Greensboro, Carolina do Norte, EUA",
  employees: 800,
  alternateNames: ["Market America Worldwide", "SHOP.COM", "MA"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Market_America",
};

const MarketAmerica = () => <CompanyPremiumPage data={data} />;
export default MarketAmerica;
