import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Young Living",
  slug: "young-living",
  officialUrl: "https://www.youngliving.com/",
  domain: "youngliving.com",
  seoTitle: "Young Living: Óleos Essenciais nº1 do Mundo | Ranking 2026",
  seoDescription:
    "Young Living é a líder mundial em óleos essenciais 100% puros com padrão Seed to Seal, mais de US$ 2 bilhões em receita, 6 milhões de membros e presença em mais de 20 países.",
  rankingLabel: "TOP 18 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "Óleos Essenciais Seed to Seal",
  heroParagraph:
    "Fundada em 1993 por D. Gary Young em Utah (EUA), a Young Living é a líder mundial em óleos essenciais 100% puros, com fazendas próprias em quatro continentes e o rigoroso padrão de qualidade Seed to Seal®.",
  heroBadges: [
    { label: "30+ anos", icon: "calendar" },
    { label: "20+ países", icon: "globe" },
    { label: "6 mi de membros", icon: "users" },
    { label: "Seed to Seal", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 18", hint: "Líder em óleos essenciais" },
    { icon: "calendar", label: "Fundação", value: "1993", hint: "Lehi, Utah (EUA)" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Lehi, Utah" },
    { icon: "globe", label: "Países", value: "20+", hint: "América, Europa, Ásia, Oceania" },
    { icon: "users", label: "Membros Ativos", value: "6 milhões+", hint: "Distribuidores e clientes" },
    { icon: "package", label: "Produtos", value: "600+", hint: "Óleos, suplementos, beleza e lar" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 2,0 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Fazendas Próprias", value: "18+", hint: "EUA, Equador, França, Croácia, Peru" },
  ],
  aboutHtml: `
    <p>A <strong>Young Living Essential Oils</strong> é uma multinacional americana fundada em <strong>1993</strong> por <em>D. Gary Young</em> em <strong>Lehi, Utah</strong>. É considerada a criadora do mercado moderno de óleos essenciais terapêuticos e a maior empresa do setor no mundo.</p>
    <p>Seu grande diferencial é o compromisso <strong>Seed to Seal®</strong> — controle total do processo, desde a semente cultivada em fazendas próprias até o selo final do frasco, garantindo pureza laboratorial em cada gota. A empresa mantém fazendas em <strong>EUA (Utah, Idaho), Equador, França (Provence), Croácia, Peru e Taiwan</strong>.</p>
    <p>Com mais de <strong>US$ 2 bilhões em receita anual</strong>, Young Living está no <strong>Top 18 do ranking Business For Home 2026</strong>, opera em mais de <strong>20 países</strong> e conta com uma comunidade global de <strong>6 milhões de membros</strong>. Após o falecimento de Gary Young em 2018, sua esposa <strong>Mary Young</strong> assumiu o comando como CEO.</p>
  `,
  timelineTitle: "Do lavanda plantado em Idaho à líder mundial em óleos essenciais",
  milestones: [
    { year: "1993", title: "Fundação", text: "Gary Young inicia sua primeira destilaria de lavanda em Idaho." },
    { year: "1994", title: "Primeira fazenda", text: "Abre a Whispering Springs Farm — pioneira em óleos essenciais nos EUA." },
    { year: "2000", title: "Expansão global", text: "Abre fazendas na França (Simiane) e no Equador (Guayaquil)." },
    { year: "2010", title: "US$ 500 milhões", text: "Atinge marca de meio bilhão em receita anual." },
    { year: "2014", title: "US$ 1 bilhão", text: "Torna-se a primeira MMN de óleos essenciais a cruzar 1 bi/ano." },
    { year: "2018", title: "Mary Young assume", text: "Após falecimento de Gary Young, Mary Young torna-se CEO." },
    { year: "2020", title: "Boom pandêmico", text: "Demanda por óleos essenciais e wellness explode globalmente." },
    { year: "2026", title: "Top 18 mundial", text: "US$ 2 bi em receita, 6 mi de membros e liderança absoluta no setor." },
  ],
  productsIntro:
    "Mais de <strong>600 produtos</strong> com óleos essenciais 100% puros: óleos individuais, blends, suplementos NingXia, cuidados pessoais Savvy Minerals e linhas Thieves para o lar.",
  productLines: [
    { name: "Óleos Essenciais", tag: "Carro-chefe", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Óleos individuais e blends exclusivos com padrão Seed to Seal — a maior linha do mercado mundial.",
      items: ["Lavender", "Peppermint", "Frankincense", "Thieves Blend", "Stress Away", "Valor"] },
    { name: "NingXia Red", tag: "Suplementos", color: "from-rose-500/15 to-rose-700/5",
      text: "Suplemento antioxidante à base de wolfberry (goji chinês) — best-seller mundial da marca.",
      items: ["NingXia Red", "NingXia Zyng", "NingXia Nitro", "Master Formula"] },
    { name: "Thieves", tag: "Casa & Higiene", color: "from-amber-500/15 to-amber-700/5",
      text: "Linha inspirada no blend Thieves — limpeza natural, higiene bucal e proteção diária.",
      items: ["Thieves Cleaner", "Thieves Toothpaste", "Thieves Spray", "Thieves Wipes"] },
    { name: "Savvy Minerals & Beauty", tag: "Cosméticos", color: "from-sky-500/15 to-sky-700/5",
      text: "Maquiagem mineral e skincare ART com ingredientes derivados de óleos essenciais.",
      items: ["Savvy Minerals Makeup", "ART Skincare", "Seedlings (bebês)", "Shampoo Copaiba"] },
  ],
  planTitle: "Plano de Compensação Young Living (Unilevel Híbrido)",
  planIntro:
    "Estrutura unilevel com bônus rápidos: Fast Start (25% nos primeiros 3 meses), comissões unilevel de 8% em 5 gerações, Rising Star e Generation Leadership Bonus para líderes.",
  planRanks: [
    { rank: "Distribuidor", payout: "24% desconto atacado", text: "Cadastro básico — compra com desconto e pode indicar." },
    { rank: "Star", payout: "8% em 1 geração", text: "100 PV pessoal + 500 OGV — começam as comissões." },
    { rank: "Senior Star", payout: "+ Rising Star Bonus", text: "2.000 OGV em estrutura pessoal." },
    { rank: "Executive", payout: "8% em 2 gerações", text: "4.000 OGV com 2 legs qualificadas." },
    { rank: "Silver / Gold / Platinum", payout: "+ Generation Bonus", text: "10.000+ OGV — bônus de liderança e viagens." },
    { rank: "Diamond / Royal Crown", payout: "Elite Global Pool", text: "35.000+ OGV — elite mundial da marca." },
  ],
  pros: [
    "Líder absoluta em óleos essenciais (referência de qualidade)",
    "Padrão Seed to Seal com fazendas próprias verificadas",
    "Portfólio amplo (600+ produtos) com alta recompra",
    "Comunidade global forte com eventos de convenção anuais",
    "Fast Start Bonus paga rápido nos primeiros meses",
    "Presença no Brasil via NFR (Not For Resale)",
  ],
  cons: [
    "Operação oficial no Brasil ainda é limitada (NFR)",
    "Produtos com preço premium (mais caros que concorrentes)",
    "Manutenção mensal (100 PV) para receber comissões",
    "Plano complexo para iniciantes",
    "Concorrência forte de doTERRA no mesmo nicho",
  ],
  presenceIntro:
    "Atua com escritórios diretos em <strong>América do Norte, Europa, Ásia e Oceania</strong> e via NFR em diversos países latino-americanos, incluindo o Brasil.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇲🇽 México", "🇧🇷 Brasil (NFR)", "🇬🇧 Reino Unido", "🇫🇷 França",
    "🇩🇪 Alemanha", "🇪🇸 Espanha", "🇮🇹 Itália", "🇳🇱 Holanda", "🇭🇷 Croácia", "🇨🇳 China",
    "🇯🇵 Japão", "🇰🇷 Coreia do Sul", "🇹🇼 Taiwan", "🇸🇬 Singapura", "🇦🇺 Austrália", "🇳🇿 Nova Zelândia",
    "🇲🇾 Malásia", "🇵🇭 Filipinas", "🇮🇩 Indonésia",
  ],
  awards: [
    "Top 20 Direct Selling News Global 100 — 2026",
    "Bravo Growth Award (DSN)",
    "Utah Business Top Workplaces",
    "Best of State Utah (várias edições)",
    "Mary Young — Direct Selling Hall of Fame",
  ],
  certifications: [
    "Seed to Seal® (padrão proprietário)",
    "NSF cGMP",
    "ISO 9001",
    "USDA Organic (linhas selecionadas)",
    "Kosher Certified (produtos selecionados)",
  ],
  faqs: [
    { q: "O que é a Young Living?",
      a: "É a maior empresa de óleos essenciais do mundo, fundada em 1993 por Gary Young em Utah (EUA). Utiliza o padrão Seed to Seal® com fazendas próprias para garantir 100% pureza terapêutica." },
    { q: "Quanto fatura a Young Living?",
      a: "Em 2025 a Young Living faturou US$ 2 bilhões, ocupando o Top 18 no ranking mundial Business For Home 2026." },
    { q: "A Young Living opera no Brasil?",
      a: "Sim, mas via modelo NFR (Not For Resale) — o brasileiro pode se cadastrar, comprar e indicar, mas não há escritório físico ou notas fiscais nacionais." },
    { q: "O que é Seed to Seal?",
      a: "É o padrão proprietário da Young Living que controla cada etapa: da semente plantada nas fazendas próprias, colheita, destilação, testes de pureza em laboratório, envase e selo final no frasco." },
    { q: "Quais são os principais produtos?",
      a: "Óleos essenciais individuais (Lavender, Peppermint, Frankincense), blends exclusivos (Thieves, Stress Away, Valor), suplemento NingXia Red, linha Thieves de limpeza e maquiagem Savvy Minerals." },
    { q: "Quanto custa começar na Young Living?",
      a: "O Premium Starter Kit custa aproximadamente US$ 165-190 (12 óleos + difusor). Manutenção mensal de 100 PV é necessária para receber comissões." },
    { q: "Qual a diferença entre Young Living e doTERRA?",
      a: "Young Living cultiva a maior parte da matéria-prima em fazendas próprias (Seed to Seal). doTERRA compra de fornecedores globais parceiros com programa Co-Impact Sourcing. Ambas lideram o mercado mundial." },
    { q: "A Young Living é segura?",
      a: "Sim. Atua há mais de 30 anos, tem 18+ fazendas próprias auditadas, laboratórios internos e externos, certificações NSF cGMP, ISO 9001 e USDA Organic." },
  ],
  founders: ["D. Gary Young", "Mary Young"],
  foundingDate: "1993-09-01",
  foundingLocation: "Lehi, Utah, EUA",
  employees: 4000,
  alternateNames: ["Young Living Essential Oils"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Young_Living",
};

const YoungLiving = () => <CompanyPremiumPage data={data} />;
export default YoungLiving;
