/**
 * SEO content section for the homepage.
 *
 * Targets the highest-volume Marketing Multinível / MMN / MLM / Network Marketing
 * keywords identified via Semrush (BR database) and reinforces E-E-A-T
 * (Experience, Expertise, Authoritativeness, Trustworthiness) with explicit
 * mentions of the portal's authority since 2014 and 20+ years of sector experience.
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

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[hsl(40_85%_55%)] mb-3">
            Autoridade em MMN desde 2014 · +20 anos de experiência
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-gold">
            Tudo sobre Marketing Multinível, MMN, MLM e Marketing de Rede
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            A Universidade Multinível é o portal brasileiro de referência em Network Marketing e vendas diretas. Reunimos ranking das melhores empresas de marketing multinível do Brasil, comparativos de planos de compensação, análises de top earners, notícias do setor e o quiz que descobre a empresa ideal para o seu perfil.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <article>
            <h3 className="text-xl font-bold mb-3">O que é Marketing Multinível (MMN)?</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Marketing Multinível</strong> — também chamado de <strong>MMN</strong>, <strong>MLM</strong> (<em>multilevel marketing</em>), <strong>Network Marketing</strong> ou <strong>Marketing de Rede</strong> — é um modelo de vendas diretas em que distribuidores independentes comercializam produtos e formam redes, sendo remunerados pelas próprias vendas e pelo desempenho da equipe.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-bold mb-3">Diferença entre Multinível e Pirâmide</h3>
            <p className="text-muted-foreground leading-relaxed">
              A pirâmide financeira é ilegal porque depende apenas do recrutamento, sem produto real. O <strong>marketing multinível legítimo</strong> tem produto consumido pelo cliente final, plano de compensação transparente e é regulamentado pela ABEVD. Saber identificar a diferença é o primeiro passo para escolher bem.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-bold mb-3">Ranking das melhores empresas de MMN</h3>
            <p className="text-muted-foreground leading-relaxed">
              Avaliamos mais de 1.600 empresas de <strong>marketing multinível e vendas diretas</strong> no Brasil e no mundo: Hinode, Herbalife, Amway, Jeunesse, Nu Skin, doTERRA e centenas de outras. Veja posições atualizadas em tempo real, votos da comunidade e <em>momentum</em> de mercado.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-bold mb-3">Top Earners do Network Marketing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Conheça os maiores <strong>top earners</strong> do <strong>network marketing</strong> mundial, seus ganhos, empresas, estratégias de recrutamento, conteúdo e duplicação. Cases reais de quem construiu renda de 6 e 7 dígitos no <strong>MLM</strong>.
            </p>
          </article>
        </div>

        <div className="border-t border-[hsl(40_85%_50%)]/30 pt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Perguntas frequentes sobre Marketing Multinível
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-5">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
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
  );
}
