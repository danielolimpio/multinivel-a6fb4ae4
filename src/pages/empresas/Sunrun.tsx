import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "Sunrun",
  slug: "sunrun",
  officialUrl: "https://www.sunrun.com/",
  domain: "sunrun.com",
  seoTitle: "Sunrun: Líder Mundial em Energia Solar Residencial | Top 10 2026",
  seoDescription:
    "Sunrun é a #10 do ranking mundial 2026 com US$ 2,2 bi em receita, maior empresa de energia solar residencial dos EUA, com modelo de assinatura solar e força de vendas direta porta-a-porta.",
  rankingLabel: "#10 RANKING MUNDIAL • BUSINESS FOR HOME 2026",
  heroHeadlineSuffix: "A Líder Mundial em Solar Residencial",
  heroParagraph:
    "Fundada em 2007 em San Francisco, a Sunrun é a maior empresa de energia solar residencial dos EUA, pioneira do modelo de assinatura solar (Solar-as-a-Service) com força de vendas direta em todos os 50 estados americanos.",
  heroBadges: [
    { label: "NASDAQ: RUN", icon: "check" },
    { label: "Desde 2007", icon: "calendar" },
    { label: "50 estados US", icon: "globe" },
    { label: "1M+ clientes", icon: "users" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "#10", hint: "Top 10 vendas diretas globais" },
    { icon: "calendar", label: "Fundação", value: "2007", hint: "San Francisco, EUA" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em San Francisco" },
    { icon: "globe", label: "Operação", value: "EUA + Porto Rico", hint: "Todos os 50 estados + PR" },
    { icon: "users", label: "Clientes Ativos", value: "1.000.000+", hint: "Maior base solar residencial" },
    { icon: "package", label: "Categoria", value: "Energia Solar", hint: "Painéis + Baterias + Carregadores" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 2,2 bi", hint: "Fonte: Business For Home" },
    { icon: "factory", label: "GWh Instalados", value: "7+ GW", hint: "Maior portfólio residencial dos EUA" },
  ],
  aboutHtml: `
    <p>A <strong>Sunrun Inc.</strong> é uma empresa americana de energia solar residencial fundada em <strong>2007</strong> por <em>Lynn Jurich, Edward Fenster e Nat Kreamer</em> em San Francisco. Foi a empresa pioneira do modelo de <strong>"Solar-as-a-Service"</strong>: o cliente não compra os painéis, mas assina um contrato de 20 a 25 anos pagando uma mensalidade fixa para usar a energia gerada pelos painéis instalados em seu telhado.</p>
    <p>Listada na Nasdaq (<strong>NASDAQ: RUN</strong>), é hoje a <strong>maior empresa de solar residencial dos Estados Unidos</strong>, com mais de <strong>1 milhão de clientes</strong>, <strong>7+ GW instalados</strong> e presença em todos os <strong>50 estados americanos + Porto Rico</strong>. Em 2025 a Sunrun alcançou <strong>US$ 2,2 bilhões em receita</strong>, ocupando a posição <strong>#10 no ranking Business For Home 2026</strong>.</p>
    <p>Seu modelo de vendas combina <strong>força de vendas direta porta-a-porta</strong>, parcerias com varejistas (Costco, Home Depot) e o programa <strong>Brightbox</strong> de baterias domiciliares Tesla Powerwall e LG Chem. É uma das principais responsáveis por democratizar a energia solar limpa nos EUA.</p>
  `,
  timelineTitle: "Do solar caro à assinatura mensal acessível",
  milestones: [
    { year: "2007", title: "Fundação", text: "Lynn Jurich, Edward Fenster e Nat Kreamer fundam a Sunrun em San Francisco." },
    { year: "2008", title: "Modelo Solar-as-a-Service", text: "Cria o primeiro contrato PPA residencial dos EUA — clientes pagam só pela energia gerada." },
    { year: "2015", title: "IPO na Nasdaq", text: "Abre capital sob o ticker RUN, levantando US$ 251 mi." },
    { year: "2017", title: "Brightbox", text: "Lança serviço de bateria residencial em parceria com Tesla e LG." },
    { year: "2020", title: "Aquisição da Vivint Solar", text: "Compra a 2ª maior empresa solar dos EUA por US$ 3,2 bi — torna-se líder absoluta." },
    { year: "2022", title: "1 milhão de clientes", text: "Atinge 1 milhão de clientes residenciais ativos." },
    { year: "2024", title: "Recorde de Storage", text: "Maior instaladora de baterias residenciais dos EUA com 1+ GWh em storage." },
    { year: "2026", title: "Top 10 mundial", text: "Mantém posição #10 no ranking Business For Home 2026." },
  ],
  productsIntro:
    "Oferece <strong>painéis solares + baterias + carregadores de carro elétrico</strong> via assinatura mensal, sem custo inicial, com manutenção e seguro inclusos.",
  productLines: [
    { name: "Solar Subscription", tag: "Carro-chefe", color: "from-amber-500/15 to-amber-700/5",
      text: "O modelo principal: o cliente assina por 20-25 anos e paga só pela energia gerada, sem investimento inicial.",
      items: ["Solar PPA", "Lease", "Monthly Plan", "Pre-paid"] },
    { name: "Brightbox", tag: "Bateria Residencial", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Sistema de baterias domiciliares Tesla Powerwall e LG Chem para backup em caso de blecaute.",
      items: ["Tesla Powerwall", "LG Chem RESU", "Backup Plus"] },
    { name: "Sunrun EV", tag: "Carregador Veicular", color: "from-sky-500/15 to-sky-700/5",
      text: "Charger residencial nível 2 para carros elétricos Tesla, Ford, GM e demais.",
      items: ["Level 2 Charger", "Smart Charging"] },
    { name: "Sunrun Roof", tag: "Telhado Solar", color: "from-indigo-500/15 to-indigo-700/5",
      text: "Programa de telhado novo integrado a painéis solares, com 25 anos de garantia.",
      items: ["Solar Roof", "Roof Replacement"] },
  ],
  planTitle: "Plano de Carreira Sunrun (Direct Sales D2D)",
  planIntro:
    "A força de vendas Sunrun trabalha como representante porta-a-porta com plano de <strong>comissão por instalação + bônus de equipe</strong>. Top sellers chegam a 6 dígitos anuais nos EUA.",
  planRanks: [
    { rank: "Sales Rep (Setter)", payout: "US$ 300-800/instalação", text: "Vendedor inicial que faz prospecção porta-a-porta." },
    { rank: "Closer", payout: "US$ 1.500-3.000/instalação", text: "Fecha contratos e ganha comissão maior." },
    { rank: "Team Lead", payout: "+ Bônus de equipe", text: "Lidera time de setters/closers, com overrides sobre vendas da equipe." },
    { rank: "Branch Manager", payout: "+ Bônus regional", text: "Gere filial regional com metas mensais." },
    { rank: "Regional Director", payout: "Topo da carreira", text: "Diretor regional com participação em pool corporativo." },
  ],
  pros: [
    "Mercado solar residencial em expansão acelerada",
    "Empresa listada (NASDAQ: RUN) com governança sólida",
    "Sem custo inicial para o cliente — venda fácil",
    "Comissões altas por instalação (US$ 1k a 5k)",
    "Parceria com Tesla, LG e maiores marcas do setor",
    "Programa Brightbox cresce com blecautes climáticos",
  ],
  cons: [
    "Operação 100% nos EUA — não atende Brasil",
    "Vendas porta-a-porta exigem alta resiliência",
    "Concorrência forte com Sunpower, Tesla e SunPower",
    "Margens pressionadas por subsídios federais",
    "Cliente precisa ter telhado próprio e bom crédito",
  ],
  presenceIntro:
    "Maiores mercados: <strong>Califórnia, Texas, Flórida, Nova York, Massachusetts, Arizona, Nevada, Nova Jersey, Carolina do Sul e Porto Rico</strong>.",
  countries: [
    "🇺🇸 EUA (50 estados)", "🇵🇷 Porto Rico",
  ],
  awards: [
    "#10 Direct Selling News Global 100 — 2026",
    "Forbes — Best Employers for Diversity",
    "Solar Power World Top Contractor (10+ anos seguidos)",
    "Fast Company Most Innovative Companies",
    "BloombergNEF Tier 1 Solar Provider",
  ],
  certifications: [
    "Listada na Nasdaq (RUN)",
    "NABCEP Certified Installers",
    "UL Certified",
    "Energy Star Partner",
    "Tesla Certified Installer (Powerwall)",
  ],
  faqs: [
    { q: "O que é a Sunrun?",
      a: "É a maior empresa de energia solar residencial dos EUA, fundada em 2007 em San Francisco. Pioneira do modelo Solar-as-a-Service, onde o cliente paga uma assinatura mensal pela energia gerada pelos painéis em seu telhado." },
    { q: "Quanto fatura a Sunrun?",
      a: "Em 2025 a Sunrun faturou US$ 2,2 bilhões, ocupando a posição #10 no ranking mundial Business For Home 2026 das maiores empresas de vendas diretas." },
    { q: "Como funciona o modelo solar da Sunrun?",
      a: "Existem 3 formatos: PPA (paga por kWh gerado), Lease (mensalidade fixa) e compra direta. O modelo mais popular é o PPA, sem investimento inicial e com manutenção incluída por 20-25 anos." },
    { q: "A Sunrun opera no Brasil?",
      a: "Não. A Sunrun atende somente os 50 estados americanos + Porto Rico. No Brasil existem empresas similares como SolarVolt e Renovigi." },
    { q: "Quanto ganha um vendedor da Sunrun?",
      a: "Setters (prospectores) ganham US$ 300-800 por instalação fechada. Closers ganham US$ 1.500-3.000 por contrato. Top sellers ultrapassam US$ 200.000/ano." },
    { q: "O que é o Brightbox?",
      a: "É o serviço de bateria residencial da Sunrun com Tesla Powerwall ou LG Chem RESU, oferecendo backup energético em caso de blecautes — muito popular após furacões na Califórnia e Texas." },
    { q: "A Sunrun é segura?",
      a: "Sim. É uma empresa pública listada na Nasdaq (RUN), com mais de 1 milhão de clientes, 7+ GW instalados e parcerias com Tesla, Costco e Home Depot." },
    { q: "Qual a diferença entre Sunrun e Tesla Solar?",
      a: "Sunrun foca em solar residencial via assinatura sem custo inicial (modelo financeiro). Tesla Solar geralmente vende painéis e telhados solares ao cliente. A Sunrun é instaladora certificada do Tesla Powerwall." },
  ],
  founders: ["Lynn Jurich", "Edward Fenster", "Nat Kreamer"],
  foundingDate: "2007-01-01",
  foundingLocation: "San Francisco, Califórnia, EUA",
  employees: 8000,
  alternateNames: ["Sunrun Inc.", "RUN"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Sunrun",
};

const Sunrun = () => <CompanyPremiumPage data={data} />;
export default Sunrun;
