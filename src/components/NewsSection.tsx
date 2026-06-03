import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function NewsSection() {
  const newsArticles = [
    {
      id: 3,
      slug: "network-marketing-tudo-sobre-multinivel-sistemas-mmn-relacionamento",
      title: "Network Marketing: Tudo sobre Marketing Multinível, Sistemas MMN e Marketing de Relacionamento",
      excerpt: "Guia completo sobre Network Marketing: sistemas MMN, empresas confiáveis, planos de compensação, CRM de relacionamento e como montar sua própria rede.",
      image: "/images/artigos/network-marketing-tudo-sobre-mmn-relacionamento.jpg",
      author: "Equipe UniversidadeMN",
      date: "03 Jun 2026",
      sortDate: new Date("2026-06-03").getTime(),
      category: "Educação Financeira"
    },
    {
      id: 2,
      slug: "marketing-de-rede-guia-completo-para-iniciantes",
      title: "Marketing de Rede: Guia Completo para Iniciantes",
      excerpt: "Comece do zero no network marketing com este guia prático: estrutura, mindset, recrutamento e erros que arruínam novos empreendedores.",
      image: "/images/artigos/marketing-de-rede-guia-completo-iniciantes.jpg",
      author: "Equipe UniversidadeMN",
      date: "09 Jan 2026",
      sortDate: new Date("2026-01-09").getTime(),
      category: "Educação Financeira"
    },
    {
      id: 1,
      slug: "como-ganhar-dinheiro-com-marketing-multinivel-em-2026",
      title: "Como Ganhar Dinheiro com Marketing Multinível em 2026",
      excerpt: "Descubra estratégias reais para lucrar com MMN em 2026, evitando golpes e construindo renda passiva com ética e consistência.",
      image: "/images/artigos/como-ganhar-dinheiro-mmn-2026.jpg",
      author: "Equipe UniversidadeMN",
      date: "08 Jan 2026",
      sortDate: new Date("2026-01-08").getTime(),
      category: "Educação Financeira"
    },
  ].sort((a, b) => b.sortDate - a.sortDate);

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Últimos artigos</h2>
          <Button variant="outline" className="text-sm" asChild>
            <Link to="/blog/">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {newsArticles.map((article) => (
            <Link key={article.id} to={`/artigo/${article.slug}/`} className="block">
              <Card className="overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-gradient-blue text-[hsl(40_85%_60%)] text-xs font-semibold rounded border border-[hsl(40_85%_50%)] shadow-md">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-foreground mb-2 sm:mb-3 line-clamp-2 leading-tight text-sm sm:text-base hover:text-gold-medium transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <span className="text-gold-medium font-semibold">
                      Ler mais
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
