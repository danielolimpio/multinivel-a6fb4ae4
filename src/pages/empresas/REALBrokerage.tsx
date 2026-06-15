import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "REAL Brokerage",
  slug: "real-brokerage",
  officialUrl: "https://www.onereal.com/",
  domain: "onereal.com",
  seoTitle: "REAL Brokerage: A Imobiliária Cloud que Cresce mais Rápido | Top 15 2026",
  seoDescription:
    "REAL Brokerage é a corretora imobiliária cloud que mais cresce nos EUA e Canadá, listada na Nasdaq (REAX), com US$ 1,4 bi em receita, 25 mil agentes e plano de revenue share em 5 níveis + ações.",
  rankingLabel: "TOP 15 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "A Imobiliária Cloud em Maior Crescimento",
  heroParagraph:
    "Fundada em 2014, a The Real Brokerage é a imobiliária cloud-based que mais cresce nos EUA e Canadá, listada na Nasdaq (REAX), com mais de 25 mil agentes, plano de revenue share e participação acionária.",
  heroBadges: [
    { label: "NASDAQ: REAX", icon: "check" },
    { label: "Desde 2014", icon: "calendar" },
    { label: "EUA + Canadá", icon: "globe" },
    { label: "25 mil+ agentes", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 15", hint: "Imobiliária cloud que mais cresce" },
    { icon: "calendar", label: "Fundação", value: "2014", hint: "Toronto, Canadá" },
    { icon: "map", label: "País de Origem", value: "Canadá/EUA 🇨🇦", hint: "Sedes em Miami e Toronto" },
    { icon: "globe", label: "Operação", value: "EUA + Canadá", hint: "50 estados + 10 províncias canadenses" },
    { icon: "users", label: "Agentes Licenciados", value: "25.000+", hint: "Crescimento 100%+ ao ano" },
    { icon: "package", label: "Categoria", value: "Imobiliário", hint: "Residencial e comercial" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 1,4 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Modelo", value: "Cloud + Mobile", hint: "App proprietário reZEN" },
  ],
  aboutHtml: `
    <p>A <strong>The Real Brokerage Inc.</strong> é uma corretora imobiliária cloud-based fundada em <strong>2014</strong> por <em>Tamir Poleg</em> e equipe, com sedes em Miami (Florida) e Toronto (Canadá). Listada na <strong>Nasdaq (REAX)</strong> e na <strong>TSX (REAX)</strong>, é considerada a <strong>imobiliária que mais cresce nos EUA e Canadá</strong>.</p>
    <p>Com mais de <strong>25 mil agentes licenciados</strong> em todos os <strong>50 estados americanos + 10 províncias canadenses</strong>, atingiu <strong>US$ 1,4 bilhão em receita</strong> em 2025, posicionando-se no <strong>Top 15 do ranking Business For Home 2026</strong>.</p>
    <p>O grande diferencial é o app proprietário <strong>reZEN</strong>, que centraliza CRM, transações, comissões, treinamento e até pagamento em criptomoedas. Combina <strong>revenue share em 5 níveis</strong> + <strong>plano de equity</strong> + <strong>cap anual baixo (US$ 12k)</strong>, atraindo agentes que migram de Keller Williams, eXp Realty e RE/MAX.</p>
  `,
  timelineTitle: "Da startup canadense à liderança norte-americana",
  milestones: [
    { year: "2014", title: "Fundação", text: "Tamir Poleg funda a Real Brokerage em Toronto com foco mobile-first." },
    { year: "2017", title: "Entrada nos EUA", text: "Lança operações americanas, começando pela Flórida." },
    { year: "2020", title: "IPO na TSX-V", text: "Abre capital na bolsa canadense (TSX-V: REAX)." },
    { year: "2022", title: "Listagem Nasdaq", text: "Migra para a Nasdaq (REAX), elevando governança e liquidez." },
    { year: "2023", title: "10 mil agentes", text: "Atinge 10 mil agentes em 18 meses." },
    { year: "2024", title: "Cripto Payments", text: "Primeira imobiliária a oferecer pagamento de comissão em Bitcoin." },
    { year: "2024", title: "Aquisição da Expetitle", text: "Adquire a Expetitle e cria a Real Title — vertical de title insurance." },
    { year: "2026", title: "Top 15 mundial + 25 mil agentes", text: "Entra no Top 15 do ranking Business For Home 2026." },
  ],
  productsIntro:
    "Plataforma completa de <strong>brokerage imobiliária</strong> com app reZEN, Real Title (title insurance), Real Wallet (cripto/fiat) e Real Mortgage (em piloto).",
  productLines: [
    { name: "Real Brokerage", tag: "Carro-chefe", color: "from-sky-500/15 to-sky-700/5",
      text: "Brokerage residencial e comercial em 50 estados dos EUA e 10 províncias do Canadá.",
      items: ["Residencial", "Comercial", "Luxury", "Rentals"] },
    { name: "reZEN App", tag: "Tecnologia Proprietária", color: "from-indigo-500/15 to-indigo-700/5",
      text: "Aplicativo all-in-one para agentes: CRM, transações, escritório virtual, pagamentos, eventos.",
      items: ["CRM", "Transactions", "Office", "Wallet"] },
    { name: "Real Title", tag: "Title Insurance", color: "from-amber-500/15 to-amber-700/5",
      text: "Vertical de title insurance e closing services nos EUA — receita adicional para agentes.",
      items: ["Title Insurance", "Escrow", "Closing"] },
    { name: "Real Wallet", tag: "Pagamentos Cripto", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Carteira proprietária com pagamento de comissão em Bitcoin ou USD instantâneo.",
      items: ["BTC Payouts", "Instant Pay", "FDIC Insured"] },
  ],
  planTitle: "Plano de Revenue Share REAL (5 Níveis + Stock Awards)",
  planIntro:
    "Combina <strong>comissão direta 85/15 com cap anual de US$ 12k</strong> + <strong>revenue share em 5 níveis</strong> + <strong>ações REAX</strong> via Stock Purchase Plan e Cap Award.",
  planRanks: [
    { rank: "Agent", payout: "85% comissão", text: "Split 85/15 com cap anual de US$ 12.000 — depois fica com 100%." },
    { rank: "Capped Agent", payout: "100% comissão", text: "Após bater o cap, recebe 100% líquido das comissões pelo resto do ciclo." },
    { rank: "Influencer", payout: "Revenue share Nível 1", text: "Patrocina um agente — ganha 5% sobre a comissão líquida dele." },
    { rank: "Capping Influencer", payout: "Níveis 1-5", text: "Com 10+ agentes ativos na frontline, desbloqueia os 5 níveis (5/4/3/2/1%)." },
    { rank: "Elite Agent", payout: "+ US$ 24k em ações REAX", text: "US$ 500k em GCI ou 50 transações em 12 meses — recebe US$ 24k em equity." },
    { rank: "Elite Cultural Leader", payout: "+ Stock Awards extras", text: "Topo cultural — pool de ações para top líderes da rede." },
  ],
  pros: [
    "Cap anual baixíssimo (US$ 12k vs US$ 16k da eXp)",
    "Comissão de 100% após bater o cap",
    "Plano de equity em ações REAX listadas na Nasdaq",
    "App reZEN top de linha (mobile-first)",
    "Pagamento de comissão em cripto (BTC)",
    "Operação em EUA + Canadá unificada",
  ],
  cons: [
    "Operação restrita à América do Norte (não atende Brasil)",
    "Apenas 5 níveis de revenue share (vs 7 da eXp)",
    "Marca ainda em construção fora dos EUA/Canadá",
    "Empresa jovem (10+ anos) vs concorrentes consolidadas",
    "Cripto pode assustar agentes tradicionais",
  ],
  presenceIntro:
    "Atua nos <strong>50 estados americanos + todas as 10 províncias canadenses</strong>, incluindo Quebec.",
  countries: [
    "🇺🇸 EUA (50 estados)", "🇨🇦 Canadá (10 províncias)",
  ],
  awards: [
    "Top 15 Direct Selling News Global 100 — 2026",
    "RealTrends Fastest-Growing Brokerage (3 anos seguidos)",
    "Inc. 5000 Fastest Growing Companies",
    "HousingWire Tech100 Real Estate",
    "TSX Venture 50 (Top Performer)",
  ],
  certifications: [
    "Listada na Nasdaq (REAX) e TSX (REAX)",
    "Licenciada em todos os 50 estados americanos",
    "Licenciada em todas as 10 províncias canadenses",
    "FINRA-affiliated payment systems",
    "Real Title é title insurance agency licenciada",
  ],
  faqs: [
    { q: "O que é a REAL Brokerage?",
      a: "É uma corretora imobiliária cloud-based fundada em 2014, listada na Nasdaq (REAX), com sedes em Miami e Toronto, presente em todos os 50 estados americanos e 10 províncias canadenses, com mais de 25 mil agentes." },
    { q: "Quanto fatura a REAL Brokerage?",
      a: "Em 2025 a Real Brokerage faturou US$ 1,4 bilhão, ocupando posição Top 15 no ranking mundial Business For Home 2026." },
    { q: "Qual a diferença entre REAL e eXp Realty?",
      a: "Ambas são imobiliárias cloud. A REAL tem cap menor (US$ 12k vs 16k), app proprietário reZEN mais moderno e pagamento em cripto. A eXp tem mais agentes (86k), 7 níveis de revenue share (vs 5) e atua em 24 países." },
    { q: "Como funciona o plano da REAL?",
      a: "Split 85/15 até bater US$ 12k de cap, depois 100% líquido + revenue share em 5 níveis (5%/4%/3%/2%/1%) + plano de equity em ações REAX para agentes Elite (US$ 24k em stock)." },
    { q: "A REAL Brokerage opera no Brasil?",
      a: "Não. A operação está restrita aos EUA e Canadá. No Brasil os modelos cloud mais próximos são as franquias EmCasa, Loft e a brasileira da eXp." },
    { q: "O que é o app reZEN?",
      a: "É o app proprietário da REAL que centraliza CRM, transações, escritório virtual, comissões, treinamento, Real Wallet (cripto) e Real Title em uma única plataforma mobile-first." },
    { q: "Posso receber comissão em Bitcoin?",
      a: "Sim. A REAL foi a primeira corretora imobiliária listada em bolsa a oferecer pagamento de comissão em Bitcoin via Real Wallet, com FDIC-insurance na parte fiat." },
    { q: "A REAL Brokerage é segura?",
      a: "Sim. É listada simultaneamente na Nasdaq (REAX) e na TSX (REAX), audita financeiramente pela KPMG e regulada pela SEC, pela CSA canadense e por departamentos estaduais imobiliários." },
  ],
  founders: ["Tamir Poleg"],
  foundingDate: "2014-01-01",
  foundingLocation: "Toronto, Canadá",
  employees: 600,
  alternateNames: ["The Real Brokerage Inc.", "REAX"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/The_Real_Brokerage",
};

const REALBrokerage = () => <CompanyPremiumPage data={data} />;
export default REALBrokerage;
