import Seo from "../components/Seo";

const sections = [
  {
    title: "Acceptance Of Terms",
    paragraphs: [
      "By accessing and using the Alondra website, you agree to comply with these Terms & Conditions and all applicable laws and regulations.",
      "If you do not agree with any part of these terms, you should not use this website or submit information through our forms.",
    ],
  },
  {
    title: "Website Use",
    paragraphs: [
      "This website is provided for general information about Alondra, our services, projects, and contact channels.",
      "You agree not to misuse the website, attempt unauthorized access, interfere with its operation, or use the content for unlawful or harmful purposes.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website, including text, branding, designs, images, layouts, graphics, and other materials, is the property of Alondra or its licensors unless stated otherwise.",
      "You may not reproduce, distribute, modify, or republish website content without prior written permission.",
    ],
  },
  {
    title: "Project & Service Information",
    paragraphs: [
      "Project examples, service descriptions, visuals, and case studies are presented for general marketing and informational purposes.",
      "We may update, revise, or remove content at any time without prior notice to reflect business, client, or operational changes.",
    ],
  },
  {
    title: "Form Submissions",
    paragraphs: [
      "When you submit your details through our contact or lead forms, you confirm that the information provided is accurate and belongs to you or that you are authorized to share it.",
      "Submitting a form does not create a contractual relationship or guarantee that services will be provided.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "This website may include links to third-party platforms such as social media pages, maps, videos, or messaging services.",
      "Alondra is not responsible for the content, policies, or availability of third-party websites or platforms.",
    ],
  },
  {
    title: "Limitation Of Liability",
    paragraphs: [
      "We make reasonable efforts to keep the website accurate and available, but we do not guarantee uninterrupted access, complete accuracy, or freedom from technical issues.",
      "Alondra will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.",
    ],
  },
  {
    title: "Privacy",
    paragraphs: [
      "Any personal information submitted through the website will be handled in line with our internal business practices and applicable legal obligations.",
      "By using the website, you acknowledge that online transmissions may not always be fully secure.",
    ],
  },
  {
    title: "Changes To These Terms",
    paragraphs: [
      "We may revise these Terms & Conditions at any time by updating this page.",
      "Your continued use of the website after changes are posted means you accept the updated terms.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions about these Terms & Conditions, you can contact Alondra through the website contact page or our listed business channels.",
    ],
  },
];

export default function Terms() {
  return (
    <div className="bg-[#111111] text-white">
      <Seo
        title="Terms & Conditions"
        description="Read the Terms & Conditions for using the Alondra website, services information, project content, and contact forms."
        path="/terms-and-conditions"
        keywords="Alondra terms and conditions, website terms, agency website policy"
      />

      <section className="border-y border-white/10 bg-[#424242] px-6 py-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-white/10 bg-[#171717] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <p className="text-base leading-8 text-white/68">
              These Terms &amp; Conditions govern your use of the Alondra website. Please review
              them carefully before using the site or submitting information through any form.
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-white/68">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
