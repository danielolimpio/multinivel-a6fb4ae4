import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Shaklee",
  slug: "shaklee",
  officialUrl: "https://www.shaklee.com/",
  domain: "shaklee.com",
  seoTitle: "Shaklee: Pioneira em Wellness Natural | Top 44 Mundial MMN 2026",
  seoDescription:
    "Shaklee é a MMN pioneira em suplementos naturais dos EUA, fundada em 1956. Primeira empresa Climate Neutral do mundo, US$ 580 mi em 2025 e Top 44 no ranking Business For Home.",
  rankingLabel: "TOP 44 MUNDIAL • PIONEIRA EM WELLNESS NATURAL",
  heroHeadlineSuffix: "70 Anos de Nutrição Natural e Sustentabilidade",
  heroParagraph:
    "Fundada em 1956 na Califórnia pelo quiroprático Dr. Forrest C. Shaklee, é uma das MMN mais antigas do mundo e a primeira empresa Climate Neutral certificada do planeta (2000). US$ 580 mi em 2025 e Top 44 mundial em suplementos naturais, nutrição e produtos ecológicos.",
  heroBadges: [
    { label: "70 anos", icon: "calendar" },
    { label: "Climate Neutral", icon: "check" },
    { label: "EUA 🇺🇸", icon: "globe" },
    { label: "Nutrição natural", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 44", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "1956", hint: "Uma das MMN mais antigas do mundo" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Pleasanton, Califórnia" },
    { icon: "globe", label: "Países", value: "8", hint: "EUA, Canadá, México, Japão, Malásia, Taiwan, Indonésia, China" },
    { icon: "users", label: "Distribuidores", value: "1,1 milhão", hint: "Shaklee Members" },
    { icon: "package", label: "SKUs", value: "300+", hint: "Nutrição, beleza, limpeza ecológica" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 580 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Marco histórico", value: "1º Climate Neutral", hint: "Certificada em 2000" },
  ],
  aboutHtml: `
    <p>A <strong>Shaklee Corporation</strong> foi fundada em <strong>1956</strong> pelo quiroprático <em>Dr. Forrest C. Shaklee</em> na cidade de <strong>Hayward, Califórnia</strong>. É uma das <strong>MMN mais antigas ainda em operação</strong> (70 anos em 2026) e foi <strong>a primeira empresa Climate Neutral certificada do mundo</strong> (ano 2000) — pioneira absoluta em sustentabilidade corporativa.</p>
    <p>Especializada em <strong>suplementos naturais, nutrição esportiva, cuidado pessoal e produtos de limpeza ecológica</strong>, tem produtos icônicos como <strong>Shaklee Vivix</strong> (anti-aging), <strong>Life Shake</strong> (proteína) e <strong>Get Clean</strong> (limpeza doméstica sustentável, usada até pela NASA).</p>
    <p>Em 2026 faturou <strong>US$ 580 milhões</strong>, ocupando o <strong>Top 44 mundial no Business For Home</strong>, com 1,1 milhão de Shaklee Members ativos em 8 países. Keywords SEO: <em>Shaklee Brasil</em>, <em>Shaklee suplementos</em>, <em>Life Shake proteína</em>, <em>Vivix anti-aging</em>, <em>Shaklee é pirâmide</em>, <em>Get Clean Shaklee</em>.</p>
  `,
  timelineTitle: "70 anos de pioneirismo em wellness natural",
  milestones: [
    { year: "1956", title: "Fundação", text: "Dr. Forrest Shaklee funda em Hayward, CA." },
    { year: "1960", title: "Basic-H", text: "Lança limpador biodegradável revolucionário." },
    { year: "1975", title: "NASA usa Basic-H", text: "Produto escolhido para missões espaciais." },
    { year: "1985", title: "Expansão internacional", text: "Entra em Japão e Canadá." },
    { year: "2000", title: "1ª Climate Neutral", text: "Torna-se pioneira mundial em zero-carbon." },
    { year: "2004", title: "Roger Barnett CEO", text: "Compra a empresa e reposiciona globalmente." },
    { year: "2020", title: "Life Shake #1 nos EUA", text: "Vira shake proteico mais vendido em MMN." },
    { year: "2026", title: "Top 44 mundial", text: "70 anos completos, US$ 580 mi em receita." },
  ],
  productsIntro:
    "Shaklee comercializa <strong>300+ SKUs</strong> em 4 categorias com forte foco em pureza, sustentabilidade e ciência natural:",
  productLines: [
    { name: "Nutrition", tag: "Suplementos naturais", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Vitaminas, minerais e superfoods com base científica.",
      items: ["Vitalizer", "Vivix (anti-aging)", "Alfalfa", "B-Complex"] },
    { name: "Life Shake", tag: "Proteína bestseller", color: "from-orange-500/15 to-orange-700/5",
      text: "Shake proteico plant-based sem OGM — bestseller MMN nos EUA.",
      items: ["Vanilla", "Chocolate", "Strawberry", "Café"] },
    { name: "Get Clean", tag: "Limpeza ecológica", color: "from-blue-500/15 to-blue-700/5",
      text: "Produtos de limpeza biodegradáveis — usados pela NASA.",
      items: ["Basic-H", "Basic-D", "Basic-G", "Fresh Laundry"] },
    { name: "YOUTH Skincare", tag: "Beleza natural", color: "from-pink-500/15 to-pink-700/5",
      text: "Skincare com peptídeos e ingredientes botânicos.",
      items: ["Restoring Serum", "Radiance C+E", "Hydrating Cream"] },
  ],
  planTitle: "Plano de Compensação Shaklee",
  planIntro:
    "Modelo <strong>unilevel com rank advancement</strong>, foco em consistência mensal (PV) e liderança. Comissões residuais fortes e Dream Trip bonus lendários (Shaklee premia com viagens desde 1958).",
  planRanks: [
    { rank: "Member", payout: "Desconto 15%", text: "Cadastro gratuito (só compra pessoal)." },
    { rank: "Distributor", payout: "Retail 15-35%", text: "Ativação por PV mensal." },
    { rank: "Director", payout: "+ Group Bonus 10%", text: "Grupo com 3.000 PV." },
    { rank: "Senior Executive Coordinator", payout: "+ Leadership Bonus", text: "Múltiplos Directors abaixo." },
    { rank: "Master Coordinator+", payout: "+ Global Pool + Dream Trip", text: "Elite mundial — bônus 6-7 dígitos." },
  ],
  pros: [
    "70 anos de operação — uma das MMN mais antigas ainda ativas",
    "1ª empresa Climate Neutral do mundo",
    "Produtos aprovados pela NASA (Basic-H)",
    "Life Shake é o shake proteico #1 em MMN nos EUA",
    "Certificações NSF, USDA Organic e Non-GMO",
    "Dream Trip bonus (viagens exclusivas para top earners)",
  ],
  cons: [
    "Sem operação oficial no Brasil (cross-border via EUA)",
    "Marca pouco conhecida em mercados emergentes",
    "Preço premium (produtos naturais custam mais)",
    "Concorrência forte de USANA, Herbalife e Melaleuca",
    "Site e app menos modernos vs competidores",
  ],
  presenceIntro:
    "Presente em <strong>8 países</strong>: EUA, Canadá, México, Japão, Malásia, Taiwan, Indonésia e China. Foco principal em EUA e Ásia.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇲🇽 México", "🇯🇵 Japão",
    "🇲🇾 Malásia", "🇹🇼 Taiwan", "🇮🇩 Indonésia", "🇨🇳 China",
  ],
  awards: [
    "Top 44 Business For Home Global 100 — 2026",
    "1ª empresa Climate Neutral Certified (2000)",
    "DSA Member (Direct Selling Association EUA)",
    "Environmental Media Award — múltiplos anos",
    "NSF Certified for Sport",
  ],
  certifications: [
    "Climate Neutral Certified (desde 2000)",
    "NSF Certified for Sport",
    "USDA Organic (linhas selecionadas)",
    "Non-GMO Project Verified",
    "cGMP (Good Manufacturing Practice)",
    "Leaping Bunny (cruelty-free)",
  ],
  faqs: [
    { q: "O que é a Shaklee?",
      a: "Shaklee é uma multinacional americana fundada em 1956 pelo Dr. Forrest Shaklee, especializada em suplementos naturais, proteínas (Life Shake), skincare (YOUTH) e produtos de limpeza ecológica (Get Clean). É a 1ª empresa Climate Neutral certificada do mundo (2000) e faturou US$ 580 mi em 2025." },
    { q: "A Shaklee opera no Brasil?",
      a: "Não. A Shaklee opera oficialmente em 8 países (EUA, Canadá, México, Japão, Malásia, Taiwan, Indonésia, China) mas não tem CNPJ, ANVISA ou escritório no Brasil em 2026. Brasileiros que compram fazem cross-border pelos EUA." },
    { q: "A Shaklee é confiável?",
      a: "Sim. Opera há 70 anos, é membro da DSA, tem certificações NSF, USDA Organic, Non-GMO e Climate Neutral, e seus produtos são usados pela NASA (Basic-H). É uma das MMN mais respeitadas em wellness natural do mundo." },
    { q: "O que é o Life Shake da Shaklee?",
      a: "Life Shake é a linha de shakes proteicos plant-based (soja + ervilha) da Shaklee — o shake proteico #1 em vendas no canal MMN dos EUA. Sem OGM, sem glúten, sem lactose, sem açúcar artificial. Sabores: baunilha, chocolate, morango e café." },
    { q: "Como funciona o plano de compensação Shaklee?",
      a: "É unilevel com rank advancement. Ranks: Member → Distributor (retail 15-35%) → Director (+ Group Bonus 10%) → Senior Executive Coordinator → Master Coordinator+ (Global Pool + Dream Trip). Ativação por PV mensal. Comissões residuais fortes." },
    { q: "Quanto custa começar na Shaklee?",
      a: "Cadastro Member: gratuito. Kit Distributor: aproximadamente US$ 50-500 dependendo do país. Investimento recomendado: US$ 200-500 em produto pessoal para conhecer bem antes de vender." },
    { q: "Quem é o dono atual da Shaklee?",
      a: "Roger Barnett, empresário americano que comprou a Shaklee em 2004 e é o atual CEO. Sob sua liderança, a empresa reposicionou-se em wellness natural sustentável e lançou o Life Shake — que virou hero product global." },
    { q: "Qual a diferença entre Shaklee e Melaleuca?",
      a: "Ambas são MMN americanas de wellness/limpeza natural. Melaleuca é maior (US$ 2 bi vs US$ 580 mi da Shaklee), mais focada em óleo de melaleuca (tea tree) e casa. Shaklee é mais focada em suplementos naturais e Life Shake, com foco em sustentabilidade (Climate Neutral desde 2000) e sem loja online aberta ao público." },
  ],
  founders: ["Dr. Forrest C. Shaklee"],
  foundingDate: "1956-04-01",
  foundingLocation: "Hayward, Califórnia, EUA",
  employees: 500,
  alternateNames: ["Shaklee Corporation", "Shaklee Global Group"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Shaklee",
};

const Shaklee = () => <CompanyPremiumPage data={data} />;
export default Shaklee;
