import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "C1",
  slug: "c1",
  officialUrl: "https://www.c1official.com/",
  domain: "c1official.com",
  seoTitle: "C1 Vendas Diretas: Cosméticos e Wellness da China | Top 45 MMN Mundial 2026",
  seoDescription:
    "C1 (China) é uma das MMN de cosméticos e wellness que mais cresce na Ásia — US$ 550 mi em receita e Top 45 no ranking Business For Home 2026. Conheça a empresa, produtos e plano de compensação.",
  rankingLabel: "TOP 45 MUNDIAL • MMN CHINESA EM ASCENSÃO",
  heroHeadlineSuffix: "Cosméticos e Wellness que Conquistam a Ásia",
  heroParagraph:
    "Fundada na China em 2012, a C1 combina cosméticos premium, suplementos wellness e cuidados pessoais em um portfólio massivo distribuído por vendas diretas em toda a Ásia — hoje uma das MMN chinesas que mais cresce no mundo, com Top 45 mundial em 2026.",
  heroBadges: [
    { label: "Fundada 2012", icon: "calendar" },
    { label: "China 🇨🇳", icon: "globe" },
    { label: "US$ 550 mi", icon: "dollar" },
    { label: "Ásia + Sudeste", icon: "map" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 45", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "2012", hint: "Guangzhou, China" },
    { icon: "map", label: "País de Origem", value: "China 🇨🇳", hint: "Sede em Guangzhou" },
    { icon: "globe", label: "Países", value: "18", hint: "Ásia, Sudeste Asiático e Oriente Médio" },
    { icon: "users", label: "Distribuidores", value: "1,8 milhão", hint: "Ativos globais" },
    { icon: "package", label: "SKUs", value: "150+", hint: "Cosméticos, wellness e cuidado pessoal" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 550 milhões", hint: "Fonte: BFH 2026" },
    { icon: "factory", label: "Fábricas", value: "3 unidades", hint: "China + Coreia (parceria OEM)" },
  ],
  aboutHtml: `
    <p>A <strong>C1</strong> (C1 Official) é uma multinacional chinesa de vendas diretas fundada em <strong>2012</strong> em <strong>Guangzhou</strong>, focada em <strong>cosméticos premium, suplementos wellness e cuidados pessoais</strong>. É uma das MMN que mais cresce na Ásia — <strong>Top 45 mundial no Business For Home 2026</strong>, com <strong>US$ 550 milhões</strong> de faturamento anual.</p>
    <p>A empresa segue o modelo chinês pós-regulamentação de 2019: <strong>foco em consumo real</strong>, fábrica própria certificada GMP, produtos com <strong>registro sanitário NMPA</strong> (China) e distribuição controlada por licenças de vendas diretas. Presente em 18 países da Ásia e Oriente Médio, com forte expansão em Malásia, Tailândia, Indonésia e Vietnã.</p>
    <p>Palavras-chave-alvo: <em>C1 empresa MMN</em>, <em>C1 vendas diretas</em>, <em>C1 cosméticos China</em>, <em>como se cadastrar C1</em>, <em>plano de compensação C1</em>, <em>C1 é pirâmide ou negócio real</em>.</p>
  `,
  timelineTitle: "De startup chinesa a Top 50 mundial",
  milestones: [
    { year: "2012", title: "Fundação em Guangzhou", text: "Nasce com foco em cosméticos naturais." },
    { year: "2015", title: "Expansão nacional", text: "Alcança 30 províncias chinesas." },
    { year: "2018", title: "Internacionalização", text: "Entra em Malásia, Tailândia e Vietnã." },
    { year: "2020", title: "Fábrica GMP", text: "Inaugura complexo industrial em Guangdong." },
    { year: "2023", title: "US$ 400 mi", text: "Cresce 40% ao ano e ultrapassa marca simbólica." },
    { year: "2026", title: "Top 45 mundial", text: "Consolida presença em 18 países e US$ 550 mi." },
  ],
  productsIntro:
    "A C1 comercializa mais de <strong>150 SKUs</strong> em quatro categorias principais, com destaque para o carro-chefe C1 Whitening Set:",
  productLines: [
    { name: "C1 Beauty (Skincare)", tag: "Carro-chefe", color: "from-pink-500/15 to-pink-700/5",
      text: "Linha de skincare com foco em clareamento, anti-idade e hidratação profunda.",
      items: ["C1 Whitening Set", "C1 Anti-Aging Serum", "C1 Hydra Mask"] },
    { name: "C1 Wellness", tag: "Suplementos", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Cápsulas e bebidas funcionais para imunidade, energia e detox.",
      items: ["Collagen Drink", "Detox Enzyme", "Slim Coffee"] },
    { name: "C1 Care", tag: "Cuidado pessoal", color: "from-blue-500/15 to-blue-700/5",
      text: "Shampoo, sabonete líquido e cuidados corporais dermatologicamente testados.",
      items: ["Shampoo Ginseng", "Body Wash", "Hair Mask"] },
    { name: "C1 Home", tag: "Casa & higiene", color: "from-amber-500/15 to-amber-700/5",
      text: "Produtos de limpeza natural e higiene doméstica premium.",
      items: ["Multi-Purpose Spray", "Dishwash Concentrate"] },
  ],
  planTitle: "Plano de Compensação C1",
  planIntro:
    "O plano C1 é <strong>binário híbrido com bônus unilevel</strong>, cumprindo as regras chinesas pós-2019: comissões só sobre volume de consumo, sem headhunting fee. Ativação por <strong>compra pessoal mensal</strong>.",
  planRanks: [
    { rank: "Member", payout: "10-20% desconto pessoal", text: "Cadastro gratuito com primeira compra." },
    { rank: "Bronze", payout: "Bônus binário 8%", text: "2 diretos ativos + volume pessoal." },
    { rank: "Silver", payout: "+ Matching 10%", text: "Rede duplicada em 2 pernas." },
    { rank: "Gold / Diamond", payout: "+ Pool global 3-5%", text: "Grupo internacional consolidado." },
  ],
  pros: [
    "Empresa em forte crescimento (+40% ao ano)",
    "Fábrica própria com certificação GMP e NMPA",
    "Regulação chinesa pós-2019 (mais segura que MMN antigas)",
    "Produtos premium com boa margem",
    "Expansão internacional em curso",
  ],
  cons: [
    "Ainda sem operação oficial no Brasil",
    "Marca pouco conhecida fora da Ásia",
    "Kits iniciais podem exigir investimento inicial médio",
    "Concorrência forte de Perfect China, Infinitus e Longrich",
    "Comunicação primariamente em mandarim",
  ],
  presenceIntro:
    "Presente em <strong>18 países da Ásia e Oriente Médio</strong>, com destaque para China, Malásia, Tailândia, Indonésia, Vietnã e Emirados Árabes.",
  countries: [
    "🇨🇳 China", "🇲🇾 Malásia", "🇹🇭 Tailândia", "🇮🇩 Indonésia",
    "🇻🇳 Vietnã", "🇸🇬 Singapura", "🇦🇪 Emirados Árabes", "🇰🇷 Coreia do Sul",
  ],
  awards: [
    "Top 45 Business For Home Global 100 — 2026",
    "China Direct Selling Excellence — 2024",
    "ASEAN Best Cosmetics MMN — 2025",
  ],
  certifications: [
    "GMP (Good Manufacturing Practice)",
    "NMPA — Registro sanitário chinês",
    "ISO 9001 & ISO 22716 (cosméticos)",
    "Licença oficial de vendas diretas chinesa",
  ],
  faqs: [
    { q: "O que é a C1 vendas diretas?",
      a: "C1 é uma multinacional chinesa fundada em 2012, especializada em cosméticos, suplementos e cuidado pessoal, com distribuição por vendas diretas em 18 países. Faturou US$ 550 mi em 2025 e ocupa o Top 45 no ranking mundial Business For Home 2026." },
    { q: "A C1 opera no Brasil?",
      a: "Em 2026 a C1 ainda não tem operação oficial no Brasil. A empresa atua principalmente na Ásia (China, Sudeste Asiático) e Oriente Médio. Brasileiros que se cadastram fazem cross-border via Malásia ou Singapura, sem suporte jurídico local." },
    { q: "Como funciona o plano de compensação C1?",
      a: "É um plano binário híbrido com bônus unilevel — comissões pagas sobre volume de consumo (não sobre cadastro). Ranks vão de Member a Diamond, com bônus percentuais crescentes de 8% (Bronze) a 5% de pool global (Diamond)." },
    { q: "A C1 é confiável ou é pirâmide?",
      a: "A C1 é uma empresa legalmente registrada com licença chinesa de vendas diretas (pós-regulamentação de 2019), fábrica própria certificada GMP e produtos com registro NMPA. Não é pirâmide — a receita vem da venda real de cosméticos e wellness, não de cadastros." },
    { q: "Quanto custa começar na C1?",
      a: "O cadastro é gratuito, mas exige compra mínima mensal para ativação (aproximadamente US$ 100-200 dependendo do país). Kits Bronze/Silver têm valores maiores para acelerar ranking." },
    { q: "Quais são os produtos mais vendidos da C1?",
      a: "O carro-chefe é o C1 Whitening Set (kit de clareamento facial), seguido pelo Collagen Drink e pela linha anti-idade C1 Beauty. Todos com registro NMPA e certificação GMP." },
    { q: "Vale a pena trabalhar com a C1 em 2026?",
      a: "Para quem está na Ásia e domina mandarim ou inglês asiático, sim — a C1 cresce 40% ao ano e ainda tem mercado aberto. No Brasil, sem operação oficial, é arriscado — melhor buscar MMN de cosméticos com presença local (Natura, Hinode, O Boticário, Belcorp)." },
  ],
  founders: ["Grupo C1 Cosmetics"],
  foundingDate: "2012-01-01",
  foundingLocation: "Guangzhou, China",
  employees: 1200,
  alternateNames: ["C1 Official", "C1 Cosmetics"],
};

const C1 = () => <CompanyPremiumPage data={data} />;
export default C1;
