import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Nature's Sunshine",
  slug: "natures-sunshine",
  officialUrl: "https://www.naturessunshine.com/",
  domain: "naturessunshine.com",
  seoTitle: "Nature's Sunshine: Pioneira em Cápsulas Herbais | Top 46 Mundial MMN 2026",
  seoDescription:
    "Nature's Sunshine (NSP) é a MMN pioneira em suplementos herbais em cápsulas, fundada em 1972. Listada na NASDAQ (NATR), US$ 470 mi em 2025 e Top 46 no ranking Business For Home.",
  rankingLabel: "TOP 46 MUNDIAL • PIONEIRA EM HERBAL EM CÁPSULAS",
  heroHeadlineSuffix: "Ervas em Cápsulas com Ciência Botânica",
  heroParagraph:
    "Fundada em 1972 em Utah pelo casal Gene e Kristine Hughes, foi a primeira empresa do mundo a encapsular ervas medicinais em pó — revolucionando a indústria de suplementos herbais. Listada na Nasdaq (NATR), faturou US$ 470 mi em 2025 e ocupa o Top 46 mundial em 2026.",
  heroBadges: [
    { label: "53+ anos", icon: "calendar" },
    { label: "Nasdaq: NATR", icon: "check" },
    { label: "45+ países", icon: "globe" },
    { label: "Herbal pioneira", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 46", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "1972", hint: "Provo, Utah" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Lehi, Utah" },
    { icon: "globe", label: "Países", value: "45+", hint: "América, Europa, Ásia, África" },
    { icon: "users", label: "Distribuidores", value: "700 mil", hint: "NSP Distributors" },
    { icon: "package", label: "SKUs", value: "600+", hint: "Herbal, vitaminas, essenciais" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 470 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Fábrica", value: "Spanish Fork, UT", hint: "Complexo próprio 20 mil m²" },
  ],
  aboutHtml: `
    <p>A <strong>Nature's Sunshine Products (NSP)</strong> foi fundada em <strong>1972</strong> em <strong>Provo (Utah)</strong> pelo casal <em>Gene e Kristine Hughes</em>. É a <strong>primeira empresa do mundo a encapsular ervas medicinais em pó</strong> — Kristine ficou famosa por triturar ervas com almofariz e pilão na cozinha até desenvolver o processo industrial que criou a indústria de suplementos herbais moderna.</p>
    <p>Listada na <strong>Nasdaq desde 1980 (ticker NATR)</strong>, é uma das poucas MMN de capital aberto do mundo. Opera fábrica própria de <strong>20 mil m² em Spanish Fork (Utah)</strong> com certificação cGMP, NSF e Health Canada. Portfólio conta com <strong>600+ SKUs</strong> em ervas, vitaminas, óleos essenciais, cuidado pessoal e nutrição esportiva.</p>
    <p>Em 2026 faturou <strong>US$ 470 milhões</strong>, ocupando o <strong>Top 46 mundial no Business For Home</strong>, presente em <strong>45+ países</strong>. Keywords SEO: <em>Nature's Sunshine Brasil</em>, <em>NSP suplementos</em>, <em>Nature's Sunshine é confiável</em>, <em>cápsulas herbais MMN</em>, <em>plano compensação Nature's Sunshine</em>.</p>
  `,
  timelineTitle: "53 anos como pioneira do herbal encapsulado",
  milestones: [
    { year: "1972", title: "Fundação", text: "Kristine Hughes encapsula ervas na cozinha em Utah." },
    { year: "1974", title: "Cayenne", text: "Primeiro produto comercial: cápsula de pimenta caiena." },
    { year: "1980", title: "IPO NASDAQ", text: "Torna-se uma das primeiras MMN de capital aberto." },
    { year: "1988", title: "Expansão internacional", text: "Entra no Japão e México." },
    { year: "2000", title: "Rússia e Leste Europeu", text: "Vira líder de mercado na Rússia." },
    { year: "2015", title: "Aquisição Synergy WW", text: "Consolida operações globais." },
    { year: "2020", title: "Programa Sustainability", text: "Certificação B Corp em processo." },
    { year: "2026", title: "Top 46 mundial", text: "45+ países, US$ 470 mi, Nasdaq forte." },
  ],
  productsIntro:
    "A NSP comercializa <strong>600+ SKUs</strong> — o portfólio mais amplo de herbal em MMN do mundo. Categorias principais:",
  productLines: [
    { name: "Ervas em Cápsulas", tag: "Categoria pioneira", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Cápsulas de ervas medicinais tradicionais e ocidentais.",
      items: ["Cayenne", "Garlic", "Echinacea", "Turmeric", "Ashwagandha"] },
    { name: "Vitaminas & Minerais", tag: "Nutrição", color: "from-blue-500/15 to-blue-700/5",
      text: "Multivitamínicos, cálcio, vitamina D3, ômega 3.",
      items: ["Super Supplemental", "Vitamin D3", "Cal-Mag", "Omega-3"] },
    { name: "Óleos Essenciais", tag: "Aromaterapia", color: "from-purple-500/15 to-purple-700/5",
      text: "Óleos essenciais puros com certificação de pureza.",
      items: ["Lavanda", "Eucalipto", "Tea Tree", "Peppermint"] },
    { name: "Nutri-Calm & Solstic", tag: "Bebidas funcionais", color: "from-orange-500/15 to-orange-700/5",
      text: "Bebidas para stress, energia e hidratação.",
      items: ["Nutri-Calm", "Solstic Energy", "Chlorophyll Liquid"] },
  ],
  planTitle: "Plano de Compensação Nature's Sunshine",
  planIntro:
    "Modelo <strong>Managers Program (unilevel modificado)</strong> com fast start bonus e leadership pool. Ativação por QV mensal. Comissões residuais até 7 níveis de profundidade.",
  planRanks: [
    { rank: "Member", payout: "Desconto atacado 20-35%", text: "Cadastro gratuito com compra." },
    { rank: "Manager", payout: "+ Group Bonus 10%", text: "Grupo com 3.000 QV." },
    { rank: "District Manager", payout: "+ Depth Bonus", text: "3 Managers na 1ª linha." },
    { rank: "Area / Regional Manager", payout: "+ Leadership Bonus", text: "Múltiplos DMs abaixo." },
    { rank: "National / Executive Manager", payout: "+ Elite Pool + Ações NATR", text: "Top mundial." },
  ],
  pros: [
    "Empresa listada na Nasdaq (NATR) — transparência total",
    "53 anos de operação — uma das MMN mais antigas ativas",
    "Fábrica própria com cGMP, NSF, Health Canada",
    "Portfólio mais amplo de herbal em MMN (600+ SKUs)",
    "Presente em 45+ países",
    "Reputação sólida entre naturopatas e herbalistas",
  ],
  cons: [
    "Sem operação oficial no Brasil (cross-border via EUA)",
    "Marca menos conhecida vs Herbalife e Amway",
    "Site e experiência digital menos moderna",
    "Kit inicial e QV mensal exigem investimento constante",
    "Concorrência forte da Doterra e Young Living em óleos essenciais",
  ],
  presenceIntro:
    "Presente em <strong>45+ países</strong>. Mercados principais: EUA, Rússia, Japão, México, Ucrânia, Cazaquistão, Colômbia, Reino Unido, República Tcheca. Sem CNPJ no Brasil.",
  countries: [
    "🇺🇸 EUA", "🇷🇺 Rússia", "🇯🇵 Japão", "🇲🇽 México",
    "🇺🇦 Ucrânia", "🇰🇿 Cazaquistão", "🇨🇴 Colômbia", "🇬🇧 Reino Unido",
    "🇨🇿 República Tcheca", "🇰🇷 Coreia do Sul",
  ],
  awards: [
    "Top 46 Business For Home Global 100 — 2026",
    "Listada NASDAQ desde 1980 (NATR)",
    "NSF International Certified",
    "Utah Business Fastest Growing",
  ],
  certifications: [
    "cGMP (FDA)",
    "NSF International",
    "Health Canada NPN",
    "USDA Organic (linhas selecionadas)",
    "Vegan Society (linhas selecionadas)",
    "Non-GMO Project Verified",
  ],
  faqs: [
    { q: "O que é a Nature's Sunshine?",
      a: "Nature's Sunshine Products (NSP) é uma multinacional americana fundada em 1972 pelo casal Gene e Kristine Hughes em Utah. Foi a primeira empresa do mundo a encapsular ervas medicinais em pó. Listada na Nasdaq (NATR) desde 1980, faturou US$ 470 mi em 2025." },
    { q: "A Nature's Sunshine é confiável?",
      a: "Sim. É empresa de capital aberto na Nasdaq desde 1980 (ticker NATR), com 53 anos de história, fábrica própria certificada cGMP e NSF, presente em 45+ países. Uma das MMN mais transparentes do mundo por ser publicamente listada." },
    { q: "Nature's Sunshine opera no Brasil?",
      a: "Não. Em 2026 não há CNPJ, ANVISA ou escritório oficial no Brasil. Mercados principais são EUA, Rússia, Japão, México e Leste Europeu. Brasileiros que compram fazem cross-border pelos EUA." },
    { q: "Quais são os produtos mais famosos da NSP?",
      a: "Os hero products históricos são as cápsulas de Cayenne (Pimenta Caiena), Garlic (Alho), Echinacea, Turmeric (Cúrcuma) e Ashwagandha. Além disso, o Nutri-Calm (para stress) e o Solstic Energy (bebida energética natural) são bestsellers modernos." },
    { q: "Como funciona o plano de compensação da Nature's Sunshine?",
      a: "É unilevel modificado (Managers Program): Member (desconto 20-35%) → Manager (+ Group Bonus 10%) → District/Area/Regional Manager → National/Executive Manager (Elite Pool + ações NATR). Ativação exige QV mensal. Comissões residuais até 7 níveis de profundidade." },
    { q: "Qual a diferença entre Nature's Sunshine e Doterra/Young Living?",
      a: "NSP é focada em cápsulas de ervas medicinais (portfólio de 600+ SKUs herbais e vitamínicos), enquanto Doterra e Young Living são focadas em óleos essenciais premium. NSP tem herbal em cápsula, óleos essenciais, vitaminas e nutrição. Todas as três operam com modelo MMN e têm alta qualidade." },
    { q: "Quanto custa começar na Nature's Sunshine?",
      a: "Cadastro Member: gratuito. Kit inicial recomendado: US$ 100-300 em produtos pessoais. Ativação de comissões exige QV (Qualifying Volume) mensal de aproximadamente 100 QV = US$ 100-150 dependendo do país." },
    { q: "Qual foi a inovação histórica da Nature's Sunshine?",
      a: "Foi a primeira empresa a encapsular ervas em pó em 1972 — antes disso, ervas medicinais eram vendidas apenas em folha seca (chá) ou tintura líquida. Kristine Hughes começou triturando pimenta caiena em casa. A inovação criou a indústria moderna de suplementos herbais em cápsula." },
  ],
  founders: ["Gene Hughes", "Kristine Hughes"],
  foundingDate: "1972-04-01",
  foundingLocation: "Provo, Utah, EUA",
  employees: 900,
  alternateNames: ["Nature's Sunshine Products", "NSP", "NATR"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Nature%27s_Sunshine_Products",
};

const NaturesSunshine = () => <CompanyPremiumPage data={data} />;
export default NaturesSunshine;
