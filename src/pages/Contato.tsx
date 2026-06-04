import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, MapPin, Clock, Send, Phone, Globe } from "lucide-react";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <>
      <SEO 
        title="Contato - Universidade Multinível"
        description="Entre em contato com a Universidade Multinível. Tire suas dúvidas, envie sugestões ou solicite parcerias. Estamos aqui para ajudar!"
        canonical="/contato"
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
                  <MessageSquare className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-gold">Fale Conosco</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  <span className="text-gradient-gold">Entre em</span> <span className="text-transparent bg-clip-text bg-gradient-blue">Contato</span>
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tem dúvidas, sugestões ou quer fazer uma parceria? Ficaremos felizes em ouvir você!
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Contact Form */}
                  <Card className="border-gold/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-5 sm:p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Send className="w-6 h-6 text-[hsl(40_85%_55%)]" />
                        Envie sua Mensagem
                      </h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome Completo</Label>
                          <Input 
                            id="nome"
                            placeholder="Seu nome"
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input 
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="assunto">Assunto</Label>
                          <Input 
                            id="assunto"
                            placeholder="Sobre o que deseja falar?"
                            value={formData.assunto}
                            onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="mensagem">Mensagem</Label>
                          <Textarea 
                            id="mensagem"
                            placeholder="Escreva sua mensagem aqui..."
                            rows={5}
                            value={formData.mensagem}
                            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full btn-premium">
                          <Send className="w-4 h-4 mr-2" style={{ color: 'hsl(40 85% 55%)' }} />
                          Enviar Mensagem
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                  
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <Card className="border-gold/20 bg-card/50 backdrop-blur-sm hover:shadow-gold transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl icon-premium">
                            <Mail className="w-6 h-6 text-[hsl(40_85%_55%)]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">E-mail</h3>
                            <p className="text-muted-foreground">contato@universidademultinivel.com</p>
                            <p className="text-muted-foreground">parcerias@universidademultinivel.com</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gold/20 bg-card/50 backdrop-blur-sm hover:shadow-gold transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl icon-premium">
                            <Globe className="w-6 h-6 text-[hsl(40_85%_55%)]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">Redes Sociais</h3>
                            <p className="text-muted-foreground">@universidademultinivel</p>
                            <p className="text-sm text-muted-foreground mt-1">Instagram, Facebook, LinkedIn, YouTube</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gold/20 bg-card/50 backdrop-blur-sm hover:shadow-gold transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl icon-premium">
                            <Clock className="w-6 h-6 text-[hsl(40_85%_55%)]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">Horário de Atendimento</h3>
                            <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                            <p className="text-sm text-muted-foreground mt-1">Horário de Brasília (GMT-3)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gold/20 bg-card/50 backdrop-blur-sm hover:shadow-gold transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl icon-premium">
                            <MapPin className="w-6 h-6 text-[hsl(40_85%_55%)]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">Localização</h3>
                            <p className="text-muted-foreground">São Paulo, Brasil</p>
                            <p className="text-sm text-muted-foreground mt-1">Atendimento 100% digital</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gold/20 bg-gradient-gold/10">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2">💡 Dica</h3>
                        <p className="text-muted-foreground text-sm">
                          Para questões sobre empresas específicas do ranking, recomendamos visitar a página da empresa e verificar as informações de contato oficial diretamente.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
