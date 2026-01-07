import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "O que é a Universidade Multinível?",
    answer: "A Universidade Multinível é o maior portal de referência em Marketing de Rede do Brasil. Oferecemos rankings atualizados, análises detalhadas de empresas de vendas diretas, comparativos, notícias e uma comunidade ativa para networkers de todo o país."
  },
  {
    question: "Como funciona o sistema de votação?",
    answer: "Nosso sistema de votação permite que usuários cadastrados votem nas empresas de Marketing de Rede que conhecem ou com as quais trabalham. Os votos são contabilizados em tempo real e influenciam diretamente o ranking das empresas em nossa plataforma."
  },
  {
    question: "As empresas listadas são confiáveis?",
    answer: "Listamos empresas que operam no modelo de Marketing Multinível. Recomendamos que você sempre faça sua própria pesquisa antes de ingressar em qualquer empresa. Nosso ranking é baseado em votos da comunidade e não constitui recomendação de investimento."
  },
  {
    question: "Como posso me cadastrar como afiliado?",
    answer: "Você pode se cadastrar clicando no botão 'Cadastre-se' no menu superior. Após o cadastro, você terá acesso ao dashboard de afiliado onde poderá acompanhar suas indicações e comissões."
  },
  {
    question: "O cadastro é gratuito?",
    answer: "Sim, o cadastro na plataforma é totalmente gratuito. Você pode criar sua conta, votar nas empresas, participar do fórum e acessar todo o conteúdo sem nenhum custo."
  },
  {
    question: "Como funciona o programa de indicação?",
    answer: "Ao se cadastrar, você recebe um código de indicação exclusivo. Quando alguém se cadastra usando seu código, você recebe comissões sobre as atividades dessa pessoa na plataforma, seguindo nosso plano de compensação multinível."
  },
  {
    question: "Qual a diferença entre Marketing Multinível e Pirâmide?",
    answer: "O Marketing Multinível (MMN) é um modelo de negócio legítimo onde a renda vem principalmente da venda de produtos ou serviços reais. Já esquemas de pirâmide são ilegais e focam exclusivamente no recrutamento, sem produtos reais de valor. Em nosso blog, temos artigos detalhados explicando essas diferenças."
  },
  {
    question: "Como entro em contato com o suporte?",
    answer: "Você pode entrar em contato conosco através da página de Contato, enviando um e-mail para contato@universidademultinivel.com ou através de nossas redes sociais. Respondemos todas as mensagens em até 48 horas úteis."
  },
  {
    question: "Posso sugerir uma empresa para o ranking?",
    answer: "Sim! Se você conhece uma empresa de Marketing de Rede que ainda não está listada em nossa plataforma, entre em contato conosco através da página de Contato com as informações da empresa."
  },
  {
    question: "Os dados do site são atualizados com que frequência?",
    answer: "O ranking é atualizado em tempo real conforme os votos são registrados. As informações das empresas são revisadas periodicamente para garantir precisão e atualidade."
  }
];

export default function FAQ() {
  return (
    <>
      <SEO 
        title="FAQ - Perguntas Frequentes | Universidade Multinível"
        description="Encontre respostas para as perguntas mais frequentes sobre a Universidade Multinível, Marketing de Rede, votação, cadastro e nosso programa de afiliados."
        canonical="/faq"
      />
      
      <Header />
      
      <main className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossa plataforma, 
              Marketing de Rede e como participar da comunidade.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="max-w-4xl mx-auto p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base sm:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Still Have Questions */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-primary/5 border-primary/20">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Ainda tem dúvidas?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você. Entre em contato conosco!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button className="w-full sm:w-auto">
                    <Mail className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Acesse o Fórum
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
