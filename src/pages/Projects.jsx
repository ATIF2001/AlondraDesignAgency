import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import CustomersSection from "../components/CustomersSection";
import ProjectsSection from "../components/ProjectsSection";
import Seo from "../components/Seo";
import { projects } from "../data/projectsContent";
import { customers } from "../data/siteContent";

export default function ProjectsPage() {
  const contactSectionRef = useRef(null);

  return (
    <>
      <Seo
        title="Projects"
        description="Browse selected Alondra projects across CRM platforms, websites, booking systems, and UI/UX work for tourism, real estate, and modern brands."
        path="/projects"
        keywords="agency portfolio UAE, CRM projects, website projects, UI UX portfolio, Alondra projects"
      />
      <section className="border-y border-white/10 px-6 py-6 sm:px-10 lg:px-16 xl:px-20 bg-[#424242]">
        <div className="mx-auto max-w-6xl text-center ">
          <h1 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Our Projects
          </h1>
        </div>
      </section>
      <ProjectsSection projects={projects} />
      <CustomersSection customers={customers} />
      <ContactSection
        sectionRef={contactSectionRef}
        title="Want work like this for your brand?"
        description="Share what you're building and we'll map out the right creative and digital direction for it."
      />
    </>
  );
}
