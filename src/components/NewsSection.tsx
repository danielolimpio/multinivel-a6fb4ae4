import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      title: "Network Marketing Industry Legends: Mlm and June Ko, Bring Experience, Leadership and Momentum to Talk Fusion",
      excerpt: "Talk Fusion CEO Bob Reina announced today that industry legends June Ko and Mlm have joined the Talk Fusion executive team...",
      image: "/placeholder.svg",
      author: "Admin",
      date: "15 Nov 2024",
      category: "Liderança"
    },
    {
      id: 2,
      title: "Jeunesse Receives and Gets Recognized for Site Status at Lifevantage",
      excerpt: "Jeunesse Global has been recognized for achieving significant milestones in network marketing excellence and leadership...",
      image: "/placeholder.svg", 
      author: "Redação",
      date: "14 Nov 2024",
      category: "Reconhecimento"
    },
    {
      id: 3,
      title: "Herbalife BD on the Bosphorus with Growing Private Companies BD puts Jeunesse Global's #1B Overall",
      excerpt: "Herbalife Nutrition continues to expand its global presence with significant growth in emerging markets and strategic partnerships...",
      image: "/placeholder.svg",
      author: "Correspondente",
      date: "13 Nov 2024", 
      category: "Crescimento"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Últimas notícias</h2>
          <Button variant="outline">
            Ver todas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-3 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
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
                  
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent p-0 h-auto">
                    Ler mais
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Carregar mais notícias
          </Button>
        </div>
      </div>
    </section>
  );
}