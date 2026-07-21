import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "LifeWave",
  slug: "lifewave",
  officialUrl: "https://www.lifewave.com/",
  domain: "lifewave.com",
  seoTitle: "LifeWave: Adesivos X39 e Fototerapia | Top 40 MMN Mundial 2026",
  seoDescription:
    "LifeWave é a MMN pioneira em fototerapia com adesivos (X39, IceWave, Energy Enhancer). Fundada em 2004 nos EUA, US$ 650 mi em 2025 e Top 40 mundial no ranking Business For Home 2026.",
  rankingLabel: "TOP 40 MUNDIAL • FOTOTERAPIA E BEM-ESTAR",
  heroHeadlineSuffix: "Fototerapia com Adesivos X39 e Ativação de Células-Tronco",
  heroParagraph:
    "Fundada em 2004 na Califórnia por David Schmidt, a LifeWave revolucionou o wellness com adesivos de fototerapia — em especial o famoso X39, que reativa a expressão da proteína GHK-Cu associada à regeneração celular. Presente em 50+ países e Top 40 mundial em 2026.",
  heroBadges: [
    { label: "20+ anos", icon: "calendar" },
    { label: "50+ países", icon: "globe" },
    { label: "Adesivo X39", icon: "check" },
    { label: "US$ 650 mi", icon: "dollar" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 40", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "2004", hint: "San Diego, Califórnia" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Carlsbad, CA" },
    { icon: "globe", label: "Países", value: "50+", hint: "EUA, Europa, Ásia, América Latina" },
    { icon: "users", label: "Brand Partners", value: "500 mil", hint: "Distribuidores ativos" },
    { icon: "package", label: "Patches", value: "12 linhas", hint: "Fototerapia patenteada" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 650 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Patentes", value: "80+", hint: "Tecnologia proprietária" },
  ],
  aboutHtml: `
    <p>A <strong>LifeWave</strong> é uma multinacional americana fundada em <strong>2004</strong> por <em>David Schmidt</em> em <strong>San Diego (Califórnia)</strong>, pioneira em <strong>fototerapia com adesivos</strong> (patches). Sua tecnologia patenteada usa cristais orgânicos que refletem comprimentos de onda específicos da luz corporal para estimular respostas biológicas — <strong>sem medicamento, sem transdermia, sem estimulação elétrica</strong>.</p>
    <p>O produto ícone é o <strong>LifeWave X39</strong>, lançado em 2018 e considerado um dos "hero products" mais vendidos da história do MMN. Segundo estudos internos, o X39 estimula a produção de <strong>GHK-Cu</strong> (peptídeo cobre-tripeptídeo) associado a regeneração celular, longevidade e melhora da pele.</p>
    <p>Em 2026, a LifeWave é <strong>Top 40 no Business For Home</strong>, com <strong>US$ 650 milhões</strong> em receita, presente em <strong>50+ países</strong> (incluindo Brasil desde 2023) e mais de <strong>500 mil Brand Partners ativos</strong>. Palavras-chave: <em>LifeWave X39 Brasil</em>, <em>como funciona adesivo LifeWave</em>, <em>plano compensação LifeWave</em>, <em>LifeWave é pirâmide</em>.</p>
  `,
  timelineTitle: "20 anos de fototerapia patenteada",
  milestones: [
    { year: "2002", title: "Pesquisa em SEALs", text: "Schmidt desenvolve patches para Navy SEALs (energia sem estimulante)." },
    { year: "2004", title: "Fundação LifeWave", text: "Lança Energy Enhancer — primeiro patch comercial." },
    { year: "2007", title: "IceWave (dor)", text: "Lançamento do patch de manejo da dor." },
    { year: "2013", title: "Silent Nights", text: "Patch para sono profundo bate recorde de vendas." },
    { year: "2018", title: "X39 — regeneração", text: "Lançamento do produto ícone da marca (GHK-Cu)." },
    { year: "2022", title: "Aeon & Alavida", text: "Novos patches anti-stress e anti-idade." },
    { year: "2023", title: "Brasil oficial", text: "Abre operação com CNPJ e escritório em São Paulo." },
    { year: "2026", title: "Top 40 mundial", text: "US$ 650 mi e 500 mil BPs ativos." },
  ],
  productsIntro:
    "A LifeWave comercializa <strong>12 linhas de patches</strong> patenteados de fototerapia, além de suporte digital via app oficial:",
  productLines: [
    { name: "X39", tag: "Hero product", color: "from-amber-500/15 to-amber-700/5",
      text: "Patch que eleva GHK-Cu — associado a regeneração de tecido, energia e pele.",
      items: ["1 caixa = 30 patches", "Uso rotativo em pontos de acupuntura", "Aplicação diária de 12h"] },
    { name: "IceWave", tag: "Manejo da dor", color: "from-blue-500/15 to-blue-700/5",
      text: "Patches em pares (branco + marrom) para redução de dor localizada.",
      items: ["Dor articular", "Dor muscular", "Aplicação sobre a área"] },
    { name: "Energy Enhancer", tag: "Energia", color: "from-orange-500/15 to-orange-700/5",
      text: "Patch para energia física sem cafeína ou estimulantes.",
      items: ["Uso diurno", "12h de ação", "Sem crash"] },
    { name: "Silent Nights / Aeon / Alavida", tag: "Sono & pele", color: "from-purple-500/15 to-purple-700/5",
      text: "Linha para sono profundo, redução do stress e cuidado facial noturno.",
      items: ["Silent Nights (sono)", "Aeon (stress)", "Alavida (pele)"] },
  ],
  planTitle: "Plano de Compensação LifeWave",
  planIntro:
    "Modelo <strong>unilevel + matriz + binário</strong> com forte incentivo residual. Ativação por autoship mensal (recorrência). Ranks até <strong>Presidential Director</strong>, com pools de liderança global.",
  planRanks: [
    { rank: "Brand Partner", payout: "25% Retail Profit", text: "Preço distribuidor vs preço público." },
    { rank: "Manager", payout: "+ Fast Start Bonus", text: "Bônus por cadastros qualificados." },
    { rank: "Director", payout: "+ Team Commission (Binário)", text: "Bônus sobre perna menor." },
    { rank: "Presidential Director", payout: "+ Leadership Pool", text: "Pool global 1-3% da receita." },
  ],
  pros: [
    "Produto único e patenteado (barreira de entrada alta para concorrentes)",
    "X39 é hero product global com forte apelo científico",
    "Presença consolidada em 50+ países",
    "Empresa opera no Brasil desde 2023 com CNPJ",
    "Kit inicial acessível a partir de US$ 100",
    "Testemunhais e estudos internos fortes",
  ],
  cons: [
    "Alegações de saúde geram debate regulatório em alguns países",
    "Preço unitário do X39 é alto (US$ 149/caixa)",
    "Concorrência de outros wearables e biohacking",
    "Estudos clínicos independentes ainda limitados",
    "Autoship mensal exige disciplina financeira",
  ],
  presenceIntro:
    "Presente em <strong>50+ países</strong> em 5 continentes. Escritórios próprios em EUA, Alemanha, Japão, Coreia, Austrália e Brasil.",
  countries: [
    "🇺🇸 EUA", "🇧🇷 Brasil", "🇩🇪 Alemanha", "🇬🇧 Reino Unido",
    "🇯🇵 Japão", "🇰🇷 Coreia", "🇦🇺 Austrália", "🇲🇽 México", "🇮🇹 Itália", "🇪🇸 Espanha",
  ],
  awards: [
    "Top 40 Business For Home Global 100 — 2026",
    "DSN Global 100 — 2024 e 2025",
    "Best Wearable Wellness Product — Health Awards 2023",
  ],
  certifications: [
    "FDA cleared — IceWave (dor)",
    "CE Medical (Europa)",
    "80+ patentes internacionais",
    "ISO 9001",
    "Registro ANVISA (Brasil) para linhas selecionadas",
  ],
  faqs: [
    { q: "O que é a LifeWave X39?",
      a: "X39 é um patch (adesivo) de fototerapia da LifeWave que reflete comprimentos de onda específicos da luz corporal, estimulando a produção do peptídeo GHK-Cu (cobre-tripeptídeo). Estudos internos associam esse peptídeo a regeneração celular, melhora da pele e recuperação física. Uma caixa (30 patches) custa cerca de US$ 149." },
    { q: "A LifeWave é confiável em 2026?",
      a: "Sim. Opera há 20+ anos, tem 80+ patentes, é membro da DSA (Direct Selling Association) nos EUA, mantém escritórios próprios em 50+ países (incluindo Brasil desde 2023 com CNPJ e ANVISA para linhas específicas) e faturou US$ 650 milhões em 2025." },
    { q: "A LifeWave é pirâmide?",
      a: "Não. É empresa legítima com produto físico patenteado, receita majoritária vinda de vendas ao consumidor final, plano de compensação registrado e presença em 50+ países. Alegações de pirâmide são infundadas — a empresa cumpre exigências regulatórias globais." },
    { q: "Como funciona o plano de compensação LifeWave?",
      a: "É um plano híbrido unilevel + binário + matriz. Brand Partner ganha 25% de margem retail, mais Fast Start Bonus no cadastro, Team Commission (binário) na estrutura da rede e Leadership Pool global nos ranks mais altos (Presidential Director+). Ativação exige autoship mensal." },
    { q: "Quanto custa começar na LifeWave?",
      a: "O kit inicial mais acessível custa aproximadamente US$ 100, mas os kits recomendados (com X39 e Fast Start Bonus otimizado) variam entre US$ 300 e US$ 1.500. Autoship mensal fica entre US$ 149 e US$ 500 dependendo do plano." },
    { q: "A LifeWave opera no Brasil?",
      a: "Sim, desde 2023 com CNPJ próprio, escritório em São Paulo e produtos com registro ANVISA (linhas cadastradas). Antes disso brasileiros faziam cross-border pelos EUA. Hoje há suporte oficial, atendimento em português e Brand Partners ativos em todos os estados." },
    { q: "Os adesivos LifeWave têm base científica?",
      a: "A empresa cita mais de 100 estudos internos e independentes sobre fototerapia e GHK-Cu. Existem estudos clínicos revisados publicados sobre o X39 (redução de dor, energia, marcadores inflamatórios). Contudo, a comunidade científica ainda considera as evidências emergentes e mais estudos independentes são desejáveis." },
    { q: "Qual a diferença entre X39, IceWave e Energy Enhancer?",
      a: "X39 é o hero product para regeneração celular e vitalidade (uso rotativo diário). IceWave é focado em manejo de dor (aplicação local, em pares). Energy Enhancer eleva energia física sem estimulantes (uso diurno). Cada linha tem posologia própria conforme o app oficial LifeWave." },
  ],
  founders: ["David Schmidt"],
  foundingDate: "2004-01-01",
  foundingLocation: "San Diego, Califórnia, EUA",
  employees: 500,
  alternateNames: ["LifeWave Inc.", "LifeWave Products LLC"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/LifeWave",
};

const LifeWave = () => <CompanyPremiumPage data={data} />;
export default LifeWave;
