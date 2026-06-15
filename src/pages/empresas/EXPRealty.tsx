import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "eXp Realty",
  slug: "exp-realty",
  officialUrl: "https://www.exprealty.com/",
  domain: "exprealty.com",
  seoTitle: "eXp Realty: A Maior Imobiliária em Nuvem do Mundo | Ranking Top 3 2026",
  seoDescription:
    "eXp Realty é a #3 do ranking mundial de vendas diretas 2026, com US$ 4,3 bilhões em receita, mais de 86 mil corretores em 24 países e modelo 100% cloud-based com plano de revenue share via MMN.",
  rankingLabel: "#3 RANKING MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "A Imobiliária Cloud que Revolucionou o Mercado",
  heroParagraph:
    "Fundada em 2009 por Glenn Sanford, a eXp Realty é a maior corretora imobiliária 100% em nuvem do mundo, com plano de revenue share e participação acionária (EXPI) para seus mais de 86 mil agentes em 24 países.",
  heroBadges: [
    { label: "NASDAQ: EXPI", icon: "check" },
    { label: "Desde 2009", icon: "calendar" },
    { label: "24 países", icon: "globe" },
    { label: "86 mil+ agentes", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "#3", hint: "Maior imobiliária cloud do mundo" },
    { icon: "calendar", label: "Fundação", value: "2009", hint: "Bellingham, Washington (EUA)" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede virtual em Bellingham" },
    { icon: "globe", label: "Países & Territórios", value: "24", hint: "EUA, Canadá, Brasil, México e mais" },
    { icon: "users", label: "Corretores (Agents)", value: "86.000+", hint: "Maior força de vendas imobiliária dos EUA" },
    { icon: "package", label: "Categorias", value: "Imóveis", hint: "Residencial, comercial, luxo e farm/ranch" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 4,3 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Modelo", value: "Cloud-Based", hint: "Sem escritórios físicos — eXp World 3D" },
  ],
  aboutHtml: `
    <p>A <strong>eXp Realty</strong> é uma corretora imobiliária americana fundada em <strong>2009</strong> por <em>Glenn Sanford</em>, um ex-agente da Keller Williams que reinventou o modelo tradicional do setor, eliminando escritórios físicos e construindo a empresa dentro de um <strong>metaverso corporativo 3D chamado eXp World</strong>.</p>
    <p>Listada na Nasdaq (NASDAQ: <strong>EXPI</strong>) sob o guarda-chuva da <strong>eXp World Holdings</strong>, é hoje a <strong>#3 do ranking mundial de vendas diretas Business For Home 2026</strong>, com receita anual de <strong>US$ 4,3 bilhões</strong> e mais de <strong>86 mil agentes</strong> em 24 países, incluindo Brasil, México, Portugal, Reino Unido, Espanha e Austrália.</p>
    <p>Seu grande diferencial é o <strong>plano de revenue share em 7 níveis</strong> + a possibilidade de receber ações EXPI via o programa <strong>Sustainable Equity Plan</strong>, transformando agentes em sócios da empresa. Esse modelo "agente-cêntrico" mudou para sempre como o setor imobiliário enxerga marketing de relacionamento e MMN.</p>
  `,
  timelineTitle: "Da Crise Imobiliária de 2008 ao Topo Mundial",
  milestones: [
    { year: "2009", title: "Fundação", text: "Glenn Sanford funda a eXp Realty em plena crise do subprime, totalmente online." },
    { year: "2013", title: "Lançamento do eXp World", text: "Plataforma 3D imersiva substitui escritórios físicos — reuniões, treinamento e suporte 100% virtuais." },
    { year: "2014", title: "IPO na Nasdaq", text: "Abre capital sob o ticker EXPI e democratiza o acesso a equity para os agentes." },
    { year: "2018", title: "Expansão para o Canadá", text: "Início da operação internacional." },
    { year: "2020", title: "Boom pandêmico", text: "Modelo cloud-based explode durante a pandemia: agentes saltam de 25k para 80k em 24 meses." },
    { year: "2021", title: "Chegada ao Brasil", text: "eXp Realty Brasil é lançada, oferecendo o mesmo plano de revenue share global aos corretores brasileiros." },
    { year: "2024", title: "+24 países", text: "Operação consolidada em 24 países com Portugal, Espanha, Itália, França, Alemanha, Dubai e Austrália." },
    { year: "2026", title: "Top 3 mundial", text: "Confirma posição #3 no ranking Business For Home com US$ 4,3 bi em receita." },
  ],
  productsIntro:
    "Diferente de uma MMN tradicional, o 'produto' vendido é a <strong>intermediação imobiliária</strong> de alto ticket. O agente fica com até <strong>80% a 100% da comissão</strong> e ainda participa do revenue share da rede.",
  productLines: [
    { name: "Residencial", tag: "Carro-chefe", color: "from-sky-500/15 to-sky-700/5",
      text: "Compra, venda e locação de imóveis residenciais — núcleo principal da operação global.",
      items: ["Casas", "Apartamentos", "Condomínios", "Studios", "Lançamentos"] },
    { name: "eXp Commercial", tag: "Comercial & Investimentos", color: "from-amber-500/15 to-amber-700/5",
      text: "Divisão lançada em 2021 para imóveis comerciais, industriais, hotéis, multifamily e land deals.",
      items: ["Escritórios", "Industrial", "Hotelaria", "Multifamily", "Land"] },
    { name: "eXp Luxury", tag: "Alto Padrão", color: "from-rose-500/15 to-rose-700/5",
      text: "Programa especializado em imóveis acima de US$ 1 milhão, com marketing internacional e Instagram exclusivo.",
      items: ["Mansões", "Penthouses", "Beachfront", "Estates"] },
    { name: "Success Magazine + SUCCESS Coaching", tag: "Educação", color: "from-indigo-500/15 to-indigo-700/5",
      text: "Após a aquisição da Success Enterprises em 2020, a eXp oferece coaching, mentoria e mídia de alto nível.",
      items: ["Success Coaching", "SUCCESS Magazine", "SUCCESS+ App"] },
  ],
  planTitle: "Plano de Revenue Share da eXp (7 Níveis + Equity)",
  planIntro:
    "O modelo combina <strong>comissão direta de até 80-100%</strong> + <strong>revenue share em 7 níveis</strong> sobre a comissão líquida dos agentes patrocinados + <strong>ações EXPI</strong> via o Sustainable Equity Plan. Já distribuiu <strong>US$ 1,3 bi+</strong> em revenue share desde 2009.",
  planRanks: [
    { rank: "Agent (Corretor)", payout: "80% comissão", text: "Split inicial 80/20 com cap anual de US$ 16.000 — depois fica com 100%." },
    { rank: "Capped Agent", payout: "100% comissão", text: "Após bater o cap anual, o agente fica com 100% das comissões pelo resto do ciclo." },
    { rank: "Mentor", payout: "+ Bônus mentoria", text: "Treina novos agentes e ganha bônus extra sobre cada deal do mentorado." },
    { rank: "Influencer", payout: "Nível 1 (3,5%)", text: "Patrocina o primeiro front-line — começa a receber revenue share no nível 1." },
    { rank: "Mentor Sponsor", payout: "Níveis 1-3 (3,5%+4%+2,5%)", text: "Desbloqueia até 3 níveis ao atingir 5 agentes ativos e 1 deal próprio." },
    { rank: "ICON Agent", payout: "+ US$ 16k em ações EXPI", text: "Conquista anual ao atingir US$ 500k em GCI ou 20 transações — devolve cap em ações." },
    { rank: "Capping Sponsor (7 níveis)", payout: "Todos os 7 níveis", text: "Com 30 agentes ativos na frontline + ICON, desbloqueia 100% do plano de revenue share." },
  ],
  pros: [
    "Pagamento em ações EXPI listadas na Nasdaq (equity real)",
    "Comissão de até 100% após bater o cap anual",
    "Sem escritórios físicos — custo operacional baixíssimo",
    "Plataforma eXp World 3D com treinamento 24/7 em 20+ idiomas",
    "Revenue share vitalício mesmo se o agente parar de produzir",
    "Marca global presente em 24 países",
  ],
  cons: [
    "Modelo exige autodisciplina — não há escritório presencial",
    "Necessidade de CRECI ativo (Brasil) ou licença local em cada país",
    "Cap anual de US$ 16k antes de chegar aos 100% de comissão",
    "Curva de aprendizado no eXp World e ferramentas digitais",
    "Revenue share só começa a fazer sentido após estruturar rede",
  ],
  presenceIntro:
    "Maior operação fora dos EUA: <strong>Canadá, México, Reino Unido, Portugal, Espanha, Austrália, Brasil e Índia</strong>.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇲🇽 México", "🇧🇷 Brasil", "🇬🇧 Reino Unido", "🇵🇹 Portugal",
    "🇪🇸 Espanha", "🇮🇹 Itália", "🇫🇷 França", "🇩🇪 Alemanha", "🇮🇪 Irlanda", "🇿🇦 África do Sul",
    "🇦🇺 Austrália", "🇳🇿 Nova Zelândia", "🇮🇳 Índia", "🇦🇪 Emirados Árabes", "🇨🇱 Chile",
    "🇨🇴 Colômbia", "🇵🇦 Panamá", "🇩🇴 Rep. Dominicana", "🇭🇰 Hong Kong", "🇵🇷 Porto Rico",
  ],
  awards: [
    "#3 Direct Selling News Global 100 — 2026",
    "Fortune 500 (várias edições)",
    "Glassdoor Best Places to Work",
    "Inc. 5000 Fastest Growing Companies",
    "RISMedia Power Broker Top 1000",
  ],
  certifications: [
    "Listada na Nasdaq (EXPI) — Sarbanes-Oxley compliant",
    "Licenciada em todos os 50 estados americanos",
    "CRECI / membro CRECI nos estados brasileiros",
    "RICS no Reino Unido",
  ],
  faqs: [
    { q: "A eXp Realty é uma pirâmide ou MMN?",
      a: "A eXp Realty é uma corretora imobiliária real, listada na Nasdaq (EXPI), com receita auditada de US$ 4,3 bi vinda 99% da intermediação imobiliária. O componente de MMN é apenas o plano opcional de revenue share, que paga sobre a comissão líquida da rede — não há custo de entrada com produtos." },
    { q: "Quanto custa entrar na eXp Realty?",
      a: "A taxa de adesão é de US$ 149 (Start-Up Fee) + US$ 85/mês de Cloud Brokerage Fee. No Brasil os valores são equivalentes em reais. Não há kit de produtos." },
    { q: "Como funciona o revenue share da eXp?",
      a: "Você ganha 3,5% sobre o GCI (comissão bruta) de cada agente patrocinado direto. Conforme cresce sua rede e atinge requisitos (5, 10, 15, 20, 25, 30 agentes + ICON), desbloqueia mais 6 níveis, totalizando 7 níveis com até 50% do cap do agente patrocinado." },
    { q: "O que é o eXp World?",
      a: "É a plataforma 3D imersiva (metaverso corporativo) onde os 86 mil agentes da eXp se reúnem, treinam, fecham negócios e participam de eventos. Funciona 24/7 e substitui todos os escritórios físicos." },
    { q: "A eXp Realty é boa para iniciantes no Brasil?",
      a: "Sim, especialmente se o corretor já tem CRECI e quer alavancar tecnologia, treinamento internacional e plano de revenue share global. O programa eXp Mentor garante mentoria nos primeiros 3 deals." },
    { q: "Quanto fatura a eXp Realty?",
      a: "Em 2025 a receita foi de US$ 4,3 bilhões, ocupando a posição #3 no ranking mundial Business For Home 2026 — atrás apenas de Amway e Herbalife." },
    { q: "Posso receber ações EXPI como agente?",
      a: "Sim. Pelo Sustainable Equity Plan você recebe ações EXPI ao fechar a primeira transação, ao indicar agentes que se capacitam, ao bater o cap anual e ao alcançar ICON Agent (US$ 16k em ações)." },
    { q: "Qual a diferença entre eXp e Keller Williams ou RE/MAX?",
      a: "eXp é 100% cloud (sem escritórios físicos), oferece equity real em bolsa, paga revenue share em 7 níveis e tem operação global unificada — enquanto Keller Williams e RE/MAX operam com franquias físicas locais." },
  ],
  founders: ["Glenn Sanford"],
  foundingDate: "2009-10-01",
  foundingLocation: "Bellingham, Washington, EUA",
  employees: 2900,
  alternateNames: ["eXp World Holdings", "EXPI"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/EXp_Realty",
};

const EXPRealty = () => <CompanyPremiumPage data={data} />;
export default EXPRealty;
