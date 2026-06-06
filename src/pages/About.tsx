import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Heart, 
  Globe, 
  Lightbulb, 
  Users, 
  Award, 
  BookOpen,
  TrendingUp,
  Cpu,
  Wrench,
  Star,
  Handshake,
  MessageSquare,
  Link as LinkIcon,
  Filter,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
  Sparkles,
  Rocket,
  Shield,
  Zap,
  GraduationCap
} from "lucide-react";
import danielPhoto from "@/assets/daniel-olimpio.jpg";

const About = () => {
  const values = [
    { icon: Shield, title: "Transparência", description: "Oferecemos análises isentas, dados reais e opiniões fundamentadas." },
    { icon: Lightbulb, title: "Inovação", description: "Estamos sempre à frente, explorando novas tecnologias, tendências e formatos digitais." },
    { icon: Users, title: "Conexão", description: "Acreditamos no poder do relacionamento como motor de crescimento coletivo." },
    { icon: Award, title: "Excelência", description: "Cada conteúdo, ferramenta ou parceria é cuidadosamente curado com rigor e propósito." },
    { icon: BookOpen, title: "Educação Contínua", description: "O mercado evolui — e nós também. Aprendizado é nosso combustível diário." },
  ];

  const services = [
    { icon: Globe, title: "Monitoramento Global", description: "Acompanhamos em tempo real as principais empresas de Marketing de Rede do mundo, trazendo análises atualizadas sobre planos de compensação, lançamentos, regulamentações e performance." },
    { icon: TrendingUp, title: "Tendências & Inovação", description: "Mapeamos os movimentos do mercado, desde o uso de inteligência artificial e blockchain até novos modelos de engajamento digital." },
    { icon: Wrench, title: "Ferramentas & Tecnologia", description: "Desenvolvemos e indicamos recursos digitais que potencializam o trabalho de líderes: desde automações e CRMs até plataformas de treinamento e presença online." },
    { icon: Star, title: "Visibilidade para Líderes", description: "Destacamos histórias reais, cases de sucesso e perfis que inspiram, conectando talentos com oportunidades." },
    { icon: Handshake, title: "Parcerias Estratégicas", description: "Trabalhamos lado a lado com empresas sérias, inovadoras e alinhadas ao futuro do setor." },
    { icon: MessageSquare, title: "Debate Consciente", description: "Criamos um ambiente seguro e respeitoso para discussões críticas, reflexões e trocas que elevam o nível do mercado." },
    { icon: LinkIcon, title: "Marketing de Relacionamento", description: "Não vendemos ilusões — construímos pontes. Nossa comunicação é humana, direta e baseada em valor mútuo." },
    { icon: Filter, title: "Curadoria Avançada", description: "Filtramos o ruído e entregamos apenas o que importa: negócios relevantes, projetos promissores e insights acionáveis." },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/danielolimpio.com.br", label: "Facebook" },
    { icon: Twitter, url: "https://x.com/danielolimpio_", label: "X (Twitter)" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/danielolimpio-com/", label: "LinkedIn" },
    { icon: Instagram, url: "https://www.instagram.com/danielolimpio_com", label: "Instagram" },
    { icon: ExternalLink, url: "https://danielolimpio.com/", label: "Website" },
  ];

  return (
    <>
      <SEO 
        title="Sobre - Universidade Multinível | Onde Experiência, Tecnologia e Rede se Encontram"
        description="Conheça a Universidade Multinível, fundada por Daniel Olimpio com mais de 20 anos de experiência em Marketing de Rede. Informação, conexão e inovação para o setor."
        canonical="/sobre"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.1),transparent_50%)]" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-premium mb-6">
                  <Sparkles className="w-4 h-4" style={{ color: 'hsl(40 85% 55%)' }} />
                  <span className="text-sm font-medium text-white">Universidade Multinível</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  <span className="text-gradient-gold">Sobre a</span> <span className="text-transparent bg-clip-text bg-gradient-blue">Universidade Multinível</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gold font-medium mb-8">
                  Onde Experiência, Tecnologia e Rede se Encontram
                </p>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="border-gold/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl icon-premium">
                        <Rocket className="w-6 h-6 text-[hsl(40_85%_55%)]" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nossa História</h2>
                    </div>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                      <p>
                        Fundada por <strong className="text-foreground">Daniel Olimpio</strong>, empreendedor com mais de <strong className="text-gold">20 anos de atuação no mercado de Marketing de Rede</strong>, a Universidade Multinível nasce da convicção de que informação de qualidade, conexão estratégica e inovação digital são os pilares para o crescimento sustentável de profissionais, líderes e empresas nesse ecossistema bilionário.
                      </p>
                      
                      <p>
                        Com equipes que já ultrapassaram <strong className="text-gold">40 mil pessoas</strong>, reconhecimento internacional e uma vivência profunda nas maiores empresas globais do setor, Daniel testemunhou de perto o poder transformador do Marketing de Rede — um sistema que movimenta mais de <strong className="text-gold">US$ 250 bilhões anualmente</strong> e impacta milhões de vidas ao redor do mundo.
                      </p>
                      
                      <p>
                        Mas percebeu também uma lacuna: a falta de um hub centralizado, confiável e atualizado, capaz de unir conhecimento, tendências, tecnologia e relacionamento.
                      </p>
                      
                      <p>
                        Foi aí que, aliando sua paixão por empreendedorismo de rede à sua expertise como <strong className="text-foreground">desenvolvedor web full stack</strong>, Daniel idealizou a Universidade Multinível: uma plataforma digital inovadora, feita por quem entende o mercado e domina a tecnologia que o impulsiona.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Mission Card */}
                  <Card className="border-gold/20 bg-card hover:shadow-gold transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 rounded-2xl icon-premium group-hover:scale-110 transition-transform duration-300">
                          <Target className="w-8 h-8 text-[hsl(40_85%_55%)]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nossa Missão</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Empoderar líderes, empreendedores e empresas de Marketing de Rede com <strong className="text-foreground">informação estratégica</strong>, <strong className="text-foreground">curadoria inteligente</strong> e <strong className="text-foreground">ferramentas digitais avançadas</strong>, promovendo um ecossistema mais informado, conectado e evoluído.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Vision Card */}
                  <Card className="border-gold/20 bg-card hover:shadow-gold transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 rounded-2xl icon-premium group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-8 h-8 text-[hsl(40_85%_55%)]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nossa Visão</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Ser a <strong className="text-gold">referência global</strong> em inteligência e inovação para o mercado de Marketing de Rede, integrando conhecimento, tecnologia e relacionamento para acelerar o sucesso sustentável de todos os envolvidos no setor.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-premium mb-4">
                    <Heart className="w-4 h-4" style={{ color: 'hsl(40 85% 55%)' }} />
                    <span className="text-sm font-medium text-white">Princípios</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Valores</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <Card key={index} className="border-gold/20 bg-card hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group">
                      <CardContent className="p-6">
                        <div className="p-3 rounded-xl icon-premium w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                          <value.icon className="w-6 h-6 text-[hsl(40_85%_55%)]" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-premium mb-4">
                    <Zap className="w-4 h-4" style={{ color: 'hsl(40 85% 55%)' }} />
                    <span className="text-sm font-medium text-white">Ecossistema</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O Que Fazemos</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    A Universidade Multinível não é apenas um site de notícias. É um <strong className="text-foreground">ecossistema de valor</strong> voltado para o futuro do Marketing de Rede.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((service, index) => (
                    <Card key={index} className="border-gold/20 bg-card hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="p-3 rounded-xl icon-premium w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-5 h-5 text-[hsl(40_85%_55%)]" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-premium mb-4">
                    <GraduationCap className="w-4 h-4" style={{ color: 'hsl(40 85% 55%)' }} />
                    <span className="text-sm font-medium text-white">Fundador</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Quem é Daniel Olimpio</h2>
                </div>

                <Card className="border-gold/20 bg-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Photo Column */}
                      <div className="md:col-span-1 relative">
                        <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold-dark/20 max-w-[280px] mx-auto md:max-w-none">
                          <img 
                            src={danielPhoto} 
                            alt="Daniel Olimpio - Fundador da Universidade Multinível" 
                            width={800}
                            height={800}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                          <div className="flex gap-3 justify-center">
                            {socialLinks.map((social, index) => (
                              <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full icon-premium hover:scale-110 transition-transform duration-300"
                                title={social.label}
                              >
                                <social.icon className="w-5 h-5 text-[hsl(40_85%_55%)]" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className="md:col-span-2 p-6 md:p-8">
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">Empreendedor</span>
                          <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">Networker há +20 anos</span>
                          <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">Desenvolvedor Web</span>
                          <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">Idealizador</span>
                        </div>

                        <div className="space-y-5 text-muted-foreground leading-relaxed">
                          <p>
                            <strong className="text-foreground">Daniel Olimpio</strong> é a rara combinação de networker de alto impacto e profissional de tecnologia de ponta. Sua jornada começou nas fileiras do Marketing de Rede, onde construiu <strong className="text-gold">equipes globais</strong>, colecionou <strong className="text-gold">premiações internacionais</strong> e viveu de perto os desafios e oportunidades desse modelo transformador.
                          </p>
                          
                          <p>
                            Paralelamente, mergulhou no mundo do desenvolvimento digital, tornando-se um especialista em soluções web completas — do front-end ao back-end, do UX/UI à arquitetura de sistemas. Essa dualidade única é a alma da Universidade Multinível: uma plataforma feita por quem conhece profundamente o mercado… e sabe como construir a tecnologia que ele merece.
                          </p>
                          
                          <Card className="border-gold/30 bg-gold/5">
                            <CardContent className="p-6">
                              <p className="text-lg font-medium text-foreground italic">
                                "Seu propósito? <span className="text-gold">Educar, conectar e inovar</span> — para que mais pessoas possam usar o Marketing de Rede não apenas como uma fonte de renda, mas como um veículo de <strong>liberdade, propósito e legado</strong>."
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Footer CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Card className="border-gold/30 bg-gradient-to-br from-gold/5 to-gold-dark/5 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.1),transparent_70%)]" />
                  <CardContent className="p-10 md:p-14 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full icon-premium mb-6">
                      <Lightbulb className="w-5 h-5 text-[hsl(40_85%_55%)]" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Universidade Multinível</h2>
                    
                    <p className="text-xl text-gold font-medium mb-6">
                      💡 Conhecimento que conecta. Tecnologia que transforma.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Fundada em <strong className="text-foreground">2025</strong> por <strong className="text-foreground">Daniel Olimpio</strong> — com mais de 20 anos de paixão pelo Marketing de Rede e pela inovação digital.
                    </p>
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
};

export default About;
