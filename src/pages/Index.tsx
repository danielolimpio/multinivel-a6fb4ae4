import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StockTicker } from "@/components/StockTicker";
import { StatsPanel } from "@/components/StatsPanel";
import { SolarienBanner } from "@/components/SolarienBanner";
import { RankingSection } from "@/components/RankingSection";
import { NewsSection } from "@/components/NewsSection";
import { RecommendedDistributors } from "@/components/RecommendedDistributors";
import { TopEarnersSection } from "@/components/TopEarnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StockTicker />
        <StatsPanel />
        <SolarienBanner />
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
