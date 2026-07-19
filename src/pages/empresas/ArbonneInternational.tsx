import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Arbonne International",
  slug: "arbonne-international",
  officialUrl: "https://www.arbonne.com/",
  domain: "arbonne.com",
  seoTitle: "Arbonne International: Beleza Vegana e Wellness | Top 40 Mundial 2026",
  seoDescription:
    "Arbonne International é a maior empresa MMN vegana do mundo, com sede em Irvine (Califórnia). Certificada B Corp, oferece cosméticos, nutrição e wellness plant-based. US$ 500 mi em receita anual e presença em 8 países.",
  rankingLabel: "TOP 40 MUNDIAL • B CORP CERTIFIED 2026",
  heroHeadlineSuffix: "Beleza Vegana e Bem-Estar Plant-Based",
  heroParagraph:
    "Fundada em 1980 na Suíça e sediada em Irvine (Califórnia), a Arbonne é referência mundial em cosméticos veganos, nutrição plant-based e wellness holístico. Certificada B Corporation desde 2019, é uma das MMN mais éticas do mundo.",
  heroBadges: [
    { label: "45+ anos", icon: "calendar" },
    { label: "B Corp Certified", icon: "check" },
    { label: "100% Vegana", icon: "check" },
    { label: "8 países", icon: "globe" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 40", hint: "DSN Global 100" },
    { icon: "calendar", label: "Fundação", value: "1980", hint: "Suíça (hoje sede em Irvine, CA)" },
    { icon: "map", label: "País de Origem", value: "Suíça 🇨🇭 / EUA 🇺🇸", hint: "HQ: Irvine, Califórnia" },
    { icon: "globe", label: "Países", value: "8", hint: "EUA, Canadá, UK, Austrália, NZ, Polônia, Alemanha, Taiwan" },
    { icon: "users", label: "Consultoras", value: "500 mil+", hint: "Independent Consultants globais" },
    { icon: "package", label: "Produtos", value: "400+", hint: "Skincare, nutrição, maquiagem, bem-estar" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 500 mi", hint: "Fonte: Business For Home 2026" },
    { icon: "factory", label: "Certificação", value: "B Corp + CCF", hint: "Cruelty-Free International" },
  ],
  aboutHtml: `
    <p>A <strong>Arbonne International</strong> é uma multinacional de vendas diretas fundada em <strong>1980 na Suíça</strong> pelo norueguês <em>Petter Mørck</em>, hoje sediada em <strong>Irvine, Califórnia (EUA)</strong>. É a maior empresa MMN <strong>100% vegana</strong> do mundo e a primeira grande MMN certificada <strong>B Corporation</strong> (2019).</p>
    <p>Seu portfólio integra <strong>skincare botânico, nutrição plant-based, maquiagem clean e wellness</strong>. Todos os produtos são <strong>veganos, cruelty-free, glúten-free</strong> e livres de mais de 2.000 ingredientes proibidos, seguindo o "Arbonne Ingredient Policy" — uma lista mais restritiva do que a europeia (que já exclui 1.400+).</p>
    <p>Com <strong>US$ 500 mi em receita anual</strong>, a Arbonne é <strong>Top 40 no Business For Home 2026</strong>, opera em <strong>8 países</strong> e é reconhecida globalmente por seu programa "30 Days to Healthy Living" — o boot camp de wellness mais famoso do mercado MMN.</p>
  `,
  timelineTitle: "Da Suíça para o topo do wellness plant-based global",
  milestones: [
    { year: "1980", title: "Fundação", text: "Petter Mørck funda a Arbonne em Lausanne (Suíça)." },
    { year: "1982", title: "Chega aos EUA", text: "Inicia operações nos Estados Unidos." },
    { year: "2004", title: "Aquisição Natural Products", text: "Grupo americano compra a marca e amplia expansão." },
    { year: "2014", title: "SkinElixir & RE9", text: "Lança as linhas premium de skincare best-sellers." },
    { year: "2018", title: "30 Days Program", text: "Boot camp de wellness viraliza globalmente." },
    { year: "2019", title: "B Corp Certified", text: "Torna-se a primeira grande MMN certificada B Corp." },
    { year: "2023", title: "Novo HQ verde", text: "Inaugura sede sustentável em Irvine (LEED Gold)." },
    { year: "2026", title: "Top 40 mundial", text: "US$ 500 mi em receita e liderança em beleza clean." },
  ],
  productsIntro:
    "Mais de <strong>400 produtos</strong> 100% veganos, cruelty-free e sem glúten em skincare, nutrição, maquiagem e bem-estar — todos formulados com padrões europeus restritivos.",
  productLines: [
    { name: "RE9 Advanced", tag: "Skincare premium", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Linha anti-idade top de vendas com 9 elementos essenciais para pele madura.",
      items: ["Sérum", "Creme Diurno", "Noturno", "Contorno de Olhos", "Máscara"] },
    { name: "30 Days Nutrition", tag: "Wellness boot camp", color: "from-lime-500/15 to-lime-700/5",
      text: "Sistema plant-based famoso mundialmente para reset de saúde em 30 dias.",
      items: ["Protein Shake", "Fizz Sticks", "Detox Tea", "Fiber Boost", "Digestion Plus"] },
    { name: "Made In The Shade (Makeup)", tag: "Beleza clean", color: "from-rose-500/15 to-rose-700/5",
      text: "Maquiagem clean vegana com ativos de skincare — base, sombras e batons.",
      items: ["CC Cream", "Liquid Foundation", "Mascara", "Lip Gloss"] },
    { name: "FeelFit / MindMastery", tag: "Wellness", color: "from-sky-500/15 to-sky-700/5",
      text: "Suplementos para performance mental, sono e recuperação física.",
      items: ["Sleep Well", "Focus", "Energy Fizz", "Immunity+"] },
  ],
  planTitle: "Plano de Compensação Arbonne (SuccessPlan)",
  planIntro:
    "SuccessPlan é o modelo <strong>unilevel com quebra de patrocínio</strong> mais premiado do mercado — reconhecido pela previsibilidade dos ganhos e por bonificar <strong>venda no varejo, líderes e overrides até 8 níveis</strong>.",
  planRanks: [
    { rank: "Consultant", payout: "35% varejo", text: "Ganho imediato em cada venda direta." },
    { rank: "District Manager", payout: "+ 6% override", text: "Estrutura mínima com 2 legs qualificados." },
    { rank: "Area Manager", payout: "+ Bônus BMW", text: "Elegível ao icônico programa Mercedes-Benz White." },
    { rank: "Regional VP", payout: "+ Mercedes Bônus", text: "Bônus para carro branco, viagens e liderança." },
    { rank: "National VP", payout: "Elite Pool", text: "Topo do plano — bônus 6 dígitos anuais." },
  ],
  pros: [
    "100% vegana e cruelty-free (Beauty With Purpose)",
    "Certificada B Corporation (2019)",
    "Padrão de ingredientes mais restritivo que o europeu",
    "Programa 30 Days Healthy Living viral mundial",
    "Bônus Mercedes-Benz White para top consultoras",
    "Alta recorrência (auto-ship + wellness recurring)",
  ],
  cons: [
    "Sem operação oficial no Brasil (só via NFR)",
    "Preços premium acima do varejo tradicional",
    "Foco muito concentrado em wellness feminino",
    "Kit inicial obrigatório (~US$ 79)",
    "Concorrência forte com Beautycounter, Rodan+Fields",
  ],
  presenceIntro:
    "Presente em <strong>8 países</strong> — EUA, Canadá, Reino Unido, Austrália, Nova Zelândia, Polônia, Alemanha e Taiwan.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇬🇧 Reino Unido", "🇦🇺 Austrália",
    "🇳🇿 Nova Zelândia", "🇵🇱 Polônia", "🇩🇪 Alemanha", "🇹🇼 Taiwan",
  ],
  awards: [
    "Top 40 DSN Global 100 — 2026",
    "B Corporation Certified — 2019",
    "Cruelty-Free International Leaping Bunny",
    "PETA Approved Vegan",
    "Best Places to Work — Orange County (várias edições)",
  ],
  certifications: [
    "B Corporation",
    "Certified Vegan (Vegan.org)",
    "Cruelty-Free International (CCF)",
    "PETA Approved",
    "NSF Certified for Sport (linha nutrição)",
    "Gluten-Free Certified",
  ],
  faqs: [
    { q: "O que é a Arbonne International?",
      a: "É uma multinacional americano-suíça de vendas diretas fundada em 1980, especializada em skincare, nutrição e maquiagem 100% veganos, cruelty-free e livres de mais de 2.000 ingredientes. É a maior MMN vegana do mundo e certificada B Corp." },
    { q: "Quanto fatura a Arbonne?",
      a: "Em 2025 a Arbonne faturou aproximadamente US$ 500 milhões, ocupando o Top 40 do ranking mundial DSN Global 100 / Business For Home 2026." },
    { q: "A Arbonne opera no Brasil?",
      a: "Não. A Arbonne atua oficialmente em 8 países (EUA, Canadá, UK, Austrália, NZ, Polônia, Alemanha e Taiwan). Para o Brasil, o único caminho é operação NFR (Not For Resale) via patrocinador internacional." },
    { q: "Como funciona o plano de compensação da Arbonne?",
      a: "O SuccessPlan é um modelo unilevel com 35% de comissão em varejo, overrides até 8 níveis, bônus de liderança, Mercedes-Benz White Bonus e Elite Pool para National Vice Presidents." },
    { q: "Quanto custa entrar na Arbonne?",
      a: "O kit inicial de Independent Consultant custa cerca de US$ 79 (com produtos incluídos) e há renovação anual de aproximadamente US$ 30. Não há mínimo de compra mensal obrigatório para se manter ativa." },
    { q: "Os produtos Arbonne são realmente veganos?",
      a: "Sim. 100% dos produtos Arbonne são certificados veganos pela Vegan.org, cruelty-free pela Cruelty-Free International (Leaping Bunny) e aprovados pela PETA. A empresa nunca testou em animais." },
    { q: "O que é o programa 30 Days to Healthy Living?",
      a: "É o boot camp de wellness plant-based mais famoso do MMN mundial: 30 dias de nutrição limpa com shakes proteicos veganos, fibras, chás detox e eliminação de 7 grupos alimentares comuns (glúten, laticínios, açúcar refinado, soja, álcool, cafeína e alimentos processados)." },
    { q: "A Arbonne é uma pirâmide?",
      a: "Não. A Arbonne é regulamentada pela DSA (Direct Selling Association) dos EUA, tem certificação B Corp, produtos consumíveis reais com forte demanda e receita legítima de US$ 500 mi/ano. Pirâmides não sobrevivem 45 anos em regulação americana rígida." },
  ],
  founders: ["Petter Mørck"],
  foundingDate: "1980-01-01",
  foundingLocation: "Lausanne, Suíça",
  employees: 800,
  alternateNames: ["Arbonne", "Arbonne LLC"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Arbonne_International",
};

const ArbonneInternational = () => <CompanyPremiumPage data={data} />;
export default ArbonneInternational;
