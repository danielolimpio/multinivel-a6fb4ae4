import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "QNet",
  slug: "qnet",
  officialUrl: "https://www.qnet.net/",
  domain: "qnet.net",
  seoTitle: "QNet: MMN Global de Hong Kong | Top 50 Mundial 2026",
  seoDescription:
    "QNet (QI Group) é uma MMN de Hong Kong com 25+ anos, presente em 100+ países. Faturamento US$ 500 mi em 2025 e Top 50 mundial em wellness, luxo, tecnologia e educação.",
  rankingLabel: "TOP 50 MUNDIAL • MMN ASIÁTICA GLOBAL",
  heroHeadlineSuffix: "MMN Global de Wellness, Luxo e Tecnologia",
  heroParagraph:
    "Fundada em 1998 em Hong Kong pelo QI Group, a QNet é uma das MMN mais internacionalizadas do mundo — 100+ países, produtos em wellness, luxo (relógios Bernhard H. Mayer), tecnologia (Amezcua) e educação. Top 50 mundial em 2026, com US$ 500 mi em receita.",
  heroBadges: [
    { label: "25+ anos", icon: "calendar" },
    { label: "100+ países", icon: "globe" },
    { label: "Hong Kong 🇭🇰", icon: "globe" },
    { label: "Multi-categoria", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 50", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "1998", hint: "Como GoldQuest" },
    { icon: "map", label: "País de Origem", value: "Hong Kong 🇭🇰", hint: "QI Group HQ" },
    { icon: "globe", label: "Países", value: "100+", hint: "Uma das MMN mais globais" },
    { icon: "users", label: "IRs (Independent Reps)", value: "3+ milhões", hint: "Cumulativo histórico" },
    { icon: "package", label: "Categorias", value: "5", hint: "Wellness, luxo, tech, casa, educação" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 500 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Grupo controlador", value: "QI Group", hint: "Conglomerado multi-negócio" },
  ],
  aboutHtml: `
    <p>A <strong>QNet</strong> (originalmente <em>GoldQuest</em>, depois <em>QuestNet</em>) é uma multinacional de vendas diretas fundada em <strong>1998</strong> em <strong>Hong Kong</strong> pelo <strong>QI Group of Companies</strong> (fundado por Vijay Eswaran e Joseph Bismark). É <strong>uma das MMN mais globais do planeta</strong>, presente em <strong>100+ países</strong> em todos os continentes.</p>
    <p>Portfólio inclui <strong>5 categorias distintas</strong>: wellness (Nutriplus, Physio Radiance), luxo (relógios suíços Bernhard H. Mayer, joias), tecnologia (Amezcua bio-disc, HomePure), casa (purificadores de água) e educação (QLI, Quest University). Faturamento de <strong>US$ 500 mi em 2025</strong> e <strong>Top 50 mundial no Business For Home 2026</strong>.</p>
    <p>Keywords SEO: <em>QNet Brasil</em>, <em>QNet é pirâmide</em>, <em>plano de compensação QNet</em>, <em>QNet review</em>, <em>QI Group QNet</em>, <em>QNet produtos</em>, <em>como se cadastrar QNet</em>.</p>
  `,
  timelineTitle: "27 anos de expansão global",
  milestones: [
    { year: "1998", title: "Fundação como GoldQuest", text: "Vijay Eswaran e Joseph Bismark fundam em Hong Kong." },
    { year: "2002", title: "QuestNet", text: "Renomeada e expande para Índia e Oriente Médio." },
    { year: "2010", title: "QNet", text: "Rebrand para nome atual e reposicionamento global." },
    { year: "2016", title: "V-Malaysia", text: "Prêmio Best Employer da Malásia — sede regional." },
    { year: "2020", title: "Digitalização", text: "Plataforma 100% online durante pandemia." },
    { year: "2023", title: "Nova sede QI Tower", text: "Torre corporativa em Kuala Lumpur." },
    { year: "2026", title: "Top 50 mundial", text: "US$ 500 mi e 100+ países ativos." },
  ],
  productsIntro:
    "QNet tem <strong>portfólio multi-categoria</strong> — único entre as MMN globais. Principais linhas:",
  productLines: [
    { name: "Nutriplus", tag: "Wellness", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos alimentares e proteínas com foco em bem-estar.",
      items: ["Daily", "Kids", "Sports Protein", "Ginseng"] },
    { name: "Physio Radiance", tag: "Skincare", color: "from-pink-500/15 to-pink-700/5",
      text: "Cuidado facial com tecnologia franco-asiática.",
      items: ["Serum Absolute", "Youth Cream", "Cleanser"] },
    { name: "HomePure & EDG3", tag: "Casa & tecnologia", color: "from-blue-500/15 to-blue-700/5",
      text: "Purificadores de água e ar de alta performance.",
      items: ["HomePure Zayn", "HomePure Viva", "EDG3 Air"] },
    { name: "Bernhard H. Mayer", tag: "Luxo suíço", color: "from-amber-500/15 to-amber-700/5",
      text: "Relógios suíços e joias — categoria luxo exclusiva de MMN.",
      items: ["Watches", "Pendants", "Cufflinks"] },
    { name: "Amezcua", tag: "Bio-tech", color: "from-purple-500/15 to-purple-700/5",
      text: "Bio Disc, Chi Pendant e produtos de bem-estar bioenergético.",
      items: ["Bio Disc 3", "Chi Pendant", "E-Guard"] },
  ],
  planTitle: "Plano de Compensação QNet",
  planIntro:
    "Modelo <strong>binário duplo (2 pernas)</strong> com bônus por rank. Ativação por compra pessoal ou tracking de vendas. Ranks até <strong>Ambassador</strong>, com pools regionais.",
  planRanks: [
    { rank: "IR (Independent Rep)", payout: "Retail 15-40%", text: "Cadastro após compra de produto." },
    { rank: "Silver Star", payout: "+ Step Commission", text: "Volume de rede pareado." },
    { rank: "Gold Star / Sapphire Star", payout: "+ Rank Advancement", text: "Consistência de tracking." },
    { rank: "Diamond / Ambassador", payout: "+ Global Pool + Prêmios", text: "Elite regional/mundial." },
  ],
  pros: [
    "Uma das MMN mais globais (100+ países)",
    "Portfólio multi-categoria (raro no MMN)",
    "Produtos de luxo (Bernhard H. Mayer) com margem alta",
    "25+ anos de operação — longevidade comprovada",
    "Sede em Hong Kong + Malásia (hub Ásia forte)",
    "Grupo controlador (QI Group) diversificado",
  ],
  cons: [
    "Histórico de investigações regulatórias em Índia e outros países",
    "Operação no Brasil é cross-border (sem CNPJ)",
    "Plano binário exige tracking constante — desafio para iniciantes",
    "Alguns produtos bio-energéticos com base científica contestada",
    "Reputação mista em fóruns MMN (elogios + críticas)",
    "Preço do kit inicial médio-alto (US$ 500+)",
  ],
  presenceIntro:
    "Presente em <strong>100+ países</strong> em 6 continentes. Hubs regionais em Hong Kong, Malásia (Kuala Lumpur), Índia, Emirados Árabes e Turquia. Sem CNPJ oficial no Brasil.",
  countries: [
    "🇭🇰 Hong Kong", "🇲🇾 Malásia", "🇮🇳 Índia", "🇦🇪 Emirados Árabes",
    "🇹🇷 Turquia", "🇷🇺 Rússia", "🇪🇬 Egito", "🇳🇬 Nigéria", "🇰🇿 Cazaquistão", "🇮🇷 Irã",
  ],
  awards: [
    "Top 50 Business For Home Global 100 — 2026",
    "Best Employer Malaysia — múltiplos anos",
    "RSPO Sustainability (linhas selecionadas)",
    "Prêmio de responsabilidade social pela ONU (RYTHM Foundation)",
  ],
  certifications: [
    "ISO 9001 & 14001",
    "GMP (Nutriplus)",
    "Certificação suíça (Bernhard H. Mayer)",
    "NSF/ANSI 53 (HomePure — purificação de água)",
  ],
  faqs: [
    { q: "O que é a QNet?",
      a: "QNet é uma multinacional de vendas diretas do QI Group, fundada em 1998 em Hong Kong. Vende produtos multi-categoria (wellness, skincare, luxo, tecnologia, casa) em 100+ países, com faturamento de US$ 500 mi em 2025 e Top 50 no ranking Business For Home 2026." },
    { q: "A QNet é pirâmide?",
      a: "Não é pirâmide segundo a maioria das jurisdições onde opera oficialmente, mas enfrentou investigações em alguns países (Índia, Egito) — em vários casos absolvida após auditoria. Opera legalmente em 100+ países, tem produtos físicos reais, receita majoritária de venda ao consumidor final e 25+ anos de história. Como toda MMN binária, exige consumo real e cautela." },
    { q: "A QNet opera no Brasil?",
      a: "Não oficialmente. QNet não tem CNPJ, escritório ou representação legal no Brasil em 2026. Brasileiros que se cadastram fazem cross-border pela Índia ou Malásia — sem suporte jurídico, ANVISA ou atendimento em português." },
    { q: "Como funciona o plano de compensação QNet?",
      a: "Modelo binário duplo (2 pernas) com Step Commission (bônus por pares de vendas), Rank Advancement (avanço por consistência) e Global Pool (elite Diamond/Ambassador). Retail entre 15% e 40% dependendo do produto. Ativação exige compra pessoal ou tracking mensal." },
    { q: "Quais os produtos mais vendidos da QNet?",
      a: "Os hero products são: HomePure Zayn (purificador de água), Nutriplus Daily (multivitamínico), Physio Radiance (skincare), Amezcua Bio Disc (bem-estar) e os relógios de luxo Bernhard H. Mayer (mercado premium)." },
    { q: "Quem é o fundador da QNet?",
      a: "Vijay Eswaran e Joseph Bismark, empresários malaio-indianos, fundaram o QI Group em 1998. Vijay Eswaran é bilionário listado pela Forbes e escritor de livros de liderança. QI Group tem operações em vários setores além de MMN (educação, hospitalidade, telecom)." },
    { q: "Quanto custa começar na QNet?",
      a: "Não há taxa de cadastro, mas exige compra inicial de produto para tracking (varia de US$ 400 a US$ 3.000 dependendo do produto escolhido). O relógio Bernhard H. Mayer é um dos kits mais populares para elite." },
    { q: "QNet é confiável em 2026?",
      a: "Depende do país. Onde opera oficialmente (Malásia, Turquia, Emirados, Rússia, Cazaquistão) tem reputação estabelecida. Em países sem operação oficial (Brasil, EUA continental), o cadastro cross-border é arriscado — sem suporte legal local. Recomenda-se avaliar a operação oficial no seu país antes." },
  ],
  founders: ["Vijay Eswaran", "Joseph Bismark"],
  foundingDate: "1998-01-01",
  foundingLocation: "Hong Kong",
  employees: 2000,
  alternateNames: ["QI Group", "GoldQuest", "QuestNet"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/QNet",
};

const QNet = () => <CompanyPremiumPage data={data} />;
export default QNet;
