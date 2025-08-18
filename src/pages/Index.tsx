import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsPanel } from "@/components/StatsPanel";
import { RankingSection } from "@/components/RankingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsPanel />
        <RankingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
