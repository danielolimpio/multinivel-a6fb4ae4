import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Utility Warehouse",
  slug: "utility-warehouse",
  officialUrl: "https://www.uw.co.uk/",
  domain: "uw.co.uk",
  seoTitle: "Utility Warehouse: Multi-Serviços via MMN no Reino Unido | Top 12 2026",
  seoDescription:
    "Utility Warehouse é a maior empresa MMN do Reino Unido, com US$ 2 bi em receita, vendendo energia, gás, banda larga, móvel e seguros através de mais de 50 mil Partners — modelo único de utilities bundling.",
  rankingLabel: "TOP 12 MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "A Maior MMN do Reino Unido",
  heroParagraph:
    "Fundada em 1996 em Londres, a Utility Warehouse é a única empresa de utilities (energia, gás, internet, telefone e seguros) vendida por marketing multinível no Reino Unido, com mais de 50 mil Partners independentes.",
  heroBadges: [
    { label: "LSE: TEP", icon: "check" },
    { label: "Desde 1996", icon: "calendar" },
    { label: "Reino Unido", icon: "globe" },
    { label: "1M+ clientes", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 12", hint: "Maior MMN do Reino Unido" },
    { icon: "calendar", label: "Fundação", value: "1996", hint: "Londres" },
    { icon: "map", label: "País de Origem", value: "Reino Unido 🇬🇧", hint: "Sede em Colindale, Londres" },
    { icon: "globe", label: "Operação", value: "Reino Unido", hint: "Inglaterra, Escócia, Gales e NI" },
    { icon: "users", label: "Clientes Ativos", value: "1.000.000+", hint: "Famílias britânicas" },
    { icon: "package", label: "Serviços", value: "5 em 1", hint: "Energia, gás, banda larga, móvel, seguros" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 2,0 bi+", hint: "Telecom Plus PLC" },
    { icon: "factory", label: "Partners (Distribuidores)", value: "50.000+", hint: "Maior rede MMN do UK" },
  ],
  aboutHtml: `
    <p>A <strong>Utility Warehouse</strong> é a marca-consumidor da <strong>Telecom Plus PLC</strong>, empresa fundada em <strong>1996</strong> em Londres e listada na <strong>London Stock Exchange (LSE: TEP)</strong>. É a <strong>única empresa MMN de utilities (utilidades domésticas) do mundo</strong>, oferecendo um pacote bundle único de <strong>energia elétrica, gás, banda larga, telefone fixo, móvel e seguros residenciais</strong> em uma única conta mensal.</p>
    <p>Hoje a Utility Warehouse atende mais de <strong>1 milhão de famílias britânicas</strong> e ocupa posição de destaque no <strong>Top 12 do ranking Business For Home 2026</strong>, com receita anual de <strong>US$ 2 bilhões+</strong>. É vendida exclusivamente por mais de <strong>50 mil Partners independentes</strong>, sem lojas físicas, sem publicidade massiva.</p>
    <p>O grande diferencial é a <strong>"Price Promise Guarantee"</strong>: a empresa garante que o cliente sempre paga menos do que pagaria com outros provedores, ou paga o dobro da diferença. Esse modelo de <strong>economia garantida + simplicidade de conta única</strong> é o motor de retenção que faz a Utility Warehouse ter um dos menores churns do setor.</p>
  `,
  timelineTitle: "Da telefonia ao bundle multi-utilities",
  milestones: [
    { year: "1996", title: "Fundação", text: "Telecom Plus é fundada em Londres por Charles Wigoder com foco em telefonia residencial." },
    { year: "1998", title: "Listagem LSE", text: "Abre capital na bolsa de Londres sob o ticker TEP." },
    { year: "2002", title: "Lançamento Utility Warehouse", text: "Cria a marca-consumidor Utility Warehouse para reunir múltiplos serviços." },
    { year: "2006", title: "Entra em Energia", text: "Adiciona eletricidade e gás natural ao bundle, virando provedor multi-utilities." },
    { year: "2013", title: "500 mil clientes", text: "Atinge meio milhão de famílias atendidas." },
    { year: "2020", title: "Banda larga full-fibre", text: "Lança serviço de fibra óptica e expande móvel via MVNO no EE." },
    { year: "2022", title: "1 milhão de clientes", text: "Crise energética europeia impulsiona o crescimento — atinge 1M de clientes." },
    { year: "2026", title: "Top 12 mundial", text: "Confirma posição de liderança no MMN europeu." },
  ],
  productsIntro:
    "Em vez de produtos físicos, vende <strong>serviços essenciais do dia a dia</strong> consolidados em uma única conta com o famoso CashBack Card (cashback em supermercados).",
  productLines: [
    { name: "Energia & Gás", tag: "Carro-chefe", color: "from-amber-500/15 to-amber-700/5",
      text: "Eletricidade e gás natural com tarifa fixa garantida pelo Price Promise.",
      items: ["Dual Fuel", "Green Energy", "Smart Meter", "Solar Buyback"] },
    { name: "Banda Larga & Telefone", tag: "Conectividade", color: "from-sky-500/15 to-sky-700/5",
      text: "Pacotes de fibra óptica até 900 Mbps + linha fixa ilimitada.",
      items: ["Fibre 100", "Full Fibre 500", "Full Fibre 900", "Landline"] },
    { name: "Móvel UW", tag: "MVNO no EE", color: "from-indigo-500/15 to-indigo-700/5",
      text: "Planos móveis com cobertura da maior rede do UK (EE) em SIM-only.",
      items: ["Pay Monthly", "SIM-Only", "Família 4-em-1"] },
    { name: "Seguros & CashBack Card", tag: "Lifestyle", color: "from-rose-500/15 to-rose-700/5",
      text: "Seguro residencial e cartão de cashback aceito nos principais supermercados britânicos.",
      items: ["Home Insurance", "CashBack Card", "Boiler Cover"] },
  ],
  planTitle: "Plano de Carreira UW Partner (Customer-Based)",
  planIntro:
    "Partners ganham comissão recorrente <strong>todo mês enquanto o cliente mantiver os serviços</strong>. Modelo de renda residual real, baseado em conta de luz/gás/internet — não em produtos.",
  planRanks: [
    { rank: "Partner", payout: "Comissão recorrente", text: "Recebe £20-50 por cliente novo + bônus mensal recorrente." },
    { rank: "Senior Partner", payout: "+ Bônus de equipe", text: "Patrocina novos Partners e ganha override sobre clientes da rede." },
    { rank: "Executive", payout: "+ Bônus Liderança", text: "Equipe estruturada com volume mensal mínimo." },
    { rank: "Senior Executive", payout: "+ Bônus regional", text: "Líder regional com participação em pool corporativo." },
    { rank: "Director", payout: "Topo da carreira", text: "Top líderes — eventos exclusivos e bônus de carro." },
  ],
  pros: [
    "Renda recorrente mensal sobre contas que cliente já pagava",
    "Empresa listada (LSE: TEP) com transparência financeira",
    "Sem estoque, sem entrega, sem inventário",
    "Price Promise gera retenção altíssima",
    "Mercado de utilities é essencial e recession-proof",
    "Marca consolidada há 28+ anos no Reino Unido",
  ],
  cons: [
    "Operação restrita ao Reino Unido",
    "Comissão por cliente é pequena (mas recorrente)",
    "Crescimento exige volume de muitos clientes",
    "Concorrência com British Gas, EDF, BT, Sky",
    "Sem produtos físicos — venda pura de serviço",
  ],
  presenceIntro:
    "Atua exclusivamente no <strong>Reino Unido</strong>: Inglaterra, Escócia, País de Gales e Irlanda do Norte.",
  countries: [
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escócia", "🏴󠁧󠁢󠁷󠁬󠁳󠁿 País de Gales", "🇬🇧 Irlanda do Norte",
  ],
  awards: [
    "Top 12 Direct Selling News Global 100 — 2026",
    "Which? Recommended Provider (energia)",
    "uSwitch Best Multi-Service Provider",
    "LSE Listed (TEP) — FTSE 250",
    "Best Customer Service — Energy Live News",
  ],
  certifications: [
    "Listada na LSE (TEP) — FTSE 250",
    "Ofgem (regulador de energia UK)",
    "Ofcom (regulador de telecom UK)",
    "FCA Regulated (seguros)",
    "ISO 27001 (segurança da informação)",
  ],
  faqs: [
    { q: "O que é Utility Warehouse?",
      a: "É a marca-consumidor da Telecom Plus PLC, uma empresa britânica listada na LSE que vende energia, gás, banda larga, móvel e seguros em um único bundle via marketing multinível com mais de 50 mil Partners." },
    { q: "Quanto fatura a Utility Warehouse?",
      a: "A Telecom Plus PLC faturou cerca de US$ 2 bilhões em 2025, com mais de 1 milhão de clientes ativos no Reino Unido." },
    { q: "A Utility Warehouse opera no Brasil?",
      a: "Não. Opera exclusivamente no Reino Unido (Inglaterra, Escócia, Gales e Irlanda do Norte). É um modelo único, sem equivalente brasileiro." },
    { q: "Como funciona o Price Promise?",
      a: "A Utility Warehouse garante que o cliente sempre paga menos do que pagaria com outros provedores. Se pagar mais, a UW devolve o dobro da diferença ao cliente." },
    { q: "Como funciona ser Partner da UW?",
      a: "Você se cadastra como Partner independente (custo £100), ganha comissão de £20-50 por cada cliente novo + renda recorrente mensal enquanto o cliente mantiver os serviços. Pode também patrocinar novos Partners." },
    { q: "O que é o CashBack Card?",
      a: "É um cartão de débito UW pré-pago aceito nos principais supermercados britânicos (Sainsbury's, Tesco, Asda) que dá cashback automático na conta mensal de utilities." },
    { q: "A UW é confiável?",
      a: "Sim. É listada na London Stock Exchange (TEP) no índice FTSE 250, regulada por Ofgem, Ofcom e FCA, com 28+ anos de operação e Which? Recommended Provider." },
    { q: "É possível ter renda residual real com UW?",
      a: "Sim. Como cliente paga conta de energia/internet todo mês, o Partner recebe comissão recorrente todo mês também. É um dos modelos de MMN com a maior retenção residual do mundo." },
  ],
  founders: ["Charles Wigoder"],
  foundingDate: "1996-01-01",
  foundingLocation: "Londres, Reino Unido",
  employees: 3000,
  alternateNames: ["Telecom Plus PLC", "UW"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Utility_Warehouse",
};

const UtilityWarehouse = () => <CompanyPremiumPage data={data} />;
export default UtilityWarehouse;
