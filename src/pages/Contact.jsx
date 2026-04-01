import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import CustomersSection from "../components/CustomersSection";
import PageIntro from "../components/PageIntro";
import { customers } from "../data/siteContent";

export default function Contact() {
  const contactSectionRef = useRef(null);

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's start the conversation"
        description="Whether you need a campaign, content production, a digital product, or a full creative direction, our team is ready to help you move."
      />
      <ContactSection
        sectionRef={contactSectionRef}
        title="Contact us today"
        description="Tell us about your goals, your brand, and the kind of support you need. We'll get back to you with the right next step."
      />
      <CustomersSection customers={customers} />
    </>
  );
}
