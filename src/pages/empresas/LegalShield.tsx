import { CompanyPremiumPage, type CompanyPremiumData } from "@/components/CompanyPremiumPage";

const data: CompanyPremiumData = {
  name: "LegalShield",
  slug: "legalshield",
  officialUrl: "https://www.legalshield.com/",
  domain: "legalshield.com",
  seoTitle: "LegalShield: Serviços Jurídicos por Assinatura via MMN | Top 33 Mundial 2026",
  seoDescription:
    "LegalShield é a maior MMN de serviços jurídicos do mundo — assinatura mensal para acesso a advogados nos EUA e Canadá. Fundada em 1972, US$ 700 mi em receita e 4,5 milhões de assinantes.",
  rankingLabel: "TOP 33 MUNDIAL • MAIOR MMN JURÍDICA DO PLANETA",
  heroHeadlineSuffix: "Serviços Jurídicos Acessíveis por Assinatura",
  heroParagraph:
    "Fundada em 1972 em Ada (Oklahoma) por Harland C. Stonecipher após uma experiência jurídica cara, a LegalShield democratizou o acesso a advogados através de assinatura mensal — hoje o maior serviço jurídico por assinatura do mundo, com 4,5 milhões de assinantes na América do Norte.",
  heroBadges: [
    { label: "53+ anos", icon: "calendar" },
    { label: "EUA + Canadá", icon: "globe" },
    { label: "4,5 mi assinantes", icon: "users" },
    { label: "Serviço único no MMN", icon: "check" },
  ],
  stats: [
    { icon: "crown", label: "Ranking Mundial 2026", value: "Top 33", hint: "Business For Home Global 100" },
    { icon: "calendar", label: "Fundação", value: "1972", hint: "Como Sportsman's Motor Club" },
    { icon: "map", label: "País de Origem", value: "EUA 🇺🇸", hint: "Sede em Ada, Oklahoma" },
    { icon: "globe", label: "Países", value: "2", hint: "EUA (50 estados) + Canadá (4 províncias)" },
    { icon: "users", label: "Assinantes", value: "4,5 milhões", hint: "Indivíduos + pequenas empresas" },
    { icon: "package", label: "Escritórios Provedores", value: "50 firmas", hint: "1 firma dedicada por estado americano" },
    { icon: "dollar", label: "Faturamento 2025", value: "US$ 700 mi", hint: "Fonte: Business For Home 2026" },
    { icon: "factory", label: "Modelo", value: "Assinatura Recorrente", hint: "US$ 25-40/mês por família ou PJ" },
  ],
  aboutHtml: `
    <p>A <strong>LegalShield</strong> (Legal Shield, Inc.) é uma multinacional americana fundada em <strong>1972</strong> por <em>Harland C. Stonecipher</em> em <strong>Ada, Oklahoma</strong>, após ele enfrentar uma disputa jurídica cara sozinho. A ideia era simples e revolucionária: <strong>advogado por assinatura mensal</strong>, como TV a cabo — democratizando o acesso à justiça para famílias e pequenas empresas.</p>
    <p>Originalmente chamada <em>Sportsman's Motor Club</em> e depois <em>Pre-Paid Legal Services</em>, mudou para <strong>LegalShield em 2011</strong>. Por menos de <strong>US$ 30/mês</strong>, o assinante tem acesso ilimitado a: consultoria com advogado por telefone, revisão de contratos, cartas jurídicas, elaboração de testamento, defesa de trânsito, proteção contra roubo de identidade (IDShield) e mais.</p>
    <p>Com <strong>US$ 700 mi em receita anual</strong>, a LegalShield é <strong>Top 33 no Business For Home 2026</strong>, tem <strong>4,5 milhões de assinantes ativos</strong> nos EUA e Canadá, e mantém <strong>50 firmas de advocacia dedicadas</strong> (uma por estado americano). É a <strong>única MMN mundial de serviços jurídicos em escala massiva</strong> — combinando venda direta multinível com plano de saúde jurídica.</p>
  `,
  timelineTitle: "De uma multa de trânsito à maior MMN jurídica do mundo",
  milestones: [
    { year: "1969", title: "Multa cara", text: "Harland Stonecipher enfrenta processo caro após acidente." },
    { year: "1972", title: "Sportsman's Motor Club", text: "Funda cooperativa jurídica em Ada, Oklahoma." },
    { year: "1983", title: "Pre-Paid Legal Services", text: "Reposiciona e listada na Nasdaq (PPD)." },
    { year: "1996", title: "Expansão Canadá", text: "Inicia operação em Alberta e British Columbia." },
    { year: "2011", title: "LegalShield", text: "Renomeada e adquirida pela MidOcean Partners." },
    { year: "2014", title: "IDShield", text: "Lança serviço de proteção contra roubo de identidade." },
    { year: "2020", title: "App LegalShield", text: "Consultoria jurídica 100% mobile via app." },
    { year: "2023", title: "4 milhões de assinantes", text: "Bate marca histórica na América do Norte." },
    { year: "2026", title: "Top 33 mundial", text: "US$ 700 mi em receita e crescimento em small business." },
  ],
  productsIntro:
    "LegalShield não vende produtos físicos — vende <strong>planos de assinatura jurídica</strong> para famílias, indivíduos e pequenas empresas, mais o serviço adicional IDShield (proteção de identidade).",
  productLines: [
    { name: "LegalShield Personal", tag: "Família", color: "from-blue-500/15 to-blue-700/5",
      text: "Plano familiar (US$ 24,95/mês) com advogado ilimitado por telefone, cartas, contratos, testamento e defesa de trânsito.",
      items: ["Consultoria ilimitada", "Cartas & telefonemas", "Contratos revisados", "Testamento simples", "Defesa de trânsito"] },
    { name: "LegalShield Small Business", tag: "PJ / PME", color: "from-emerald-500/15 to-emerald-700/5",
      text: "Plano PJ (US$ 39-159/mês) para pequenos negócios: contratos, cobranças, RH e proteção jurídica.",
      items: ["Debt collection letters", "Contract review", "Employment counsel", "Trial defense hours"] },
    { name: "IDShield", tag: "Proteção identidade", color: "from-red-500/15 to-red-700/5",
      text: "Serviço de monitoramento e restauração de identidade em caso de roubo (US$ 14,95-24,95/mês).",
      items: ["Credit monitoring", "Social media watch", "Dark web scan", "Restauração 100% garantida"] },
    { name: "Bundles Combo", tag: "Melhor custo-benefício", color: "from-purple-500/15 to-purple-700/5",
      text: "Combos Legal + IDShield com desconto — o mais vendido é o Legal + ID Family.",
      items: ["Legal + ID Family (US$ 34,95)", "Small Business Bundle", "Elite Combo"] },
  ],
  planTitle: "Plano de Compensação LegalShield (Business Model)",
  planIntro:
    "Modelo <strong>MLM com receita 100% recorrente</strong> — Independent Associate ganha comissão em cada assinatura vendida <strong>enquanto o cliente pagar</strong>. Comissão sobre renovações mensais é o grande atrativo do plano.",
  planRanks: [
    { rank: "Associate", payout: "Comissão 30-60% 1º mês + residual", text: "Cadastro básico após treinamento." },
    { rank: "Senior Associate", payout: "+ Override 5%", text: "5 memberships pessoais vendidos." },
    { rank: "Manager", payout: "+ 10% Group Override", text: "Grupo com produção consistente." },
    { rank: "Director / Executive Director", payout: "+ Bônus liderança", text: "Múltiplos ranks abaixo, produção mensal." },
    { rank: "Millionaire Club", payout: "Elite Pool + prêmios", text: "Top mundial — bônus 6-7 dígitos anuais." },
  ],
  pros: [
    "Renda residual real (comissão enquanto o cliente pagar)",
    "Produto único no MMN mundial (serviço jurídico)",
    "Alta retenção — 70%+ de assinantes renovam anualmente",
    "Empresa listada e regulada (Nasdaq histórica)",
    "50 firmas de advocacia dedicadas — serviço real de qualidade",
    "IDShield agregou nova vertical de vendas em 2014",
  ],
  cons: [
    "Opera apenas em EUA e Canadá (não no Brasil)",
    "Concorrência de LegalZoom, Rocket Lawyer e apps jurídicos",
    "Cultura MMN interna criticada por alguns ex-associados",
    "Necessita conhecimento básico de direito para vender bem",
    "Assinatura mensal exige justificar valor continuamente",
    "Sem produto tangível — mais difícil de demonstrar",
  ],
  presenceIntro:
    "Presente em <strong>EUA (50 estados) e Canadá (4 províncias: Alberta, British Columbia, Manitoba, Ontario)</strong>. Sem operação em outros países em 2026.",
  countries: [
    "🇺🇸 EUA (50 estados)",
    "🇨🇦 Canadá (Alberta, BC, Manitoba, Ontario)",
  ],
  awards: [
    "Top 33 Business For Home Global 100 — 2026",
    "Forbes Best Small Businesses — múltiplas edições",
    "DSA Certification (Direct Selling Association)",
    "Better Business Bureau A+ Rating",
    "PPI Top 100 Direct Selling Companies",
  ],
  certifications: [
    "DSA Code of Ethics (Direct Selling Association EUA)",
    "BBB Accredited Business — A+ Rating",
    "Provider firms accredited by state bars",
    "SOC 2 Type II (segurança de dados IDShield)",
    "GDPR & CCPA compliance",
  ],
  faqs: [
    { q: "O que é a LegalShield?",
      a: "É uma multinacional americana fundada em 1972 que vende planos de assinatura jurídica para famílias, indivíduos e pequenas empresas nos EUA e Canadá. Por US$ 25-40/mês o assinante tem acesso ilimitado a advogado por telefone, revisão de contratos, testamento, defesa de trânsito e mais. Também oferece IDShield (proteção contra roubo de identidade)." },
    { q: "Quanto fatura a LegalShield?",
      a: "Em 2025 a LegalShield faturou US$ 700 milhões, ocupando o Top 33 no ranking Business For Home Global 100 2026. Tem 4,5 milhões de assinantes ativos." },
    { q: "A LegalShield opera no Brasil?",
      a: "Não. A LegalShield opera exclusivamente nos EUA (50 estados) e Canadá (4 províncias: Alberta, British Columbia, Manitoba, Ontario). Serviços jurídicos são altamente regulados por país, então expansão internacional exige parcerias locais — inexistentes no Brasil em 2026." },
    { q: "Como funciona o plano de compensação da LegalShield?",
      a: "Independent Associates ganham 30-60% de comissão sobre o primeiro mês da assinatura vendida + comissão residual mensal enquanto o cliente pagar (renda residual real). Ranks superiores (Manager, Director, Executive Director, Millionaire Club) ganham overrides sobre grupo e bônus de liderança." },
    { q: "Quanto custa a assinatura LegalShield?",
      a: "Plano Personal Family: US$ 24,95/mês. Plano Small Business: US$ 39-159/mês (varia por porte). IDShield individual: US$ 14,95/mês; família: US$ 24,95/mês. Bundle Legal + ID Family (mais vendido): US$ 34,95/mês." },
    { q: "A LegalShield é confiável?",
      a: "Sim. Opera há 53+ anos, foi listada na Nasdaq (PPD) até ser adquirida em 2011, tem A+ Rating no Better Business Bureau, é certificada pela DSA e mantém 50 firmas de advocacia dedicadas (uma por estado americano). Assinantes têm acesso a advogados reais, licenciados e barreados." },
    { q: "Quem é o fundador da LegalShield?",
      a: "Harland C. Stonecipher (1938-2014), empresário do Oklahoma que fundou a empresa em 1972 após enfrentar uma disputa jurídica cara sem poder pagar advogado. Foi CEO por décadas e é considerado o 'pai do plano jurídico pré-pago' nos EUA." },
    { q: "Qual a diferença entre LegalShield e LegalZoom?",
      a: "LegalZoom é um marketplace online para tarefas jurídicas pontuais (formar empresa, testamento único, marca). LegalShield é assinatura contínua com acesso ilimitado a um advogado dedicado. LegalZoom é B2C/DTC; LegalShield é DTC + MMN via 45 mil Independent Associates ativos." },
  ],
  founders: ["Harland C. Stonecipher"],
  foundingDate: "1972-01-01",
  foundingLocation: "Ada, Oklahoma, EUA",
  employees: 900,
  alternateNames: ["Pre-Paid Legal Services", "Sportsman's Motor Club", "PPD"],
  wikipediaUrl: "https://en.wikipedia.org/wiki/LegalShield",
};

const LegalShield = () => <CompanyPremiumPage data={data} />;
export default LegalShield;
