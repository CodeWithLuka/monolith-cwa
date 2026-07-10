import {
  CtaSection,
  Community,
  DeveloperExperience,
  Footer,
  Hero,
  Marketplace,
  NetworkEffect,
  TrustedNodes,
} from "@/features/landing/ui/components/sections";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <TrustedNodes />
      <NetworkEffect />
      <Marketplace />
      <DeveloperExperience />
      <Community />
      <CtaSection />
      <Footer />
    </>
  );
};

export default LandingPage;
