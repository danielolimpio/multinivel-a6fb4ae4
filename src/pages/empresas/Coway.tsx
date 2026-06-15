import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Coway",
  slug: "coway",
  officialUrl: "https://www.coway.com/",
  domain: "coway.com",
  seoTitle: "Coway: Líder Coreana em Purificadores de Água e Ar | Top 7 Mundial 2026",
  seoDescription:
    "Coway é a #7 do ranking mundial 2026 com US$ 3,1 bi em receita, líder em purificadores de água, ar e bidês inteligentes via modelo de aluguel (rental) e venda direta na Coreia, EUA e Sudeste Asiático.",
  rankingLabel: "#7 RANKING MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "A Líder Mundial em Purificação de Água e Ar",
  heroParagraph:
    "Fundada em 1989 na Coreia do Sul, a Coway é a empresa mais inovadora do mundo em purificadores de água, ar, bidês inteligentes e colchões eco-friendly, com modelo único de venda direta + aluguel mensal através dos Cody (Coway Lady) e Heart Service.",
  heroBadges: [
    { label: "KOSPI: 021240", icon: "check" },
    { label: "35+ anos", icon: "calendar" },
    { label: "10+ países", icon: "globe" },
    { label: "8 mi+ contratos", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "#7", hint: "Líder mundial em purificadores" },
    { icon: "calendar", label: "Fundação", value: "1989", hint: "Seul, Coreia do Sul" },
    { icon: "map", label: "País de Origem", value: "Coreia 🇰🇷", hint: "Sede em Seul" },
    { icon: "globe", label: "Países", value: "10+", hint: "Coreia, EUA, Malásia, Tailândia, China, Japão" },
    { icon: "users", label: "Contratos Ativos", value: "8.000.000+", hint: "Maior base de aluguel do setor" },
    { icon: "package", label: "Categorias", value: "Saúde Domiciliar", hint: "Água, ar, bidê, colchão" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 3,1 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Cody (Consultoras)", value: "30.000+", hint: "Maior força de heart service do mundo" },
  ],
  aboutHtml: `
    <p>A <strong>Coway Co., Ltd.</strong> é uma multinacional sul-coreana fundada em <strong>1989</strong>, listada na bolsa coreana (KOSPI: 021240) e pertencente ao grupo <strong>Netmarble</strong>. É a empresa <strong>nº1 do mundo em purificadores de água e ar</strong>, com um modelo de negócio único que combina <strong>vendas diretas, aluguel mensal (rental) e manutenção recorrente</strong> via mais de 30 mil consultoras conhecidas como <strong>Cody (Coway Lady)</strong>.</p>
    <p>Em 2025 a Coway faturou <strong>US$ 3,1 bilhões</strong>, ocupando a <strong>posição #7 no ranking Business For Home 2026</strong>. Possui mais de <strong>8 milhões de contratos ativos</strong> e tecnologia premiada com vários iF Design Awards, Red Dot Awards e CES Innovation Awards consecutivos.</p>
    <p>Pioneira em <strong>economia de assinatura para eletrodomésticos</strong>, a Coway popularizou no mundo a ideia de "alugar saúde": o consumidor paga uma mensalidade fixa, recebe o aparelho em casa e tem visita técnica (Heart Service) a cada 2-4 meses para troca de filtros e higienização.</p>
  `,
  timelineTitle: "Da Coreia para o mundo: a revolução do Heart Service",
  milestones: [
    { year: "1989", title: "Fundação", text: "Coway é criada em Seul com o primeiro purificador de água sul-coreano." },
    { year: "1998", title: "Modelo Rental", text: "Após a crise asiática, lança o modelo de aluguel mensal — revolução no setor de bens duráveis." },
    { year: "2003", title: "Cody (Coway Lady)", text: "Inicia o programa Cody, formando milhares de consultoras especializadas em Heart Service." },
    { year: "2006", title: "Listagem na KOSPI", text: "Abertura de capital na bolsa coreana sob o código 021240." },
    { year: "2010", title: "Expansão EUA & Sudeste Asiático", text: "Início das operações em Estados Unidos, Malásia, Tailândia e Indonésia." },
    { year: "2016", title: "Smart Coway", text: "Lança a linha conectada com IoT, integrando purificadores ao smartphone." },
    { year: "2019", title: "Aquisição pela Netmarble", text: "O gigante de games Netmarble adquire participação majoritária da Coway." },
    { year: "2024", title: "Recorde de receita", text: "Atinge ~US$ 3,1 bi em receita global, com expansão acelerada nos EUA." },
    { year: "2026", title: "Top 7 mundial", text: "Confirma posição #7 no ranking Business For Home 2026." },
  ],
  productsIntro:
    "Mais de <strong>200 modelos</strong> de purificadores e eletrodomésticos com sensores avançados e mais de <strong>30 prêmios internacionais de design</strong>.",
  productLines: [
    { name: "Purificadores de Água", tag: "Carro-chefe", color: "from-sky-500/15 to-sky-700/5",
      text: "Linha completa de purificadores RO e UF com tecnologia exclusiva Hot/Cold/Ambient. Modelo Cinnamon é o mais vendido do mundo.",
      items: ["Cinnamon", "Icon", "Ombak", "Glaze", "Aquamega"] },
    { name: "Purificadores de Ar", tag: "Saúde Respiratória", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Filtros HEPA + iônicos com sensores de PM2.5, gases e umidade. Líder global em ar limpo.",
      items: ["AirMega 400S", "AirMega 250", "AirMega Aim", "AirMega 100"] },
    { name: "Bidês Inteligentes", tag: "Conforto Diário", color: "from-amber-500/15 to-amber-700/5",
      text: "Bidês com aquecimento, secagem e LED UV. Padrão de luxo doméstico coreano.",
      items: ["BA13-A", "BA17-A", "BA20-AE"] },
    { name: "Colchões & Bem-Estar", tag: "Sleep Care", color: "from-fuchsia-500/15 to-fuchsia-700/5",
      text: "Linha de colchões antimicrobianos com programa de troca de capa a cada visita Cody.",
      items: ["Coway Prime", "Coway Mattress", "Massagers"] },
  ],
  planTitle: "Plano de Carreira Coway (Heart Service + MMN)",
  planIntro:
    "Os Cody (Coway Lady) recebem por <strong>contrato de aluguel + serviço de manutenção recorrente</strong>. Há também o plano de marketing multinível (Coway Network) com bônus em até 7 níveis.",
  planRanks: [
    { rank: "Cody (Heart Service Pro)", payout: "Comissão por contrato", text: "Consultora oficial que faz instalação, manutenção e venda." },
    { rank: "Coway Partner", payout: "+ Bônus de equipe", text: "Indica novos Cody e recebe bônus sobre contratos da rede." },
    { rank: "Senior Manager", payout: "+ Bônus Liderança", text: "Manage equipe de 10+ Cody ativas." },
    { rank: "Director", payout: "+ Bônus de carro", text: "Diretor regional com equipe acima de 50 contratos/mês." },
    { rank: "Executive Director", payout: "+ Pool Global", text: "Topo da carreira — participação em pool de líderes." },
  ],
  pros: [
    "Modelo rental gera renda recorrente previsível",
    "Produtos premiados (iF, Red Dot, CES Innovation)",
    "Marca consolidada em saúde domiciliar",
    "Manutenção técnica trimestral fideliza cliente",
    "Empresa listada em bolsa (KOSPI 021240) e auditada",
    "Setor de purificação cresce com poluição global",
  ],
  cons: [
    "Produtos caros (ticket alto) — depende de financiamento",
    "Operação no Brasil ainda incipiente",
    "Modelo exige logística reversa de manutenção",
    "Concorrência forte com LG, Samsung e Brita",
    "Plano de comissões varia muito por país",
  ],
  presenceIntro:
    "Mercados principais: <strong>Coreia, EUA, Malásia, Tailândia, Indonésia, Japão, China e Vietnã</strong>.",
  countries: [
    "🇰🇷 Coreia do Sul", "🇺🇸 EUA", "🇲🇾 Malásia", "🇹🇭 Tailândia", "🇮🇩 Indonésia", "🇻🇳 Vietnã",
    "🇯🇵 Japão", "🇨🇳 China", "🇵🇭 Filipinas", "🇧🇩 Bangladesh", "🇲🇽 México", "🇪🇺 Europa (seleta)",
  ],
  awards: [
    "#7 Direct Selling News Global 100 — 2026",
    "iF Design Award (várias edições)",
    "Red Dot Design Award (várias edições)",
    "CES Innovation Award 2023 e 2024",
    "Korea's Most Admired Companies (KMAC)",
  ],
  certifications: [
    "Listada na KOSPI (021240)",
    "NSF Certified (água potável)",
    "AHAM Verifide (purificadores de ar)",
    "ISO 9001 / 14001",
    "Energy Star (EUA)",
  ],
  faqs: [
    { q: "O que é a Coway?",
      a: "É uma multinacional sul-coreana fundada em 1989, líder mundial em purificadores de água, ar, bidês inteligentes e colchões. Opera no modelo rental + venda direta com mais de 8 milhões de contratos ativos." },
    { q: "Como funciona o modelo rental da Coway?",
      a: "O cliente paga uma mensalidade fixa (3 a 6 anos) e recebe o aparelho em casa. A cada 2-4 meses uma Cody (técnica especializada) faz visita para troca de filtros e higienização — o famoso Heart Service." },
    { q: "Quem é uma Cody (Coway Lady)?",
      a: "É a consultora certificada da Coway, responsável por vendas, instalação e manutenção dos aparelhos. São mais de 30 mil Cody ativas no mundo, formando a maior força de Heart Service da indústria." },
    { q: "Quanto fatura a Coway?",
      a: "Em 2025 a Coway faturou US$ 3,1 bilhões, ocupando a posição #7 no ranking mundial Business For Home 2026." },
    { q: "A Coway opera no Brasil?",
      a: "A Coway tem expansão internacional acelerada e a entrada no Brasil está em estudo. Atualmente é forte na Coreia, EUA, Sudeste Asiático e Japão." },
    { q: "Quais são os principais produtos?",
      a: "Purificadores de água (linha Cinnamon, Icon, Ombak), purificadores de ar (AirMega), bidês inteligentes e colchões antimicrobianos com tecnologia smart IoT." },
    { q: "A Coway é segura?",
      a: "Sim. É listada na bolsa coreana (KOSPI 021240), pertence ao grupo Netmarble, possui certificações NSF, AHAM, ISO 9001/14001 e mais de 35 anos de operação." },
    { q: "Como funciona a carreira em MMN da Coway?",
      a: "Há o plano Coway Network com bônus em até 7 níveis sobre contratos da rede, incluindo bônus de liderança, bônus de carro e pool global no Executive Director." },
  ],
  founders: ["Yoon Suk-keum"],
  foundingDate: "1989-05-02",
  foundingLocation: "Seul, Coreia do Sul",
  employees: 6800,
  alternateNames: ["Coway Co., Ltd.", "코웨이"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Coway",
};

const Coway = () => <CompanyPremiumPage data={data} />;
export default Coway;
