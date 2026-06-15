import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "PM-International",
  slug: "pm-international",
  officialUrl: "https://www.pm-international.com/",
  domain: "pm-international.com",
  seoTitle: "PM-International: Líder Europeia em Saúde & Nutrição | Top 6 Mundial 2026",
  seoDescription:
    "PM-International é a maior empresa de nutrição premium da Europa e #6 do ranking mundial 2026, com US$ 3,3 bi em receita, FitLine como marca principal e operação em 45+ países.",
  rankingLabel: "#6 RANKING MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "A Gigante Alemã da Nutrição Premium",
  heroParagraph:
    "Fundada em 1993 por Rolf Sorg, a PM-International é a maior empresa europeia de saúde, fitness e bem-estar em vendas diretas, dona da marca FitLine, parceira oficial de mais de 25 federações esportivas e olímpicas.",
  heroBadges: [
    { label: "Made in Germany", icon: "check" },
    { label: "30+ anos", icon: "calendar" },
    { label: "45+ países", icon: "globe" },
    { label: "1M+ TeamPartners", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "#6", hint: "Maior MMN da Europa" },
    { icon: "calendar", label: "Fundação", value: "1993", hint: "Speyer, Alemanha" },
    { icon: "map", label: "País de Origem", value: "Alemanha 🇩🇪", hint: "Sede em Speyer (Rhineland-Palatinate)" },
    { icon: "globe", label: "Países", value: "45+", hint: "Forte presença Europa, Ásia e Américas" },
    { icon: "users", label: "TeamPartners", value: "1.000.000+", hint: "Distribuidores em todo o mundo" },
    { icon: "package", label: "Produtos", value: "70+", hint: "Linhas FitLine, BeautyLine e PM-Cosmetics" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 3,3 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "Fábrica Própria", value: "Speyer (DE)", hint: "Produção totalmente alemã" },
  ],
  aboutHtml: `
    <p>A <strong>PM-International AG</strong> é uma multinacional alemã fundada em <strong>1993</strong> por <em>Rolf Sorg</em>, dedicada exclusivamente a produtos de <strong>saúde, fitness, beleza e bem-estar</strong>. Sua marca principal, <strong>FitLine</strong>, é referência mundial em suplementação esportiva e nutrição inteligente, com a famosa tecnologia <strong>NTC® (Nutrient Transport Concept)</strong>.</p>
    <p>Hoje a PM-International ocupa a <strong>posição #6 no ranking mundial Business For Home 2026</strong>, com faturamento de <strong>US$ 3,3 bilhões</strong>, operação em <strong>mais de 45 países</strong> e <strong>1 milhão de TeamPartners</strong>. É também a única empresa de MMN parceira oficial de mais de <strong>25 federações esportivas olímpicas</strong>, incluindo as seleções alemãs de futebol, esqui, biatlo, atletismo e luta livre.</p>
    <p>Com <strong>fabricação 100% na Alemanha</strong> e mais de <strong>100 certificações internacionais</strong> (Colônia List, Informed Sport, NSF), a PM-International é considerada o padrão de qualidade europeu em nutrição esportiva no marketing multinível.</p>
  `,
  timelineTitle: "Da Alemanha para o topo mundial em 3 décadas",
  milestones: [
    { year: "1993", title: "Fundação", text: "Rolf Sorg funda a PM-International em Speyer, Alemanha, com a missão de unir ciência e venda direta." },
    { year: "1995", title: "Lançamento da FitLine", text: "Nasce a marca FitLine, com o suplemento Activize Oxyplus como produto inaugural." },
    { year: "2002", title: "Patrocínio Olímpico", text: "Início da parceria com a Federação Alemã de Esqui — abrindo o ciclo olímpico." },
    { year: "2010", title: "Expansão para a Ásia", text: "Abertura de subsidiárias em Hong Kong, Singapura, Japão e Coreia do Sul." },
    { year: "2015", title: "1 bilhão de euros", text: "Ultrapassa €1 bi em receita anual pela primeira vez." },
    { year: "2019", title: "PM-International do Brasil", text: "Início oficial das operações no Brasil — entrada estratégica na América Latina." },
    { year: "2023", title: "30 anos & US$ 3 bi", text: "Comemora 30 anos com faturamento histórico de US$ 3 bilhões." },
    { year: "2026", title: "Top 6 mundial", text: "Mantém crescimento e ocupa a 6ª posição no ranking Business For Home." },
  ],
  productsIntro:
    "Tudo é desenvolvido com a tecnologia <strong>NTC® (Nutrient Transport Concept)</strong>, que aumenta a biodisponibilidade dos nutrientes — diferencial científico patenteado da PM.",
  productLines: [
    { name: "FitLine", tag: "Saúde & Esporte", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Linha-mãe da empresa: ativadores celulares, proteínas, vitaminas e bebidas isotônicas usadas por atletas olímpicos.",
      items: ["Activize Oxyplus", "Restorate", "Basics", "Power Cocktail", "ProShape Amino", "D-Drink"] },
    { name: "FitLine Sport Optimal Set", tag: "Performance", color: "from-amber-500/15 to-amber-700/5",
      text: "Kit oficial usado por federações olímpicas — combina Activize, Restorate e Basics no protocolo Top Athlete.",
      items: ["Top Athlete Pack", "Stress Resistance", "Munogen", "Q10+"] },
    { name: "BeautyLine", tag: "Estética & Cosmética", color: "from-rose-500/15 to-rose-700/5",
      text: "Linha de cuidados faciais premium com tecnologia LipoSphere® para entrega eficaz de ativos.",
      items: ["Cellular Energy", "Cellular Power", "Day & Night Cream", "Serum"] },
    { name: "PM Cosmetics", tag: "Maquiagem & Skincare", color: "from-fuchsia-500/15 to-fuchsia-700/5",
      text: "Maquiagem profissional e cuidado pessoal, totalmente produzida na Alemanha.",
      items: ["Lip Tint", "Mascara", "Foundation", "Bath Care"] },
  ],
  planTitle: "Plano de Marketing PM-International (Híbrido Unilevel + Breakaway)",
  planIntro:
    "O plano combina <strong>9 níveis de profundidade</strong> com bônus de liderança, bônus de carro (Mercedes-Benz), bônus de viagem e participação em pool global. Já distribuiu <strong>US$ 5 bi+</strong> em pagamentos.",
  planRanks: [
    { rank: "TeamPartner", payout: "20-25% margem", text: "Entrada com kit BasicPack — desconto imediato." },
    { rank: "Manager", payout: "+ 6% Bônus equipe", text: "1.500 PV em estrutura — começa a ganhar bônus de níveis 1 e 2." },
    { rank: "International Manager", payout: "+ 10% Bônus", text: "Mantém 3 linhas qualificadas — bônus em 3 níveis." },
    { rank: "Vice President", payout: "+ Bônus Liderança", text: "Estrutura internacional com volume mínimo mensal — bônus de liderança em 9 níveis." },
    { rank: "President's Team", payout: "+ Mercedes Bonus", text: "Qualifica para o Bônus Mercedes-Benz e Top Pool Global." },
    { rank: "Chairman's Club", payout: "+ Pool Top Líderes", text: "Topo da carreira — pool de 1% sobre faturamento global." },
  ],
  pros: [
    "Produtos premium fabricados 100% na Alemanha",
    "Certificações Informed Sport e Cologne List (anti-doping)",
    "Patrocínios olímpicos que dão autoridade científica",
    "Plano que paga bônus de carro Mercedes-Benz",
    "Forte presença europeia e crescimento explosivo no Brasil",
    "Tecnologia patenteada NTC® e LipoSphere®",
  ],
  cons: [
    "Produtos importados — ticket médio mais alto",
    "Marca ainda em construção no mercado brasileiro",
    "Curva inicial exige estudo do plano híbrido",
    "Câmbio do Euro pode impactar margens locais",
  ],
  presenceIntro:
    "Mercados líderes: <strong>Alemanha, Itália, Áustria, Suíça, Polônia, Hungria, Hong Kong, Coreia do Sul e México</strong>.",
  countries: [
    "🇩🇪 Alemanha", "🇦🇹 Áustria", "🇨🇭 Suíça", "🇮🇹 Itália", "🇫🇷 França", "🇪🇸 Espanha",
    "🇵🇹 Portugal", "🇵🇱 Polônia", "🇭🇺 Hungria", "🇷🇴 Romênia", "🇨🇿 Tchéquia", "🇸🇰 Eslováquia",
    "🇸🇮 Eslovênia", "🇭🇷 Croácia", "🇧🇬 Bulgária", "🇬🇷 Grécia", "🇬🇧 Reino Unido", "🇮🇪 Irlanda",
    "🇳🇱 Holanda", "🇧🇪 Bélgica", "🇩🇰 Dinamarca", "🇸🇪 Suécia", "🇳🇴 Noruega", "🇫🇮 Finlândia",
    "🇺🇸 EUA", "🇲🇽 México", "🇧🇷 Brasil", "🇨🇱 Chile", "🇨🇴 Colômbia", "🇯🇵 Japão",
    "🇰🇷 Coreia do Sul", "🇭🇰 Hong Kong", "🇸🇬 Singapura", "🇹🇼 Taiwan", "🇮🇩 Indonésia",
  ],
  awards: [
    "#6 Direct Selling News Global 100 — 2026",
    "Bravo Growth Award (Direct Selling News)",
    "Parceira oficial 25+ federações olímpicas",
    "Prêmio Top Employer Alemanha",
    "Cologne List Certified (suplementação livre de doping)",
  ],
  certifications: [
    "ISO 22000 (Segurança Alimentar)",
    "GMP — Good Manufacturing Practices",
    "Informed Sport / Informed Choice",
    "Cologne List (anti-doping)",
    "TÜV Süd (Alemanha)",
  ],
  faqs: [
    { q: "O que é a PM-International?",
      a: "É uma multinacional alemã de saúde, fitness e beleza fundada em 1993, dona da marca FitLine. Está entre as 10 maiores empresas de vendas diretas do mundo e é parceira oficial de mais de 25 federações esportivas olímpicas." },
    { q: "O que é a FitLine?",
      a: "FitLine é a marca principal da PM-International, focada em suplementação esportiva e nutrição celular com a tecnologia NTC® (Nutrient Transport Concept), que aumenta a absorção dos nutrientes pelas células." },
    { q: "Quanto custa entrar na PM-International?",
      a: "O kit BasicPack custa cerca de R$ 290 no Brasil e dá acesso imediato a 20-25% de desconto. Não há mensalidade obrigatória, apenas anuidade de cerca de R$ 60." },
    { q: "Quais são os principais produtos da FitLine?",
      a: "Activize Oxyplus (ativador celular), Restorate (mineral noturno), Basics (multivitamínico), Power Cocktail (shake), ProShape Amino (proteína) e D-Drink (hangover formula). Todos certificados anti-doping pela Cologne List." },
    { q: "A PM-International é segura?",
      a: "Sim. É uma das poucas MMNs com fábrica própria na Alemanha, certificações ISO 22000, GMP e Cologne List, além de auditorias TÜV. Atua há 30+ anos e é membro da DSA Alemanha." },
    { q: "Quanto fatura a PM-International?",
      a: "Em 2025 a empresa faturou US$ 3,3 bilhões, ocupando a posição #6 do ranking mundial Business For Home 2026 — sendo a maior empresa europeia de MMN." },
    { q: "Como funciona o plano de marketing?",
      a: "É um plano híbrido unilevel + breakaway com 9 níveis de profundidade, bônus de equipe (até 10%), bônus de liderança, bônus de carro Mercedes-Benz e pool global no Chairman's Club." },
    { q: "Quais atletas usam FitLine?",
      a: "Federação Alemã de Esqui, Biatlo, Luta Livre, Atletismo, Pentatlo Moderno, além das seleções da Áustria e Itália em diversas modalidades olímpicas." },
  ],
  founders: ["Rolf Sorg"],
  foundingDate: "1993-01-01",
  foundingLocation: "Speyer, Alemanha",
  employees: 600,
  alternateNames: ["PM International AG", "FitLine"],
  wikipediaUrl: "https://de.wikipedia.org/wiki/PM-International",
};

const PMInternational = () => <CompanyPremiumPage data={data} />;
export default PMInternational;
