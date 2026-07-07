import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Sunhope",
  slug: "sunhope",
  officialUrl: "https://www.sunhope.cn/",
  domain: "sunhope.cn",
  seoTitle: "Sunhope: MMN Chinesa de Wellness e Biotech | Ranking 2026",
  seoDescription:
    "Sunhope é uma das maiores empresas de marketing multinível da China, com foco em bioprodutos, nutrição e cuidados pessoais. US$ 1,5 bi em receita anual e presença global em expansão.",
  rankingLabel: "TOP 23 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "Vida Saudável e Biotecnologia",
  heroParagraph:
    "Fundada em 2001 em Guangzhou (China), a Sunhope é uma multinacional chinesa de vendas diretas focada em biotecnologia, nutrição funcional e cuidados pessoais, com US$ 1,5 bi de receita anual e forte expansão no sudeste asiático.",
  heroBadges: [
    { label: "20+ anos", icon: "calendar" },
    { label: "15+ países", icon: "globe" },
    { label: "Milhões de membros", icon: "users" },
    { label: "P&D próprio", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 23", hint: "Grande player chinês de vendas diretas" },
    { icon: "calendar", label: "Fundação", value: "2001", hint: "Guangzhou, China" },
    { icon: "map", label: "País de Origem", value: "China 🇨🇳", hint: "Sede em Guangzhou, Guangdong" },
    { icon: "globe", label: "Países", value: "15+", hint: "China, Ásia, África, Europa Oriental" },
    { icon: "users", label: "Membros Ativos", value: "2 milhões+", hint: "Distribuidores globais" },
    { icon: "package", label: "Produtos", value: "150+", hint: "Nutrição, beleza, higiene, wellness" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 1,5 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Fábrica Própria", value: "Guangzhou", hint: "Complexo de biotecnologia próprio" },
  ],
  aboutHtml: `
    <p>A <strong>Sunhope International Group</strong> (三生集团) é uma multinacional chinesa fundada em <strong>2001</strong> em <strong>Guangzhou, província de Guangdong</strong>. Nasceu do desejo de fundir <strong>medicina tradicional chinesa (TCM), biotecnologia moderna e educação em saúde</strong>, tornando-se hoje uma das MMN mais respeitadas da Ásia.</p>
    <p>Seu grande diferencial é a integração entre <strong>P&D próprio, fábrica verticalizada em Guangzhou</strong> e o programa "Saúde para 1 Bilhão" — uma iniciativa social e comercial que combina wellness, nutrição funcional e educação preventiva de saúde.</p>
    <p>Com <strong>US$ 1,5 bi em receita anual</strong>, a Sunhope está no <strong>Top 23 do ranking Business For Home 2026</strong>, opera em mais de <strong>15 países</strong> (China, Hong Kong, Taiwan, Sudeste Asiático, Ásia Central e África) e conta com <strong>mais de 2 milhões de distribuidores ativos</strong>.</p>
  `,
  timelineTitle: "Da biotecnologia em Guangzhou à MMN chinesa de referência",
  milestones: [
    { year: "2001", title: "Fundação", text: "Sunhope é fundada em Guangzhou com foco em bioprodutos e TCM." },
    { year: "2005", title: "Primeira fábrica", text: "Inaugura fábrica própria em Guangzhou com padrão GMP." },
    { year: "2010", title: "Expansão asiática", text: "Entra em Malásia, Cingapura, Tailândia e Vietnã." },
    { year: "2013", title: "Licença chinesa", text: "Recebe licença oficial de venda direta do governo chinês." },
    { year: "2017", title: "US$ 1 bilhão", text: "Ultrapassa marca histórica de bilhão em receita anual." },
    { year: "2020", title: "Expansão Ásia Central", text: "Abre mercados no Cazaquistão, Uzbequistão e Quirguistão." },
    { year: "2023", title: "Novo P&D", text: "Inaugura novo centro de biotecnologia em Guangzhou." },
    { year: "2026", title: "Top 23 mundial", text: "US$ 1,5 bi em receita e liderança asiática consolidada." },
  ],
  productsIntro:
    "Mais de <strong>150 produtos</strong> em nutrição funcional, medicina tradicional chinesa, cosméticos, higiene pessoal e cuidados domésticos — todos fabricados na unidade própria de Guangzhou com padrão GMP.",
  productLines: [
    { name: "Nutrição & TCM", tag: "Carro-chefe", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos e cápsulas com base em ervas TCM, colágeno e antioxidantes.",
      items: ["Ganoderma Extract", "Proteína Vegetal", "Fibra Solúvel", "Ginseng Cápsulas", "Vitaminas Mix"] },
    { name: "SunEssence Skincare", tag: "Beleza", color: "from-rose-500/15 to-rose-700/5",
      text: "Cosméticos com ativos chineses e tecnologia biotech proprietária.",
      items: ["Anti-Age Cream", "Hydra Serum", "Whitening Mask", "Eye Contour"] },
    { name: "Sunhope Home", tag: "Casa & higiene", color: "from-sky-500/15 to-sky-700/5",
      text: "Produtos de higiene pessoal, sabonetes, xampus e detergentes ecológicos.",
      items: ["Toothpaste Herbal", "Shampoo Ginseng", "Body Wash", "Detergent Eco"] },
    { name: "Sunhope Wellness", tag: "Bem-estar", color: "from-amber-500/15 to-amber-700/5",
      text: "Programas de saúde preventiva, chás funcionais e produtos para controle de peso.",
      items: ["Slim Tea", "Detox Program", "Energy Drink", "Sleep Formula"] },
  ],
  planTitle: "Plano de Compensação Sunhope (Multinível Chinês)",
  planIntro:
    "Estrutura híbrida com <strong>bônus de venda direta, overrides de equipe e pool de liderança</strong>. Regulamentado sob licença oficial de venda direta na China com incentivos regionais.",
  planRanks: [
    { rank: "Member", payout: "Desconto membro", text: "Cadastro básico com preço de distribuidor." },
    { rank: "Sales Consultant", payout: "10-15% direto", text: "Primeiro nível ativo com PV mensal." },
    { rank: "Manager", payout: "+ 5% override", text: "Estrutura com equipe pequena qualificada." },
    { rank: "Director", payout: "+ Bônus liderança", text: "Múltiplas equipes em progressão." },
    { rank: "Diamond Director", payout: "+ Regional Pool", text: "Elite regional com eventos nacionais." },
    { rank: "Crown Ambassador", payout: "Global Elite Pool", text: "Topo mundial — viagens e prêmios internacionais." },
  ],
  pros: [
    "Fábrica própria e P&D verticalizado em Guangzhou",
    "Portfólio integrando TCM e biotecnologia moderna",
    "Estabilidade de 20+ anos no mercado chinês",
    "Preços competitivos frente a marcas ocidentais",
    "Presença crescente em mercados emergentes (África, Ásia Central)",
    "Licença oficial de venda direta na China (2013)",
  ],
  cons: [
    "Marca pouco conhecida no Ocidente",
    "Sem operação oficial no Brasil",
    "Materiais em mandarim predominantemente",
    "Concorrência interna com Infinitus, Perfect China e JoyMain",
    "Plano restringido pela regulação chinesa (limite de níveis)",
  ],
  presenceIntro:
    "Presente em mais de <strong>15 países da Ásia, Ásia Central, África e Europa Oriental</strong>, com concentração no mercado chinês e sudeste asiático.",
  countries: [
    "🇨🇳 China", "🇭🇰 Hong Kong", "🇹🇼 Taiwan", "🇲🇾 Malásia", "🇸🇬 Singapura",
    "🇹🇭 Tailândia", "🇻🇳 Vietnã", "🇮🇩 Indonésia", "🇵🇭 Filipinas",
    "🇰🇿 Cazaquistão", "🇺🇿 Uzbequistão", "🇰🇬 Quirguistão", "🇷🇺 Rússia",
    "🇳🇬 Nigéria", "🇿🇦 África do Sul", "🇦🇪 Emirados Árabes",
  ],
  awards: [
    "Top 30 Direct Selling News Global 100 — 2026",
    "China Direct Selling Excellence Award",
    "Guangdong Top Health Enterprise",
    "Asia Pacific MLM Leadership Award",
    "Sunhope Foundation — Prêmio Filantropia China",
  ],
  certifications: [
    "ISO 9001 / 14001",
    "GMP (fabricação farmacêutica)",
    "China Compulsory Certification (CCC)",
    "China Direct Selling License (2013)",
    "SGS (testes independentes)",
  ],
  faqs: [
    { q: "O que é a Sunhope?",
      a: "É uma multinacional chinesa de marketing multinível fundada em 2001 em Guangzhou, focada em biotecnologia, medicina tradicional chinesa (TCM) e nutrição funcional. É uma das maiores MMN da China." },
    { q: "Quanto fatura a Sunhope?",
      a: "Em 2025 a Sunhope faturou US$ 1,5 bilhão, ocupando o Top 23 no ranking mundial Business For Home 2026." },
    { q: "A Sunhope opera no Brasil?",
      a: "Não. A Sunhope está presente em mais de 15 países da Ásia, África e Europa Oriental — mas o Brasil ainda não faz parte da operação oficial." },
    { q: "Quais são os principais produtos?",
      a: "Suplementos TCM (Ganoderma, ginseng, proteína vegetal), skincare SunEssence, produtos de higiene com ervas, chás funcionais e programas de wellness preventivo." },
    { q: "É seguro entrar na Sunhope?",
      a: "Sim. Opera há mais de 20 anos, tem licença oficial de venda direta na China desde 2013, fábrica própria em Guangzhou e certificações ISO 9001/14001, GMP e CCC." },
    { q: "Como funciona o plano de compensação da Sunhope?",
      a: "É um modelo multinível adaptado à regulação chinesa, com comissões diretas de 10-15%, overrides de equipe, bônus de liderança e pool regional/global para líderes elite." },
    { q: "Qual a diferença entre Sunhope, Infinitus e JoyMain?",
      a: "Todas são gigantes chinesas de MMN, mas a Sunhope se destaca pela integração TCM + biotech com o programa Saúde para 1 Bilhão. Infinitus tem foco em ervas chinesas e JoyMain em tecnologia ChiTherapy®." },
    { q: "Como se cadastrar na Sunhope?",
      a: "É preciso ser indicado por um membro ativo em um dos mercados oficiais da marca. Para o Brasil, o cadastro só pode ser feito via operações internacionais (NFR) ou aguardando a expansão oficial." },
  ],
  founders: ["Huang Jinbao"],
  foundingDate: "2001-05-01",
  foundingLocation: "Guangzhou, China",
  employees: 3000,
  alternateNames: ["Sunhope International Group", "三生集团"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Sunhope",
};

const Sunhope = () => <CompanyPremiumPage data={data} />;
export default Sunhope;
