import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "RIMAN",
  slug: "riman",
  officialUrl: "https://www.riman.com/",
  domain: "riman.com",
  seoTitle: "RIMAN Korea: K-Beauty Premium via MMN | Top 38 Mundial 2026",
  seoDescription:
    "RIMAN é a MMN coreana de K-Beauty que mais cresce no mundo — US$ 720 mi em 2025, Top 38 no ranking Business For Home. Skincare premium da Coreia via vendas diretas.",
  rankingLabel: "TOP 38 MUNDIAL • K-BEAUTY EM VENDAS DIRETAS",
  heroHeadlineSuffix: "K-Beauty Premium Sul-Coreana em Alta Global",
  heroParagraph:
    "Fundada em 2021 na Coreia do Sul como spin-off do gigante Coréia beauty, a RIMAN teve o lançamento MMN mais explosivo da história recente — batendo US$ 720 milhões em apenas 4 anos e conquistando Top 38 mundial em 2026 com produtos premium de K-Beauty.",
  heroBadges: [
    { label: "Fundada 2021", icon: "calendar" },
    { label: "Coreia do Sul 🇰🇷", icon: "globe" },
    { label: "K-Beauty premium", icon: "check" },
    { label: "US$ 720 mi", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 38", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "2021", hint: "Seul, Coreia do Sul" },
    { icon: "map", label: "País de Origem", value: "Coreia do Sul 🇰🇷", hint: "Sede em Seul" },
    { icon: "globe", label: "Países", value: "8", hint: "Coreia, EUA, Japão, China, Vietnã, etc." },
    { icon: "users", label: "Distribuidores", value: "1,2 milhão", hint: "RIMAN Beauty Consultants" },
    { icon: "package", label: "SKUs", value: "80+", hint: "Skincare, wellness, haircare" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 720 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Fábrica", value: "COSMAX / Kolmar", hint: "OEM top mundial em cosméticos" },
  ],
  aboutHtml: `
    <p>A <strong>RIMAN</strong> (RIMAN Korea Inc.) é a MMN coreana com o <strong>lançamento mais explosivo da história recente</strong> — fundada em 2021 pelo veterano da indústria <em>Jung Hyeon Ho</em>, alcançou <strong>US$ 700 mi em apenas 3 anos</strong> e hoje é <strong>Top 38 mundial no Business For Home 2026</strong>.</p>
    <p>O sucesso vem da combinação: <strong>fábricas OEM de elite</strong> (COSMAX e Kolmar, que produzem para AmorePacific, LG, Sulwhasoo e todas as maiores marcas de K-Beauty do mundo), <strong>plano de compensação ultra-agressivo</strong> nas fases iniciais e <strong>ondas de Hallyu</strong> (Onda Coreana K-Beauty + K-Pop + K-Drama) impulsionando a demanda global.</p>
    <p>Keywords: <em>RIMAN Korea Brasil</em>, <em>K-Beauty MMN</em>, <em>RIMAN skincare</em>, <em>plano de compensação RIMAN</em>, <em>RIMAN incell 9</em>, <em>como se cadastrar RIMAN</em>.</p>
  `,
  timelineTitle: "Do lançamento em 2021 ao Top 40 mundial",
  milestones: [
    { year: "2020", title: "Preparação", text: "Jung Hyeon Ho negocia OEM com COSMAX e Kolmar." },
    { year: "2021", title: "Lançamento", text: "RIMAN é lançada oficialmente na Coreia do Sul." },
    { year: "2022", title: "US$ 200 mi", text: "Bate faturamento recorde no 1º ano completo." },
    { year: "2023", title: "Expansão EUA", text: "Entra no mercado americano com fanfarra." },
    { year: "2024", title: "US$ 550 mi", text: "Cresce 3 dígitos e vira caso de estudo." },
    { year: "2025", title: "US$ 720 mi", text: "Consolida presença em 8 países." },
    { year: "2026", title: "Top 38 mundial", text: "Entra no ranking Business For Home." },
  ],
  productsIntro:
    "A RIMAN comercializa produtos <strong>K-Beauty premium</strong> fabricados pelas maiores OEMs coreanas (COSMAX e Kolmar). Portfólio focado em skincare de alta performance:",
  productLines: [
    { name: "Incellderm", tag: "Skincare hero", color: "from-pink-500/15 to-pink-700/5",
      text: "Linha anti-idade e clareamento com peptídeos e Centella Asiática.",
      items: ["Incellderm Toner", "Incellderm Serum", "Incellderm Cream"] },
    { name: "Incelltime 9", tag: "Anti-aging", color: "from-purple-500/15 to-purple-700/5",
      text: "Fórmula com 9 tecnologias combinadas para tratamento intensivo.",
      items: ["Ampola", "Máscara", "Sérum reparador"] },
    { name: "Slim Body", tag: "Wellness", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos e bebidas para gestão de peso e detox.",
      items: ["Colágeno", "Detox Drink", "Slim Enzyme"] },
    { name: "Hair & Body", tag: "Cuidado pessoal", color: "from-blue-500/15 to-blue-700/5",
      text: "Shampoo, condicionador e cuidados corporais premium.",
      items: ["Shampoo herbal", "Body Lotion", "Hair Tonic"] },
  ],
  planTitle: "Plano de Compensação RIMAN",
  planIntro:
    "Modelo <strong>binário rebate + ranking rank advancement</strong>, considerado um dos <strong>mais lucrativos das MMN modernas</strong>. Ativação por PV mensal e ranks até <strong>Royal Crown</strong>.",
  planRanks: [
    { rank: "BC (Beauty Consultant)", payout: "Retail + PV", text: "Cadastro básico." },
    { rank: "Manager", payout: "+ Binário 10%", text: "2 diretos ativos qualificados." },
    { rank: "Director / Master", payout: "+ Matching Bonus 20%", text: "Rede duplicada." },
    { rank: "Crown / Royal Crown", payout: "+ Global Pool + Prêmios", text: "Elite mundial." },
  ],
  pros: [
    "Crescimento mais rápido da década em MMN (3 anos → US$ 700 mi)",
    "Produtos K-Beauty premium fabricados por COSMAX/Kolmar",
    "Marketing forte com influenciadores Hallyu",
    "Plano de compensação agressivo para top earners",
    "Onda K-Beauty global impulsiona demanda",
    "Empresa listada como uma das mais promissoras de 2026",
  ],
  cons: [
    "Ainda sem operação oficial no Brasil (cross-border via EUA)",
    "Kit inicial premium é caro (US$ 500-2.000)",
    "Concorrência interna alta na Coreia",
    "Crescimento explosivo pode ser insustentável",
    "Marca ainda pouco conhecida no Ocidente fora de nichos K-Beauty",
  ],
  presenceIntro:
    "Presente em <strong>8 países</strong>: Coreia (matriz), EUA, Japão, China, Vietnã, Taiwan, Singapura e Malásia. Expansão europeia prevista para 2026-2027.",
  countries: [
    "🇰🇷 Coreia do Sul", "🇺🇸 EUA", "🇯🇵 Japão", "🇨🇳 China",
    "🇻🇳 Vietnã", "🇹🇼 Taiwan", "🇸🇬 Singapura", "🇲🇾 Malásia",
  ],
  awards: [
    "Top 38 Business For Home Global 100 — 2026",
    "Fastest Growing MLM — DSN 2024",
    "Best K-Beauty Direct Selling — Seoul Beauty Awards 2025",
  ],
  certifications: [
    "OEM COSMAX (fabricante K-Beauty líder mundial)",
    "OEM Kolmar Korea",
    "KFDA (Korea FDA) — todos produtos",
    "Vegan Society (linhas selecionadas)",
    "EWG Verified",
  ],
  faqs: [
    { q: "O que é a RIMAN Korea?",
      a: "RIMAN é uma multinacional sul-coreana de K-Beauty premium fundada em 2021 por Jung Hyeon Ho, que faturou US$ 720 milhões em 2025 e ocupa o Top 38 no ranking Business For Home 2026. É a MMN com crescimento mais rápido da década." },
    { q: "A RIMAN opera no Brasil em 2026?",
      a: "Ainda não oficialmente. A RIMAN atua em 8 países (Coreia, EUA, Japão, China, Vietnã, Taiwan, Singapura, Malásia). Brasileiros que se cadastram fazem cross-border via EUA — sem CNPJ, ANVISA ou atendimento local em português." },
    { q: "A RIMAN é confiável?",
      a: "Sim. É fabricada pelas OEMs COSMAX e Kolmar (que produzem para AmorePacific, LG H&H, Sulwhasoo e as maiores marcas de K-Beauty do mundo), tem certificação KFDA, presença em 8 países e faturou US$ 720 mi em 2025. Marca legítima e regulada." },
    { q: "Quais são os produtos mais famosos da RIMAN?",
      a: "O carro-chefe é a linha Incellderm (toner, sérum e cream anti-idade com peptídeos) e Incelltime 9 (fórmula com 9 tecnologias combinadas). Também vendem colágeno bebível, detox e cuidado capilar." },
    { q: "Como funciona o plano de compensação RIMAN?",
      a: "É um plano binário rebate com rank advancement — considerado um dos mais agressivos das MMN modernas. Comissões: retail (BC), binário 10% (Manager), matching bonus 20% (Director/Master) e global pool + prêmios (Crown/Royal Crown)." },
    { q: "Quanto custa começar na RIMAN?",
      a: "Kits iniciais variam de US$ 500 a US$ 2.000. O mais popular é o kit Manager (US$ 1.000) que já qualifica para binário. Autoship mensal exigido: cerca de US$ 200-300." },
    { q: "RIMAN vs AmorePacific: qual a diferença?",
      a: "AmorePacific é o gigante coreano do varejo tradicional (Sulwhasoo, Laneige, Innisfree) presente em 40+ países. RIMAN é MMN de K-Beauty premium fabricada por OEMs concorrentes (COSMAX/Kolmar). AmorePacific é maior; RIMAN cresce mais rápido no canal direto." },
    { q: "Por que a RIMAN cresceu tão rápido?",
      a: "Combinação de: (1) fábricas OEM de elite com produto premium; (2) plano de compensação agressivo com pagamentos rápidos; (3) onda global K-Beauty + K-Pop + K-Drama; (4) marketing pesado com influenciadores; (5) fundador experiente com network prévio na indústria coreana MMN." },
  ],
  founders: ["Jung Hyeon Ho"],
  foundingDate: "2021-01-01",
  foundingLocation: "Seul, Coreia do Sul",
  employees: 800,
  alternateNames: ["RIMAN Korea", "RIMAN Inc.", "리만코리아"],
};

const RIMAN = () => <CompanyPremiumPage data={data} />;
export default RIMAN;
