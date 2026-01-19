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
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <SEO 
        title="Universidade Multinível - O Maior Portal de Marketing de Rede do Brasil"
        description="Rankings atualizados, análises de empresas de vendas diretas, comparativos, notícias e comunidade para networkers. Vote nas melhores empresas de MMN."
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
