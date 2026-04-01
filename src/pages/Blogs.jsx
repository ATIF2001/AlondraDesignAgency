import { useRef } from "react";
import BlogCardsSection from "../components/BlogCardsSection";
import ContactSection from "../components/ContactSection";
import PageIntro from "../components/PageIntro";
import { blogPosts } from "../data/siteContent";

export default function Blogs() {
  const contactSectionRef = useRef(null);

  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Ideas, references, and thinking behind better digital work"
        description="A collection of articles around design, branding, campaign thinking, and the small details that shape stronger digital experiences."
      />
      <BlogCardsSection posts={blogPosts} />
      <ContactSection
        sectionRef={contactSectionRef}
        title="Need help turning ideas into action?"
        description="If one of these topics connects with what your brand needs, reach out and we'll help translate it into a practical plan."
      />
    </>
  );
}
