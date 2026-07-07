import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "JoyMain Int.",
  slug: "joymain",
  officialUrl: "https://www.jmtop.cn/",
  domain: "jmtop.cn",
  seoTitle: "JoyMain International: Gigante Chinesa de MMN | Ranking 2026",
  seoDescription:
    "JoyMain International é uma das maiores empresas de marketing multinível da China, com portfólio de saúde, biotecnologia, tecnologia térmica e mais de US$ 1,7 bi em faturamento anual.",
  rankingLabel: "TOP 21 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "Wellness & Biotech da China",
  heroParagraph:
    "Fundada em 2007 em Nanjing (China), a JoyMain International é uma das maiores MMN chinesas do mundo, unindo biotecnologia, tecnologia térmica ChiTherapy e produtos wellness em mais de 20 países.",
  heroBadges: [
    { label: "18+ anos", icon: "calendar" },
    { label: "20+ países", icon: "globe" },
    { label: "Milhões de membros", icon: "users" },
    { label: "ChiTherapy®", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 21", hint: "Uma das maiores MMN chinesas" },
    { icon: "calendar", label: "Fundação", value: "2007", hint: "Nanjing, China" },
    { icon: "map", label: "País de Origem", value: "China 🇨🇳", hint: "Sede em Nanjing, Jiangsu" },
    { icon: "globe", label: "Países", value: "20+", hint: "Ásia, América, Europa, África" },
    { icon: "users", label: "Membros Ativos", value: "3 milhões+", hint: "Distribuidores globais" },
    { icon: "package", label: "Produtos", value: "300+", hint: "Biotech, wellness, cosméticos, térmicos" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 1,7 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Parque Industrial", value: "Nanjing", hint: "Complexo próprio de biotecnologia" },
  ],
  aboutHtml: `
    <p>A <strong>JoyMain International Holding Group</strong> (JM国际) é uma multinacional chinesa fundada em <strong>2007</strong>, com sede em <strong>Nanjing, província de Jiangsu</strong>. É uma das maiores conglomerados de MMN da China e tem posição consolidada no ranking mundial de vendas diretas.</p>
    <p>Seu grande diferencial é a integração de <strong>biotecnologia, medicina tradicional chinesa e tecnologia térmica ChiTherapy®</strong> (colchões, cadeiras e roupas térmicas com pedras minerais). A empresa investe pesadamente em P&D próprio e possui parque industrial verticalizado em Nanjing.</p>
    <p>Com <strong>US$ 1,7 bi em receita anual</strong>, a JoyMain está no <strong>Top 21 do ranking Business For Home 2026</strong>, opera em mais de <strong>20 países</strong> (China, Hong Kong, Taiwan, Japão, Coreia, Sudeste Asiático, EUA, Rússia e mercados africanos) e conta com <strong>mais de 3 milhões de membros</strong>.</p>
  `,
  timelineTitle: "Da biotecnologia chinesa ao Top 21 global",
  milestones: [
    { year: "2007", title: "Fundação", text: "JoyMain é fundada em Nanjing com foco em biotecnologia." },
    { year: "2010", title: "Tecnologia ChiTherapy", text: "Lança linha de colchões e cadeiras térmicas — sucesso na China." },
    { year: "2013", title: "Expansão asiática", text: "Entra em Japão, Coreia, Taiwan, Hong Kong e Vietnã." },
    { year: "2016", title: "Chega às Américas", text: "Abre operações nos EUA e Canadá." },
    { year: "2019", title: "US$ 1 bilhão", text: "Cruza marca histórica de bilhão em receita anual." },
    { year: "2021", title: "Expansão africana", text: "Entra em Nigéria, África do Sul e Quênia." },
    { year: "2024", title: "Novo hub biotech", text: "Inaugura novo centro de P&D em Nanjing." },
    { year: "2026", title: "Top 21 mundial", text: "US$ 1,7 bi em receita e presença firme em 20+ países." },
  ],
  productsIntro:
    "Mais de <strong>300 produtos</strong> em biotecnologia, medicina tradicional chinesa, cosméticos, higiene, produtos térmicos ChiTherapy® e wellness — carro-chefe são as cadeiras e colchões terapêuticos com pedras minerais.",
  productLines: [
    { name: "ChiTherapy®", tag: "Carro-chefe", color: "from-red-500/15 to-red-700/5",
      text: "Colchões, cadeiras e roupas térmicas com jade, turmalina e germânio — top vendas mundial da JoyMain.",
      items: ["ChiTherapy Mattress", "ChiTherapy Chair", "Massage Bed", "Termal Belt"] },
    { name: "Biotech Wellness", tag: "Suplementos", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos e cápsulas baseados em medicina tradicional chinesa e biotecnologia molecular.",
      items: ["Ganoderma Capsule", "Peptídeos", "Probióticos", "Colágeno Marinho", "Antioxidante"] },
    { name: "Home Care & Purificação", tag: "Casa & água", color: "from-sky-500/15 to-sky-700/5",
      text: "Purificadores de água, filtros de ar e produtos de limpeza ecológicos.",
      items: ["Water Purifier", "Air Purifier", "Eco Detergent", "Toothpaste"] },
    { name: "Cosméticos & Skincare", tag: "Beleza", color: "from-rose-500/15 to-rose-700/5",
      text: "Skincare com ativos chineses tradicionais e maquiagem premium.",
      items: ["Herbal Cream", "Ginseng Serum", "Whitening Set", "Anti-Age"] },
  ],
  planTitle: "Plano de Compensação JoyMain (Híbrido Chinês)",
  planIntro:
    "Plano híbrido com forte foco em pool globais e bônus de liderança. Estrutura de níveis com progressão por volume de equipe e presença em eventos internacionais anuais.",
  planRanks: [
    { rank: "Member", payout: "Desconto membro", text: "Cadastro básico — compra com desconto." },
    { rank: "Consultant", payout: "10% comissão direta", text: "Primeiro nível ativo com PV mensal." },
    { rank: "Manager", payout: "+ Overrides 5%", text: "Estrutura com equipe qualificada." },
    { rank: "Director", payout: "+ Bônus liderança", text: "Múltiplas equipes ativas." },
    { rank: "President", payout: "+ Global Pool", text: "Elite regional da JoyMain." },
    { rank: "Crown / Diamond Crown", payout: "Elite Mundial", text: "Topo da carreira com viagens e prêmios internacionais." },
  ],
  pros: [
    "Tecnologia ChiTherapy® patenteada e exclusiva",
    "P&D próprio em biotecnologia (parque industrial verticalizado)",
    "Portfólio diversificado (biotech, térmicos, wellness)",
    "Presença forte em mercados asiáticos e africanos",
    "Preços competitivos comparado a concorrentes ocidentais",
    "Uma das MMN chinesas mais estáveis do ranking global",
  ],
  cons: [
    "Marca ainda pouco conhecida no Ocidente",
    "Sem operação oficial no Brasil",
    "Materiais de treinamento majoritariamente em mandarim",
    "Produtos térmicos têm ticket alto (colchão premium)",
    "Regulamentação chinesa restringe modelo MMN puro",
  ],
  presenceIntro:
    "Presente em mais de <strong>20 países da Ásia, Américas, Europa e África</strong>, com forte concentração no mercado interno chinês, sudeste asiático e comunidades chinesas globais.",
  countries: [
    "🇨🇳 China", "🇭🇰 Hong Kong", "🇹🇼 Taiwan", "🇯🇵 Japão", "🇰🇷 Coreia do Sul",
    "🇸🇬 Singapura", "🇲🇾 Malásia", "🇹🇭 Tailândia", "🇻🇳 Vietnã", "🇮🇩 Indonésia",
    "🇵🇭 Filipinas", "🇺🇸 EUA", "🇨🇦 Canadá", "🇷🇺 Rússia", "🇰🇿 Cazaquistão",
    "🇳🇬 Nigéria", "🇿🇦 África do Sul", "🇰🇪 Quênia", "🇦🇪 Emirados Árabes",
    "🇦🇺 Austrália",
  ],
  awards: [
    "Top 25 Direct Selling News Global 100 — 2026",
    "China Top Health Brand",
    "Nanjing Enterprise of the Year",
    "Asia Pacific Direct Selling Excellence Award",
    "China Patent Awards (ChiTherapy)",
  ],
  certifications: [
    "ISO 9001 / 14001",
    "GMP (fabricação farmacêutica)",
    "China Compulsory Certification (CCC)",
    "Patentes ChiTherapy® registradas",
    "SGS (testes independentes)",
  ],
  faqs: [
    { q: "O que é a JoyMain International?",
      a: "É uma das maiores empresas de marketing multinível da China, fundada em 2007 em Nanjing. Atua em biotecnologia, medicina tradicional chinesa, cosméticos e a exclusiva tecnologia térmica ChiTherapy®." },
    { q: "Quanto fatura a JoyMain?",
      a: "Em 2025 a JoyMain faturou US$ 1,7 bilhão, ocupando o Top 21 no ranking mundial Business For Home 2026." },
    { q: "A JoyMain opera no Brasil?",
      a: "Não. A JoyMain está presente em mais de 20 países da Ásia, Américas, Europa e África — mas o Brasil ainda não faz parte da operação oficial." },
    { q: "O que é ChiTherapy®?",
      a: "É a tecnologia proprietária da JoyMain que combina jade, turmalina e germânio em colchões, cadeiras e roupas térmicas — carro-chefe de vendas mundial da marca." },
    { q: "Quais são os principais produtos?",
      a: "Cadeiras e colchões térmicos ChiTherapy®, suplementos com ganoderma, purificadores de água e ar, cosméticos com fitoterápicos chineses e produtos de higiene." },
    { q: "É seguro entrar na JoyMain?",
      a: "Sim. Opera há mais de 18 anos, tem parque industrial próprio em Nanjing, patentes registradas, certificações ISO 9001/14001, GMP e CCC (China Compulsory Certification)." },
    { q: "Qual a diferença entre JoyMain e outras MMN chinesas?",
      a: "A JoyMain se destaca pela tecnologia ChiTherapy® patenteada e forte integração com medicina tradicional chinesa, enquanto marcas como Infinitus e Perfect China focam mais em suplementos herbais." },
    { q: "Como se cadastrar na JoyMain?",
      a: "É preciso ser indicado por um membro ativo em um dos mercados oficiais da marca. Para o Brasil, o cadastro só pode ser feito através de operações internacionais (NFR)." },
  ],
  founders: ["Chen Kaigen"],
  foundingDate: "2007-05-01",
  foundingLocation: "Nanjing, China",
  employees: 3500,
  alternateNames: ["JoyMain", "JM International", "JM国际"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/JoyMain",
};

const JoyMain = () => <CompanyPremiumPage data={data} />;
export default JoyMain;
