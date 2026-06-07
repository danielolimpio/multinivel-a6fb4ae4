import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StockTicker } from "@/components/StockTicker";
import { StatsPanel } from "@/components/StatsPanel";
import { RankingSection } from "@/components/RankingSection";
import { NewsSection } from "@/components/NewsSection";
import { RecommendedDistributors } from "@/components/RecommendedDistributors";
import { TopEarnersSection } from "@/components/TopEarnersSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Marketing Multinível (MMN) e Marketing de Rede — Ranking das Melhores Empresas do Brasil"
        description="Portal autoridade em Marketing Multinível (MMN), Marketing de Rede e Network Marketing desde 2014. Ranking das melhores empresas de MLM do Brasil, comparativos, planos de compensação, top earners, diferença entre pirâmide e multinível, notícias e quiz para descobrir a empresa ideal."
        canonical="/"
      />
      <Header />
      <main>
        <Hero />
        <StockTicker />
        <StatsPanel />
        <RankingSection />
        <NewsSection />
        <RecommendedDistributors />
        <TopEarnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
