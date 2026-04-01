import {
  ClipboardList,
  Goal,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Swords,
} from "lucide-react";
import { useRef } from "react";
import BlogCardsSection from "../components/BlogCardsSection";
import CustomersSection from "../components/CustomersSection";
import ProjectsSection from "../components/ProjectsSection";
import ServiceCardsShowcase from "../components/ServiceCardsShowcase";
import { CartoonButton } from "../components/ui/cartoon-button";
import customer1 from "../assets/customer/customer1.png";
import customer2 from "../assets/customer/customer2.png";
import customer3 from "../assets/customer/customer3.png";
import customer4 from "../assets/customer/customer4.png";
import customer5 from "../assets/customer/customer5.png";
import digitalDevImage from "../assets/services/digitalDev.jpg";
import howItWorkImage from "../assets/project/howITWork.jpg";
import influencerMarketingImage from "../assets/services/influencerMarketing.jpg";
import project1 from "../assets/project/project1.jpg";
import project2 from "../assets/project/project2.png";
import project3 from "../assets/project/project3.png";
import project4 from "../assets/project/project4.png";
import project5 from "../assets/project/project5.png";
import project6 from "../assets/project/project6.jpg";
import heroVideo from "../assets/video.mp4";

const projects = [
  { title: "Jovera Group", image: project1 },
  { title: "Jovera Group", image: project2 },
  { title: "Jovera Group", image: project3 },
  { title: "Jovera Group", image: project6 },
  { title: "Jovera Group", image: project4 },
  { title: "Jovera Group", image: project5 },
];

const workflowSteps = [
  {
    title: "Discovery",
    description:
      "We meet with you to learn about your business, your goals, and your target audience.",
    icon: ClipboardList,
  },
  {
    title: "Strategy",
    description:
      "We develop a customized marketing strategy that is based on your unique needs and goals.",
    icon: Swords,
  },
  {
    title: "Execution",
    description:
      "We execute our strategy using the latest digital marketing tools and techniques.",
    icon: Goal,
  },
  {
    title: "Measurement",
    description:
      "We track the results of our campaigns so that we can make adjustments as needed.",
    icon: Ruler,
  },
];

const blogPosts = [
  {
    category: "UI Design",
    date: "May 24, 2022",
    title: "Designers are meant to be loved, not to be understood.",
    image: project1,
  },
  {
    category: "Brand Strategy",
    date: "May 28, 2022",
    title: "Good interfaces feel simple because the thinking behind them is not.",
    image: digitalDevImage,
  },
  {
    category: "Creative",
    date: "June 02, 2022",
    title: "Color, motion, and clarity can change how people remember a brand.",
    image: influencerMarketingImage,
  },
];

const customers = [
  { name: "Jovera Tourism", image: customer1 },
  { name: "Jovera Tourism", image: customer2 },
  { name: "Vanguard Properties", image: customer3 },
  { name: "Jovera Real Estate", image: customer4 },
  { name: "Jovera Group", image: customer5 },
];

export default function Home() {
  const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <>
          {/* Hero Section */}
          <section className="flex min-h-screen items-center px-6 py-8 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.98fr)] lg:gap-16">
              <section className="reveal max-w-[620px] text-left" data-reveal>
                <h1 className="font-serif text-[3.3rem] leading-[0.98] font-semibold tracking-[-0.05em] text-white sm:text-[4.4rem] lg:text-[5.25rem] xl:text-[5.9rem]">
                  Reach the
                  <br />
                  Heart of your
                  <br />
                  Target Audience
                </h1>

                <p className="mt-8 max-w-[580px] text-lg leading-[1.45] text-white/78 sm:text-[1.05rem] lg:mt-10 lg:text-[1.1rem]">
                  Helping businesses grow through smart marketing, creative ideas,
                  and powerful digital solutions.
                </p>

                <div className="mt-10 lg:mt-14">
                  <CartoonButton
                    label="Contact us"
                    onClick={scrollToContact}
                    color="bg-white"
                    textClassName="text-black"
                    borderClassName="border-[#d8d8d8]"
                    hoverShadow="#9c9c9c"
                    className="hover-lift"
                    buttonClassName="min-w-48"
                  />
                </div>
              </section>

              <section className="reveal relative float-slower" data-reveal data-delay="1">
                <div className="soft-panel overflow-hidden rounded-[2.75rem] bg-[#101010] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                  <video
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[420px] w-full object-cover object-center sm:h-[540px] lg:h-[700px]"
                  />
                </div>
              </section>
            </div>
          </section>

          {/* Services Showcase Section */}
          <section className="min-h-screen">
            <ServiceCardsShowcase onContactClick={scrollToContact} />
          </section>

          {/* Projects Section */}
          <ProjectsSection projects={projects} onProjectClick={scrollToContact} />

          {/* How It Works Section */}
          <section className="bg-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.88fr_1fr] lg:gap-16 xl:gap-20">
              <div className="reveal text-left" data-reveal>
                <h2 className="font-serif text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-[5.5rem]">
                  How It Works
                </h2>
                <p className="mt-8 max-w-[32rem] text-lg leading-9 text-white/62 sm:text-[1.15rem]">
                  We believe that the best way to create successful marketing campaigns is to
                  work closely with our clients to understand their goals and challenges.
                </p>

                <div className="soft-panel hover-lift mt-12 max-h-[430px] max-w-[32rem] overflow-hidden rounded-[2.5rem]">
                  <img
                    src={howItWorkImage}
                    alt="How it works"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-8 pt-2">
                {workflowSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      data-reveal
                      data-delay={(workflowSteps.indexOf(step) % 4) + 1}
                      className="reveal hover-lift grid grid-cols-[5.75rem_1fr] items-start gap-6 rounded-[2rem] bg-[#141414] p-5"
                    >
                      <div className="flex h-[5.75rem] w-[5.75rem] items-center justify-center rounded-[1.5rem] bg-[#d9b43b] text-white">
                        <Icon className="h-9 w-9" strokeWidth={1.8} />
                      </div>

                      <div className="pt-1 text-left">
                        <h3 className="text-3xl font-medium text-white sm:text-[2.6rem]">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-base leading-8 text-white/58 sm:text-[1.05rem]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <BlogCardsSection posts={blogPosts} />

          {/* Customers Section */}
          <CustomersSection customers={customers} />

          {/* Contact Section */}
          <section
            ref={contactSectionRef}
            className="bg-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20"
          >
            <div className="mx-auto max-w-7xl">
              <div className="reveal mx-auto max-w-3xl text-center" data-reveal>
                <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
                  Contact us today
                </h2>
                <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">
                  We&apos;d love to hear from you. Contact us and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:gap-16">
                <div className="reveal hover-lift bg-[#1c1c1c] px-8 py-10 sm:px-10 sm:py-12" data-reveal data-delay="1">
                  <h3 className="text-left text-4xl font-semibold text-white">
                    Contact Info
                  </h3>

                  <div className="mt-12 space-y-12">
                    <div className="grid grid-cols-[5.5rem_1fr] gap-6 text-left">
                      <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                        <MapPin className="h-9 w-9" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium text-white">Abu Dhabi</h4>
                        <div className="mt-4 h-px w-full bg-white/8" />
                        <p className="mt-4 text-lg leading-8 text-white/65">
                          Abu Dhabi (Head Office)
                          <br />
                          Al Jazira Club - Tower A, Al Muroor St - floor 8
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[5.5rem_1fr] gap-6 text-left">
                      <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                        <Phone className="h-9 w-9" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium text-white">Phone Number</h4>
                        <p className="mt-4 text-lg leading-8 text-white/65">
                          800-644-000
                          <br />
                          +97126311977
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[5.5rem_1fr] gap-6 text-left">
                      <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-[#25262b] text-white">
                        <Mail className="h-9 w-9" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium text-white">Email Address</h4>
                        <p className="mt-4 text-lg leading-8 text-white/65">
                          info@joveraits.ae
                          <br />
                          info@jovera.ae
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="reveal hover-lift border border-white/35 px-8 py-10 sm:px-12 sm:py-12" data-reveal data-delay="2">
                  <div className="space-y-10 text-left">
                    <label className="block">
                      <span className="text-2xl text-white">Name</span>
                      <input
                        type="text"
                        className="mt-4 w-full border-b border-white/35 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 focus:border-white"
                      />
                    </label>

                    <label className="block">
                      <span className="text-2xl text-white">Phone Number</span>
                      <input
                        type="text"
                        className="mt-4 w-full border-b border-white/35 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 focus:border-white"
                      />
                    </label>

                    <label className="block">
                      <span className="text-2xl text-white">Email</span>
                      <input
                        type="email"
                        className="mt-4 w-full border-b border-white/35 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 focus:border-white"
                      />
                    </label>

                    <label className="block">
                      <span className="text-2xl text-white">Message</span>
                      <textarea
                        rows="4"
                        className="mt-4 w-full border-b border-white/35 bg-transparent pb-4 text-lg text-white outline-none placeholder:text-white/20 focus:border-white"
                      />
                    </label>

                    <CartoonButton
                      type="submit"
                      label="SUMIT"
                      color="bg-white"
                      textClassName="text-black"
                      borderClassName="border-[#d8d8d8]"
                      hoverShadow="#9c9c9c"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>

      </>
    </div>
  );
}
