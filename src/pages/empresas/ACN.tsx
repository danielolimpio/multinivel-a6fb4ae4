import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "ACN",
  slug: "acn",
  officialUrl: "https://www.acninc.com/",
  domain: "acninc.com",
  seoTitle: "ACN: MMN de Serviços Essenciais (Telefonia, Energia, Internet) | Top 48 Mundial 2026",
  seoDescription:
    "ACN (American Communications Network) é a maior MMN de serviços essenciais do mundo — telefonia, energia, internet, TV e segurança. US$ 500 mi em 2025 e Top 48 no ranking Business For Home.",
  rankingLabel: "TOP 48 MUNDIAL • MMN DE SERVIÇOS ESSENCIAIS",
  heroHeadlineSuffix: "Serviços Essenciais (Energia, Telecom, Internet) via MMN",
  heroParagraph:
    "Fundada em 1993 em Michigan por quatro empresários lendários, a ACN é a única MMN global focada em serviços essenciais — energia, telefonia, internet, TV e segurança residencial. Presente em 27 países, US$ 500 mi em 2025 e Top 48 no Business For Home 2026.",
  heroBadges: [
    { label: "32+ anos", icon: "calendar" },
    { label: "27 países", icon: "globe" },
    { label: "Serviços recorrentes", icon: "check" },
    { label: "US$ 500 mi", icon: "dollar" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 48", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "1993", hint: "Farmington Hills, Michigan" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Concord, Carolina do Norte" },
    { icon: "globe", label: "Países", value: "27", hint: "América, Europa, Ásia-Pacífico" },
    { icon: "users", label: "IBOs (Independent Business Owners)", value: "600 mil", hint: "Ativos globais" },
    { icon: "package", label: "Serviços", value: "20+", hint: "Energia, telecom, internet, TV, segurança" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 500 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Diferencial", value: "100% serviços recorrentes", hint: "Renda residual real" },
  ],
  aboutHtml: `
    <p>A <strong>ACN Inc.</strong> (American Communications Network) foi fundada em <strong>1993</strong> em <strong>Farmington Hills (Michigan)</strong> por quatro empresários hoje lendários no MMN: <em>Robert Stevanovski</em>, <em>Greg Provenzano</em>, <em>Tony Cupisz</em> e <em>Mike Cupisz</em>. É a <strong>única MMN global focada em serviços essenciais recorrentes</strong>: telefonia móvel, energia elétrica, gás natural, internet, TV a cabo e segurança residencial.</p>
    <p>O modelo é único no MMN mundial: em vez de vender produtos consumíveis, o IBO (Independent Business Owner) da ACN <strong>revende os serviços que as pessoas já contratam mensalmente</strong> — e ganha comissão residual enquanto o cliente continuar pagando. É a MMN com <strong>maior taxa de retenção residual do mundo</strong> (contas de luz e telefone raramente são canceladas).</p>
    <p>Em 2026 opera em <strong>27 países</strong> e faturou <strong>US$ 500 milhões</strong>, ocupando o <strong>Top 48 no Business For Home</strong>. Ficou famosa após aparições no <em>The Celebrity Apprentice</em> com Donald Trump. Keywords SEO: <em>ACN energia MMN</em>, <em>ACN Brasil</em>, <em>ACN plano compensação</em>, <em>renda residual serviços</em>, <em>ACN é pirâmide</em>.</p>
  `,
  timelineTitle: "32 anos de MMN em serviços essenciais",
  milestones: [
    { year: "1993", title: "Fundação", text: "Quatro sócios criam ACN em Michigan focada em telefonia longa distância." },
    { year: "1996", title: "Expansão Canadá", text: "1ª expansão internacional." },
    { year: "2001", title: "Europa", text: "Entra em Alemanha, França, Reino Unido, Holanda e Espanha." },
    { year: "2004", title: "Energia elétrica", text: "Torna-se a primeira MMN a vender energia elétrica." },
    { year: "2011", title: "The Celebrity Apprentice", text: "Aparições com Donald Trump aumentam awareness global." },
    { year: "2016", title: "IRIS 3000 videofone", text: "Lança videofone próprio (descontinuado depois)." },
    { year: "2020", title: "Digital First", text: "Reposiciona para app + energia solar residencial." },
    { year: "2026", title: "Top 48 mundial", text: "27 países, US$ 500 mi e forte foco em energia renovável." },
  ],
  productsIntro:
    "ACN não vende produtos — vende <strong>serviços essenciais recorrentes</strong> em parceria com grandes fornecedores locais em cada país. Categorias principais:",
  productLines: [
    { name: "Energia", tag: "Carro-chefe pós-2004", color: "from-yellow-500/15 to-yellow-700/5",
      text: "Fornecimento residencial e empresarial de energia elétrica e gás.",
      items: ["Energia convencional", "Energia solar residencial", "Gás natural"] },
    { name: "Telefonia & Internet", tag: "Origem histórica", color: "from-blue-500/15 to-blue-700/5",
      text: "Planos móveis, VoIP, banda larga e telefonia fixa.",
      items: ["Flash Mobile", "Flash Wireless", "ACN Digital Phone"] },
    { name: "TV & Streaming", tag: "Entretenimento", color: "from-purple-500/15 to-purple-700/5",
      text: "TV a cabo, satélite e pacotes de streaming.",
      items: ["DIRECTV", "Dish", "Streaming bundles"] },
    { name: "Segurança Residencial", tag: "Casa smart", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Alarmes, câmeras e monitoramento residencial 24h.",
      items: ["ACN Home Security", "Câmeras HD", "Monitoramento 24h"] },
  ],
  planTitle: "Plano de Compensação ACN",
  planIntro:
    "Modelo <strong>unilevel com CAB (Customer Acquisition Bonus) + Residual Bonus</strong>. Comissão paga sobre cada conta ativa <strong>enquanto o cliente pagar a fatura</strong> — renda residual real.",
  planRanks: [
    { rank: "IBO (Independent Business Owner)", payout: "CAB US$ 50-200 por conta", text: "Cadastro após treinamento inicial." },
    { rank: "ETT (Executive Team Trainer)", payout: "+ Residual 1-3%", text: "20 pontos pessoais + 3 IBOs cadastrados." },
    { rank: "ETL (Executive Team Leader)", payout: "+ Residual 4-6%", text: "Grupo com produção consistente." },
    { rank: "RD / RVP", payout: "+ Bônus Regional Pool", text: "Regional Director/Vice President." },
    { rank: "SVP / CEO Club", payout: "+ Global Pool + Prêmios", text: "Elite mundial ACN." },
  ],
  pros: [
    "Único MMN 100% focado em serviços essenciais recorrentes",
    "Renda residual REAL — cliente paga a conta todo mês",
    "Retenção altíssima (contas de luz e telefone raramente cancelam)",
    "Parcerias com grandes fornecedores (DIRECTV, Sprint, etc.)",
    "Sem estoque, sem entrega, sem devolução de produto",
    "27 países operados, 32+ anos de história",
  ],
  cons: [
    "Sem operação oficial no Brasil (retirou-se em 2018)",
    "Preços dos serviços nem sempre são os melhores do mercado",
    "Comissão CAB inicial baixa (US$ 50-200 por conta)",
    "Curva de aprendizado alta (é preciso dominar múltiplos serviços)",
    "Concorrência com fornecedores diretos (que não pagam comissão)",
    "Reputação MMN mista após controvérsias com Trump/Celebrity Apprentice",
  ],
  presenceIntro:
    "Opera em <strong>27 países</strong> em 4 continentes: América do Norte, Europa Ocidental, Ásia-Pacífico. <strong>Não opera no Brasil em 2026</strong> (retirou-se em 2018).",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇦🇺 Austrália", "🇳🇿 Nova Zelândia",
    "🇬🇧 Reino Unido", "🇩🇪 Alemanha", "🇫🇷 França", "🇳🇱 Holanda",
    "🇪🇸 Espanha", "🇮🇹 Itália", "🇵🇱 Polônia", "🇯🇵 Japão",
  ],
  awards: [
    "Top 48 Business For Home Global 100 — 2026",
    "DSN Global 100 — múltiplos anos",
    "Inc 5000 Fastest Growing (histórico anos 90)",
  ],
  certifications: [
    "DSA Member (Direct Selling Association EUA)",
    "Licenças regulatórias em cada estado/país de operação",
    "BBB A+ Rating",
  ],
  faqs: [
    { q: "O que é a ACN?",
      a: "ACN (American Communications Network) é uma multinacional americana fundada em 1993, especializada em MMN de serviços essenciais recorrentes: energia elétrica, telefonia móvel, internet, TV, gás e segurança residencial. Opera em 27 países e faturou US$ 500 mi em 2025." },
    { q: "A ACN opera no Brasil em 2026?",
      a: "Não. A ACN operou no Brasil entre 2013 e 2018 e depois se retirou por dificuldades regulatórias no setor de telecom brasileiro. Em 2026 não há operação oficial — brasileiros não têm como se cadastrar legitimamente." },
    { q: "Como funciona a renda residual da ACN?",
      a: "IBOs ganham comissão CAB (Customer Acquisition Bonus) de US$ 50-200 por cada conta ativada. Depois recebem residual mensal de 1-6% (conforme o rank) sobre a fatura do cliente ENQUANTO o cliente pagar — modelo único no MMN. Contas de luz e telefone raramente cancelam." },
    { q: "A ACN é pirâmide?",
      a: "Não. É empresa com 32+ anos de história, membro da DSA, opera em 27 países com licenças regulatórias em cada mercado, e vende serviços reais (energia, telefone, internet) que as pessoas já contratam. Não vende 'oportunidade de negócio' sem produto. Já foi investigada em alguns países e absolvida." },
    { q: "Qual a relação da ACN com Donald Trump?",
      a: "Donald Trump promoveu a ACN em várias edições do The Celebrity Apprentice entre 2005 e 2011, com o IRIS 3000 videofone. Em 2018, ex-IBOs processaram Trump alegando que ele endossou o produto sem revelar remuneração — o caso foi encerrado em acordo em 2023 sem admissão de culpa." },
    { q: "Como se cadastrar na ACN?",
      a: "Contato com um IBO ativo em um dos 27 países onde opera oficialmente. Kit inicial custa aproximadamente US$ 499 (treinamento, back office, ferramentas). Depois do cadastro, o IBO vende os serviços da ACN e recolhe comissões." },
    { q: "Quais são os fundadores da ACN?",
      a: "Robert Stevanovski, Greg Provenzano, Tony Cupisz e Mike Cupisz — quatro amigos de Michigan que fundaram a empresa em 1993. Todos são bilionários listados e Hall of Famers do MMN mundial. Continuam ativos no board da empresa." },
    { q: "Vale a pena trabalhar com a ACN?",
      a: "Depende do país. Nos EUA, Canadá, Austrália e Reino Unido, sim — renda residual sobre contas de luz e telefone é sólida. No Brasil, não há operação oficial. Melhor buscar MMN com produtos ou serviços disponíveis localmente com CNPJ e ANVISA." },
  ],
  founders: ["Robert Stevanovski", "Greg Provenzano", "Tony Cupisz", "Mike Cupisz"],
  foundingDate: "1993-01-01",
  foundingLocation: "Farmington Hills, Michigan, EUA",
  employees: 1200,
  alternateNames: ["ACN Inc.", "American Communications Network"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/ACN_Inc.",
};

const ACN = () => <CompanyPremiumPage data={data} />;
export default ACN;
