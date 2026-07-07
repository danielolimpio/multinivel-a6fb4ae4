import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Atomy",
  slug: "atomy",
  officialUrl: "https://www.atomy.com/",
  domain: "atomy.com",
  seoTitle: "Atomy: Gigante Coreana de MMN | Top 19 Mundial 2026",
  seoDescription:
    "Atomy é a maior empresa de MMN da Coreia do Sul, com filosofia Absolute Quality Absolute Price, mais de US$ 1,9 bi em receita, presença em 27 países e milhões de membros globais.",
  rankingLabel: "TOP 19 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "Absolute Quality, Absolute Price",
  heroParagraph:
    "Fundada em 2009 por Han-Gill Park em Gongju (Coreia do Sul), a Atomy é a maior MMN coreana do mundo, com filosofia Absolute Quality Absolute Price, parcerias com Kolmar Korea e presença em 27 países.",
  heroBadges: [
    { label: "15+ anos", icon: "calendar" },
    { label: "27 países", icon: "globe" },
    { label: "Milhões de membros", icon: "users" },
    { label: "Made in Korea", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 19", hint: "Maior MMN coreana global" },
    { icon: "calendar", label: "Fundação", value: "2009", hint: "Gongju, Coreia do Sul" },
    { icon: "map", label: "País de Origem", value: "Coreia do Sul 🇰🇷", hint: "Sede em Gongju" },
    { icon: "globe", label: "Países", value: "27", hint: "Ásia, Américas, Europa, Oceania" },
    { icon: "users", label: "Membros Ativos", value: "20 milhões+", hint: "Global (todos os mercados)" },
    { icon: "package", label: "Produtos", value: "800+", hint: "Beleza, saúde, casa e alimentos" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 1,9 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Parceiros de Fábrica", value: "Kolmar Korea", hint: "Cosmético líder mundial (também L'Oréal)" },
  ],
  aboutHtml: `
    <p>A <strong>Atomy Co., Ltd.</strong> é uma multinacional sul-coreana fundada em <strong>2009</strong> por <em>Han-Gill Park</em>, com sede em <strong>Gongju, província de Chungcheong do Sul</strong>. É a maior empresa de marketing multinível da Coreia do Sul e uma das que mais cresce globalmente.</p>
    <p>Seu diferencial é a filosofia <strong>Absolute Quality, Absolute Price</strong> (Qualidade Absoluta, Preço Absoluto): a empresa entrega produtos de altíssima qualidade produzidos por fabricantes premium coreanos (como <strong>Kolmar Korea</strong>, que também fabrica para Estée Lauder e L'Oréal) pelos preços mais competitivos do mercado.</p>
    <p>Com <strong>US$ 1,9 bi em receita anual</strong>, Atomy está no <strong>Top 19 do ranking Business For Home 2026</strong>, opera em <strong>27 países</strong> (Coreia, Japão, EUA, Canadá, Taiwan, Filipinas, Singapura, Malásia, Índia, México, Colômbia e mais) e conta com <strong>mais de 20 milhões de membros globais</strong>.</p>
  `,
  timelineTitle: "Da HemoHIM ao império coreano do MMN",
  milestones: [
    { year: "2004", title: "Origem do produto", text: "Han-Gill Park lança a HemoHIM (imunológico) — base da futura Atomy." },
    { year: "2009", title: "Fundação oficial", text: "Atomy é oficialmente fundada em Gongju, Coreia do Sul." },
    { year: "2010", title: "Expansão asiática", text: "Entra em Japão, Taiwan e Singapura." },
    { year: "2015", title: "Chega às Américas", text: "Abre operações nos EUA, Canadá e México." },
    { year: "2018", title: "US$ 1 bilhão", text: "Atinge marca histórica de 1 bi em receita anual." },
    { year: "2020", title: "20 milhões de membros", text: "Ultrapassa a marca simbólica de 20 milhões de membros globais." },
    { year: "2023", title: "Chega ao Brasil", text: "Anuncia planos para América do Sul com expansão via representantes." },
    { year: "2026", title: "Top 19 mundial", text: "US$ 1,9 bi de receita e presença consolidada em 27 países." },
  ],
  productsIntro:
    "Mais de <strong>800 produtos</strong> em cosméticos K-Beauty, suplementos, alimentos funcionais, higiene pessoal, cuidados com o lar e itens do dia a dia — todos com preço até 30% abaixo do varejo tradicional.",
  productLines: [
    { name: "The Fame (Skincare)", tag: "K-Beauty premium", color: "from-rose-500/15 to-rose-700/5",
      text: "Linha de skincare de alto padrão coreana — sucesso absoluto de vendas mundial.",
      items: ["The Fame Cream", "The Fame Toner", "The Fame Serum", "The Fame Ampoule"] },
    { name: "Absolute CellActive", tag: "Anti-idade", color: "from-purple-500/15 to-purple-700/5",
      text: "Linha anti-idade com tecnologia de células-tronco vegetais — Kolmar Korea.",
      items: ["Skin Toner", "Emulsion", "Eye Cream", "Cell Cream"] },
    { name: "HemoHIM", tag: "Carro-chefe global", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Suplemento imunológico com angelica, ligustro e cnidium — best-seller histórico da Atomy.",
      items: ["HemoHIM", "Probiótico", "Colágeno", "Omega-3", "Vitamina C"] },
    { name: "Household & Food", tag: "Casa e alimentação", color: "from-amber-500/15 to-amber-700/5",
      text: "Detergentes, cremes dentais, alimentos coreanos, café, óleo de perilla e muito mais.",
      items: ["Toothpaste", "Dish Detergent", "Laundry", "Coffee Slim", "Perilla Oil"] },
  ],
  planTitle: "Plano de Compensação Atomy (Master Marketing)",
  planIntro:
    "Plano binário-híbrido único no mercado. Sem manutenção mensal obrigatória, sem qualificação de PV mínimo — pontos acumulam para sempre (Lifetime Points). Comissões pagas até <strong>Imperial Master</strong> (topo global).",
  planRanks: [
    { rank: "Member", payout: "Preço membro", text: "Cadastro gratuito — compra com preço de membro para sempre." },
    { rank: "Sales Master", payout: "5% Sales Master Bonus", text: "300.000 PV de grupo acumulados." },
    { rank: "Diamond Master", payout: "+ Diamond Bonus", text: "600.000 PV em 2 legs de Sales Master." },
    { rank: "Sharon Rose Master", payout: "+ Global Bonus", text: "3 legs de Diamond Master." },
    { rank: "Star Master", payout: "+ Star Pool", text: "3 legs de Sharon Rose." },
    { rank: "Royal / Crown / Imperial", payout: "Elite Global Pool", text: "Topo mundial da Atomy — bônus internacional." },
  ],
  pros: [
    "Preços muito abaixo do varejo (Absolute Price)",
    "Sem manutenção mensal obrigatória — pontos vitalícios",
    "Cadastro 100% gratuito",
    "Qualidade K-Beauty (fabricação Kolmar Korea)",
    "Presente em 27 países — networking global real",
    "Empresa jovem em rápido crescimento (Top 20 mundial)",
  ],
  cons: [
    "Bônus só começam após 300 mil PV (demora para novato)",
    "Marca menos conhecida fora da Ásia",
    "Suporte em português ainda limitado",
    "Operação no Brasil ainda em fase inicial",
    "Modelo binário exige balancear as duas equipes",
  ],
  presenceIntro:
    "Presente em <strong>27 países da Ásia, Américas, Europa e Oceania</strong> — com forte concentração na Coreia, Japão, Taiwan, Filipinas e EUA.",
  countries: [
    "🇰🇷 Coreia do Sul", "🇯🇵 Japão", "🇹🇼 Taiwan", "🇭🇰 Hong Kong", "🇸🇬 Singapura", "🇲🇾 Malásia",
    "🇵🇭 Filipinas", "🇹🇭 Tailândia", "🇮🇳 Índia", "🇮🇩 Indonésia", "🇨🇳 China", "🇻🇳 Vietnã",
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇲🇽 México", "🇨🇴 Colômbia", "🇧🇷 Brasil", "🇷🇺 Rússia",
    "🇹🇷 Turquia", "🇰🇿 Cazaquistão", "🇦🇺 Austrália", "🇳🇿 Nova Zelândia", "🇦🇪 Emirados Árabes",
    "🇬🇧 Reino Unido", "🇩🇪 Alemanha", "🇫🇷 França", "🇮🇱 Israel",
  ],
  awards: [
    "Top 20 Direct Selling News Global 100 — 2026",
    "Bravo Growth Award (DSN)",
    "Korea Brand Star",
    "Prêmio Presidente da República da Coreia do Sul",
    "Best MLM Company Asia (várias edições)",
  ],
  certifications: [
    "ISO 9001 / 14001",
    "GMP Cosmético (Kolmar Korea)",
    "KFDA (Coreia)",
    "FDA (EUA) — produtos aprovados",
    "Halal Certified (linhas selecionadas)",
  ],
  faqs: [
    { q: "O que é a Atomy?",
      a: "É a maior empresa de marketing multinível da Coreia do Sul, fundada em 2009 por Han-Gill Park. Atua em cosméticos K-Beauty, suplementos e itens de consumo com filosofia Absolute Quality Absolute Price." },
    { q: "Quanto fatura a Atomy?",
      a: "Em 2025 a Atomy faturou US$ 1,9 bilhão, ocupando o Top 19 no ranking mundial Business For Home 2026." },
    { q: "A Atomy opera no Brasil?",
      a: "Sim. A Atomy está presente no Brasil desde 2023 com operação em fase de expansão via membros e centros de distribuição." },
    { q: "É preciso pagar para entrar na Atomy?",
      a: "Não. O cadastro na Atomy é 100% gratuito — não há kit obrigatório nem manutenção mensal. Basta ser indicado por um membro ativo." },
    { q: "Quais os principais produtos da Atomy?",
      a: "The Fame Skincare, Absolute CellActive (anti-idade), HemoHIM (imunológico), creme dental, detergentes, café Slim, óleo de perilla e mais de 800 SKUs." },
    { q: "Quem fabrica os produtos da Atomy?",
      a: "A maioria dos cosméticos é fabricada pela Kolmar Korea — a mesma empresa que produz para L'Oréal, Estée Lauder e Shiseido. Suplementos vêm de fábricas GMP coreanas parceiras." },
    { q: "Como funciona o plano de compensação?",
      a: "É um modelo Master Marketing (binário-híbrido) sem manutenção mensal, com pontos vitalícios. As comissões começam ao atingir 300.000 PV de grupo (Sales Master) e crescem até Imperial Master." },
    { q: "A Atomy é segura?",
      a: "Sim. É uma multinacional listada, opera há 15+ anos, tem parceria com Kolmar Korea e possui certificações ISO 9001/14001, KFDA e FDA." },
  ],
  founders: ["Han-Gill Park"],
  foundingDate: "2009-04-01",
  foundingLocation: "Gongju, Coreia do Sul",
  employees: 2500,
  alternateNames: ["Atomy Co., Ltd.", "애터미"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Atomy",
};

const Atomy = () => <CompanyPremiumPage data={data} />;
export default Atomy;
