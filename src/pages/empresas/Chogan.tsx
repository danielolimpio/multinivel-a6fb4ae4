import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Chogan",
  slug: "chogan",
  officialUrl: "https://www.chogangroup.com/",
  domain: "chogangroup.com",
  seoTitle: "Chogan Group: Perfumaria Italiana Inspirada em Grifes | Top 42 Mundial 2026",
  seoDescription:
    "Chogan Group é a MMN italiana de perfumaria inspirada em grandes grifes, cosméticos, wellness e linha automotiva. US$ 500 mi em receita, presente em 40+ países. Made in Italy premium.",
  rankingLabel: "TOP 42 MUNDIAL • MADE IN ITALY 2026",
  heroHeadlineSuffix: "Perfumaria Italiana Inspirada em Grifes",
  heroParagraph:
    "Fundada em 2013 em Cassano delle Murge (Puglia, Itália) por Cosimo Manzari, a Chogan Group é a MMN italiana que reinventou a perfumaria inspirada — fragrâncias inspiradas em grandes grifes a 1/3 do preço, produzidas na Itália com essências francesas.",
  heroBadges: [
    { label: "12 anos", icon: "calendar" },
    { label: "40+ países", icon: "globe" },
    { label: "Made in Italy", icon: "check" },
    { label: "1 milhão+ Chogannianos", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 42", hint: "Business For Home 2026" },
    { icon: "calendar", label: "Fundação", value: "2013", hint: "Cassano delle Murge, Puglia" },
    { icon: "map", label: "País de Origem", value: "Itália 🇮🇹", hint: "Sede em Bari (Puglia)" },
    { icon: "globe", label: "Países", value: "40+", hint: "Europa, América Latina, MENA" },
    { icon: "users", label: "Incaricati", value: "1 milhão+", hint: "Distribuidores independentes globais" },
    { icon: "package", label: "Produtos", value: "500+", hint: "Perfumaria, cosméticos, casa, automotivo" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 500 mi", hint: "Estimado Business For Home" },
    { icon: "factory", label: "Produção", value: "Bari (Itália)", hint: "Essências de Grasse (França)" },
  ],
  aboutHtml: `
    <p>A <strong>Chogan Group S.r.l.</strong> é uma multinacional italiana fundada em <strong>2013</strong> por <em>Cosimo Manzari</em> em <strong>Cassano delle Murge</strong>, província de Bari, Puglia. Nasceu com um conceito disruptivo: <strong>perfumaria inspirada em grifes</strong> (Dior, Chanel, Armani, Yves Saint Laurent, Tom Ford) produzida na Itália com essências francesas de <strong>Grasse</strong> — a 1/3 do preço do original.</p>
    <p>Cada fragrância Chogan é numerada (ex: <strong>#005, #017, #101</strong>) e usa <strong>20% de óleo essencial</strong> — concentração <em>parfum</em> — muito acima dos 8-15% típicos de eaux de toilette. Isso garante fixação de 8-12 horas, competindo diretamente com produtos que custam €150-300 no varejo tradicional.</p>
    <p>Com <strong>US$ 500 mi em receita anual</strong>, a Chogan é <strong>Top 42 no Business For Home 2026</strong>, opera em <strong>40+ países</strong> (Itália, Espanha, Portugal, Alemanha, França, Brasil, México, Argentina, Turquia, EAU e mais) e conta com <strong>1 milhão+ de Incaricati</strong> (distribuidores independentes). O portfólio também inclui skincare, maquiagem, limpeza doméstica e produtos automotivos.</p>
  `,
  timelineTitle: "Da Puglia à liderança em perfumaria MMN europeia",
  milestones: [
    { year: "2013", title: "Fundação", text: "Cosimo Manzari funda Chogan em Cassano delle Murge, Itália." },
    { year: "2015", title: "1º milhão", text: "Alcança €1 mi em receita — expansão além da Puglia." },
    { year: "2017", title: "Expansão Europa", text: "Entra em Espanha, Portugal, França e Alemanha." },
    { year: "2019", title: "Chega ao Brasil", text: "Primeiro mercado da América Latina." },
    { year: "2021", title: "US$ 200 mi", text: "Explode em vendas na pandemia com foco digital." },
    { year: "2023", title: "40 países", text: "Consolida presença em Europa, LATAM, MENA e Ásia." },
    { year: "2024", title: "Linha automotiva", text: "Amplia com fragrâncias e limpezas premium para carros." },
    { year: "2025", title: "US$ 500 mi", text: "Fecha o ano no Top 42 do ranking mundial." },
    { year: "2026", title: "Fábrica ampliada", text: "Nova unidade em Bari amplia capacidade para 15 mi frascos/ano." },
  ],
  productsIntro:
    "Mais de <strong>500 SKUs</strong> em perfumaria inspirada (feminina, masculina, unissex), cosméticos, skincare, cuidados domésticos e linha automotiva — todos <strong>Made in Italy</strong>.",
  productLines: [
    { name: "Perfumaria Feminina", tag: "Carro-chefe #1", color: "from-rose-500/15 to-rose-700/5",
      text: "Fragrâncias inspiradas em grandes grifes femininas — 20% de essência, fixação 8-12h.",
      items: ["#005 (insp. Chanel Coco)", "#023 (insp. YSL Black Opium)", "#101 (insp. Lancôme La Vie Est Belle)", "#017 (insp. Dior J'adore)"] },
    { name: "Perfumaria Masculina", tag: "Best-seller global", color: "from-slate-500/15 to-slate-700/5",
      text: "Fragrâncias masculinas com essências francesas de Grasse.",
      items: ["#054 (insp. YSL La Nuit de L'Homme)", "#060 (insp. Dior Sauvage)", "#040 (insp. Armani Acqua)", "#079 (insp. Chanel Bleu)"] },
    { name: "Cosmética & Skincare", tag: "Beleza italiana", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Linha cosmética completa com ativos italianos: azeite Umbria, uva Toscana, romã Sicília.",
      items: ["Anti-Age Cream", "Vitamin C Serum", "Body Oil", "Face Mask"] },
    { name: "Casa & Automotivo", tag: "Wellness diário", color: "from-amber-500/15 to-amber-700/5",
      text: "Produtos de limpeza premium, aromatizadores de ambiente e detalhamento automotivo.",
      items: ["Detergent Concentrate", "Air Freshener", "Car Perfume", "Leather Cleaner"] },
  ],
  planTitle: "Plano de Compensação Chogan (Piano Italiano)",
  planIntro:
    "Modelo <strong>unilevel europeu com bônus de liderança e viagens</strong>. Sem taxa mensal, cadastro gratuito (só compra kit inicial ~€45) e comissão imediata de <strong>36% no varejo</strong>.",
  planRanks: [
    { rank: "Incaricato Base", payout: "36% varejo", text: "Cadastro simples com kit inicial." },
    { rank: "Manager", payout: "+ 5-15% override", text: "Grupo de PV mensal ativo." },
    { rank: "Team Manager", payout: "+ Bônus liderança", text: "Múltiplos Incaricati diretos." },
    { rank: "Silver / Gold", payout: "+ Bônus viagens", text: "Convenções internacionais anuais." },
    { rank: "Diamond / Executive", payout: "Elite Pool", text: "Topo europeu — carros e prêmios de 6 dígitos." },
  ],
  pros: [
    "36% de comissão direta em varejo (uma das maiores da Europa)",
    "Made in Italy com essências francesas premium",
    "Cadastro barato (kit ~€45)",
    "Sem estoque obrigatório mensal",
    "Presente em 40+ países (bom para networking europeu)",
    "Preço competitivo vs. perfumaria de grife (1/3 do preço)",
  ],
  cons: [
    "Perfumaria inspirada gera debate ético/jurídico em alguns mercados",
    "Fragrâncias numeradas exigem 'tradução' para clientes iniciantes",
    "Concorrência forte com Ferrero Beauty (Kiko) e Yves Rocher na Europa",
    "Suporte em português limitado apesar da operação no Brasil",
    "Modelo depende muito de eventos presenciais europeus",
  ],
  presenceIntro:
    "Presente em <strong>40+ países da Europa, América Latina, Oriente Médio e Norte da África</strong>, com forte concentração em Itália, Espanha, Portugal, França, Alemanha e Brasil.",
  countries: [
    "🇮🇹 Itália", "🇪🇸 Espanha", "🇵🇹 Portugal", "🇫🇷 França", "🇩🇪 Alemanha",
    "🇧🇷 Brasil", "🇲🇽 México", "🇦🇷 Argentina", "🇨🇴 Colômbia", "🇹🇷 Turquia",
    "🇦🇪 Emirados Árabes", "🇸🇦 Arábia Saudita", "🇬🇷 Grécia", "🇷🇴 Romênia",
    "🇧🇬 Bulgária", "🇷🇸 Sérvia", "🇦🇹 Áustria", "🇨🇭 Suíça", "🇳🇱 Holanda",
    "🇧🇪 Bélgica", "🇵🇱 Polônia", "🇸🇰 Eslováquia", "🇭🇺 Hungria",
    "🇲🇦 Marrocos", "🇹🇳 Tunísia", "🇩🇿 Argélia", "🇪🇬 Egito",
  ],
  awards: [
    "Top 42 Business For Home Global 100 — 2026",
    "Made in Italy Excellence Award",
    "Puglia Business Excellence — Bari",
    "Best European Direct Selling Company — 2023",
    "EY Entrepreneur — Cosimo Manzari (finalista Itália)",
  ],
  certifications: [
    "ISO 9001",
    "IFRA (International Fragrance Association)",
    "EU Cosmetic Regulation 1223/2009",
    "Made in Italy Certified",
    "Cruelty-Free (linhas selecionadas)",
  ],
  faqs: [
    { q: "O que é o Chogan Group?",
      a: "É uma multinacional italiana de venda direta fundada em 2013 em Cassano delle Murge (Puglia) por Cosimo Manzari. Especializada em perfumaria inspirada em grandes grifes (Chanel, Dior, YSL) produzida na Itália com essências francesas de Grasse, além de cosméticos, skincare, casa e linha automotiva." },
    { q: "Quanto fatura a Chogan?",
      a: "Em 2025 a Chogan faturou aproximadamente US$ 500 milhões, ocupando o Top 42 no ranking Business For Home Global 100 2026." },
    { q: "A Chogan opera no Brasil?",
      a: "Sim. A Chogan Brasil tem operação oficial desde 2019 com atendimento em português, frete nacional e Incaricati brasileiros ativos. É possível se cadastrar diretamente pelo site brasileiro do grupo." },
    { q: "Os perfumes Chogan são falsificações?",
      a: "Não. Chogan produz fragrâncias INSPIRADAS em grifes — não usa marcas registradas, embalagens nem nomes das originais. Cada fragrância é numerada (#005, #017, #101) e legalmente distinta. O conceito 'inspirado' é comum na perfumaria mundial e legal quando não copia elementos de marca." },
    { q: "Qual a concentração de essência dos perfumes Chogan?",
      a: "20% de óleo essencial (padrão parfum) — muito acima dos 8-15% típicos de eaux de toilette de marcas populares. Isso garante fixação de 8-12 horas e projeção elevada, competindo com fragrâncias que custam €150-300 no varejo." },
    { q: "Como funciona o plano de compensação Chogan?",
      a: "Modelo unilevel europeu com 36% de comissão direta em varejo + overrides de 5-15% conforme rank + bônus de liderança + bônus de viagens internacionais + Elite Pool para Diamonds e Executives no topo." },
    { q: "Quanto custa entrar na Chogan?",
      a: "O kit inicial de Incaricato custa cerca de €45-€90 (com produtos e materiais inclusos). Não há mensalidade, taxa de manutenção ou estoque obrigatório mensal." },
    { q: "Quem é o fundador da Chogan?",
      a: "Cosimo Manzari, empresário italiano nascido em Puglia. Fundou a Chogan em 2013 com a proposta de democratizar a perfumaria italiana premium. Segue como Presidente e principal acionista do grupo em 2026." },
  ],
  founders: ["Cosimo Manzari"],
  foundingDate: "2013-01-01",
  foundingLocation: "Cassano delle Murge, Puglia, Itália",
  employees: 400,
  alternateNames: ["Chogan Group S.r.l.", "Chogan"],
};

const Chogan = () => <CompanyPremiumPage data={data} />;
export default Chogan;
