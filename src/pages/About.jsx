import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AboutusImage from "../assets/about/AboutUs.png";
import Seo from "../components/Seo";

export default function About() {
  return (
    <div className="bg-[#111111] text-white">
      <Seo
        title="About Alondra"
        description="Learn more about Alondra, a Jovera Group company delivering strategy, digital execution, branding, marketing, and production services."
        path="/about"
        keywords="about Alondra, Jovera Group, branding and digital agency UAE"
      />
      <section className="border-y border-white/10 px-6 py-6 sm:px-10 lg:px-16 xl:px-20 bg-[#424242]">
        <div className="mx-auto max-w-6xl text-center ">
          <h1 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            About us
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] ">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.92fr] lg:gap-16">
            <div className="reveal relative" data-reveal>
              

              <div className="relative mx-auto max-w-[26rem]  ">
                <img
                  src={AboutusImage}
                  alt="Alondra team at work"
                  className="h-[24rem] w-full object-contain sm:h-[27rem]"
                />
              </div>
            </div>

            <div className="reveal text-left" data-reveal data-delay="1">
              {/* <h2 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                About Us
              </h2> */}
              <p className="mt-8 text-lg leading-9 text-white/74">
                Established in 2018 as part of the Jovera Group, Alondra brings strategy,
                content, digital execution, and production together under one roof. We build
                ideas that feel premium, move fast, and stay aligned with real business goals.
              </p>
              <p className="mt-8 text-lg leading-9 text-white/74">
                Our team works across web development, digital marketing, SEM, SEO, brand
                direction, and media production to deliver tailored solutions that improve
                visibility, engagement, and long-term growth.
              </p>

              <Link
                to="/projects"
                className="mt-10 inline-flex items-center gap-3 bg-[#d4a514] px-8 py-4 text-base font-semibold text-black transition hover:translate-y-[-2px]"
                style={{ clipPath: "polygon(0 0,100% 0,94% 100%,0 100%)" }}
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
