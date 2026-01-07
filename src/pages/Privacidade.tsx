import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, Mail, FileText } from "lucide-react";

export default function Privacidade() {
  return (
    <>
      <SEO 
        title="Política de Privacidade - Universidade Multinível"
        description="Conheça nossa Política de Privacidade. Saiba como coletamos, usamos e protegemos seus dados pessoais na Universidade Multinível."
        canonical="/privacidade"
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
                  <Shield className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-gold">Proteção de Dados</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Política de <span className="text-transparent bg-clip-text bg-gradient-gold">Privacidade</span>
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
                      <h2 className="text-2xl font-bold text-foreground">1. Introdução</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        A Universidade Multinível está comprometida em proteger a privacidade e os dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso portal.
                      </p>
                      <p>
                        Ao acessar e utilizar a Universidade Multinível, você concorda com as práticas descritas nesta política. Recomendamos a leitura atenta de todo o documento para compreender nossos procedimentos em relação aos seus dados.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <Eye className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">2. Dados que Coletamos</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>Podemos coletar os seguintes tipos de informações:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-foreground">Dados de identificação:</strong> nome, e-mail e telefone quando você se cadastra em nossa plataforma.</li>
                        <li><strong className="text-foreground">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de permanência.</li>
                        <li><strong className="text-foreground">Dados de interação:</strong> votos em empresas, comentários e participações no fórum.</li>
                        <li><strong className="text-foreground">Cookies:</strong> pequenos arquivos armazenados em seu dispositivo para melhorar sua experiência de navegação.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <UserCheck className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">3. Como Usamos seus Dados</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>Utilizamos suas informações para:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Fornecer e melhorar nossos serviços e funcionalidades.</li>
                        <li>Personalizar sua experiência no portal.</li>
                        <li>Enviar newsletters e comunicações sobre o mercado de marketing de rede (apenas se você optou por recebê-las).</li>
                        <li>Processar votos e interações com o ranking de empresas.</li>
                        <li>Garantir a segurança e integridade da plataforma.</li>
                        <li>Cumprir obrigações legais e regulatórias.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <Lock className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">4. Proteção de Dados</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL/TLS para proteger a transmissão de dados e armazenamos informações em servidores seguros.
                      </p>
                      <p>
                        No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro. Embora nos esforcemos para proteger seus dados, não podemos garantir segurança absoluta.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <Shield className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">5. Seus Direitos</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Acessar seus dados pessoais que mantemos.</li>
                        <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                        <li>Solicitar a exclusão de seus dados pessoais.</li>
                        <li>Revogar seu consentimento a qualquer momento.</li>
                        <li>Solicitar a portabilidade de seus dados.</li>
                        <li>Obter informações sobre o compartilhamento de seus dados.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-gold shadow-gold">
                        <Mail className="w-6 h-6 text-gold-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">6. Contato</h2>
                    </div>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>
                        Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: <strong className="text-gold">privacidade@universidademultinivel.com</strong>
                      </p>
                      <p>
                        Responderemos sua solicitação no prazo de 15 dias úteis, conforme previsto na legislação vigente.
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
