import { BookOpenText, CheckCircle2, LayoutTemplate, Sparkles } from "lucide-react";
import { useRef } from "react";
import ContactSection from "../../components/ContactSection";
import PageIntro from "../../components/PageIntro";
import { CartoonButton } from "../../components/ui/cartoon-button";
import { getServiceBySlug } from "../../data/servicesCatalog";

const guidelinePillars = [
  {
    title: "Logo Usage Rules",
    description:
      "We define clear spacing, sizing, placement, and misuse examples so your logo always feels premium and readable.",
    icon: LayoutTemplate,
  },
  {
    title: "Visual Consistency",
    description:
      "Color values, typography rules, image treatment, and layout behavior are documented so every touchpoint feels connected.",
    icon: Sparkles,
  },
  {
    title: "Team-Ready Documentation",
    description:
      "Your internal team, suppliers, and partners get a practical guide that makes brand execution faster and more accurate.",
    icon: BookOpenText,
  },
];

const deliverables = [
  "Primary and secondary logo usage",
  "Clear-space and minimum-size rules",
  "Approved color palette references",
  "Typography hierarchy and pairing rules",
  "Photography and social asset direction",
  "Presentation, print, and digital applications",
];

const processSteps = [
  "Review your current identity, assets, and common usage issues.",
  "Organize the brand system into practical visual rules and examples.",
  "Build a polished guideline document that is easy for teams to use.",
];

export default function BrandGuidelinesPage({ onBackHome }) {
  const contactSectionRef = useRef(null);
  const service = getServiceBySlug("brand-guidelines");

  if (!service) return null;

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <PageIntro
        eyebrow={service.category}
        title="Brand Guidelines"
        description="Structured brand rules that help your business look consistent everywhere, from social posts and presentations to websites, print material, and campaign rollouts."
      />

      <section className="bg-black px-6 py-8 sm:px-10 lg:px-16 lg:py-12 xl:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.94fr] lg:items-center lg:gap-16">
          <div className="reveal text-left" data-reveal>
            <p className="max-w-3xl text-lg leading-9 text-white/68 sm:text-[1.08rem]">
              Strong guidelines protect the value of your brand. We create documentation
              that shows exactly how your identity should appear so your business stays
              recognizable, polished, and aligned across every customer touchpoint.
            </p>

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

      <section className="bg-black px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {guidelinePillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="reveal rounded-[2rem] bg-[#141414] p-7 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                  data-reveal
                  data-delay={index + 1}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[#d4a514] text-black">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-white">{pillar.title}</h2>
                  <p className="mt-4 text-base leading-8 text-white/65">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1fr] lg:gap-16">
          <div className="reveal text-left" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d4a514]">
              What You Get
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
              A Practical Guide Your Team Can Actually Use
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              The goal is not just to make a beautiful PDF. The goal is to build a working
              system that keeps marketing, design, sales, and partners aligned as your brand
              grows.
            </p>
          </div>

          <div className="space-y-4">
            {deliverables.map((item, index) => (
              <div
                key={item}
                className="reveal flex items-start gap-4 rounded-[1.6rem] bg-[#151515] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                data-reveal
                data-delay={(index % 4) + 1}
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#d4a514]" />
                <p className="text-lg leading-8 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#111111] p-8 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.05)] sm:p-10 lg:p-12">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.28em] text-[#d4a514]" data-reveal>
            Our Process
          </p>
          <h2
            className="reveal mt-4 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl"
            data-reveal
            data-delay="1"
          >
            We Turn Brand Assets Into Clear Standards
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="reveal rounded-[1.8rem] bg-black/45 p-6"
                data-reveal
                data-delay={index + 1}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4a514]">
                  Step {index + 1}
                </p>
                <p className="mt-4 text-lg leading-8 text-white/75">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        sectionRef={contactSectionRef}
        title="Talk to us about Brand Guidelines"
        description="If your brand is growing faster than your internal consistency, we can build a guideline system that keeps every team and partner aligned."
      />
    </>
  );
}
