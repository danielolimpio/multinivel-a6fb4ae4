import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Infinitus",
  slug: "infinitus",
  officialUrl: "https://www.infinitus-int.com/",
  domain: "infinitus-int.com",
  seoTitle: "Infinitus: A Gigante Chinesa de Saúde Natural | Top 9 Mundial 2026",
  seoDescription:
    "Infinitus é a #9 do ranking mundial 2026 com US$ 2,4 bi em receita, especializada em medicina tradicional chinesa e produtos herbais, com sede em Hong Kong e forte presença em toda Ásia.",
  rankingLabel: "#9 RANKING MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "A Potência Chinesa de Medicina Tradicional",
  heroParagraph:
    "Fundada em 1992 por Lee Man Tat (Lee Kum Kee Group), a Infinitus une 3.000 anos de medicina tradicional chinesa com ciência moderna, sendo líder em produtos herbais via vendas diretas em mais de 20 países.",
  heroBadges: [
    { label: "Grupo Lee Kum Kee", icon: "check" },
    { label: "30+ anos", icon: "calendar" },
    { label: "20+ países", icon: "globe" },
    { label: "Top 10 mundial", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "#9", hint: "Top 10 vendas diretas globais" },
    { icon: "calendar", label: "Fundação", value: "1992", hint: "Hong Kong" },
    { icon: "map", label: "País de Origem", value: "China/HK 🇭🇰", hint: "Sede em Hong Kong" },
    { icon: "globe", label: "Países", value: "20+", hint: "Ásia, Oceania, Américas" },
    { icon: "users", label: "Distribuidores", value: "5.000.000+", hint: "Maior parte na China continental" },
    { icon: "package", label: "Produtos", value: "100+", hint: "Suplementos herbais, cosmética, lar" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 2,4 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Centro P&D", value: "Xinhui (China)", hint: "Parque biotecnológico próprio" },
  ],
  aboutHtml: `
    <p>A <strong>Infinitus (China) Company Ltd.</strong> é uma multinacional fundada em <strong>1992</strong> em Hong Kong por <em>Lee Man Tat</em>, o lendário fundador do conglomerado de molhos <strong>Lee Kum Kee</strong>. A empresa nasceu com a missão de levar a sabedoria milenar da <strong>Medicina Tradicional Chinesa (MTC)</strong> ao mundo, sob o lema <em>"Si Li Ji Ren"</em> — "considerar os outros enquanto buscamos nossos próprios interesses".</p>
    <p>Hoje a Infinitus é a <strong>#9 do ranking Business For Home 2026</strong>, com receita de <strong>US$ 2,4 bilhões</strong> e operação em <strong>mais de 20 países</strong>. É a maior empresa de vendas diretas focada em produtos herbais e medicina tradicional chinesa do mundo, com fábrica e centro de P&D próprio em Xinhui (Guangdong, China), totalizando investimento de mais de <strong>US$ 700 milhões</strong> em pesquisa.</p>
    <p>Pioneira em integrar herbalismo chinês com biotecnologia moderna, a Infinitus mantém parcerias acadêmicas com universidades como Oxford, Cambridge e a Academia Chinesa de Ciências. Seus produtos carregam o aval de mais de <strong>120 patentes internacionais</strong>.</p>
  `,
  timelineTitle: "De Hong Kong para o topo mundial da medicina herbal",
  milestones: [
    { year: "1992", title: "Fundação", text: "Lee Man Tat funda a Infinitus em Hong Kong, expandindo o legado do Lee Kum Kee Group para o setor de saúde." },
    { year: "1995", title: "Entrada na China", text: "Início das operações na China continental, mercado que se tornaria o maior do mundo em vendas diretas." },
    { year: "2005", title: "Parque Industrial Xinhui", text: "Inaugura o complexo de US$ 700 mi em Xinhui, com fábrica vertical e centro de P&D." },
    { year: "2010", title: "Expansão Asiática", text: "Abre operações em Malásia, Tailândia, Cingapura, Indonésia e Taiwan." },
    { year: "2015", title: "1ª Empresa MMN Verde da China", text: "Recebe certificação Eco-Industrial Park do governo chinês." },
    { year: "2019", title: "Top 10 Mundial", text: "Entra pela primeira vez no Top 10 do ranking Business For Home." },
    { year: "2023", title: "Expansão Américas", text: "Reforça presença em EUA, Canadá e mercados latinos." },
    { year: "2026", title: "US$ 2,4 bi em receita", text: "Mantém posição #9 no ranking Business For Home 2026." },
  ],
  productsIntro:
    "Produtos baseados em <strong>fitoterapia chinesa moderna</strong>, com mais de <strong>120 patentes</strong> e ingredientes como cogumelo Reishi, ginseng, goji berry e jujuba.",
  productLines: [
    { name: "Wellness Series", tag: "Saúde & Imunidade", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos baseados em medicina tradicional chinesa para imunidade, digestão e vitalidade.",
      items: ["Vitality Plus", "Phytoberry", "Cordyceps", "Royal Jelly", "Reishi"] },
    { name: "Personal Care", tag: "Cuidados Pessoais", color: "from-rose-500/15 to-rose-700/5",
      text: "Cosméticos, higiene oral e cuidados com pele formulados com plantas chinesas tradicionais.",
      items: ["Toothpaste Herbal", "Skin Lotion", "Shampoo Ginseng", "Body Wash"] },
    { name: "Beauty Series", tag: "Beleza Bioativa", color: "from-fuchsia-500/15 to-fuchsia-700/5",
      text: "Linha anti-idade com bioativos chineses como Tremella e Ganoderma.",
      items: ["Anti-aging Cream", "Eye Serum", "Whitening Lotion"] },
    { name: "Home Care", tag: "Limpeza Verde", color: "from-amber-500/15 to-amber-700/5",
      text: "Produtos de limpeza biodegradáveis, líderes na China continental.",
      items: ["Detergente", "Sabão líquido", "Limpa-vidros", "Multiuso"] },
  ],
  planTitle: "Plano de Marketing Infinitus (Híbrido Asiático)",
  planIntro:
    "Plano de marketing aprovado pelo governo chinês (uma das poucas MMN com licença oficial). Combina <strong>bônus de venda, bônus de liderança e bônus de matching</strong> com até 9 níveis.",
  planRanks: [
    { rank: "Distribuidor", payout: "10-25% bônus", text: "Inicial — desconto progressivo conforme volume." },
    { rank: "Supervisor", payout: "+ 5% Bônus Equipe", text: "Equipe estruturada com primeira graduação." },
    { rank: "Manager", payout: "+ Bônus Liderança", text: "Cinco linhas ativas — começa a ganhar 3 níveis de liderança." },
    { rank: "Director", payout: "+ Bônus Matching", text: "Equipe com volume regional consolidado." },
    { rank: "Executive Director", payout: "+ Pool Global", text: "Topo do plano — participação em pool corporativo." },
  ],
  pros: [
    "Licença oficial do governo chinês para venda direta",
    "Grupo Lee Kum Kee (130+ anos) por trás da empresa",
    "Fábrica e P&D próprios em parque verde certificado",
    "Mais de 120 patentes em fitoterapia chinesa",
    "Produtos diferenciados (MTC) sem concorrência ocidental",
    "Crescimento sólido no Sudeste Asiático",
  ],
  cons: [
    "Operação focada na Ásia — fraca penetração no Ocidente",
    "Cultura corporativa e materiais ainda muito orientais",
    "Concorrência interna chinesa com Tiens e Quanjian",
    "Tempo de envio internacional alto para o Brasil",
  ],
  presenceIntro:
    "Mercados-chave: <strong>China continental, Hong Kong, Taiwan, Malásia, Tailândia, Cingapura, Indonésia, Filipinas e Vietnã</strong>.",
  countries: [
    "🇨🇳 China", "🇭🇰 Hong Kong", "🇹🇼 Taiwan", "🇲🇾 Malásia", "🇹🇭 Tailândia", "🇸🇬 Singapura",
    "🇮🇩 Indonésia", "🇵🇭 Filipinas", "🇻🇳 Vietnã", "🇰🇭 Camboja", "🇰🇷 Coreia do Sul", "🇯🇵 Japão",
    "🇲🇴 Macau", "🇮🇳 Índia", "🇦🇺 Austrália", "🇳🇿 Nova Zelândia", "🇺🇸 EUA", "🇨🇦 Canadá",
  ],
  awards: [
    "#9 Direct Selling News Global 100 — 2026",
    "China Top 500 Brand Value",
    "Asia Responsible Enterprise Award",
    "China Charity Award (várias edições)",
    "Eco-Industrial Park Certification (Govt. China)",
  ],
  certifications: [
    "Licença Oficial de Venda Direta na China",
    "ISO 9001 / 14001 / 22000",
    "GMP (Good Manufacturing Practices)",
    "HACCP",
    "AAA Credit Rating na China",
  ],
  faqs: [
    { q: "O que é a Infinitus?",
      a: "É uma multinacional do grupo Lee Kum Kee, fundada em 1992 em Hong Kong, especializada em produtos herbais baseados em medicina tradicional chinesa. É uma das poucas MMN com licença oficial de venda direta na China." },
    { q: "Quanto fatura a Infinitus?",
      a: "Em 2025 a Infinitus faturou US$ 2,4 bilhões, ocupando a posição #9 no ranking mundial Business For Home 2026." },
    { q: "A Infinitus opera no Brasil?",
      a: "A Infinitus tem presença internacional crescente, mas seu foco principal segue sendo a Ásia. Compras no Brasil em geral são feitas via importação ou parceiros." },
    { q: "Quais são os principais produtos?",
      a: "Suplementos como Vitality Plus, Phytoberry, Cordyceps, Reishi e Royal Jelly, além de cosméticos, higiene oral e produtos de limpeza verde." },
    { q: "O que é medicina tradicional chinesa?",
      a: "Sistema milenar de saúde baseado em fitoterapia, equilíbrio yin-yang e meridianos energéticos. A Infinitus moderniza essa tradição com biotecnologia e validação científica." },
    { q: "A Infinitus é segura?",
      a: "Sim. Possui licença oficial do governo chinês para venda direta, certificações ISO 9001, 14001, 22000, GMP, HACCP e mais de 120 patentes registradas internacionalmente." },
    { q: "Quem é o dono da Infinitus?",
      a: "A empresa pertence ao Lee Kum Kee Health Products Group, conglomerado familiar fundado em 1888 e dono também da marca global de molhos Lee Kum Kee." },
    { q: "Como funciona o plano de marketing?",
      a: "É um plano híbrido aprovado pelo governo chinês com bônus de venda (10-25%), bônus de equipe, bônus de liderança em até 3 níveis e pool global no Executive Director." },
  ],
  founders: ["Lee Man Tat"],
  foundingDate: "1992-01-01",
  foundingLocation: "Hong Kong",
  employees: 4500,
  alternateNames: ["Infinitus (China) Company Ltd.", "无限极"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Infinitus_(company)",
};

const Infinitus = () => <CompanyPremiumPage data={data} />;
export default Infinitus;
