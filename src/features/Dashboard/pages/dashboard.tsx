import { FAQSection } from "../components/faq";
import { FeaturesSection } from "../components/features";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero";
import { HowItWorks } from "../components/howitworks";
import { PreviewSection } from "../components/previewsection";
import { StatsSection } from "../components/stats";
import { WhyCryptra } from "../components/whycrypta";

const Dashboard=()=> {
  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection/>
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <PreviewSection />
      <WhyCryptra />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default Dashboard;