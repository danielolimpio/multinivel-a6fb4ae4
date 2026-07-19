import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Quanjian",
  slug: "quanjian",
  officialUrl: "https://www.quanjian.com/",
  domain: "quanjian.com",
  seoTitle: "Quanjian: Ascensão e Queda da Gigante Chinesa de MMN | Análise 2026",
  seoDescription:
    "Quanjian Natural Medicine foi uma das maiores MMN da China com US$ 2 bi/ano, mas caiu em escândalo em 2019. Entenda a história, processos judiciais e o legado do grupo Quanjian.",
  rankingLabel: "HISTÓRICO • ESTUDO DE CASO MMN 2026",
  heroHeadlineSuffix: "Gigante Chinesa que Caiu em Escândalo",
  heroParagraph:
    "Fundada em 2004 em Tianjin (China), a Quanjian chegou a US$ 2 bi em receita anual antes de ser desmantelada em 2019 pelo governo chinês após acusações de fraude, esquema de pirâmide e mortes ligadas a alegações médicas falsas. Um dos maiores estudos de caso da indústria MMN mundial.",
  heroBadges: [
    { label: "Fundada 2004", icon: "calendar" },
    { label: "Desmantelada 2019", icon: "check" },
    { label: "Tianjin, China", icon: "map" },
    { label: "Estudo de caso", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Pico Mundial", value: "Top 15 (2017)", hint: "Antes do escândalo" },
    { icon: "calendar", label: "Fundação", value: "2004", hint: "Tianjin, China" },
    { icon: "map", label: "País de Origem", value: "China 🇨🇳", hint: "Sede em Tianjin" },
    { icon: "globe", label: "Países atingidos", value: "12", hint: "Ásia principalmente" },
    { icon: "users", label: "Distribuidores (pico)", value: "7 milhões", hint: "Antes do desmonte" },
    { icon: "package", label: "Produtos", value: "200+", hint: "Wellness, herbal, ortopédicos" },
    { icon: "dollar", label: "Faturamento pico (2017)", value: "US$ 2 bilhões", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Status atual", value: "Encerrada / Judicial", hint: "Fundador preso em 2019" },
  ],
  aboutHtml: `
    <p><strong>Quanjian Natural Medicine</strong> (权健自然医学) foi uma multinacional chinesa de vendas diretas e "medicina tradicional" fundada em <strong>2004</strong> por <em>Shu Yuhui</em> em <strong>Tianjin</strong>. Em seu auge (2017), foi listada como uma das <strong>15 maiores MMN do mundo</strong> pela Business For Home, com faturamento estimado de <strong>US$ 2 bilhões</strong>.</p>
    <p>A empresa vendia produtos de wellness, palmilhas ortopédicas, absorventes higiênicos "terapêuticos", herbal chinês e realizava alegações médicas ambiciosas de cura para câncer, infertilidade e doenças crônicas — o que levou ao seu desmoronamento.</p>
    <p>Em <strong>dezembro de 2018</strong>, o caso de uma menina de 4 anos com câncer que morreu após interromper quimioterapia por tratamento Quanjian viralizou. Em janeiro de <strong>2019</strong> o governo chinês abriu investigação: <strong>18 executivos foram presos</strong>, o fundador Shu Yuhui foi condenado a 9 anos de prisão, e a empresa foi <strong>oficialmente desmantelada</strong> como esquema de pirâmide (传销) e propaganda enganosa.</p>
    <p>Hoje, em 2026, a Quanjian existe apenas como <strong>estudo de caso jurídico e MMN</strong> — usado por reguladores mundiais como exemplo do risco de alegações médicas em vendas diretas.</p>
  `,
  timelineTitle: "Da ascensão bilionária ao colapso judicial",
  milestones: [
    { year: "2004", title: "Fundação", text: "Shu Yuhui funda a Quanjian em Tianjin com foco em wellness." },
    { year: "2011", title: "Explode na China", text: "Vira gigante regional com clínicas e produtos herbal." },
    { year: "2014", title: "Compra time de futebol", text: "Adquire clube chinês Tianjin Quanjian para marketing." },
    { year: "2017", title: "US$ 2 bi de pico", text: "Alcança Top 15 mundial no ranking Business For Home." },
    { year: "2018/12", title: "Caso Zhou Yang", text: "Menina de 4 anos morre após interromper quimio — caso viraliza." },
    { year: "2019/01", title: "Investigação", text: "Governo chinês abre operação contra fraude e pirâmide." },
    { year: "2019/03", title: "Fundador preso", text: "Shu Yuhui e 17 executivos são detidos." },
    { year: "2020", title: "Sentença", text: "Shu Yuhui condenado a 9 anos de prisão e multa de US$ 8 mi." },
    { year: "2026", title: "Estudo de caso", text: "Referência global sobre riscos regulatórios em MMN." },
  ],
  productsIntro:
    "A Quanjian comercializou mais de <strong>200 produtos</strong> — muitos com alegações médicas questionadas judicialmente. Portfólio histórico incluía:",
  productLines: [
    { name: "Palmilhas Terapêuticas", tag: "Carro-chefe histórico", color: "from-red-500/15 to-red-700/5",
      text: "Vendidas por até US$ 200 com alegações de cura de doenças ortopédicas — sem evidência científica.",
      items: ["Palmilha padrão", "Palmilha noturna", "Sandália magnética"] },
    { name: "Absorventes 'Terapêuticos'", tag: "Alegações rejeitadas", color: "from-pink-500/15 to-pink-700/5",
      text: "Absorventes com alegação de curar infecções e infertilidade — proibidos após 2019.",
      items: ["Absorvente diário", "Noturno", "Íntimo herbal"] },
    { name: "Herbal Chinês", tag: "Suplementos", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Fórmulas TCM em cápsulas — foco em imunidade e disposição.",
      items: ["Ginseng", "Ganoderma", "Fórmula anti-idade"] },
    { name: "Bebidas Funcionais", tag: "Wellness", color: "from-amber-500/15 to-amber-700/5",
      text: "Bebidas antioxidantes e detox comercializadas em kits.",
      items: ["Detox Drink", "Anti-Age Formula"] },
  ],
  planTitle: "Plano de Compensação (Histórico — Encerrado)",
  planIntro:
    "O modelo Quanjian foi <strong>desqualificado pela justiça chinesa</strong> em 2019 como esquema de pirâmide (传销). O plano exigia compras de kits caros e priorizava recrutamento massivo em detrimento de vendas ao consumidor final — critério clássico de fraude MMN.",
  planRanks: [
    { rank: "Member", payout: "Compra kit inicial", text: "Investimento de US$ 500 a US$ 2.000 em produtos." },
    { rank: "Star Agent", payout: "Comissão + override", text: "Bônus por recrutar novos membros." },
    { rank: "Manager", payout: "Bônus profundidade", text: "Ganhos vinculados a novos ingressos." },
    { rank: "Diretor", payout: "Elite regional", text: "Pool sobre receita da rede — banido em 2019." },
  ],
  pros: [
    "Aprendizado regulatório para toda a indústria MMN",
    "Impulsionou legislação chinesa mais rigorosa (2019+)",
    "Estudo de caso ensinado em faculdades de direito",
  ],
  cons: [
    "Empresa oficialmente encerrada — impossível se afiliar",
    "Condenada por esquema de pirâmide na China",
    "Alegações médicas fraudulentas comprovadas",
    "Fundador preso — 9 anos + multa milionária",
    "Vítimas relatadas incluíram morte por câncer sem tratamento",
    "Time de futebol Tianjin Quanjian rebaixado e dissolvido",
  ],
  presenceIntro:
    "Operou em <strong>12 países da Ásia</strong> em seu pico (2014-2018), com concentração em China continental, Hong Kong, Sudeste Asiático e diáspora chinesa. Hoje <strong>não opera em nenhum país</strong>.",
  countries: [
    "🇨🇳 China (encerrada)", "🇭🇰 Hong Kong (encerrada)", "🇹🇼 Taiwan (encerrada)",
    "🇲🇾 Malásia (encerrada)", "🇸🇬 Singapura (encerrada)",
  ],
  awards: [
    "Top 15 Business For Home Global 100 — 2017 (histórico)",
    "Patrocinadora Chinese Super League — 2015 (encerrado)",
    "Prêmios revocados após 2019",
  ],
  certifications: [
    "Licença de vendas diretas — REVOGADA em 2019",
    "Registro sanitário — CANCELADO",
    "Certificações comerciais — SUSPENSAS",
  ],
  faqs: [
    { q: "A Quanjian ainda existe em 2026?",
      a: "Não. A Quanjian foi oficialmente desmantelada pelo governo chinês em 2019 após condenação por esquema de pirâmide e propaganda enganosa. O fundador Shu Yuhui cumpre pena de 9 anos e a empresa não opera em nenhum país." },
    { q: "Por que a Quanjian foi encerrada?",
      a: "A empresa foi condenada por (1) esquema de pirâmide (传销 na legislação chinesa), (2) alegações médicas fraudulentas prometendo cura para câncer e infertilidade, (3) propaganda enganosa e (4) morte de uma menina de 4 anos que interrompeu quimioterapia por tratamento Quanjian." },
    { q: "Quanto faturou a Quanjian no auge?",
      a: "Em 2017 a Quanjian faturou aproximadamente US$ 2 bilhões, sendo listada no Top 15 mundial pela Business For Home. Era uma das MMN mais lucrativas da China antes do escândalo." },
    { q: "Quem foi o fundador da Quanjian?",
      a: "Shu Yuhui (束昱辉), empresário chinês nascido em 1966 em Jiangsu. Fundou a Quanjian em 2004 e foi condenado em 2020 a 9 anos de prisão + multa de US$ 8 milhões por esquema de pirâmide e propaganda enganosa." },
    { q: "Posso me afiliar à Quanjian?",
      a: "Não. A empresa não existe mais como operação comercial ativa. Todos os registros regulatórios foram cancelados em 2019. Não há como se afiliar em nenhum país." },
    { q: "O que aprender com o caso Quanjian?",
      a: "É o principal estudo de caso mundial sobre riscos em MMN: (1) alegações médicas sem evidência são risco jurídico grave, (2) kits iniciais caros + foco em recrutamento indicam pirâmide, (3) reguladores globais monitoram MMN chinesas de perto desde 2019, (4) MMN legítimas focam em consumo real, não em recrutar." },
    { q: "O time Tianjin Quanjian continua existindo?",
      a: "Não. O clube foi renomeado para Tianjin Tianhai em 2019 após o escândalo, mas foi dissolvido em 2020 por problemas financeiros — perdendo vaga na Chinese Super League." },
    { q: "Existe empresa similar ainda ativa?",
      a: "Não com o nome Quanjian. Porém, MMN chinesas de wellness herbal seguem ativas (Infinitus, Perfect China, JoyMain, Sunhope) — todas com regulação mais rigorosa pós-2019 e sem repetir o padrão de alegações médicas da Quanjian." },
  ],
  founders: ["Shu Yuhui (束昱辉)"],
  foundingDate: "2004-01-01",
  foundingLocation: "Tianjin, China",
  employees: 0,
  alternateNames: ["权健自然医学", "Quanjian Natural Medicine"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Quanjian",
};

const Quanjian = () => <CompanyPremiumPage data={data} />;
export default Quanjian;
