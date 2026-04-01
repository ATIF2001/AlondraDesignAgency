import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import CustomersSection from "../components/CustomersSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PageIntro from "../components/PageIntro";
import { aboutStats, customers, howItWorksImageSrc, workflowSteps } from "../data/siteContent";

export default function About() {
  const contactSectionRef = useRef(null);

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A creative advertising agency built for clarity, speed, and scale"
        description="We partner with brands that need more than decoration. Our work blends strategy, design, content, and technology into campaigns that feel premium and perform with intent."
      />

      <section className="bg-black px-6 py-8 sm:px-10 lg:px-16 lg:py-12 xl:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="reveal text-left" data-reveal>
            <p className="body-copy max-w-3xl">
              Alondra brings together campaign thinking, creative production, and digital
              execution under one roof. We work closely with clients to turn ideas into clear
              experiences that feel cohesive across content, websites, media, and brand
              touchpoints.
            </p>
            <p className="body-copy mt-8 max-w-3xl">
              The goal is simple: create work that is memorable to audiences, practical for
              teams, and effective enough to support real growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {aboutStats.map((stat, index) => (
              <div
                key={stat.value}
                data-reveal
                data-delay={index + 1}
                className="reveal hover-lift rounded-[2rem] bg-[#171717] px-6 py-7 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              >
                <div className="font-serif text-5xl text-[#d4a514]">{stat.value}</div>
                <p className="mt-3 text-base leading-7 text-white/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection steps={workflowSteps} image={howItWorksImageSrc} />
      <CustomersSection customers={customers} />
      <ContactSection
        sectionRef={contactSectionRef}
        title="Let's talk about your brand"
        description="If you're looking for a creative partner that can connect ideas with execution, we'd love to hear what you're building."
      />
    </>
  );
}
