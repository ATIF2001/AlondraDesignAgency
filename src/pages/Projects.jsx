import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import CustomersSection from "../components/CustomersSection";
import PageIntro from "../components/PageIntro";
import ProjectsSection from "../components/ProjectsSection";
import { customers, projects } from "../data/siteContent";

export default function ProjectsPage() {
  const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Selected work shaped for attention and growth"
        description="A closer look at the campaigns, platforms, and brand experiences we've delivered across property, tourism, and digital-first businesses."
      />
      <ProjectsSection projects={projects} onProjectClick={scrollToContact} />
      <CustomersSection customers={customers} />
      <ContactSection
        sectionRef={contactSectionRef}
        title="Want work like this for your brand?"
        description="Share what you're building and we'll map out the right creative and digital direction for it."
      />
    </>
  );
}
