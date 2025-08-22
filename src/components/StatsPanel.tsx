import { Card } from "@/components/ui/card";
import { Users, Building2, Vote, DollarSign } from "lucide-react";
import { SolarienBanner } from "@/components/SolarienBanner";

export function StatsPanel() {
  const stats = [
    {
      icon: Users,
      label: "Usuários Ativos",
      value: "12.547",
      change: "+15% este mês",
      color: "text-accent"
    },
    {
      icon: Vote,
      label: "Votos Realizados",
      value: "89.234",
      change: "+23% este mês", 
      color: "text-turquoise"
    },
    {
      icon: Building2,
      label: "Empresas Cadastradas",
      value: "234",
      change: "+8 novas",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      label: "Receita Anual Estimada",
      value: "R$ 2.4M",
      change: "+32% este ano",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stats Cards - ocupam 3 colunas */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4 ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {stat.label}
                    </p>
                    <p className={`text-xs font-medium ${stat.color}`}>
                      {stat.change}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Sidebar Banner - ocupa 1 coluna */}
          <div className="lg:col-span-1">
            <SolarienBanner />
          </div>
        </div>
      </div>
    </section>
  );
}