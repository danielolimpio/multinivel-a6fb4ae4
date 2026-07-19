import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Monat Global",
  slug: "monat-global",
  officialUrl: "https://www.monatglobal.com/",
  domain: "monatglobal.com",
  seoTitle: "Monat Global: Cabelo, Pele e Wellness Naturais | Top 25 Mundial 2026",
  seoDescription:
    "Monat Global é a MMN americana líder em cuidados capilares naturais, skincare e wellness. Fundada em 2014 em Miami, faturou US$ 800 mi em 2025 com presença em 10+ países.",
  rankingLabel: "TOP 25 MUNDIAL • DSN GLOBAL 100 2026",
  heroHeadlineSuffix: "Naturally Based, Clinically Proven",
  heroParagraph:
    "Fundada em 2014 em Miami pela família Urdaneta, a Monat Global é a MMN de crescimento mais rápido em cuidados capilares e beleza clean. Presente em 10 países e com US$ 800 mi em receita anual — dona da fórmula patenteada Rejuveniqe® Oil.",
  heroBadges: [
    { label: "12 anos", icon: "calendar" },
    { label: "10+ países", icon: "globe" },
    { label: "Naturally Based", icon: "check" },
    { label: "500 mil Market Partners", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 25", hint: "DSN Global 100" },
    { icon: "calendar", label: "Fundação", value: "2014", hint: "Doral, Miami (EUA)" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Família Urdaneta (venezuelana)" },
    { icon: "globe", label: "Países", value: "10+", hint: "EUA, Canadá, UK, Espanha, Polônia, Austrália, NZ, LT, LV, EE" },
    { icon: "users", label: "Market Partners", value: "500.000+", hint: "Vendedoras/es independentes" },
    { icon: "package", label: "Produtos", value: "150+", hint: "Cabelo, skincare, wellness" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 800 mi", hint: "Fonte: DSN Global 100" },
    { icon: "factory", label: "Fórmula Icônica", value: "Rejuveniqe® Oil", hint: "Blend patenteado de 13 óleos" },
  ],
  aboutHtml: `
    <p>A <strong>Monat Global Corp.</strong> é uma multinacional americana fundada em <strong>2014</strong> em <strong>Doral, Miami (Flórida)</strong> pela família <em>Urdaneta</em> — imigrantes venezuelanos donos do grupo Alcora Corporation. É uma das <strong>MMN de crescimento mais rápido da história americana</strong>: atingiu US$ 100 mi em receita no 2º ano de operação.</p>
    <p>Seu diferencial é o <strong>Rejuveniqe® Oil Intensive</strong> — blend patenteado de <strong>13 óleos naturais</strong> (abacate, jojoba, semente de uva, semente de baobá, camélia, entre outros) — base dos produtos capilares que impulsionaram a marca globalmente. Todos os produtos são <strong>Naturally Based</strong> (sem parabenos, sulfatos, ftalatos, formaldeído e mais de 500 ingredientes questionados).</p>
    <p>Com <strong>US$ 800 mi em receita anual</strong>, a Monat é <strong>Top 25 no DSN Global 100 2026</strong>, opera em <strong>10+ países</strong> (EUA, Canadá, UK, Irlanda, Espanha, Polônia, Austrália, Nova Zelândia, Lituânia, Letônia, Estônia) e conta com <strong>500 mil+ Market Partners</strong> ativos.</p>
  `,
  timelineTitle: "Da Venezuela para o topo da beleza clean americana",
  milestones: [
    { year: "2014", title: "Fundação", text: "Família Urdaneta lança Monat em Miami como spin-off da Alcora." },
    { year: "2015", title: "Crescimento explosivo", text: "Passa de US$ 40 mi no 1º ano." },
    { year: "2017", title: "Expansão UK e Austrália", text: "Primeiros mercados internacionais." },
    { year: "2019", title: "Skincare & Wellness", text: "Lança linhas Be+ (skincare) e Haven (wellness)." },
    { year: "2021", title: "US$ 600 mi", text: "Consolida-se como Top 30 mundial." },
    { year: "2023", title: "Europa Oriental", text: "Entra em Polônia, Lituânia, Letônia e Estônia." },
    { year: "2025", title: "US$ 800 mi", text: "Fecha o ano no Top 25 mundial." },
    { year: "2026", title: "Nova gestão", text: "Ray Urdaneta assume como CEO global após transição executiva." },
  ],
  productsIntro:
    "Mais de <strong>150 produtos premium</strong> nas categorias <strong>hair care, skincare (Be+) e wellness (Haven)</strong> — todos com padrão Naturally Based e testes clínicos.",
  productLines: [
    { name: "Hair Care (Icônico)", tag: "Carro-chefe", color: "from-purple-500/15 to-purple-700/5",
      text: "Linha completa de cuidados capilares com Rejuveniqe Oil — best-sellers absolutos da marca.",
      items: ["Volume Shampoo", "Renew Shampoo", "The Champ (Dry)", "Restore Leave-In", "Rejuveniqe Oil"] },
    { name: "Be+ Skincare", tag: "Skincare clínico", color: "from-rose-500/15 to-rose-700/5",
      text: "Linha de skincare com peptídeos, retinol clean, vitamina C e ácido hialurônico.",
      items: ["Vitamin C Serum", "Retinal Night Cream", "Hyaluronic Serum", "Age Prevention"] },
    { name: "Haven Wellness", tag: "Bem-estar", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos, colágeno vegano, boost imunológico e sono restaurador.",
      items: ["Collagen+", "Immunity Boost", "Sleep Well", "Energy Fizz", "Digestive"] },
    { name: "Junior & Body", tag: "Família", color: "from-sky-500/15 to-sky-700/5",
      text: "Linhas infantis (Junior) e corpo (Body) — hidratantes, sabonetes e óleos.",
      items: ["Junior Shampoo", "Body Cream", "Body Wash", "Hand Balm"] },
  ],
  planTitle: "Plano de Compensação Monat (VIP + Market Partner)",
  planIntro:
    "Modelo <strong>unilevel híbrido com clientes VIP recorrentes + bonificação de líderes</strong>. Foco em auto-ship de clientes e retenção — não em compras internas de estoque.",
  planRanks: [
    { rank: "Market Partner (MP)", payout: "30-40% varejo", text: "Comissão direta em vendas VIP e varejo." },
    { rank: "Managing MP", payout: "+ 5% override", text: "2 legs qualificados + PV mensal." },
    { rank: "Associate Executive", payout: "+ Bônus liderança", text: "Grupo crescendo com múltiplas linhas." },
    { rank: "Executive Director", payout: "+ Cadillac Bonus", text: "Bônus para carro Cadillac branco." },
    { rank: "National / Presidential", payout: "Elite Pool", text: "Topo global — bônus 6-7 dígitos anuais." },
  ],
  pros: [
    "Rejuveniqe Oil patenteado — diferencial real de produto",
    "Foco em VIP customers (não empilhamento de estoque)",
    "Naturally Based (500+ ingredientes proibidos)",
    "Presente em 10+ países desenvolvidos",
    "Crescimento acelerado (US$ 800 mi em 12 anos)",
    "Cadillac Bonus para top producers",
  ],
  cons: [
    "Sem operação oficial no Brasil (só via NFR)",
    "Preços premium (frasco ~US$ 40)",
    "Histórico de queixas FDA em 2018 (resolvido, mas conhecido)",
    "Kit inicial obrigatório (~US$ 100-300)",
    "Concorrência com Arbonne, Rodan+Fields e L'Oréal Professional",
  ],
  presenceIntro:
    "Presente em <strong>10+ países</strong> — EUA, Canadá, Reino Unido, Irlanda, Espanha, Polônia, Austrália, Nova Zelândia, Lituânia, Letônia e Estônia.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇬🇧 Reino Unido", "🇮🇪 Irlanda", "🇪🇸 Espanha",
    "🇵🇱 Polônia", "🇦🇺 Austrália", "🇳🇿 Nova Zelândia",
    "🇱🇹 Lituânia", "🇱🇻 Letônia", "🇪🇪 Estônia",
  ],
  awards: [
    "Top 25 DSN Global 100 — 2026",
    "Bravo Growth Award — DSN (múltiplas edições)",
    "Inc. 5000 Fastest Growing Companies",
    "American Business Awards — Gold Stevie",
    "EY Entrepreneur of the Year — Ray Urdaneta",
  ],
  certifications: [
    "Naturally Based (padrão próprio)",
    "PETA Approved (produtos selecionados)",
    "Cruelty-Free International",
    "ISO 22716 (GMP cosmético)",
    "FDA (operação regular nos EUA)",
  ],
  faqs: [
    { q: "O que é a Monat Global?",
      a: "É uma multinacional americana de venda direta fundada em 2014 em Miami pela família Urdaneta, especializada em cuidados capilares, skincare (Be+) e wellness (Haven). Todos os produtos são Naturally Based, com padrões restritivos de ingredientes." },
    { q: "Quanto fatura a Monat?",
      a: "Em 2025 a Monat faturou US$ 800 milhões, ocupando o Top 25 no ranking DSN Global 100 / Business For Home 2026. É uma das MMN de crescimento mais rápido da história americana." },
    { q: "A Monat opera no Brasil?",
      a: "Não. A Monat atua oficialmente em 10+ países (América do Norte, UK, Irlanda, Europa e Oceania). No Brasil, o único caminho é operação NFR (Not For Resale) via patrocinador nos EUA, Canadá ou Espanha." },
    { q: "O que é o Rejuveniqe Oil?",
      a: "É o óleo patenteado da Monat — blend de 13 óleos naturais (abacate, jojoba, semente de uva, semente de baobá, camélia, entre outros) que forma a base dos best-sellers capilares e é usado em quase toda a linha da marca." },
    { q: "Quanto custa entrar na Monat?",
      a: "O kit inicial de Market Partner varia de US$ 99 (Basic Enrollment Kit) até US$ 299-599 (Product Packs). Não há mensalidade, mas para manter comissões há mínimo de 100 PV a cada 3 meses (equivalente a ~US$ 100 em compras próprias ou vendas)." },
    { q: "A Monat é confiável?",
      a: "Sim — é membro ativo da DSA (Direct Selling Association), Top 25 mundial e faturou US$ 800 mi em 2025. Houve queixas ao FDA em 2018 sobre alegações capilares que resultaram em ajustes de marketing, mas nenhum recall de produtos foi determinado — e a empresa segue expandindo desde então." },
    { q: "Como funciona o plano de compensação Monat?",
      a: "Modelo unilevel com foco em VIP Customers (clientes recorrentes com auto-ship): 30-40% em varejo + overrides até múltiplos níveis + bônus de liderança + Cadillac White Bonus para Executive Directors+ + Elite Pool para Presidenciais." },
    { q: "Qual a diferença entre Monat e Arbonne?",
      a: "Ambas são MMN americanas premium clean-beauty. Diferenças: Monat é forte em cabelo (Rejuveniqe Oil), foca em VIP recorrente, é 100% vegana em várias linhas. Arbonne é B Corp certificada, 100% vegana em todo portfólio, forte em nutrição plant-based (30 Days) e skincare botânico." },
  ],
  founders: ["Luis Urdaneta", "Rayner Urdaneta"],
  foundingDate: "2014-09-01",
  foundingLocation: "Doral, Miami, Flórida, EUA",
  employees: 700,
  alternateNames: ["Monat", "Monat Global Corp."],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Monat",
};

const MonatGlobal = () => <CompanyPremiumPage data={data} />;
export default MonatGlobal;
