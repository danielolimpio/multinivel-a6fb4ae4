import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "SeneGence",
  slug: "senegence",
  officialUrl: "https://www.senegence.com/",
  domain: "senegence.com",
  seoTitle: "SeneGence: MMN de Cosméticos LipSense e Skincare | Ranking 2026",
  seoDescription:
    "SeneGence International é a empresa americana de MMN por trás do famoso batom LipSense de longa duração — fundada em 1999 por Joni Rogers-Kante, com receita estimada em US$ 300 milhões e presença global.",
  rankingLabel: "TOP 80 MUNDIAL • DSN GLOBAL 100 2026",
  heroHeadlineSuffix: "A Marca do Icônico Batom LipSense",
  heroParagraph:
    "Fundada em 1999 por Joni Rogers-Kante em Foothill Ranch, Califórnia, a SeneGence International revolucionou o mercado de cosméticos com o LipSense — um batom de longa duração que fica 4-18 horas sem sair. Hoje é uma das marcas mais reconhecidas de MMN de beleza no mundo, com presença em 12 países.",
  heroBadges: [
    { label: "26 anos", icon: "calendar" },
    { label: "12 países", icon: "globe" },
    { label: "300 mil distribuidoras", icon: "users" },
    { label: "LipSense icônico", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 80", hint: "DSN Global 100" },
    { icon: "calendar", label: "Fundação", value: "1999", hint: "Foothill Ranch, Califórnia (EUA)" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Foothill Ranch, CA" },
    { icon: "globe", label: "Países", value: "12", hint: "Américas, Europa, Oceania" },
    { icon: "users", label: "Distribuidoras", value: "300 mil+", hint: "Rede predominantemente feminina" },
    { icon: "package", label: "Produtos", value: "300+", hint: "Batons LipSense, skincare, maquiagem" },
    { icon: "dollar", label: "Faturamento", value: "US$ 300 mi", hint: "Estimativa 2025" },
    { icon: "star", label: "Best-seller", value: "LipSense", hint: "Batom 4-18h de duração" },
  ],
  aboutHtml: `
    <p>A <strong>SeneGence International</strong> foi fundada em <strong>1999</strong> por <strong>Joni Rogers-Kante</strong> em Foothill Ranch, Califórnia. Sua história começou com uma inovação revolucionária: o <strong>LipSense</strong>, batom líquido de longa duração patenteado, que fica na boca de <strong>4 a 18 horas</strong> sem sair — sem borrar, sem manchar copos e à prova de beijo.</p>
    <p>A empresa se destaca por produtos com <strong>tecnologia SenePlex Complex</strong> (patente exclusiva) para skincare anti-idade, além de linha completa de <strong>maquiagem, cuidados corporais, higiene facial e produtos para cabelos</strong>. A marca é forte especialmente entre mulheres de 30-55 anos nos EUA, Canadá, Reino Unido e Austrália.</p>
    <p>Com receita estimada em <strong>US$ 300 milhões</strong> e mais de <strong>300 mil distribuidoras</strong> em 12 países, a SeneGence ocupa o <strong>Top 80 do DSN Global 100 2026</strong> e é uma das principais opções de MMN de cosméticos e beleza para mulheres empreendedoras.</p>
  `,
  timelineTitle: "A revolução SeneGence desde 1999",
  milestones: [
    { year: "1999", title: "Fundação por Joni Rogers-Kante", text: "Empresa nasce em Foothill Ranch (Califórnia) com o LipSense como produto único inicial." },
    { year: "2002", title: "Lançamento do SenePlex", text: "Patente da tecnologia anti-idade SenePlex Complex — diferencial competitivo." },
    { year: "2010", title: "Expansão de portfólio", text: "Linhas completas de skincare, maquiagem e cuidados corporais." },
    { year: "2013", title: "Chegada ao Canadá e Reino Unido", text: "Primeira expansão internacional oficial." },
    { year: "2016", title: "Boom nas redes sociais", text: "LipSense viraliza no Facebook e Instagram — receita triplica em 2 anos." },
    { year: "2018", title: "Expansão para Austrália e Nova Zelândia", text: "Consolidação na Oceania." },
    { year: "2022", title: "US$ 300 mi", text: "Marca atinge US$ 300 milhões em receita anual." },
    { year: "2026", title: "Top 80 mundial", text: "12 países ativos, 300 mil distribuidoras e liderança em batons de longa duração." },
  ],
  productsIntro:
    "Portfólio focado em <strong>cosméticos e skincare com tecnologia patenteada</strong>. O carro-chefe é o <strong>LipSense</strong> (batom líquido 4-18h de duração), mas a marca também é forte em skincare anti-idade com <strong>SenePlex Complex</strong>.",
  productLines: [
    { name: "LipSense & LinerSense", tag: "Icônico", color: "from-rose-500/15 to-rose-700/5",
      text: "Batons líquidos de longa duração (4-18h), lápis labiais, glosses e finishing gloss. Best-seller mundial da marca.",
      items: ["LipSense 60+ cores", "LinerSense", "Gloss LipSense", "LipVolumizer"] },
    { name: "SenePlex Skincare", tag: "Anti-idade", color: "from-fuchsia-500/15 to-fuchsia-700/5",
      text: "Linha skincare com tecnologia patenteada SenePlex Complex — hidratação, anti-idade e limpeza facial.",
      items: ["Advanced Anti-Aging", "3-in-1 Cleanser", "EyeCrème", "Facial Serum"] },
    { name: "MakeSense Foundation", tag: "Maquiagem", color: "from-amber-500/15 to-amber-700/5",
      text: "Base líquida com efeito anti-idade + linha completa de maquiagem (blush, sombras, corretivo, máscara de cílios).",
      items: ["MakeSense Foundation", "BlushSense", "ShadowSense", "LashSense Mascara"] },
    { name: "BodyPlex & Cuidados", tag: "Corpo & cabelos", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Cuidados corporais, cabelos e higiene com fragrâncias exclusivas.",
      items: ["Body Wash", "HairFactor", "Body Lotion", "Hand Cream"] },
  ],
  planTitle: "Plano de Compensação SeneGence (Uni-Nível 5 Gerações)",
  planIntro:
    "Modelo <strong>uni-nível clássico</strong> com desconto de 20-50% para revenda, bônus de patrocínio direto, bônus de infinidade até 5 gerações, Fast Start, incentivos de carro (SeneCar) e viagens.",
  planRanks: [
    { rank: "Distribuidora", payout: "20-50% desconto", text: "Cadastro básico — compra com desconto para revenda e uso próprio." },
    { rank: "Qualified Distributor", payout: "+ Bônus 5-10%", text: "Vendas mínimas mensais — desbloqueia bônus de patrocínio." },
    { rank: "Group Sales Leader", payout: "+ Bônus grupo 3-5%", text: "3+ distribuidoras ativas — bônus de grupo pessoal." },
    { rank: "Team Leader", payout: "+ Bônus 5 gerações", text: "Múltiplas equipes ativas — bônus de infinidade até 5 gerações." },
    { rank: "Executive / Royal Crown", payout: "+ SeneCar + Viagens", text: "Elite qualificada para carro incentivo (SeneCar Program) e viagens internacionais." },
    { rank: "Crown / Royal Empress", payout: "Bônus Pool Global", text: "Top ranks — bônus quadrimestrais em 6 dígitos + reconhecimento." },
  ],
  pros: [
    "Produto icônico e diferenciado (LipSense) com forte apelo viral",
    "Tecnologia SenePlex patenteada — impossível de copiar",
    "Programa SeneCar (carro incentivo) — Cadillac branco tradicional",
    "Empresa consolidada há 26 anos com fundadora ativa (CEO)",
    "Forte comunidade de mulheres empreendedoras nos EUA/Canadá",
    "Kit inicial acessível a partir de US$ 55",
  ],
  cons: [
    "Não opera oficialmente no Brasil (apenas via NFR)",
    "Portfólio quase exclusivo para público feminino",
    "Concorrência agressiva com Mary Kay, Avon e Younique",
    "Vendas dependem de demonstração — melhor com público presencial ou social selling",
    "Manutenção mensal de vendas para qualificar bônus",
  ],
  presenceIntro:
    "A SeneGence opera oficialmente em <strong>12 países</strong>, incluindo EUA (sede), Canadá, Reino Unido, Austrália, Nova Zelândia, México, Polônia e outros. No Brasil ainda não há operação oficial.",
  countries: [
    "🇺🇸 EUA", "🇨🇦 Canadá", "🇲🇽 México", "🇬🇧 Reino Unido", "🇦🇺 Austrália", "🇳🇿 Nova Zelândia",
    "🇵🇱 Polônia", "🇮🇹 Itália", "🇮🇩 Indonésia", "🇸🇬 Singapura", "🇭🇰 Hong Kong", "🇦🇹 Áustria",
  ],
  awards: [
    "DSN Global 100 — Top 80 (2026)",
    "Direct Selling News — Bravo Growth Award",
    "Best Cosmetic Innovation Award (LipSense)",
    "Joni Rogers-Kante — Women in Business Award",
    "Patente registrada nos EUA para LipSense (US Patent Office)",
  ],
  certifications: [
    "FDA Compliant",
    "Cruelty-Free (não testa em animais)",
    "Vegan (produtos selecionados)",
    "GMP (Good Manufacturing Practice)",
    "ISO 22716 (cosméticos)",
  ],
  faqs: [
    { q: "O que é a SeneGence?",
      a: "É uma empresa americana de marketing multinível de cosméticos fundada em 1999 por Joni Rogers-Kante em Foothill Ranch, Califórnia. Famosa mundialmente pelo batom LipSense de longa duração (4-18 horas) e pela tecnologia anti-idade SenePlex Complex." },
    { q: "Quanto fatura a SeneGence em 2026?",
      a: "A SeneGence fatura aproximadamente US$ 300 milhões em 2025, ocupando o Top 80 do ranking Direct Selling News Global 100 2026. É uma das principais marcas de MMN de cosméticos do mundo." },
    { q: "A SeneGence opera no Brasil?",
      a: "Não oficialmente. A SeneGence atua em 12 países (EUA, Canadá, Reino Unido, Austrália etc.). Brasileiras podem se cadastrar via NFR (Not For Resale) importando produtos, mas sem escritório físico ou logística oficial no Brasil." },
    { q: "O que é o LipSense e como funciona?",
      a: "LipSense é um batom líquido patenteado da SeneGence que dura de 4 a 18 horas sem sair. Aplicação em 3 camadas + finishing gloss. É à prova de beijo, não borra em copos e resiste à água e comida. É o produto mais vendido da marca desde 1999." },
    { q: "Qual é a tecnologia SenePlex Complex?",
      a: "SenePlex Complex é uma tecnologia patenteada pela SeneGence baseada em kinetin (fator de crescimento vegetal) que estimula a renovação celular da pele, reduzindo linhas finas e melhorando textura. Presente em toda a linha skincare anti-idade da marca." },
    { q: "Quanto custa começar na SeneGence?",
      a: "O kit inicial de distribuidora custa aproximadamente US$ 55 (New Distributor Kit) e inclui manual, formulários e amostras. Kits maiores (com produtos para demonstração e revenda) custam US$ 100-500 dependendo da quantidade escolhida." },
    { q: "SeneGence é pirâmide financeira?",
      a: "Não. É uma empresa de MMN legítima com 26 anos de mercado, produtos reais patenteados vendidos ao consumidor final e listagem no DSN Global 100 há mais de uma década. A marca é reconhecida internacionalmente e a fundadora ainda comanda a empresa." },
    { q: "Como funciona o plano de compensação da SeneGence?",
      a: "É um plano uni-nível com desconto de 20-50% para revenda + bônus de patrocínio direto + bônus de infinidade até 5 gerações + Fast Start Bonus + programa SeneCar (Cadillac branco para ranks superiores) + viagens de incentivo." },
    { q: "Quais os principais produtos da SeneGence?",
      a: "Os best-sellers são: LipSense (batom de longa duração), MakeSense Foundation (base), SenePlex Skincare (anti-idade), BlushSense, ShadowSense (sombras), LinerSense, EyeCrème e a linha BodyPlex para cuidados corporais." },
    { q: "Vale a pena entrar na SeneGence em 2026?",
      a: "Sim para mulheres empreendedoras nos EUA, Canadá, Reino Unido, Austrália e países onde há operação oficial. O produto LipSense continua sendo um diferencial competitivo único e o plano de compensação é sólido. Para brasileiras, apenas via NFR importando." },
  ],
  founders: ["Joni Rogers-Kante"],
  foundingDate: "1999-01-01",
  foundingLocation: "Foothill Ranch, Califórnia, EUA",
  employees: 600,
  alternateNames: ["SeneGence International", "LipSense"],
};

const SeneGence = () => <CompanyPremiumPage data={data} />;
export default SeneGence;
