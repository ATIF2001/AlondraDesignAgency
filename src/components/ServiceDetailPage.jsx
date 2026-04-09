import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import ContactSection from "./ContactSection";
import PageIntro from "./PageIntro";
import Seo from "./Seo";
import { CartoonButton } from "./ui/cartoon-button";

export default function ServiceDetailPage({ service, onBackHome }) {
  const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Seo
        title={service.title}
        description={service.description}
        path={`/services/${service.slug}`}
        keywords={`${service.title}, ${service.category}, Alondra services, digital marketing UAE`}
      />
      <PageIntro
        eyebrow={service.category}
        title={service.title}
        description={service.description}
      />

      <section className="bg-black px-6 py-8 sm:px-10 lg:px-16 lg:py-12 xl:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16">
          <div className="reveal text-left" data-reveal>
            <p className="body-copy max-w-3xl">
              We approach every {service.title.toLowerCase()} engagement with the same goal:
              make the output feel premium, practical, and aligned with the pace of your brand.
            </p>

            <div className="mt-10 space-y-4">
              {service.bullets.map((bullet, index) => (
                <div
                  key={bullet}
                  data-reveal
                  data-delay={index + 1}
                  className="reveal flex items-start gap-4 rounded-[1.6rem] bg-[#151515] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#d4a514]" />
                  <p className="body-copy">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <CartoonButton
                label="Contact us"
                onClick={scrollToContact}
                color="bg-[#d4a514]"
                textClassName="text-black"
                borderClassName="border-[#111]"
                hoverShadow="#8a6700"
              />
              <CartoonButton
                label="Back Home"
                onClick={onBackHome}
                color="bg-white"
                textClassName="text-black"
                borderClassName="border-[#d8d8d8]"
                hoverShadow="#9c9c9c"
              />
            </div>
          </div>

          <div className="reveal" data-reveal data-delay="1">
            <div className="soft-panel overflow-hidden rounded-[2.4rem] bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
              <img
                src={service.image}
                alt={service.title}
                className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        sectionRef={contactSectionRef}
        title={`Talk to us about ${service.title}`}
        description="Share your goals with us and we'll recommend the right creative, strategy, and delivery approach for this service."
      />
    </>
  );
}
