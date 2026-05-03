import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, TrendingUp, Users } from "lucide-react";

import charlesMota from "@/assets/distributors/charles-mota.png";
import yvanaPacifici from "@/assets/distributors/yvana-pacifici.jpg";
import elisaPortolan from "@/assets/distributors/elisa-portolan.jpg";

export function RecommendedDistributors() {
  const distributors = [
    {
      id: 1,
      name: "Charles Mota",
      company: "Hinode",
      title: "Triplo Diamante",
      location: "Manaus, AM",
      avatar: charlesMota,
      rating: 4.9,
      reviews: 127,
      teamSize: 1250,
      monthlyVolume: "R$ 124K"
    },
    {
      id: 2,
      name: "Yvana Pacifici", 
      company: "Herbalife",
      title: "Presidente 20K",
      location: "Belo Horizonte, MG",
      avatar: yvanaPacifici, 
      rating: 4.8,
      reviews: 89,
      teamSize: 980,
      monthlyVolume: "R$ 98K"
    },
    {
      id: 3,
      name: "Elisa Portolan",
      company: "Mary Kay", 
      title: "Diretora Nacional",
      location: "Caxias do Sul, RS",
      avatar: elisaPortolan,
      rating: 4.9,
      reviews: 156,
      teamSize: 1450,
      monthlyVolume: "R$ 156K"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Distribuidores Recomendados
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça os distribuidores mais bem avaliados e com melhor desempenho da nossa comunidade.
          </p>
        </div>

        {/* Distributors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {distributors.map((distributor) => (
            <Card key={distributor.id} className="p-4 sm:p-6 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
                  <AvatarImage src={distributor.avatar} alt={distributor.name} />
                  <AvatarFallback className="bg-accent text-accent-foreground text-sm sm:text-lg">
                    {distributor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-lg mb-1 truncate">
                    {distributor.name}
                  </h3>
                  <Badge variant="secondary" className="mb-1 sm:mb-2 text-xs">
                    {distributor.company}
                  </Badge>
                  <p className="text-xs sm:text-sm text-accent font-medium mb-1 sm:mb-2">
                    {distributor.title}
                  </p>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{distributor.location}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        star <= Math.floor(distributor.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {distributor.rating}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  ({distributor.reviews} avaliações)
                </span>
              </div>

              {/* Stats */}
              <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    Equipe:
                  </span>
                  <span className="font-medium text-foreground">
                    {distributor.teamSize.toLocaleString()} pessoas
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    Volume mensal:
                  </span>
                  <span className="font-medium text-accent">
                    {distributor.monthlyVolume}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button variant="goldOutline" size="sm" className="flex-1 text-xs sm:text-sm">
                  Ver Perfil
                </Button>
                <Button variant="premium" size="sm" className="flex-1 text-xs sm:text-sm text-white font-bold">
                  Conectar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="premium" className="text-white font-bold">
            Ver todos os distribuidores recomendados
          </Button>
        </div>
      </div>
    </section>
  );
}