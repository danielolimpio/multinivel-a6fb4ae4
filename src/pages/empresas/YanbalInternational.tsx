import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Yanbal International",
  slug: "yanbal-international",
  officialUrl: "https://www.yanbal.com/",
  domain: "yanbal.com",
  seoTitle: "Yanbal International: MMN Latina de Beleza e Joias | Top 49 Mundial 2026",
  seoDescription:
    "Yanbal International é a maior MMN latino-americana de beleza e joias, fundada em 1967 no Peru. US$ 450 mi em 2025, presente em 10 países e Top 49 no ranking Business For Home.",
  rankingLabel: "TOP 49 MUNDIAL • MAIOR MMN LATINA DE BELEZA & JOIAS",
  heroHeadlineSuffix: "58 Anos Empoderando Consultoras na América Latina",
  heroParagraph:
    "Fundada em 1967 em Lima (Peru) por Fernando Belmont, a Yanbal foi pioneira em MMN de cosméticos e joias na América Latina — inspirada em Mary Kay e Avon. Hoje presente em 10 países latinos e EUA, com 500 mil consultoras e US$ 450 mi em receita.",
  heroBadges: [
    { label: "58 anos", icon: "calendar" },
    { label: "10 países", icon: "globe" },
    { label: "Peru 🇵🇪", icon: "globe" },
    { label: "Beleza + Joias", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 49", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "1967", hint: "Lima, Peru" },
    { icon: "map", label: "País de Origem", value: "Peru 🇵🇪", hint: "Sede em Miami (Yanbal International)" },
    { icon: "globe", label: "Países", value: "10", hint: "América Latina + EUA" },
    { icon: "users", label: "Consultoras", value: "500 mil", hint: "Empoderamento feminino latino" },
    { icon: "package", label: "SKUs", value: "1.500+", hint: "Cosméticos, fragrâncias, joias, moda" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 450 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Fábricas", value: "3", hint: "Peru, Colômbia e Equador" },
  ],
  aboutHtml: `
    <p>A <strong>Yanbal International</strong> foi fundada em <strong>1967</strong> em <strong>Lima (Peru)</strong> por <em>Fernando Belmont Anderson</em>, empresário peruano inspirado pelos modelos de Mary Kay e Avon. Foi <strong>pioneira em MMN de cosméticos e joias na América Latina</strong> — uma revolução para o empreendedorismo feminino latino nos anos 70.</p>
    <p>Diferencial competitivo: a Yanbal é uma das poucas MMN globais que combina <strong>cosméticos, fragrâncias, joias 100% feitas à mão e moda</strong> em um único portfólio. Suas joias são fabricadas por artesãos peruanos e colombianos, com <strong>1.500+ SKUs</strong> renovados sazonalmente.</p>
    <p>Em 2026 opera em <strong>10 países</strong> (Peru, Colômbia, Equador, Bolívia, Venezuela, México, Guatemala, Espanha, Itália e EUA — foco latino), fatura <strong>US$ 450 milhões</strong> e ocupa <strong>Top 49 mundial no Business For Home</strong>. Empresa é referência global em empoderamento feminino latino. Keywords SEO: <em>Yanbal Brasil</em>, <em>Yanbal joias</em>, <em>como ser consultora Yanbal</em>, <em>Yanbal cosméticos</em>, <em>Yanbal é confiável</em>.</p>
  `,
  timelineTitle: "58 anos de empoderamento feminino latino",
  milestones: [
    { year: "1967", title: "Fundação em Lima", text: "Fernando Belmont funda Yanbal no Peru." },
    { year: "1978", title: "Colômbia", text: "1ª expansão internacional." },
    { year: "1985", title: "Equador e Bolívia", text: "Consolida presença andina." },
    { year: "1996", title: "Yanbal International (Miami)", text: "Nova sede global corporativa nos EUA." },
    { year: "2005", title: "México e Guatemala", text: "Chega à América Central." },
    { year: "2013", title: "Espanha e Itália", text: "1ª expansão para Europa (mercado latino)." },
    { year: "2020", title: "Yanbal Digital", text: "Plataforma e-commerce e app para consultoras." },
    { year: "2026", title: "Top 49 mundial", text: "58 anos, US$ 450 mi, líder LATAM em beleza+joias." },
  ],
  productsIntro:
    "A Yanbal tem <strong>1.500+ SKUs</strong> em 4 categorias renovadas sazonalmente, com destaque para joias artesanais:",
  productLines: [
    { name: "Joyería", tag: "Diferencial único", color: "from-amber-500/15 to-amber-700/5",
      text: "Joias feitas à mão por artesãos peruanos e colombianos.",
      items: ["Colares", "Anéis", "Pulseiras", "Brincos", "Coleções sazonais"] },
    { name: "Fragrancias", tag: "Perfumaria", color: "from-purple-500/15 to-purple-700/5",
      text: "Perfumes femininos e masculinos com licenças internacionais.",
      items: ["Ébano", "Unique", "Éxtasis", "Colection"] },
    { name: "Maquillaje & Skincare", tag: "Beleza", color: "from-pink-500/15 to-pink-700/5",
      text: "Cosméticos coloridos e tratamento facial.",
      items: ["Base Perfecta", "Máscara Extreme", "Lift Concept", "Sensilis Skincare"] },
    { name: "Moda & Acessórios", tag: "Fashion", color: "from-blue-500/15 to-blue-700/5",
      text: "Bolsas, lenços, moda casual e acessórios sazonais.",
      items: ["Bolsas premium", "Lenços seda", "Acessórios coleção"] },
  ],
  planTitle: "Plano de Compensação Yanbal (Consultoras)",
  planIntro:
    "Modelo <strong>unilevel latino tradicional</strong> baseado em ciclos de campanha (revistas quinzenais) — inspirado em Avon. Consultoras compram com desconto e revendem, mais bônus por rede recrutada.",
  planRanks: [
    { rank: "Consultora", payout: "Desconto 25-40%", text: "Cadastro gratuito com kit inicial." },
    { rank: "Consultora Sênior", payout: "+ Bônus recrutamento", text: "Traz novas consultoras." },
    { rank: "Directora", payout: "+ Comissão grupo 10%", text: "Grupo consolidado com produção mensal." },
    { rank: "Gerente / Directora Ejecutiva", payout: "+ Leadership Pool", text: "Múltiplas Directoras abaixo." },
    { rank: "Directora Nacional / Presidente Club", payout: "+ Prêmios + carros + viagens", text: "Elite regional." },
  ],
  pros: [
    "Único MMN latino no Top 50 mundial",
    "Joias artesanais são diferencial único no MMN global",
    "58 anos de operação — tradição consolidada na América Latina",
    "Foco em empoderamento feminino latino",
    "Modelo por campanha (revista quinzenal) — bem familiar ao público LATAM",
    "Fábricas próprias no Peru, Colômbia e Equador",
  ],
  cons: [
    "Sem operação oficial no Brasil (mercado dominado por Natura/Boticário)",
    "Concentração geográfica em América hispânica (baixa diversificação)",
    "Modelo por revista física perde relevância vs digital",
    "Concorrência forte de Belcorp (também peruana) e Natura",
    "Margem de joias artesanais é apertada",
    "Kit inicial exige investimento em inventário",
  ],
  presenceIntro:
    "Opera em <strong>10 países</strong>: Peru, Colômbia, Equador, Bolívia, Venezuela, México, Guatemala, Espanha, Itália e EUA. <strong>Não opera no Brasil</strong>.",
  countries: [
    "🇵🇪 Peru", "🇨🇴 Colômbia", "🇪🇨 Equador", "🇧🇴 Bolívia",
    "🇻🇪 Venezuela", "🇲🇽 México", "🇬🇹 Guatemala", "🇪🇸 Espanha",
    "🇮🇹 Itália", "🇺🇸 EUA",
  ],
  awards: [
    "Top 49 Business For Home Global 100 — 2026",
    "Great Place to Work Peru — múltiplos anos",
    "Merco Empresa Peru (reputação corporativa)",
    "Effie Awards (marketing latinoamericano)",
  ],
  certifications: [
    "ISO 9001 (fábricas Peru, Colômbia, Equador)",
    "GMP (cosméticos)",
    "Certificação artesanal Peru (joias)",
    "Certificação ambiental peruana",
  ],
  faqs: [
    { q: "O que é a Yanbal International?",
      a: "Yanbal é uma multinacional latino-americana fundada em 1967 no Peru por Fernando Belmont, especializada em MMN de cosméticos, fragrâncias, joias artesanais e moda. Opera em 10 países da América Latina, Europa (Espanha, Itália) e EUA. Faturou US$ 450 mi em 2025 e ocupa Top 49 no Business For Home 2026." },
    { q: "A Yanbal opera no Brasil?",
      a: "Não. A Yanbal opera em 10 países mas nunca entrou oficialmente no Brasil (mercado dominado por Natura, O Boticário e Avon). Brasileiros que buscam produtos Yanbal precisam comprar cross-border via Peru, Colômbia ou EUA." },
    { q: "A Yanbal é confiável?",
      a: "Sim. Empresa com 58 anos de operação, sede em Miami (Yanbal International) + operações originais no Peru, fábricas próprias em 3 países, presença em 10 países e faturamento de US$ 450 mi. É uma das MMN mais respeitadas da América Latina, com Great Place to Work e reputação Merco alta." },
    { q: "Quais são os produtos mais famosos da Yanbal?",
      a: "As joias artesanais Yanbal são o diferencial único (colares, anéis, pulseiras feitas à mão por artesãos peruanos e colombianos). Fragrâncias hero: Ébano (masculino) e Unique. Base Perfecta e Máscara Extreme são bestsellers de maquiagem. Portfólio renovado a cada campanha (quinzenal)." },
    { q: "Como funciona o plano de compensação Yanbal?",
      a: "Modelo unilevel latino tradicional por ciclos de campanha (inspirado em Avon). Consultora compra com desconto de 25-40% e revende. Ranks: Consultora → Consultora Sênior → Directora (+ Comissão Grupo 10%) → Gerente/Directora Ejecutiva → Directora Nacional/Presidente Club (Prêmios + carros + viagens)." },
    { q: "Como ser consultora Yanbal?",
      a: "Contato com uma consultora ativa ou pela página oficial do país. Cadastro é gratuito, mas exige compra de kit inicial (aproximadamente US$ 30-100 dependendo do país). Depois, a consultora recebe a revista quinzenal e faz pedidos aos clientes com desconto." },
    { q: "Yanbal vs Belcorp: qual a diferença?",
      a: "Ambas são peruanas e concorrentes diretas em cosméticos MMN na América Latina. Belcorp (LB'el, Cyzone, Ésika) é maior (US$ 700 mi) e mais forte em cosméticos coloridos. Yanbal (US$ 450 mi) é única em joias artesanais e fragrâncias premium. Yanbal opera na Europa e EUA; Belcorp foca América Latina." },
    { q: "Quem é o fundador da Yanbal?",
      a: "Fernando Belmont Anderson, empresário peruano visionário que fundou a Yanbal em 1967 inspirado por Mary Kay e Avon. Foi pioneiro em MMN latino e revolucionou o empreendedorismo feminino na América do Sul. A família Belmont segue no controle da empresa em 2026." },
  ],
  founders: ["Fernando Belmont Anderson"],
  foundingDate: "1967-01-01",
  foundingLocation: "Lima, Peru",
  employees: 3500,
  alternateNames: ["Yanbal", "Yanbal Perú", "Unique (marca)"],
  wikipediaUrl: "https://es.wikipedia.org/wiki/Yanbal",
};

const YanbalInternational = () => <CompanyPremiumPage data={data} />;
export default YanbalInternational;
