import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "World Financial Group",
  slug: "world-financial-group",
  officialUrl: "https://www.worldfinancialgroup.com/",
  domain: "worldfinancialgroup.com",
  seoTitle: "WFG: Maior Distribuidora de Serviços Financeiros via MMN | Top 14 2026",
  seoDescription:
    "World Financial Group (WFG) é a maior distribuidora de serviços financeiros via marketing multinível dos EUA e Canadá, subsidiária da Transamerica/Aegon, com 80 mil agentes e seguros, investimentos e previdência.",
  rankingLabel: "TOP 14 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "A Gigante de Serviços Financeiros via MMN",
  heroParagraph:
    "Fundada em 1991, a WFG é a maior distribuidora de serviços financeiros via marketing multinível dos EUA, Canadá e Porto Rico, subsidiária da Transamerica/Aegon, com mais de 80 mil agentes licenciados.",
  heroBadges: [
    { label: "Subsidiária Aegon/Transamerica", icon: "check" },
    { label: "Desde 1991", icon: "calendar" },
    { label: "EUA, Canadá, Porto Rico", icon: "globe" },
    { label: "80 mil+ agentes", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 14", hint: "Maior MMN de serviços financeiros" },
    { icon: "calendar", label: "Fundação", value: "1991", hint: "Como World Marketing Alliance" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Johns Creek, Georgia" },
    { icon: "globe", label: "Operação", value: "EUA + Canadá + PR", hint: "Operações também na Ásia (Hong Kong, Taiwan)" },
    { icon: "users", label: "Agentes Licenciados", value: "80.000+", hint: "Maior força de campo financeira em MMN" },
    { icon: "package", label: "Categoria", value: "Serviços Financeiros", hint: "Seguros, previdência, investimentos" },
    { icon: "dollar", label: "Receita 2025", value: "US$ 1,7 bi", hint: "Comissões distribuídas a agentes" },
    { icon: "factory", label: "Grupo Controlador", value: "Aegon (NL)", hint: "Multinacional holandesa de seguros" },
  ],
  aboutHtml: `
    <p>A <strong>World Financial Group (WFG)</strong> é uma distribuidora americana de serviços financeiros fundada em <strong>1991</strong> como <em>World Marketing Alliance</em>. Em 2001 foi adquirida pela <strong>Aegon</strong>, gigante holandesa de seguros (proprietária também da Transamerica), tornando-se a maior distribuidora <strong>multi-empresa de serviços financeiros via MMN</strong> do mundo.</p>
    <p>Sediada em Johns Creek, Georgia, hoje atua nos <strong>EUA, Canadá, Porto Rico, Hong Kong e Taiwan</strong>, com mais de <strong>80 mil agentes licenciados</strong>. Está no <strong>Top 14 do ranking Business For Home 2026</strong>, com mais de <strong>US$ 1,7 bilhão</strong> em comissões anuais distribuídas.</p>
    <p>O grande diferencial: a WFG <strong>não fabrica produtos próprios</strong>. Atua como um <strong>broker dealer</strong> independente, oferecendo aos clientes produtos de diversas seguradoras e gestoras (Transamerica, Pacific Life, Nationwide, Prudential, Allianz, AIG, entre outras), permitindo ao cliente escolher a melhor solução.</p>
  `,
  timelineTitle: "Da World Marketing Alliance à Aegon",
  milestones: [
    { year: "1991", title: "Fundação", text: "Hubert Humphrey funda a World Marketing Alliance focada em mutual funds." },
    { year: "2001", title: "Aquisição pela Aegon", text: "A holandesa Aegon (dona da Transamerica) compra a WMA por US$ 580 mi." },
    { year: "2002", title: "Renomeação", text: "Vira World Financial Group, expandindo para seguros e previdência." },
    { year: "2009", title: "Expansão Canadá", text: "Lança operações no Canadá com produtos da Transamerica Life Canada." },
    { year: "2017", title: "WFG Securities Inc.", text: "Cria sua própria broker-dealer registrada na FINRA." },
    { year: "2020", title: "Boom digital", text: "Pandemia acelera vendas de seguros de vida em até 60%." },
    { year: "2024", title: "80 mil agentes", text: "Atinge marca histórica de 80 mil agentes licenciados." },
    { year: "2026", title: "Top 14 mundial", text: "Mantém posição entre as 15 maiores MMN do mundo." },
  ],
  productsIntro:
    "Oferece <strong>produtos financeiros multi-marca</strong> — seguros de vida (term, IUL, Whole Life), anuidades, mutual funds, planos 401(k), Long-Term Care e seguros mórbidos.",
  productLines: [
    { name: "Seguros de Vida", tag: "Carro-chefe", color: "from-sky-500/15 to-sky-700/5",
      text: "Term Life, Indexed Universal Life (IUL), Whole Life de seguradoras como Transamerica, Nationwide, Pacific Life e AIG.",
      items: ["Term Life", "IUL (Indexed UL)", "Whole Life", "Final Expense"] },
    { name: "Anuidades & Previdência", tag: "Aposentadoria", color: "from-amber-500/15 to-amber-700/5",
      text: "Fixed Indexed Annuities (FIA), Variable Annuities e planos de aposentadoria privada.",
      items: ["FIA", "Variable Annuities", "IRA", "Roth IRA", "401(k) Rollover"] },
    { name: "Investimentos & Mutual Funds", tag: "Wealth Building", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Mutual funds, 529 College Plans e gestão de portfólio via WFG Securities.",
      items: ["Mutual Funds", "529 Plans", "Wealth Management"] },
    { name: "Long-Term Care & DI", tag: "Proteção Avançada", color: "from-rose-500/15 to-rose-700/5",
      text: "Seguros contra invalidez, doenças críticas e cuidados de longo prazo.",
      items: ["Long-Term Care", "Disability Income", "Critical Illness"] },
  ],
  planTitle: "Plano de Compensação WFG (Hierárquico de Comissão)",
  planIntro:
    "Plano clássico de comissão sobre <strong>seguros e produtos financeiros vendidos</strong>, com overrides em <strong>até 11 níveis hierárquicos</strong> conforme rank.",
  planRanks: [
    { rank: "Associate (Trainee)", payout: "25% comissão", text: "Início — não licenciado ainda, apenas em treinamento." },
    { rank: "Senior Associate (SA)", payout: "35%", text: "Já licenciado e fazendo vendas pessoais." },
    { rank: "Marketing Director (MD)", payout: "55%", text: "Primeira liderança — patrocina 3 novos agentes." },
    { rank: "Senior Marketing Director (SMD)", payout: "65%", text: "Equipe com 6 SAs ativos." },
    { rank: "Executive Marketing Director (EMD)", payout: "75%", text: "Equipe consolidada com volume mensal." },
    { rank: "Executive Vice Chairman (EVC)", payout: "85%", text: "Topo intermediário — bônus de carro e viagens." },
    { rank: "CEO Marketing Director", payout: "95-100%", text: "Topo da carreira — pool de top líderes globais." },
  ],
  pros: [
    "Subsidiária da Aegon/Transamerica (gigante financeiro)",
    "Permite ao agente vender múltiplas seguradoras",
    "Carreira financeira com licenças oficiais (Series 6/63, Life)",
    "Mercado financeiro em expansão com aging population",
    "Treinamento estruturado em finanças pessoais",
    "Possibilidade de comissão alta (até 100% ao chegar no topo)",
  ],
  cons: [
    "Requer licença oficial (Life Insurance, Series 6/7/63)",
    "Curva de aprendizado financeira inicial",
    "Modelo de vendas muito agressivo entre top líderes",
    "Disputas legais frequentes sobre práticas de vendas (NASD/FINRA)",
    "Não atua no Brasil",
  ],
  presenceIntro:
    "Mercados: <strong>EUA, Canadá, Porto Rico, Hong Kong e Taiwan</strong>.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇵🇷 Porto Rico", "🇭🇰 Hong Kong", "🇹🇼 Taiwan",
  ],
  awards: [
    "Top 14 Direct Selling News Global 100 — 2026",
    "Insurance Business America — Top Distributor",
    "Aegon Group — Best Distribution Partner",
    "Forbes Best Insurance Companies (parceiras WFG)",
  ],
  certifications: [
    "Subsidiária da Aegon (NYSE: AEG)",
    "FINRA member (WFG Securities Inc.)",
    "SEC registered investment advisor",
    "Licenciada em todos os 50 estados",
    "MGA com 25+ seguradoras parceiras",
  ],
  faqs: [
    { q: "O que é World Financial Group (WFG)?",
      a: "É uma distribuidora multi-marca de serviços financeiros (seguros, anuidades, investimentos) que opera via marketing multinível nos EUA, Canadá, Porto Rico, Hong Kong e Taiwan. É subsidiária da Aegon/Transamerica." },
    { q: "Quanto fatura a WFG?",
      a: "A WFG distribuiu mais de US$ 1,7 bilhão em comissões em 2025, ocupando posição Top 14 no ranking mundial Business For Home 2026." },
    { q: "A WFG opera no Brasil?",
      a: "Não. A WFG atua somente nos EUA, Canadá, Porto Rico, Hong Kong e Taiwan. No Brasil, modelos similares são MMN como Akrópole ou Primerica (que não opera mais aqui)." },
    { q: "Preciso de licença para ser agente WFG?",
      a: "Sim. É obrigatório obter licença Life Insurance (estado) e, para produtos de investimento, Series 6 ou Series 7 + Series 63 emitidas pela FINRA." },
    { q: "Como funciona o plano de carreira WFG?",
      a: "É hierárquico com 7 ranks (Associate → SA → MD → SMD → EMD → EVC → CEO MD). Comissão sobe de 25% para 100% conforme você sobe de rank, com overrides em até 11 níveis." },
    { q: "Quais produtos a WFG vende?",
      a: "Seguros de vida (Term, IUL, Whole Life), anuidades fixas e variáveis, mutual funds, planos 401(k), seguros de invalidez (DI), Long-Term Care e seguros mórbidos. Tudo de seguradoras parceiras como Transamerica, Nationwide e Pacific Life." },
    { q: "A WFG é confiável?",
      a: "Sim. É subsidiária da Aegon N.V. (NYSE: AEG), uma das maiores seguradoras da Europa, e regulada pela FINRA, SEC e departamentos estaduais de seguros." },
    { q: "Qual a diferença entre WFG e Primerica?",
      a: "Primerica vende somente produtos próprios (term life) listada na NYSE como PRI. WFG é broker multi-marca: oferece produtos de mais de 25 seguradoras diferentes, dando ao cliente mais opções." },
  ],
  founders: ["Hubert Humphrey"],
  foundingDate: "1991-01-01",
  foundingLocation: "Johns Creek, Georgia, EUA",
  employees: 1000,
  alternateNames: ["WFG", "World Marketing Alliance"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/World_Financial_Group",
};

const WorldFinancialGroup = () => <CompanyPremiumPage data={data} />;
export default WorldFinancialGroup;
