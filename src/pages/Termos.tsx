import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, CheckCircle, Users, Ban } from "lucide-react";

export default function Termos() {
  return (
    <>
      <SEO 
        title="Termos de Uso - Universidade Multinível"
        description="Leia nossos Termos de Uso. Conheça as regras e condições para utilização do portal Universidade Multinível."
        canonical="/termos"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-16 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.1),transparent_50%)]" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                  <Scale className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-gold">Termos Legais</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Termos de <span className="text-transparent bg-clip-text bg-gradient-gold">Uso</span>
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  Última atualização: Janeiro de 2026
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                
                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <FileText className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">1. Aceitação dos Termos</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        Ao acessar e utilizar a Universidade Multinível, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso portal.
                      </p>
                      <p>
                        Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado do portal após alterações constitui aceitação dos novos termos.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <CheckCircle className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">2. Descrição do Serviço</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        A Universidade Multinível é um portal informativo dedicado ao mercado de Marketing de Rede (MMN) e Vendas Diretas. Oferecemos:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Rankings de empresas de marketing multinível baseados em votos da comunidade.</li>
                        <li>Análises e informações sobre empresas do setor.</li>
                        <li>Artigos educativos sobre o mercado de vendas diretas.</li>
                        <li>Fórum para discussão entre profissionais do setor.</li>
                        <li>Ferramentas de comparação entre empresas.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <Users className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">3. Cadastro de Usuário</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        Para acessar certas funcionalidades, você pode precisar criar uma conta. Ao se cadastrar, você concorda em:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Fornecer informações verdadeiras, precisas e completas.</li>
                        <li>Manter a confidencialidade de sua senha e conta.</li>
                        <li>Notificar-nos imediatamente sobre qualquer uso não autorizado.</li>
                        <li>Ser responsável por todas as atividades realizadas em sua conta.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <Ban className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">4. Condutas Proibidas</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>Ao utilizar a Universidade Multinível, você concorda em NÃO:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Publicar conteúdo difamatório, ofensivo ou ilegal.</li>
                        <li>Utilizar bots ou scripts para manipular votações ou rankings.</li>
                        <li>Fazer spam ou publicidade não autorizada.</li>
                        <li>Violar direitos autorais ou propriedade intelectual.</li>
                        <li>Tentar acessar áreas restritas do sistema sem autorização.</li>
                        <li>Prejudicar o funcionamento do portal de qualquer forma.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <AlertTriangle className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">5. Isenção de Responsabilidade</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        As informações fornecidas neste portal são apenas para fins informativos e educacionais. A Universidade Multinível:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Não garante a precisão ou completude das informações sobre empresas.</li>
                        <li>Não endossa nenhuma empresa de marketing multinível específica.</li>
                        <li>Não se responsabiliza por decisões de negócio baseadas em nosso conteúdo.</li>
                        <li>Não garante resultados financeiros em qualquer empresa listada.</li>
                      </ul>
                      <p className="mt-4">
                        <strong className="text-gold">Importante:</strong> Ganhos potenciais e reais variam significativamente entre distribuidores. Resultados não são garantidos e dependem de múltiplos fatores individuais.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <Scale className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">6. Legislação Aplicável</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de São Paulo, SP, Brasil.
                      </p>
                      <p>
                        Para dúvidas sobre estes termos, entre em contato: <strong className="text-gold">contato@universidademultinivel.com</strong>
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
