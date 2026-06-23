import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import { AboutSection } from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { StatsSection, AccreditationsSection, CaseStudiesSection, TestimonialsSection, ProcessSection, DifferentiatorsSection, IndustriesSection, FeaturedProjectSection } from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <StatsSection />
      <AccreditationsSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
