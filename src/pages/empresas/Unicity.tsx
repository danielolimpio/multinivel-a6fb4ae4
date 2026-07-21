import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Unicity",
  slug: "unicity",
  officialUrl: "https://www.unicity.com/",
  domain: "unicity.com",
  seoTitle: "Unicity: Metabolismo e Balance com Bios Life | Top 47 Mundial MMN 2026",
  seoDescription:
    "Unicity é a MMN americana de wellness metabólico, referência mundial em Bios Life e Unimate. US$ 460 mi em 2025 e Top 47 no ranking Business For Home. Herança de Rexall (1903).",
  rankingLabel: "TOP 47 MUNDIAL • METABOLISMO E BALANCE",
  heroHeadlineSuffix: "Bios Life, Unimate e a Ciência do Metabolismo",
  heroParagraph:
    "Fundada em 2001 em Utah como fusão da Rexall (1903) e Enrich International (1972), a Unicity herdou 120+ anos de tradição em wellness. Hoje é referência mundial em produtos para metabolismo (Bios Life) e energia natural (Unimate), com Top 47 mundial e US$ 460 mi em 2025.",
  heroBadges: [
    { label: "Herança 1903", icon: "calendar" },
    { label: "60+ países", icon: "globe" },
    { label: "Bios Life", icon: "check" },
    { label: "US$ 460 mi", icon: "dollar" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 47", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "2001", hint: "Fusão Rexall (1903) + Enrich (1972)" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Orem, Utah" },
    { icon: "globe", label: "Países", value: "60+", hint: "Ásia como mercado principal" },
    { icon: "users", label: "Franchisees", value: "800 mil", hint: "Unicity Franchisees globais" },
    { icon: "package", label: "SKUs", value: "100+", hint: "Foco em metabolismo e balance" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 460 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Herança científica", value: "Rexall + Mayo Clinic", hint: "Parcerias históricas" },
  ],
  aboutHtml: `
    <p>A <strong>Unicity International</strong> foi criada em <strong>2001</strong> pela fusão de duas gigantes históricas: a <strong>Rexall</strong> (farmácia americana fundada em <strong>1903</strong>, uma das maiores redes de drogaria do século XX) e a <strong>Enrich International</strong> (MMN de wellness fundada em 1972 em Utah). A união criou uma marca com <strong>120+ anos de herança científica</strong> em saúde e nutrição.</p>
    <p>Sediada em <strong>Orem (Utah)</strong>, a Unicity é referência global em <strong>wellness metabólico</strong> — seus produtos hero são o <strong>Bios Life</strong> (fibra funcional patenteada que ajuda a controlar colesterol, glicose e triglicerídeos, com estudos clínicos em Mayo Clinic) e o <strong>Unimate</strong> (bebida de yerba mate com foco em foco cognitivo e energia limpa).</p>
    <p>Em 2026 opera em <strong>60+ países</strong> — com mercados principais na Ásia (Tailândia, Filipinas, Coreia, Índia) — e faturou <strong>US$ 460 milhões</strong>, ocupando o <strong>Top 47 mundial no Business For Home</strong>. Keywords SEO: <em>Unicity Brasil</em>, <em>Bios Life colesterol</em>, <em>Unimate yerba mate</em>, <em>Feel Great Program</em>, <em>Unicity é pirâmide</em>.</p>
  `,
  timelineTitle: "De 1903 (Rexall) a 2026 (Top 47 mundial)",
  milestones: [
    { year: "1903", title: "Rexall", text: "Fundação da rede de drogarias Rexall nos EUA." },
    { year: "1972", title: "Enrich International", text: "Nasce em Utah com foco em wellness herbal." },
    { year: "1999", title: "Bios Life patenteado", text: "Fibra patenteada com estudos Mayo Clinic." },
    { year: "2001", title: "Fusão = Unicity", text: "Rexall + Enrich criam Unicity International." },
    { year: "2010", title: "Bios Life Slim", text: "Bestseller mundial para controle metabólico." },
    { year: "2019", title: "Unimate lançado", text: "Bebida de yerba mate vira sensação global." },
    { year: "2022", title: "Feel Great Program", text: "Sistema Unimate + Balance vira hit em TikTok e Instagram." },
    { year: "2026", title: "Top 47 mundial", text: "60+ países, US$ 460 mi, forte na Ásia." },
  ],
  productsIntro:
    "A Unicity comercializa mais de <strong>100 SKUs</strong> com foco em wellness metabólico, digestivo e cognitivo:",
  productLines: [
    { name: "Bios Life", tag: "Hero product", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Fibra funcional patenteada — colesterol, glicose e triglicerídeos.",
      items: ["Bios Life Slim", "Bios Life E", "Bios Life ChoLess"] },
    { name: "Unimate", tag: "Bestseller 2022+", color: "from-orange-500/15 to-orange-700/5",
      text: "Yerba mate premium — energia limpa e foco cognitivo. Viral no TikTok.",
      items: ["Unimate Lemon Ginger", "Unimate Passion Fruit", "Unimate Original"] },
    { name: "Feel Great Program", tag: "Combo hit", color: "from-amber-500/15 to-amber-700/5",
      text: "Bios Life + Unimate — programa de reset metabólico em 90 dias.",
      items: ["Kit 90 dias", "Kit 30 dias", "App Feel Great"] },
    { name: "Wellness Line", tag: "Suplementos", color: "from-blue-500/15 to-blue-700/5",
      text: "Vitaminas, probiotics, protein e cuidado pessoal complementar.",
      items: ["Bio-Reishi", "Cleanse", "Complete", "Matcha"] },
  ],
  planTitle: "Plano de Compensação Unicity",
  planIntro:
    "Modelo <strong>Franchisee (unilevel + rank advancement)</strong> com forte foco em residual do Feel Great Program (autoship mensal). Comissões pagas por rank alcançado semanalmente.",
  planRanks: [
    { rank: "Franchisee", payout: "Retail 20-40%", text: "Cadastro após kit inicial." },
    { rank: "Manager", payout: "+ Team Bonus 10%", text: "Grupo com 5.000 PV." },
    { rank: "Senior Manager / Director", payout: "+ Leadership Bonus", text: "3 Managers abaixo." },
    { rank: "Presidential Director+", payout: "+ Global Pool + Prêmios", text: "Elite mundial Unicity." },
  ],
  pros: [
    "Herança científica forte (Rexall 1903 + Mayo Clinic)",
    "Bios Life com patentes reais e estudos clínicos",
    "Unimate viralizou no TikTok e Instagram (2022+)",
    "Feel Great Program é um dos combos mais vendidos em MMN",
    "60+ países com operação estabelecida",
    "Foco em wellness metabólico — mercado em crescimento",
  ],
  cons: [
    "Sem operação oficial no Brasil (cross-border via EUA)",
    "Preços premium podem afastar iniciantes",
    "Autoship mensal exigido para comissões",
    "Concorrência do Isagenix, Herbalife e Nu Skin em wellness",
    "Kit inicial de US$ 200-500 exige investimento",
  ],
  presenceIntro:
    "Presente em <strong>60+ países</strong>. Mercados fortes: Tailândia, Filipinas, Coreia do Sul, Índia, EUA, México, Japão, Rússia. Sem CNPJ oficial no Brasil.",
  countries: [
    "🇺🇸 EUA", "🇹🇭 Tailândia", "🇵🇭 Filipinas", "🇰🇷 Coreia do Sul",
    "🇮🇳 Índia", "🇲🇽 México", "🇯🇵 Japão", "🇷🇺 Rússia",
    "🇨🇦 Canadá", "🇸🇬 Singapura",
  ],
  awards: [
    "Top 47 Business For Home Global 100 — 2026",
    "DSN Global 100 — múltiplos anos",
    "American Journal of Cardiology (estudos Bios Life)",
    "Fast Company Innovation — Feel Great Program",
  ],
  certifications: [
    "cGMP (Good Manufacturing Practice)",
    "NSF Certified",
    "Estudos clínicos revisados por pares (Bios Life)",
    "Parceria histórica Mayo Clinic",
    "Non-GMO (linhas selecionadas)",
  ],
  faqs: [
    { q: "O que é a Unicity International?",
      a: "Unicity é uma multinacional americana criada em 2001 pela fusão da Rexall (drogaria fundada em 1903) e Enrich International (MMN de 1972). Sediada em Orem (Utah), é referência global em wellness metabólico. Faturou US$ 460 mi em 2025 e ocupa Top 47 no ranking Business For Home 2026." },
    { q: "O que é o Bios Life?",
      a: "Bios Life é a linha de fibras funcionais patenteadas da Unicity, com estudos clínicos publicados (inclusive parceria com Mayo Clinic) mostrando redução de colesterol LDL, glicose e triglicerídeos. É o hero product histórico da marca e uma das poucas fibras MMN com respaldo científico revisado por pares." },
    { q: "O que é o Unimate?",
      a: "Unimate é uma bebida de yerba mate premium da Unicity, lançada em 2019, focada em foco cognitivo, energia limpa (sem crash de cafeína) e disposição. Viralizou no TikTok e Instagram entre 2022 e 2024, virando um dos produtos wellness mais buscados online. Sabores: Lemon Ginger, Passion Fruit, Original." },
    { q: "A Unicity opera no Brasil?",
      a: "Não oficialmente. Não há CNPJ, ANVISA ou escritório no Brasil em 2026. A Unicity é forte na Ásia (Tailândia, Filipinas, Coreia) e América do Norte. Brasileiros que compram fazem cross-border pelos EUA — sem suporte local em português." },
    { q: "Como funciona o Feel Great Program?",
      a: "É um combo assinatura da Unicity com Bios Life + Unimate, marketado como 'reset metabólico de 90 dias'. A ideia é: Bios Life pela manhã (fibra funcional) + Unimate ao longo do dia (yerba mate). Existe um app oficial Feel Great que orienta a rotina. É o produto mais vendido da Unicity desde 2022." },
    { q: "A Unicity é confiável?",
      a: "Sim. Herança científica de 120+ anos (Rexall desde 1903), estudos clínicos publicados em American Journal of Cardiology sobre Bios Life, parceria histórica com Mayo Clinic, 60+ países de operação, membro DSA. Uma das MMN mais respeitadas cientificamente do mundo em wellness metabólico." },
    { q: "Como funciona o plano de compensação Unicity?",
      a: "Modelo Franchisee (unilevel + rank advancement). Ranks: Franchisee (retail 20-40%) → Manager (+ Team Bonus 10%) → Senior Manager/Director → Presidential Director+ (Global Pool + Prêmios). Comissões pagas semanalmente. Autoship mensal exigido para comissões residuais." },
    { q: "Quanto custa começar na Unicity?",
      a: "Kit inicial: US$ 200-500 (varia por país e por combo escolhido). O kit Feel Great Program 30 dias custa cerca de US$ 250 e já qualifica para primeiras comissões. Autoship mensal para manter ativação: aproximadamente US$ 150-250." },
  ],
  founders: ["Fusão Rexall (1903) + Enrich International (1972)"],
  foundingDate: "2001-01-01",
  foundingLocation: "Orem, Utah, EUA",
  employees: 700,
  alternateNames: ["Unicity International", "Feel Great Program"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Unicity_International",
};

const Unicity = () => <CompanyPremiumPage data={data} />;
export default Unicity;
