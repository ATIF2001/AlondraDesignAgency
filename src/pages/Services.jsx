import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PageIntro from "../components/PageIntro";
import ServiceCardsShowcase from "../components/ServiceCardsShowcase";
import { howItWorksImageSrc, workflowSteps } from "../data/siteContent";

export default function Services() {
  const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Performance-led services built for modern brands"
        description="From social strategy to digital development, we design work that looks sharp, moves fast, and stays tied to business outcomes."
      />
      <ServiceCardsShowcase onContactClick={scrollToContact} />
      <HowItWorksSection steps={workflowSteps} image={howItWorksImageSrc} />
      <ContactSection
        sectionRef={contactSectionRef}
        title="Let's build your next campaign"
        description="Tell us what you need and we'll shape the right mix of creative, strategy, and digital execution around it."
      />
    </>
  );
}
