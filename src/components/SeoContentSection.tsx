import seoBg from "@/assets/seo-section-bg.webp";

/**
 * SEO content section for the homepage.
 * Premium dark layout over Network Marketing event background.
 */
export function SeoContentSection() {
  const faqs = [
    {
      q: "O que é Marketing Multinível (MMN)?",
      a: "Marketing Multinível, também conhecido pelas siglas MMN, MLM (multilevel marketing) ou Marketing de Rede, é um modelo legítimo de vendas diretas em que distribuidores independentes comercializam produtos ou serviços de uma empresa e podem construir uma rede de outros distribuidores, sendo remunerados tanto pelas vendas pessoais quanto pelo desempenho da sua equipe, conforme o plano de compensação da empresa.",
    },
    {
      q: "Qual a diferença entre Marketing Multinível e pirâmide financeira?",
      a: "A diferença essencial está na origem da remuneração. No Marketing Multinível existe um produto ou serviço real, consumido pelo cliente final, e os ganhos vêm das vendas. Na pirâmide financeira não há produto efetivo (ou o produto é apenas um disfarce) e os ganhos dependem exclusivamente do recrutamento de novos participantes — modelo ilegal no Brasil pela Lei 1.521/51 e fiscalizado pelo Ministério Público.",
    },
    {
      q: "Qual a melhor empresa de Marketing Multinível do Brasil em 2026?",
      a: "Nosso ranking atualizado avalia mais de 1.600 empresas de MMN e vendas diretas considerando plano de compensação, momentum de mercado, tempo de operação, satisfação dos distribuidores e crescimento real. Consulte o ranking completo e o comparativo lado a lado de até 3 empresas para escolher a melhor para o seu perfil.",
    },
    {
      q: "Como funciona o Network Marketing na prática?",
      a: "No Network Marketing o profissional atua como distribuidor independente: compra produtos com desconto, revende ao consumidor final e convida outras pessoas para também se tornarem distribuidoras, formando uma rede. A renda vem de bônus diretos sobre vendas pessoais e bônus de profundidade sobre a produção da rede, segundo o plano de compensação (unilevel, binário, matricial ou híbrido).",
    },
    {
      q: "Como ganhar dinheiro com Marketing Multinível em 2026?",
      a: "Os top earners do MMN combinam quatro pilares: escolha de uma empresa sólida, consumo e venda real de produtos, recrutamento qualificado por tráfego pago e conteúdo, e duplicação por treinamento da equipe. Nosso blog reúne guias práticos, cursos e cases reais de quem vive do marketing de rede.",
    },
    {
      q: "Marketing Multinível é legal no Brasil?",
      a: "Sim. O MMN é regulamentado como modalidade de venda direta pela ABEVD (Associação Brasileira de Empresas de Vendas Diretas) e reconhecido pela Receita Federal. O que é ilegal é o esquema em pirâmide, disfarçado de multinível — por isso é fundamental escolher empresas com produto real, histórico e plano de compensação transparente.",
    },
  ];

  const cards = [
    {
      title: "O que é Marketing Multinível (MMN)?",
      body: (
        <>
          <strong className="text-white">Marketing Multinível</strong> — também chamado de <strong className="text-white">MMN</strong>, <strong className="text-white">MLM</strong> (<em>multilevel marketing</em>), <strong className="text-white">Network Marketing</strong> ou <strong className="text-white">Marketing de Rede</strong> — é um modelo de vendas diretas em que distribuidores independentes comercializam produtos e formam redes, sendo remunerados pelas próprias vendas e pelo desempenho da equipe.
        </>
      ),
    },
    {
      title: "Diferença entre Multinível e Pirâmide",
      body: (
        <>
          A pirâmide financeira é ilegal porque depende apenas do recrutamento, sem produto real. O <strong className="text-white">marketing multinível legítimo</strong> tem produto consumido pelo cliente final, plano de compensação transparente e é regulamentado pela ABEVD. Saber identificar a diferença é o primeiro passo para escolher bem.
        </>
      ),
    },
    {
      title: "Ranking das melhores empresas de MMN",
      body: (
        <>
          Avaliamos mais de 1.600 empresas de <strong className="text-white">marketing multinível e vendas diretas</strong> no Brasil e no mundo: Hinode, Herbalife, Amway, Jeunesse, Nu Skin, doTERRA e centenas de outras. Veja posições atualizadas em tempo real, votos da comunidade e <em>momentum</em> de mercado.
        </>
      ),
    },
    {
      title: "Top Earners do Network Marketing",
      body: (
        <>
          Conheça os maiores <strong className="text-white">top earners</strong> do <strong className="text-white">network marketing</strong> mundial, seus ganhos, empresas, estratégias de recrutamento, conteúdo e duplicação. Cases reais de quem construiu renda de 6 e 7 dígitos no <strong className="text-white">MLM</strong>.
        </>
      ),
    },
  ];

  return (
    <>
      {/* Top section — Network Marketing background */}
      <section
        className="relative isolate py-16 sm:py-24 overflow-hidden border-t border-b border-[hsl(40_85%_50%)]/40"
      >
        <img
          src={seoBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1064}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#02050a]/98 via-[#040d1a]/97 to-[#02050a]/99"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <header className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-white mb-4">
              Autoridade em MMN desde 2014 · +20 anos de experiência
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-gradient-gold leading-tight">
              Tudo sobre Marketing Multinível, MMN, MLM e Marketing de Rede
            </h2>
            <p className="text-white/85 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              A Universidade Multinível é o portal brasileiro de referência em Network Marketing e vendas diretas. Reunimos ranking das melhores empresas de marketing multinível do Brasil, comparativos de planos de compensação, análises de top earners, notícias do setor e o quiz que descobre a empresa ideal para o seu perfil.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[hsl(40_85%_55%)] to-transparent" />
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((c) => (
              <article
                key={c.title}
                className="group relative rounded-xl p-6 sm:p-7 bg-white/[0.04] backdrop-blur-sm border border-white/15 hover:border-[hsl(40_85%_55%)]/50 transition-colors duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                  {c.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section — clean default background */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-foreground">
            Perguntas frequentes sobre Marketing Multinível
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-5 last:border-b-0">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* FAQPage JSON-LD for Google rich results */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </div>
      </section>
    </>
  );
}

