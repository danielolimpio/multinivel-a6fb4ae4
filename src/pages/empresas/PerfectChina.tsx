import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Perfect China",
  slug: "perfect-china",
  officialUrl: "https://www.perfect99.com/",
  domain: "perfect99.com",
  seoTitle: "Perfect China: Gigante Asiática de Saúde | Top 22 Mundial 2026",
  seoDescription:
    "Perfect China é uma das maiores MMN da Ásia, com raízes malaias e sede em Guangdong. Mais de US$ 1,6 bi em receita anual, portfólio de saúde, beleza e cuidados domésticos em 20+ países.",
  rankingLabel: "TOP 22 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "Saúde, Beleza e Vida Saudável Asiática",
  heroParagraph:
    "Fundada em 1994 na Malásia e reestruturada na China em 1995, a Perfect China é uma multinacional gigante de MMN especializada em nutrição, higiene pessoal e cuidados domésticos, com US$ 1,6 bi de receita e presença em mais de 20 países.",
  heroBadges: [
    { label: "30+ anos", icon: "calendar" },
    { label: "20+ países", icon: "globe" },
    { label: "Milhões de membros", icon: "users" },
    { label: "Fábrica própria", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 22", hint: "Referência asiática em vendas diretas" },
    { icon: "calendar", label: "Fundação", value: "1994", hint: "Origem malaia; sede chinesa em 1995" },
    { icon: "map", label: "País de Origem", value: "China 🇨🇳", hint: "Sede em Zhongshan, Guangdong" },
    { icon: "globe", label: "Países", value: "20+", hint: "Ásia, América, Europa, África" },
    { icon: "users", label: "Membros Ativos", value: "5 milhões+", hint: "Distribuidores globais" },
    { icon: "package", label: "Produtos", value: "200+", hint: "Nutrição, beleza, higiene, casa" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 1,6 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Fábricas Próprias", value: "Zhongshan + Malásia", hint: "Duas unidades industriais" },
  ],
  aboutHtml: `
    <p>A <strong>Perfect (China) Co., Ltd.</strong> — comumente chamada de <strong>Perfect China</strong> — é uma multinacional de vendas diretas fundada em <strong>1994 na Malásia</strong> por um grupo de empreendedores chineses, tendo relocado sua sede para <strong>Zhongshan, província de Guangdong (China)</strong> em <strong>1995</strong>.</p>
    <p>É uma das <strong>primeiras empresas estrangeiras a obter licença oficial de venda direta na China</strong>, país onde o modelo MMN é fortemente regulado. Seu portfólio combina <strong>medicina tradicional chinesa, biotecnologia moderna e cuidados domésticos</strong>, com produção verticalizada em duas fábricas próprias.</p>
    <p>Com <strong>US$ 1,6 bi em receita anual</strong>, a Perfect China está no <strong>Top 22 do ranking Business For Home 2026</strong>, opera em mais de <strong>20 países</strong> (China, Malásia, Cingapura, Tailândia, Filipinas, Indonésia, Rússia, Camboja, Nigéria e outros mercados emergentes) e conta com <strong>mais de 5 milhões de distribuidores globais</strong>.</p>
  `,
  timelineTitle: "Da Malásia à liderança de MMN na China",
  milestones: [
    { year: "1994", title: "Fundação na Malásia", text: "Empresa é fundada em Kuala Lumpur com foco em nutrição herbal." },
    { year: "1995", title: "Sede transferida à China", text: "Muda operações para Zhongshan (Guangdong) — mercado principal." },
    { year: "2006", title: "Licença oficial China", text: "Recebe uma das primeiras licenças de venda direta do governo chinês." },
    { year: "2010", title: "Expansão sudeste asiático", text: "Entra em Tailândia, Filipinas, Indonésia e Vietnã." },
    { year: "2015", title: "US$ 1 bilhão", text: "Ultrapassa marca de US$ 1 bi em receita anual." },
    { year: "2018", title: "Expansão para África", text: "Abre operações na Nigéria, Camarões e África do Sul." },
    { year: "2022", title: "Novo hub Zhongshan", text: "Inaugura ampliação do complexo industrial em Guangdong." },
    { year: "2026", title: "Top 22 mundial", text: "US$ 1,6 bi em receita e liderança consolidada na China." },
  ],
  productsIntro:
    "Mais de <strong>200 produtos</strong> em nutrição funcional, ervas medicinais chinesas, higiene pessoal, cosméticos, cuidados domésticos e purificadores — todos fabricados nas unidades próprias da Perfect.",
  productLines: [
    { name: "Nutrição & TCM", tag: "Carro-chefe", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos com ervas da medicina tradicional chinesa (TCM), colágeno e probióticos.",
      items: ["Perfect Protein", "Aloe Vera Gel", "Ganoderma", "Fibra Solúvel", "Vitaminas"] },
    { name: "Sky Line Skincare", tag: "Beleza", color: "from-rose-500/15 to-rose-700/5",
      text: "Linha de cuidados faciais com ativos chineses e tecnologia biotech.",
      items: ["Sky Line Cream", "Toner", "Serum", "Máscara Facial"] },
    { name: "Perfect Home", tag: "Casa & higiene", color: "from-sky-500/15 to-sky-700/5",
      text: "Produtos de higiene pessoal, sabonetes, xampus e detergentes ecológicos.",
      items: ["Toothpaste", "Shampoo", "Body Wash", "Dish Cleaner"] },
    { name: "Purificação & Cozinha", tag: "Wellness lar", color: "from-amber-500/15 to-amber-700/5",
      text: "Purificadores de água, panelas de cerâmica e utensílios domésticos premium.",
      items: ["Water Purifier", "Ceramic Cookware", "Air Purifier", "Cutlery Set"] },
  ],
  planTitle: "Plano de Compensação Perfect China (Multinível Chinês)",
  planIntro:
    "Estrutura híbrida adaptada à regulação chinesa. Comissões pagas em <strong>bônus de venda direta, override e pool de liderança</strong> para presidentes regionais e globais.",
  planRanks: [
    { rank: "Member", payout: "Desconto membro", text: "Cadastro básico com preços de distribuidor." },
    { rank: "Sales Consultant", payout: "10-15% direto", text: "Primeiro nível ativo com PV mensal." },
    { rank: "Silver Manager", payout: "+ Bônus grupo", text: "Estrutura pequena com equipe qualificada." },
    { rank: "Gold Manager", payout: "+ Overrides", text: "Equipe expandida em múltiplas linhas." },
    { rank: "Diamond Director", payout: "+ Regional Pool", text: "Elite regional — presente em eventos nacionais." },
    { rank: "Crown Ambassador", payout: "Global Elite Pool", text: "Topo mundial — viagens e prêmios internacionais." },
  ],
  pros: [
    "Uma das primeiras MMN com licença oficial chinesa",
    "Fábrica própria com controle de qualidade verticalizado",
    "Preços competitivos comparado a concorrentes ocidentais",
    "Produtos alinhados com medicina tradicional chinesa",
    "Presença forte no maior mercado consumidor do mundo (China)",
    "Estabilidade de 30+ anos no setor",
  ],
  cons: [
    "Marca pouco conhecida no Ocidente",
    "Sem operação oficial no Brasil",
    "Materiais de treinamento predominantemente em mandarim",
    "Plano de compensação limitado por regulação chinesa",
    "Concorrência interna forte (Infinitus, JoyMain, Sunhope)",
  ],
  presenceIntro:
    "Presente em mais de <strong>20 países da Ásia, África e Europa Oriental</strong>, com concentração no mercado chinês e sudeste asiático.",
  countries: [
    "🇨🇳 China", "🇭🇰 Hong Kong", "🇹🇼 Taiwan", "🇲🇾 Malásia", "🇸🇬 Singapura",
    "🇹🇭 Tailândia", "🇵🇭 Filipinas", "🇮🇩 Indonésia", "🇻🇳 Vietnã", "🇰🇭 Camboja",
    "🇰🇷 Coreia do Sul", "🇯🇵 Japão", "🇷🇺 Rússia", "🇰🇿 Cazaquistão", "🇰🇬 Quirguistão",
    "🇳🇬 Nigéria", "🇨🇲 Camarões", "🇿🇦 África do Sul", "🇦🇪 Emirados Árabes", "🇮🇳 Índia",
  ],
  awards: [
    "Top 25 Direct Selling News Global 100 — 2026",
    "China Direct Selling Excellence Award",
    "Guangdong Enterprise of the Year",
    "Asia Pacific MLM Leadership Award",
    "China Top Health Brand",
  ],
  certifications: [
    "ISO 9001 / 14001",
    "GMP (fabricação farmacêutica)",
    "China Compulsory Certification (CCC)",
    "China Direct Selling License (2006)",
    "SGS (testes independentes)",
  ],
  faqs: [
    { q: "O que é a Perfect China?",
      a: "É uma multinacional de vendas diretas fundada em 1994 na Malásia e com sede na China desde 1995. Atua em nutrição, medicina tradicional chinesa, cosméticos e cuidados domésticos, sendo uma das maiores MMN do mundo." },
    { q: "Quanto fatura a Perfect China?",
      a: "Em 2025 a Perfect China faturou US$ 1,6 bilhão, ocupando o Top 22 no ranking mundial Business For Home 2026." },
    { q: "A Perfect China opera no Brasil?",
      a: "Não. A Perfect China está presente em mais de 20 países (Ásia, África, Europa Oriental) — mas o Brasil ainda não faz parte da operação oficial." },
    { q: "Quais são os principais produtos?",
      a: "Suplementos com ervas chinesas (Aloe Vera Gel, Ganoderma), skincare Sky Line, produtos de higiene pessoal, panelas de cerâmica e purificadores de água." },
    { q: "É seguro entrar na Perfect China?",
      a: "Sim. Opera há mais de 30 anos, foi uma das primeiras empresas estrangeiras a receber licença oficial de venda direta na China (2006), e mantém certificações ISO 9001/14001, GMP e CCC." },
    { q: "Como é o plano de compensação?",
      a: "Modelo multinível adaptado à regulação chinesa, com comissões diretas, overrides e pools de liderança regional/global. Progressão de Sales Consultant a Crown Ambassador." },
    { q: "Onde ficam as fábricas da Perfect China?",
      a: "A Perfect China possui duas fábricas próprias: uma em Zhongshan (Guangdong, China) e outra na Malásia — permitindo controle total de qualidade e verticalização da produção." },
    { q: "Qual a diferença entre Perfect China e Infinitus?",
      a: "Ambas são gigantes chinesas de MMN, mas a Infinitus foca fortemente em medicina herbal chinesa (Li Ka Shing group), enquanto a Perfect China tem portfólio mais amplo incluindo utensílios domésticos e higiene." },
  ],
  founders: ["Koo Yuen Kim"],
  foundingDate: "1994-01-01",
  foundingLocation: "Kuala Lumpur, Malásia (sede: Zhongshan, China)",
  employees: 4000,
  alternateNames: ["Perfect (China) Co., Ltd.", "完美中国", "Perfect99"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Perfect_(company)",
};

const PerfectChina = () => <CompanyPremiumPage data={data} />;
export default PerfectChina;
