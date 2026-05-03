import { Card } from "@/components/ui/card";
import { Users, Building2, Vote, DollarSign } from "lucide-react";

export function StatsPanel() {
  const stats = [
    { icon: Users, label: "Usuários Ativos", value: "12.547", change: "+15% este mês" },
    { icon: Vote, label: "Votos Realizados", value: "89.234", change: "+23% este mês" },
    { icon: Building2, label: "Empresas Cadastradas", value: "234", change: "+8 novas" },
    { icon: DollarSign, label: "Receita Anual Estimada", value: "R$ 2.4M", change: "+32% este ano" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-gold mb-3 sm:mb-4 shadow-gold">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(220_60%_15%)]" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm text-primary/80 font-semibold mb-1 sm:mb-2">
                  {stat.label}
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-gradient-gold">
                  {stat.change}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
