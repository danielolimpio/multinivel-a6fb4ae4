import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Headphones, 
  Mail, 
  MessageCircle, 
  Clock, 
  CheckCircle,
  FileQuestion,
  Users,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const supportOptions = [
  {
    icon: FileQuestion,
    title: "FAQ",
    description: "Consulte as perguntas frequentes antes de abrir um chamado.",
    link: "/faq",
    linkText: "Ver FAQ"
  },
  {
    icon: MessageCircle,
    title: "Fórum da Comunidade",
    description: "Tire dúvidas com outros membros da comunidade.",
    link: "/forum",
    linkText: "Acessar Fórum"
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Envie sua mensagem para contato@universidademultinivel.com",
    link: "mailto:contato@universidademultinivel.com",
    linkText: "Enviar E-mail"
  }
];

const features = [
  {
    icon: Clock,
    title: "Resposta em 48h",
    description: "Respondemos todas as solicitações em até 48 horas úteis."
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Time dedicado para resolver suas dúvidas e problemas."
  },
  {
    icon: Shield,
    title: "Suporte Seguro",
    description: "Suas informações são tratadas com total sigilo e segurança."
  }
];

export default function Suporte() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Chamado aberto com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Suporte - Central de Ajuda | Universidade Multinível"
        description="Precisa de ajuda? Entre em contato com nossa equipe de suporte. Respondemos em até 48 horas úteis. FAQ, fórum e atendimento por e-mail."
        canonical="/suporte"
      />
      
      <Header />
      
      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Headphones className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Central de Suporte
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar você. Escolha a melhor forma de entrar em contato 
              ou abra um chamado diretamente.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {supportOptions.map((option, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <option.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                {option.link.startsWith("mailto:") ? (
                  <a href={option.link}>
                    <Button variant="outline" size="sm">{option.linkText}</Button>
                  </a>
                ) : (
                  <Link to={option.link}>
                    <Button variant="outline" size="sm">{option.linkText}</Button>
                  </Link>
                )}
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <div className="flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Support Form */}
          <Card className="max-w-2xl mx-auto p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
              Abrir Chamado de Suporte
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Resumo do seu problema ou dúvida"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva detalhadamente sua solicitação..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Enviar Chamado
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
