import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "LPT Realty",
  slug: "lpt-realty",
  officialUrl: "https://www.lptrealty.com/",
  domain: "lptrealty.com",
  seoTitle: "LPT Realty: Imobiliária MMN Cresce 400% | Top 45 Mundial 2026",
  seoDescription:
    "LPT Realty é a imobiliária de vendas diretas que mais cresce nos EUA, com modelo revenue-share, plano 100% online e mais de 15 mil corretores. US$ 450 milhões em receita 2025.",
  rankingLabel: "TOP 45 MUNDIAL • REAL ESTATE MMN 2026",
  heroHeadlineSuffix: "A Nova Geração da Imobiliária MMN",
  heroParagraph:
    "Fundada em 2022 em Orlando (Flórida), a LPT Realty (Listing Powered Technology) é a imobiliária MMN de crescimento mais rápido dos EUA — modelo cloud-first, revenue share e alta tecnologia atraem corretores da eXp, REAL e Keller Williams.",
  heroBadges: [
    { label: "Fundada 2022", icon: "calendar" },
    { label: "15 mil+ corretores", icon: "users" },
    { label: "Cloud brokerage", icon: "check" },
    { label: "Crescimento 400%", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 45", hint: "Business For Home" },
    { icon: "calendar", label: "Fundação", value: "2022", hint: "Orlando, Flórida (EUA)" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Orlando" },
    { icon: "globe", label: "Estados atendidos", value: "50 (todos EUA)", hint: "Licenciada em 50 estados" },
    { icon: "users", label: "Corretores ativos", value: "15.000+", hint: "Realtors licenciados" },
    { icon: "package", label: "Modelo", value: "Revenue Share", hint: "Splits + equity + coaching" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 450 mi", hint: "Crescimento 400% YoY" },
    { icon: "factory", label: "Tecnologia", value: "Cloud + IA", hint: "CRM, marketing e IA proprietários" },
  ],
  aboutHtml: `
    <p><strong>LPT Realty</strong> (Listing Powered Technology) é uma <em>cloud real estate brokerage</em> americana fundada em <strong>2022</strong> por <em>Robert Palmer</em> em <strong>Orlando, Flórida</strong>. É a imobiliária MMN de <strong>crescimento mais rápido dos Estados Unidos</strong>, com modelo revenue share inspirado em eXp Realty mas com estrutura de splits mais generosa (80/20 e cap de US$ 15 mil).</p>
    <p>Seu diferencial é o <strong>modelo "Zero" e "Standard"</strong> — corretores escolhem pagar taxa fixa mensal com 100% do split ou split 80/20 com cap anual — combinado com <strong>revenue share em 7 níveis</strong>, ações da holding, coaching semanal e stack tecnológico com CRM próprio, marketing automation e IA generativa para listings.</p>
    <p>Em pouco mais de 3 anos alcançou <strong>US$ 450 mi em receita anual</strong>, <strong>15 mil+ corretores</strong> licenciados em todos os 50 estados americanos e entrou no <strong>Top 45 do Business For Home 2026</strong> — recorde absoluto de crescimento no setor.</p>
  `,
  timelineTitle: "De startup à maior imobiliária MMN em crescimento",
  milestones: [
    { year: "2022", title: "Fundação", text: "Robert Palmer lança LPT Realty em Orlando, Flórida." },
    { year: "2023", title: "5.000 corretores", text: "Alcança 5 mil realtors em menos de 12 meses." },
    { year: "2024", title: "Expansão nacional", text: "Torna-se licenciada nos 50 estados americanos." },
    { year: "2024", title: "US$ 150 mi", text: "Fecha primeiro ano completo com receita expressiva." },
    { year: "2025", title: "15 mil corretores", text: "Triplica base e ultrapassa US$ 450 milhões." },
    { year: "2026", title: "Top 45 mundial", text: "Entra no ranking Business For Home Global 100." },
  ],
  productsIntro:
    "LPT Realty vende <strong>serviços imobiliários residenciais</strong>: representação de compradores e vendedores, listings MLS, financiamento parceiro e programas de investimento em imóveis nos EUA.",
  productLines: [
    { name: "Standard Plan", tag: "80/20 + cap US$ 15k", color: "from-blue-500/15 to-blue-700/5",
      text: "Split tradicional 80/20 até atingir cap anual de US$ 15 mil — depois 100% do comissionamento.",
      items: ["Sem taxa mensal", "Cap acessível", "Revenue share ativado", "Equity opcional"] },
    { name: "Zero Plan", tag: "100% split", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Corretor paga taxa mensal fixa (~US$ 179) e retém 100% da comissão em cada venda.",
      items: ["Fluxo alto de vendas", "Sem cap", "Melhor para top producers", "Suporte incluso"] },
    { name: "Revenue Share", tag: "7 níveis", color: "from-amber-500/15 to-amber-700/5",
      text: "Recebe % da receita da empresa gerada pelos corretores que você recruta — até 7 níveis.",
      items: ["Nível 1: 5%", "Nível 2: 4%", "Escala geométrica", "Passive income real"] },
    { name: "Equity & Coaching", tag: "Extras premium", color: "from-purple-500/15 to-purple-700/5",
      text: "Ações da holding LPT + coaching semanal com top producers.",
      items: ["Stock awards", "Weekly mastermind", "Marketing library", "IA para listings"] },
  ],
  planTitle: "Plano de Compensação LPT Realty",
  planIntro:
    "Estrutura híbrida <strong>splits + revenue share em 7 níveis + equity</strong> — desenhada para retenção de top producers e crescimento orgânico via indicação de corretores.",
  planRanks: [
    { rank: "Agent", payout: "80/20 ou 100%", text: "Comissão principal das vendas próprias." },
    { rank: "Sponsor Level 1", payout: "5% Rev Share", text: "5% da receita LPT dos indicados diretos." },
    { rank: "Sponsor Level 2-3", payout: "4-3%", text: "Corretores da 2ª e 3ª geração." },
    { rank: "Sponsor Level 4-6", payout: "1-2%", text: "Base ampliada com dezenas de corretores." },
    { rank: "Sponsor Level 7", payout: "5% (com 40 indicados capped)", text: "Elite — top passive income." },
    { rank: "Equity Elite", payout: "Ações + Elite Pool", text: "Top producers recebem stock e prêmios anuais." },
  ],
  pros: [
    "Crescimento explosivo (400% YoY)",
    "Splits mais generosos que eXp e REAL",
    "Cap baixo (US$ 15k) — atrativo para agentes médios",
    "Stack tecnológico moderno (IA + CRM próprio)",
    "Licenciada em 50 estados americanos",
    "Modelo Zero atrai top producers de outras corretoras",
  ],
  cons: [
    "Empresa muito jovem (fundada em 2022)",
    "Ainda sem receita internacional",
    "Não opera fora dos EUA",
    "Sem histórico longo de dividendos/equity",
    "Concorrência direta com eXp e REAL (players estabelecidos)",
  ],
  presenceIntro:
    "Presente em <strong>todos os 50 estados americanos</strong> (via licenças estaduais de real estate). Sem operação internacional oficial em 2026.",
  countries: ["🇺🇸 EUA (50 estados)"],
  awards: [
    "Fastest Growing Real Estate Brokerage — Inc. 5000 (2025)",
    "Top 45 Business For Home 2026",
    "RISMedia Newsmakers — Robert Palmer (2024)",
    "T3 Sixty Real Estate Almanac — Rising Star",
  ],
  certifications: [
    "NAR (National Association of Realtors)",
    "MLS certificada nos 50 estados",
    "SOC 2 Type II (tecnologia)",
    "Equal Housing Opportunity",
  ],
  faqs: [
    { q: "O que é a LPT Realty?",
      a: "É uma cloud real estate brokerage americana fundada em 2022 por Robert Palmer, com sede em Orlando (Flórida). Opera nos 50 estados dos EUA com modelo revenue share em 7 níveis, splits 80/20 (cap US$ 15k) ou plano Zero (100% split com taxa mensal)." },
    { q: "Quanto fatura a LPT Realty?",
      a: "Em 2025 a LPT Realty faturou US$ 450 milhões — crescimento de 400% em relação a 2024 — entrando no Top 45 do ranking Business For Home 2026 de vendas diretas mundiais." },
    { q: "A LPT Realty opera no Brasil?",
      a: "Não. A LPT Realty é 100% focada nos Estados Unidos e opera exclusivamente com corretores licenciados nos 50 estados americanos. Não há previsão de expansão internacional oficial em 2026." },
    { q: "Como funciona o revenue share da LPT?",
      a: "Você recebe uma porcentagem da receita bruta que a LPT ganha com os corretores que você indica — até 7 níveis de profundidade. Nível 1 paga 5%, nível 2 paga 4%, e o nível 7 desbloqueia 5% adicional após 40 indicados diretos qualificados." },
    { q: "Qual a diferença entre LPT Realty e eXp Realty?",
      a: "Ambas são cloud brokerages com revenue share. Diferenças-chave: LPT tem cap de comissão menor (US$ 15k vs US$ 16k da eXp), oferece plano Zero (100% split), tem menos níveis mas percentuais maiores no topo e stack tecnológico mais recente com IA para listings." },
    { q: "Preciso ser licenciado para entrar na LPT Realty?",
      a: "Sim. LPT Realty é uma corretora imobiliária oficial regulada por estado — você precisa ter licença de Real Estate Agent ou Broker válida em pelo menos um estado americano para se afiliar." },
    { q: "A LPT Realty é uma pirâmide?",
      a: "Não. LPT é uma corretora de imóveis licenciada pela NAR (National Association of Realtors) e regulamentada em todos os 50 estados. A renda vem de comissões reais de vendas de imóveis e revenue share sobre corretores ativos — não de recrutamento puro." },
    { q: "Quem é o fundador da LPT Realty?",
      a: "Robert Palmer, veterano da indústria imobiliária americana e ex-CEO da RP Funding, fundou a LPT Realty em 2022 com o objetivo de dar aos corretores splits mais generosos e revenue share superior aos concorrentes." },
  ],
  founders: ["Robert Palmer"],
  foundingDate: "2022-01-01",
  foundingLocation: "Orlando, Flórida, EUA",
  employees: 300,
  alternateNames: ["LPT", "Listing Powered Technology"],
};

const LPTRealty = () => <CompanyPremiumPage data={data} />;
export default LPTRealty;
