import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Melaleuca",
  slug: "melaleuca",
  officialUrl: "https://www.melaleuca.com/",
  domain: "melaleuca.com",
  seoTitle: "Melaleuca: The Wellness Company | Top 16 Mundial 2026",
  seoDescription:
    "Melaleuca é a maior empresa de wellness no formato de Consumer Direct Marketing, com US$ 1,3 bi em receita, mais de 400 produtos eco-friendly e 800 mil clientes premium em 19 países.",
  rankingLabel: "TOP 16 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "The Wellness Company",
  heroParagraph:
    "Fundada em 1985 por Frank L. VanderSloot em Idaho, a Melaleuca é a líder mundial em Consumer Direct Marketing, com mais de 400 produtos eco-friendly de bem-estar, saúde e lar e mais de 800 mil clientes premium ativos.",
  heroBadges: [
    { label: "40+ anos", icon: "calendar" },
    { label: "19 países", icon: "globe" },
    { label: "800 mil clientes", icon: "users" },
    { label: "100% privada", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 16", hint: "Líder em Consumer Direct" },
    { icon: "calendar", label: "Fundação", value: "1985", hint: "Idaho Falls, Idaho (EUA)" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Idaho Falls" },
    { icon: "globe", label: "Países", value: "19", hint: "EUA, Canadá, Reino Unido, China e mais" },
    { icon: "users", label: "Clientes Premium", value: "800.000+", hint: "Famílias ativas mensalmente" },
    { icon: "package", label: "Produtos", value: "400+", hint: "Limpeza, beleza, suplementos, vitaminas" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 1,3 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Fábrica Própria", value: "Idaho Falls", hint: "Maior fábrica de wellness do Idaho" },
  ],
  aboutHtml: `
    <p>A <strong>Melaleuca: The Wellness Company</strong> é uma multinacional americana fundada em <strong>1985</strong> por <em>Frank L. VanderSloot</em>, em <strong>Idaho Falls, Idaho</strong>. O nome vem da árvore australiana <em>Melaleuca alternifolia</em> (Tea Tree), cujo óleo essencial deu origem ao primeiro produto da empresa.</p>
    <p>Diferente das MMNs tradicionais, a Melaleuca opera no modelo <strong>Consumer Direct Marketing</strong>: o foco está em <strong>clientes premium recorrentes</strong> (não em distribuidores) que substituem produtos do supermercado por versões eco-friendly direto da fábrica. Cada cliente mantém uma <strong>compra mensal mínima de 35 Product Points</strong>.</p>
    <p>Hoje a Melaleuca fatura <strong>US$ 1,3 bilhão por ano</strong>, está no <strong>Top 16 do ranking Business For Home 2026</strong>, opera em <strong>19 países</strong> e tem mais de <strong>800 mil clientes premium ativos</strong>. É uma das poucas empresas de wellness em MMN <strong>100% privadas</strong> (não listada em bolsa), com Frank VanderSloot ainda como CEO desde a fundação.</p>
  `,
  timelineTitle: "Do óleo de Tea Tree à líder mundial em Consumer Direct",
  milestones: [
    { year: "1985", title: "Fundação", text: "Frank VanderSloot funda a Melaleuca, Inc. em Idaho com o óleo de Tea Tree como produto principal." },
    { year: "1988", title: "Expansão de portfólio", text: "Lança linha de limpeza EcoSense — produtos eco-friendly para o lar." },
    { year: "1991", title: "US$ 100 milhões", text: "Atinge a marca de US$ 100 mi em receita anual." },
    { year: "2000", title: "Expansão internacional", text: "Entra em Canadá, Reino Unido, Austrália e Nova Zelândia." },
    { year: "2010", title: "Entrada na China", text: "Lança operações na China, hoje seu segundo maior mercado." },
    { year: "2014", title: "US$ 1 bilhão", text: "Cruza marca histórica de US$ 1 bi em receita anual." },
    { year: "2020", title: "Boom pandêmico", text: "Demanda por produtos de higiene e wellness dispara durante a pandemia." },
    { year: "2026", title: "Top 16 mundial", text: "Mantém posição entre as 20 maiores MMN globais com 800 mil clientes premium." },
  ],
  productsIntro:
    "Mais de <strong>400 produtos eco-friendly</strong> nas categorias de limpeza, beleza, suplementos, vitaminas, controle de peso e cuidados infantis — todos com Garantia 100% Satisfação.",
  productLines: [
    { name: "EcoSense (Limpeza)", tag: "Carro-chefe", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Linha completa de limpeza eco-friendly concentrada — economiza plástico, dinheiro e protege o lar de químicos agressivos.",
      items: ["MelaPower", "Tub & Tile", "Sol-U-Mel", "PreSpot", "Diamond Brite"] },
    { name: "Sei Bella & Affinia", tag: "Beleza & Skincare", color: "from-rose-500/15 to-rose-700/5",
      text: "Cosméticos de alta performance com ingredientes de Tea Tree, peptídeos e antioxidantes.",
      items: ["Sei Bella Makeup", "Affinia Skin", "Renew Lotion", "Hair Care"] },
    { name: "Peak Performance & Vitalitiy", tag: "Suplementos", color: "from-amber-500/15 to-amber-700/5",
      text: "Vitaminas e suplementos premium, incluindo a linha Peak Performance para atletas e Vitality para vitamina diária.",
      items: ["Peak Performance Pack", "Vitality Pack", "ProvexCV", "FiberWise", "Access Bars"] },
    { name: "Access Bars & Attain", tag: "Controle de Peso", color: "from-sky-500/15 to-sky-700/5",
      text: "Barras de proteína e shakes substitutos de refeição para o programa de controle de peso Attain.",
      items: ["Attain Shake", "Attain Bars", "Access Bars", "GC Control"] },
  ],
  planTitle: "Plano de Compensação Melaleuca (Consumer Direct)",
  planIntro:
    "Plano focado em <strong>clientes recorrentes</strong>. O Marketing Executive ganha sobre <strong>7 gerações</strong> de clientes referenciados, com bônus de avanço de status, bônus de carro e pool global.",
  planRanks: [
    { rank: "Customer (Cliente Premium)", payout: "Até 50% desconto", text: "Cliente que faz compra mensal mínima — recebe brindes e desconto fidelidade." },
    { rank: "Director", payout: "20% Personal CV + 7%", text: "Refere 8 clientes ativos — começa a ganhar comissão na rede." },
    { rank: "Senior Director", payout: "+ Bônus liderança", text: "Equipe com 3 Directors qualificados — overrides expandidos." },
    { rank: "Executive Director", payout: "+ Pool produtividade", text: "9 Directors em estrutura — chega a 4 gerações." },
    { rank: "Corporate Director", payout: "+ Bônus de Carro", text: "Marca de elite — bônus de carro Mercedes e viagens." },
    { rank: "Presidential Director", payout: "Topo da carreira", text: "Pool de top líderes mundiais — eventos exclusivos." },
  ],
  pros: [
    "Modelo Consumer Direct prioriza clientes (não recrutamento)",
    "400+ produtos com alta recompra mensal",
    "Garantia 100% Satisfação em todos os produtos",
    "Empresa privada, sem pressão de acionistas (Forbes lista riqueza)",
    "Eco-friendly e concentrados (sustentabilidade real)",
    "Treinamento estruturado com programa Customer for Life",
  ],
  cons: [
    "Compra mínima mensal obrigatória (35 PP) para ficar ativo",
    "Não opera no Brasil",
    "Modelo Consumer Direct exige paciência (rentabilidade vem com volume)",
    "Marca menos famosa que Amway ou Herbalife",
    "Comissões menores no início da carreira",
  ],
  presenceIntro:
    "Mercados: <strong>EUA, Canadá, México, Reino Unido, Irlanda, Holanda, Alemanha, Austrália, Nova Zelândia, Cingapura, Japão, Coreia do Sul, Hong Kong, Taiwan e China</strong>.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇲🇽 México", "🇬🇧 Reino Unido", "🇮🇪 Irlanda", "🇳🇱 Holanda",
    "🇩🇪 Alemanha", "🇦🇺 Austrália", "🇳🇿 Nova Zelândia", "🇸🇬 Singapura", "🇯🇵 Japão",
    "🇰🇷 Coreia do Sul", "🇭🇰 Hong Kong", "🇹🇼 Taiwan", "🇨🇳 China", "🇵🇭 Filipinas",
    "🇲🇾 Malásia", "🇮🇩 Indonésia", "🇹🇭 Tailândia",
  ],
  awards: [
    "Top 16 Direct Selling News Global 100 — 2026",
    "Inc. 500 Hall of Fame",
    "Best Places to Work in Idaho (várias edições)",
    "Frank VanderSloot — Ernst & Young Entrepreneur of the Year",
    "Bravo Growth Award (Direct Selling News)",
  ],
  certifications: [
    "EPA Safer Choice",
    "Leaping Bunny (cruelty-free)",
    "NPA GMP (suplementos)",
    "ISO 9001",
    "USDA Certified Organic (linhas selecionadas)",
  ],
  faqs: [
    { q: "O que é a Melaleuca?",
      a: "É uma multinacional americana fundada em 1985 por Frank VanderSloot, especializada em produtos eco-friendly de wellness, limpeza, beleza e suplementos vendidos via Consumer Direct Marketing — modelo focado em clientes recorrentes em vez de distribuidores." },
    { q: "Quanto fatura a Melaleuca?",
      a: "Em 2025 a Melaleuca faturou US$ 1,3 bilhão, ocupando posição Top 16 no ranking mundial Business For Home 2026." },
    { q: "A Melaleuca opera no Brasil?",
      a: "Não. A Melaleuca atua em 19 países (EUA, Canadá, México, Reino Unido, Europa, Ásia, Oceania) — mas o Brasil ainda não faz parte da operação." },
    { q: "O que é Consumer Direct Marketing?",
      a: "É um modelo onde o foco está em manter clientes premium recorrentes (compras mensais mínimas de 35 Product Points) — em vez de recrutar uma rede de distribuidores. Reduz drasticamente a rotatividade." },
    { q: "Quais são os principais produtos?",
      a: "EcoSense (limpeza concentrada eco-friendly), Sei Bella (cosméticos), Affinia (skincare), Peak Performance (suplementos esportivos), Vitality Pack (vitaminas) e Attain (shakes de controle de peso)." },
    { q: "Quanto custa começar na Melaleuca?",
      a: "A inscrição custa US$ 29 (Membership Kit) + a compra mensal mínima de 35 PP (~US$ 50-60). Há garantia de devolução 100% nos primeiros 120 dias." },
    { q: "A Melaleuca é segura?",
      a: "Sim. Atua há mais de 40 anos, é empresa privada (sem dívidas) com sede em Idaho Falls, fábrica própria e certificações EPA Safer Choice, Leaping Bunny, ISO 9001 e NPA GMP." },
    { q: "Qual a diferença entre Melaleuca e Amway?",
      a: "Amway opera modelo MMN clássico com foco em recrutamento. A Melaleuca opera Consumer Direct: o produto eco-friendly substitui itens de supermercado e a maioria dos cadastros são clientes (não distribuidores). Retenção média é muito maior." },
  ],
  founders: ["Frank L. VanderSloot"],
  foundingDate: "1985-09-01",
  foundingLocation: "Idaho Falls, Idaho, EUA",
  employees: 4500,
  alternateNames: ["Melaleuca, Inc.", "The Wellness Company"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Melaleuca_(company)",
};

const Melaleuca = () => <CompanyPremiumPage data={data} />;
export default Melaleuca;
