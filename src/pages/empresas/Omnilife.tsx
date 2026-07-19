import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Omnilife",
  slug: "omnilife",
  officialUrl: "https://www.omnilife.com/",
  domain: "omnilife.com",
  seoTitle: "Omnilife: MMN Mexicana de Nutrição Celular | Top 38 Mundial 2026",
  seoDescription:
    "Omnilife é a maior MMN mexicana do mundo — fundada por Jorge Vergara, referência em nutrição celular e suplementos com micelização. US$ 600 mi em receita anual e presença em 21 países.",
  rankingLabel: "TOP 38 MUNDIAL • MMN MEXICANA #1 GLOBAL",
  heroHeadlineSuffix: "Nutrição Celular Micelizada Made in Mexico",
  heroParagraph:
    "Fundada em 1991 em Guadalajara por Jorge Vergara, a Omnilife revolucionou o mercado com nutracêuticos micelizados (absorção acelerada). É a maior MMN da América Latina em nutrição celular, com presença em 21 países.",
  heroBadges: [
    { label: "34+ anos", icon: "calendar" },
    { label: "21 países", icon: "globe" },
    { label: "Micelização", icon: "check" },
    { label: "5 milhões de distribuidores", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 38", hint: "Business For Home" },
    { icon: "calendar", label: "Fundação", value: "1991", hint: "Guadalajara, México" },
    { icon: "map", label: "País de Origem", value: "México 🇲🇽", hint: "Sede em Guadalajara, Jalisco" },
    { icon: "globe", label: "Países", value: "21", hint: "Américas + EUA + Europa Ibérica" },
    { icon: "users", label: "Distribuidores", value: "5 milhões+", hint: "Latin America e EUA hispânico" },
    { icon: "package", label: "Produtos", value: "150+", hint: "Nutracêuticos, wellness, cosméticos" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 600 mi", hint: "Fonte: DSN Global 100" },
    { icon: "factory", label: "Fábrica", value: "Guadalajara", hint: "Micelización tecnológica proprietária" },
  ],
  aboutHtml: `
    <p><strong>Grupo Omnilife-Chivas</strong> é uma multinacional mexicana fundada em <strong>1991</strong> por <em>Jorge Vergara Madrigal</em> (1955-2019) em <strong>Guadalajara, Jalisco</strong>. É a <strong>maior empresa de vendas diretas do México</strong> e uma das maiores MMN da América Latina, especializada em <strong>nutrição celular micelizada</strong>.</p>
    <p>Seu grande diferencial é a <strong>tecnologia de micelização</strong> — processo que reduz partículas de nutrientes a tamanho molecular, aumentando absorção celular em até 90% (vs. 20-40% de suplementos tradicionais). Essa técnica, patenteada nos anos 90, tornou-se marca registrada da Omnilife e revolucionou o segmento de nutracêuticos MMN na América Latina.</p>
    <p>Com <strong>US$ 600 mi em receita anual</strong>, a Omnilife é <strong>Top 38 no Business For Home 2026</strong>, opera em <strong>21 países</strong> (México, EUA hispânico, toda LATAM, Espanha, Portugal) e é dona também do <strong>Club Deportivo Guadalajara (Chivas)</strong> — um dos maiores times de futebol do México, adquirido em 2002 pelo fundador.</p>
  `,
  timelineTitle: "De Guadalajara à liderança latino-americana em nutrição celular",
  milestones: [
    { year: "1991", title: "Fundação", text: "Jorge Vergara funda Omnilife em Guadalajara com Magnus." },
    { year: "1995", title: "Micelización", text: "Patenteia tecnologia de micelização — diferencial global." },
    { year: "2000", title: "US$ 500 mi", text: "Torna-se maior MMN da América Latina em receita." },
    { year: "2002", title: "Compra do Chivas", text: "Adquire Club Deportivo Guadalajara (Chivas)." },
    { year: "2010", title: "Chega à Espanha", text: "Primeira operação europeia oficial." },
    { year: "2019", title: "Morte de Jorge Vergara", text: "Filho Amaury Vergara assume liderança." },
    { year: "2022", title: "Reposicionamento", text: "Nova identidade e foco em wellness holístico." },
    { year: "2024", title: "Expansão digital", text: "Plataforma e-commerce e app de distribuidor renovados." },
    { year: "2026", title: "Top 38 mundial", text: "US$ 600 mi em receita, 5 milhões de distribuidores." },
  ],
  productsIntro:
    "Mais de <strong>150 produtos</strong> em nutracêuticos micelizados, controle de peso, cosméticos, cuidados capilares e higiene — todos fabricados na unidade de Guadalajara com tecnologia própria.",
  productLines: [
    { name: "Nutrición Celular", tag: "Micelizados icônicos", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplementos micelizados de vitaminas, minerais e antioxidantes com absorção acelerada.",
      items: ["Aloe Beta", "Magnus", "Ego Frut", "Fem Plus", "Optimus"] },
    { name: "Control de Peso", tag: "Best-seller LATAM", color: "from-amber-500/15 to-amber-700/5",
      text: "Sistema de emagrecimento com shakes proteicos e supressores de apetite.",
      items: ["Thermogen Tea", "Kikaru", "Uzo", "Cafezzino Plus"] },
    { name: "Seytú Cosmetics", tag: "Beleza", color: "from-rose-500/15 to-rose-700/5",
      text: "Linha de cosméticos, skincare e maquiagem feminina — marca-irmã da Omnilife.",
      items: ["Base HD", "Serum Anti-Age", "Batons", "Máscara Facial"] },
    { name: "Higiene & Hogar", tag: "Wellness diário", color: "from-sky-500/15 to-sky-700/5",
      text: "Xampus, sabonetes, cremes dentais e produtos de higiene com ativos naturais.",
      items: ["Shampoo Ginkgo", "Body Wash", "Dentifrice", "Deodorants"] },
  ],
  planTitle: "Plano de Compensação Omnilife",
  planIntro:
    "Modelo <strong>multinível clássico com bônus de liderança e viagens</strong>. Foco em consumo mensal recorrente e formação de grupos ativos.",
  planRanks: [
    { rank: "Distribuidor", payout: "Preço distribuidor", text: "Cadastro básico com desconto em produtos." },
    { rank: "Consultor", payout: "10-30% varejo", text: "Comissão direta e primeiros overrides." },
    { rank: "Empresario", payout: "+ Bônus liderança", text: "Grupo com 300 PV/mês mínimo." },
    { rank: "Diamante", payout: "+ Bônus viajem", text: "Múltiplas linhas ativas, prêmios internacionais." },
    { rank: "Perla / Rubí / Presidencial", payout: "Elite Pool", text: "Topo LATAM — carros, viagens e bônus 6-7 dígitos." },
  ],
  pros: [
    "Tecnologia de micelização patenteada (absorção superior)",
    "Preços acessíveis e produtos de consumo diário",
    "Forte presença cultural (dono do Chivas de futebol)",
    "34+ anos no mercado — estabilidade real",
    "Cadastro simples e barato",
    "Materiais em espanhol e português",
  ],
  cons: [
    "Operação no Brasil descontinuada em alguns períodos",
    "Concorrência forte com Hinode, Vida Divina e Herbalife em LATAM",
    "Portfólio muito amplo (foco disperso)",
    "Mudanças de gestão pós-2019 geraram instabilidade em alguns mercados",
    "Poucas linhas veganas/orgânicas comparado a concorrentes",
  ],
  presenceIntro:
    "Presente em <strong>21 países das Américas e Europa Ibérica</strong> — México (mercado principal), EUA hispânico, toda América Central e do Sul, Espanha e Portugal.",
  countries: [
    "🇲🇽 México", "🇺🇸 EUA (hispânico)", "🇨🇴 Colômbia", "🇻🇪 Venezuela", "🇦🇷 Argentina",
    "🇨🇱 Chile", "🇵🇪 Peru", "🇪🇨 Equador", "🇬🇹 Guatemala", "🇸🇻 El Salvador",
    "🇭🇳 Honduras", "🇳🇮 Nicarágua", "🇨🇷 Costa Rica", "🇵🇦 Panamá", "🇩🇴 Rep. Dominicana",
    "🇧🇴 Bolívia", "🇺🇾 Uruguai", "🇵🇾 Paraguai", "🇪🇸 Espanha", "🇵🇹 Portugal", "🇮🇹 Itália",
  ],
  awards: [
    "Top 40 DSN Global 100 — 2026",
    "Empresa Socialmente Responsable (CEMEFI) — México",
    "Superbrands México",
    "Effie Awards LATAM (marketing)",
    "Great Place to Work — México",
  ],
  certifications: [
    "ISO 9001",
    "GMP (fabricação)",
    "COFEPRIS (Regulação sanitária México)",
    "FDA (produtos aprovados nos EUA)",
    "Halal Certified (linhas selecionadas)",
  ],
  faqs: [
    { q: "O que é a Omnilife?",
      a: "É uma multinacional mexicana de vendas diretas fundada em 1991 por Jorge Vergara em Guadalajara. Especializada em nutracêuticos micelizados (absorção celular acelerada), controle de peso, cosméticos (marca Seytú) e higiene pessoal. É a maior MMN da América Latina em nutrição celular." },
    { q: "Quanto fatura a Omnilife?",
      a: "Em 2025 a Omnilife faturou US$ 600 milhões, ocupando o Top 38 no ranking DSN Global 100 / Business For Home 2026." },
    { q: "O que é micelização?",
      a: "É uma tecnologia patenteada pela Omnilife que reduz partículas de nutrientes ao tamanho molecular (nanoescala), aumentando a absorção celular em até 90% — vs 20-40% de comprimidos e cápsulas tradicionais. É o principal diferencial da marca." },
    { q: "A Omnilife opera no Brasil?",
      a: "Sim, mas de forma limitada. A operação brasileira já teve altos e baixos ao longo dos anos. Em 2026, o cadastro é possível via representação internacional (mercados de Argentina/México) ou via patrocinador direto. Consulte a operação oficial local antes de investir." },
    { q: "Quais os produtos mais vendidos?",
      a: "Aloe Beta (imunidade), Magnus (energia masculino), Ego Frut (antioxidante), Fem Plus (feminino), Thermogen Tea (termogênico) e Cafezzino Plus (café emagrecedor) são os best-sellers históricos da marca." },
    { q: "Como funciona o plano de compensação da Omnilife?",
      a: "É um modelo multinível clássico com comissões de 10-30% no varejo, overrides sobre grupo, bônus de liderança, viagens internacionais para Diamantes+ e Elite Pool para ranks Perla, Rubí e Presidencial." },
    { q: "É verdade que a Omnilife é dona do Chivas?",
      a: "Sim. O Grupo Omnilife adquiriu o Club Deportivo Guadalajara (Chivas) em 2002 sob liderança de Jorge Vergara. É um dos clubes mais tradicionais do futebol mexicano. Após a morte do fundador em 2019, o filho Amaury Vergara assumiu a presidência do clube." },
    { q: "A Omnilife é segura?",
      a: "Sim. Opera há 34+ anos, tem fábrica própria em Guadalajara com certificações ISO 9001 e GMP, regulada pela COFEPRIS no México e FDA nos EUA. É Top 40 mundial e uma das MMN mais tradicionais da América Latina." },
  ],
  founders: ["Jorge Vergara Madrigal"],
  foundingDate: "1991-05-15",
  foundingLocation: "Guadalajara, Jalisco, México",
  employees: 2000,
  alternateNames: ["Grupo Omnilife", "Omnilife-Chivas", "Grupo Omnilife-Chivas"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Omnilife",
};

const Omnilife = () => <CompanyPremiumPage data={data} />;
export default Omnilife;
