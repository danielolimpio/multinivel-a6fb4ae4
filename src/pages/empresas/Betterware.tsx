import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Betterware de México (BeFra)",
  slug: "betterware",
  officialUrl: "https://www.betterware.com.mx/",
  domain: "betterware.com.mx",
  seoTitle: "Betterware de México (BeFra): MMN de Produtos para Casa | Top 40 Mundial 2026",
  seoDescription:
    "Betterware de México (BeFra), listada na NASDAQ (BWMX), é a maior empresa de vendas diretas de produtos para casa da América Latina, com receita superior a US$ 600 milhões e mais de 900 mil distribuidores.",
  rankingLabel: "TOP 35 MUNDIAL • DSN GLOBAL 100 2026",
  heroHeadlineSuffix: "Referência LATAM em Produtos para Casa",
  heroParagraph:
    "Fundada em 1995 em Guadalajara (México), a Betterware de México — hoje parte do grupo BeFra (Betterware + Fábrica de Jabón La Corona) — é líder absoluta em produtos para organização, cozinha e casa, com mais de 900 mil distribuidoras, presença em vários países da América Latina e ações listadas na NASDAQ (BWMX).",
  heroBadges: [
    { label: "30 anos", icon: "calendar" },
    { label: "NASDAQ: BWMX", icon: "check" },
    { label: "900 mil distribuidoras", icon: "users" },
    { label: "Presença LATAM", icon: "globe" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 35", hint: "DSN Global 100" },
    { icon: "calendar", label: "Fundação", value: "1995", hint: "Guadalajara, México" },
    { icon: "map", label: "País de Origem", value: "México 🇲🇽", hint: "Sede em Guadalajara" },
    { icon: "globe", label: "Países", value: "6", hint: "México, EUA, Guatemala, Peru, Colômbia, Equador" },
    { icon: "users", label: "Distribuidoras", value: "900 mil+", hint: "Maior força de vendas do LATAM em casa" },
    { icon: "package", label: "Produtos", value: "1.500+", hint: "Novo catálogo a cada 3 semanas" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 620 mi", hint: "Grupo BeFra" },
    { icon: "star", label: "Categoria líder", value: "Casa & Cozinha", hint: "Organização e utensílios" },
  ],
  aboutHtml: `
    <p>A <strong>Betterware de México</strong> foi fundada em <strong>1995</strong> em <strong>Guadalajara</strong> e revolucionou o mercado latino-americano com a venda direta de <strong>produtos inovadores para casa, cozinha e organização</strong>. Em 2020 abriu capital na <strong>NASDAQ (BWMX)</strong> — sendo a primeira empresa mexicana do setor de venda direta listada em Nova York.</p>
    <p>Em 2022 a Betterware adquiriu a <strong>Jafra Cosmetics</strong> (empresa americana de cosméticos com 65+ anos de história), formando o <strong>Grupo BeFra</strong> (Betterware + Fábrica) — uma das <strong>maiores empresas de venda direta da América Latina</strong>. O grupo combina produtos para casa (Betterware) e cosméticos (Jafra) em um só ecossistema.</p>
    <p>Com receita superior a <strong>US$ 620 milhões</strong>, mais de <strong>900 mil distribuidoras ativas</strong>, novo catálogo publicado a cada <strong>3 semanas</strong> e presença em <strong>6 países</strong>, a Betterware ocupa o <strong>Top 35 mundial no DSN Global 100 2026</strong>.</p>
  `,
  timelineTitle: "A jornada da Betterware desde 1995",
  milestones: [
    { year: "1995", title: "Fundação em Guadalajara", text: "Nasce como distribuidora de produtos inovadores para casa e cozinha." },
    { year: "2001", title: "Modelo de catálogo quinzenal", text: "Adota estratégia de novo catálogo a cada 3 semanas — diferencial competitivo." },
    { year: "2015", title: "Expansão LATAM", text: "Chegada à Guatemala, Peru e Colômbia." },
    { year: "2020", title: "IPO na NASDAQ", text: "Abre capital sob o ticker BWMX — primeira mexicana de venda direta em NY." },
    { year: "2020", title: "Boom pandemia", text: "Receita dobra durante a pandemia com produtos para home office e cozinha." },
    { year: "2022", title: "Aquisição da Jafra Cosmetics", text: "Compra da americana Jafra por US$ 255 mi — nasce o Grupo BeFra." },
    { year: "2024", title: "Expansão EUA", text: "Consolidação de operação nos EUA e ampliação de catálogo." },
    { year: "2026", title: "Top 35 mundial", text: "US$ 620 mi em receita e liderança absoluta em produtos para casa no LATAM." },
  ],
  productsIntro:
    "Portfólio focado em <strong>produtos inovadores para casa, cozinha e organização</strong>, com <strong>novo catálogo a cada 3 semanas</strong> — mais de 1.500 SKUs ativos e forte apelo em preço acessível e utilidade prática.",
  productLines: [
    { name: "Cozinha & Organização", tag: "Carro-chefe", color: "from-blue-500/15 to-blue-700/5",
      text: "Utensílios de cozinha, organizadores, potes herméticos e acessórios funcionais — categoria mais vendida da marca.",
      items: ["Organizadores modulares", "Potes herméticos", "Utensílios cozinha", "Recipientes freezer"] },
    { name: "Casa & Limpeza", tag: "Prático", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Produtos para limpeza, lavanderia, banheiro, decoração e organização geral da casa.",
      items: ["Kits limpeza", "Cabides", "Cestos organizadores", "Acessórios banheiro"] },
    { name: "Jafra Cosmetics", tag: "Cosméticos BeFra", color: "from-fuchsia-500/15 to-fuchsia-700/5",
      text: "Linha completa de cosméticos, skincare, perfumes e cuidados pessoais adquirida em 2022.",
      items: ["Skincare Anti-Age", "Maquiagem", "Perfumes", "Cuidado corporal"] },
    { name: "Tecnologia & Inovação", tag: "Novidades", color: "from-amber-500/15 to-amber-700/5",
      text: "Eletroportáteis pequenos, gadgets para casa, iluminação inteligente e novidades sazonais.",
      items: ["Gadgets", "Iluminação LED", "Ferramentas", "Novidades sazonais"] },
  ],
  planTitle: "Plano de Compensação Betterware (Catálogo por Ciclos)",
  planIntro:
    "Modelo <strong>venda por catálogo com margens fixas</strong> + <strong>bônus por volume de equipe</strong>. Distribuidoras compram do catálogo com desconto de 25-40% e revendem — indicações geram bônus por níveis (uni-nível clássico).",
  planRanks: [
    { rank: "Distribuidora Independente", payout: "25-40% margem", text: "Registro básico — compra com desconto e revende com margem." },
    { rank: "Asociada", payout: "+ Bônus 5% grupo pessoal", text: "Ativa vendas mensais mínimas — bônus sobre indicações diretas." },
    { rank: "Líder", payout: "+ Bônus 8-12% de rede", text: "Múltiplas indicadas ativas — bônus multi-nível até 3 níveis." },
    { rank: "Líder Master", payout: "+ Bônus Liderança 3-5%", text: "Equipe consolidada com produção mensal expressiva." },
    { rank: "Líder Diamante / Elite", payout: "+ Pool de Liderança + Viagens", text: "Elite — bônus especiais, incentivos e viagens internacionais." },
  ],
  pros: [
    "Empresa listada na NASDAQ (BWMX) — total transparência",
    "Novo catálogo a cada 3 semanas — cliente sempre engajado",
    "Produtos com preço acessível e alto giro",
    "Sem taxa de manutenção — modelo por catálogo simples",
    "Kit inicial baixíssimo (~US$ 5 no México)",
    "Grupo BeFra combina casa + cosméticos (Jafra) em um só sistema",
  ],
  cons: [
    "Ainda não opera oficialmente no Brasil",
    "Margem menor que MMN de suplemento premium",
    "Modelo mais focado em vendas do que em construção de rede",
    "Concorrência forte no LATAM com Natura, Avon e Jequiti",
  ],
  presenceIntro:
    "A Betterware opera em <strong>6 países</strong> — Mexico (sede), EUA (via Jafra), Guatemala, Peru, Colômbia e Equador. O <strong>Brasil ainda não faz parte da operação oficial</strong>, mas há expectativa de expansão futura.",
  countries: [
    "🇲🇽 México", "🇺🇸 EUA (Jafra)", "🇬🇹 Guatemala", "🇵🇪 Peru", "🇨🇴 Colômbia", "🇪🇨 Equador",
  ],
  awards: [
    "DSN Global 100 — Top 35 (2026)",
    "IPO na NASDAQ (2020) — primeira mexicana do setor",
    "Great Place to Work México (múltiplos anos)",
    "Prêmio Ex expansão em empresas listadas na Bolsa Mexicana",
    "Reconhecimento como uma das empresas mais inovadoras do LATAM",
  ],
  certifications: [
    "NASDAQ Listed (BWMX)",
    "ISO 9001",
    "ANMV — Asociación Nacional Mexicana de Ventas Directas",
    "COFEPRIS (produtos cosméticos Jafra)",
    "Certificações ambientais para embalagens",
  ],
  faqs: [
    { q: "O que é a Betterware de México (BeFra)?",
      a: "É a maior empresa mexicana de venda direta de produtos para casa e cozinha, fundada em 1995 em Guadalajara. Em 2020 abriu capital na NASDAQ (BWMX) e em 2022 adquiriu a Jafra Cosmetics, formando o Grupo BeFra." },
    { q: "Quanto fatura a Betterware em 2026?",
      a: "O Grupo BeFra faturou aproximadamente US$ 620 milhões em 2025, ocupando o Top 35 do ranking Direct Selling News Global 100 2026. As ações estão listadas na NASDAQ sob o ticker BWMX." },
    { q: "A Betterware opera no Brasil?",
      a: "Não. A Betterware ainda não tem operação oficial no Brasil. Atua no México (sede), EUA (via Jafra), Guatemala, Peru, Colômbia e Equador. Há expectativa de expansão para o Brasil nos próximos anos." },
    { q: "Como funciona o modelo de catálogo da Betterware?",
      a: "A Betterware publica um novo catálogo a cada 3 semanas (aproximadamente 17 catálogos por ano) — um dos ciclos mais rápidos do setor. Isso mantém as clientes sempre engajadas com novidades e permite alto giro de vendas para as distribuidoras." },
    { q: "Quanto custa começar na Betterware?",
      a: "No México, o kit inicial custa aproximadamente MXN $99 (~US$ 5). É um dos kits mais acessíveis do setor MMN mundial, focado em atrair grande volume de distribuidoras iniciantes." },
    { q: "Betterware é pirâmide financeira?",
      a: "Não. É uma empresa listada na NASDAQ (BWMX) desde 2020, com balanço trimestral público, 30 anos de mercado e produtos reais vendidos por catálogo ao consumidor final. É um modelo de venda direta clássico com componentes MMN." },
    { q: "O que é a Jafra Cosmetics adquirida pela Betterware?",
      a: "A Jafra é uma empresa americana de cosméticos fundada em 1956 na Califórnia, adquirida pela Betterware em 2022 por US$ 255 milhões. Somada ao Grupo BeFra, adicionou operação forte em cosméticos, skincare e perfumes nos EUA, México e Europa." },
    { q: "Quais são os principais produtos da Betterware?",
      a: "Organizadores modulares para cozinha, potes herméticos, utensílios de cozinha, produtos de limpeza, cestos organizadores, cabides, gadgets para casa e produtos sazonais. Após a aquisição da Jafra, também cosméticos, skincare e perfumes." },
    { q: "Como funciona o plano de compensação da Betterware?",
      a: "É um plano de venda por catálogo com margem de 25-40% no ato + bônus por volume de equipe (uni-nível clássico até 3 níveis). Ranks superiores (Líder, Líder Master, Diamante) recebem bônus de liderança e viagens incentivo internacionais." },
    { q: "Vale a pena trabalhar com Betterware?",
      a: "Sim, especialmente no México e países onde opera oficialmente. É ideal para quem gosta de vender por catálogo com alto giro e produtos acessíveis. Para brasileiros, ainda não é uma opção oficial — sugerimos acompanhar a possível expansão." },
  ],
  founders: ["Luis Campos", "Gonzalo Campos"],
  foundingDate: "1995-01-01",
  foundingLocation: "Guadalajara, Jalisco, México",
  employees: 3500,
  alternateNames: ["Betterware", "BeFra", "BWMX", "Grupo BeFra"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Betterware_de_M%C3%A9xico",
};

const Betterware = () => <CompanyPremiumPage data={data} />;
export default Betterware;
