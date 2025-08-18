import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, TrendingUp, Users } from "lucide-react";

export function RecommendedDistributors() {
  const distributors = [
    {
      id: 1,
      name: "Rosalva Moreira",
      company: "Hinode",
      title: "Diamante Black",
      location: "São Paulo, SP",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviews: 127,
      teamSize: 1250,
      monthlyVolume: "R$ 124K"
    },
    {
      id: 2,
      name: "Hugh Johnson", 
      company: "Herbalife",
      title: "Presidente Team Million",
      location: "Rio de Janeiro, RJ",
      avatar: "/placeholder.svg", 
      rating: 4.8,
      reviews: 89,
      teamSize: 980,
      monthlyVolume: "R$ 98K"
    },
    {
      id: 3,
      name: "Janet and Shannon",
      company: "Jeunesse", 
      title: "Double Diamond",
      location: "Belo Horizonte, MG",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviews: 156,
      teamSize: 1450,
      monthlyVolume: "R$ 156K"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Distribuidores Recomendados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os distribuidores mais bem avaliados e com melhor desempenho da nossa comunidade.
          </p>
        </div>

        {/* Distributors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {distributors.map((distributor) => (
            <Card key={distributor.id} className="p-6 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={distributor.avatar} alt={distributor.name} />
                  <AvatarFallback className="bg-accent text-accent-foreground text-lg">
                    {distributor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {distributor.name}
                  </h3>
                  <Badge variant="secondary" className="mb-2">
                    {distributor.company}
                  </Badge>
                  <p className="text-sm text-accent font-medium mb-2">
                    {distributor.title}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{distributor.location}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-4 h-4 ${
                        star <= Math.floor(distributor.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {distributor.rating}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({distributor.reviews} avaliações)
                </span>
              </div>

              {/* Stats */}
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Equipe:
                  </span>
                  <span className="font-medium text-foreground">
                    {distributor.teamSize.toLocaleString()} pessoas
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Volume mensal:
                  </span>
                  <span className="font-medium text-accent">
                    {distributor.monthlyVolume}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Perfil
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary">
                  Conectar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Ver todos os distribuidores recomendados
          </Button>
        </div>
      </div>
    </section>
  );
}