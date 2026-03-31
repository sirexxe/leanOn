import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResultsSection from "@/components/ResultsSection";
import ProcessSection from "@/components/ProcessSection";
import LeadCTA from "@/components/LeadCTA";
import CaseStudies from "@/components/CaseStudies";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credibility />
        <ProblemSection />
        <SolutionSection />
        <ResultsSection />
        <ProcessSection />
        <CaseStudies />
        <LeadCTA />
        <TeamSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}