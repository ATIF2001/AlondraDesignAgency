import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  Clapperboard,
  Code2,
  Megaphone,
} from "lucide-react";
import { CartoonButton } from "./ui/cartoon-button";
import digitalDevelopmentImage from "../assets/services/digitalDev.jpg";
import influencerMarketingImage from "../assets/services/influencerMarketing.jpg";
import socialMediaImage from "../assets/services/SocialMedia.jpg";
import videographyImage from "../assets/services/VideoGraphy.jpg";

const cards = [
  {
    eyebrow: "Social",
    title: "SOCIAL MEDIA MARKETING",
    subtitle:
      "Campaigns built to grow your brand presence, reach the right audience, and convert attention into action.",
    description:
      "We create social-first campaigns across major platforms with clear messaging, strong creative, and measurable performance. From content planning to paid amplification, every move is designed to keep your brand relevant and visible.",
    theme: "light",
    accent: "Contact us",
    icon: Megaphone,
    media: {
      image: socialMediaImage,
      label: "Social Media",
    },
  },
    {
    eyebrow: "Production",
    title: "VIDEOGRAPHY",
    subtitle:
      "Premium video content that captures attention fast and tells your story with clarity and polish.",
    description:
      "From brand reels to campaign films, we handle concept, direction, and delivery with a focus on quality and performance. The result is video content that feels cinematic while still working hard across digital channels.",
    theme: "dark",
    accent: "Contact us",
    icon: Clapperboard,
    media: {
      image: videographyImage,
      label: "Videography",
    },
  },
  {
    eyebrow: "Influencer",
    title: "INFLUENCER MARKETING",
    subtitle:
      "Partner with the right voices to build trust, awareness, and genuine engagement around your brand.",
    description:
      "Our influencer marketing approach focuses on authentic collaborations that fit your audience and brand tone. We plan creator partnerships that deliver reach with credibility, supported by campaign structure and reporting that keeps the work accountable.",
    theme: "light",
    accent: "Contact us",
    icon: Megaphone,
    media: {
      image: influencerMarketingImage,
      label: "Influencer",
    },
  },

  {
    eyebrow: "Development",
    title: "DIGITAL DEVELOPMENT",
    subtitle:
      "Web experiences that look premium, load fast, and support the way your business actually grows online.",
    description:
      "We design and build digital experiences that balance aesthetics, usability, and performance. Whether you need a campaign landing page or a larger web presence, the focus stays on clean execution and business impact.",
    theme: "dark",
    accent: "Contact us",
    icon: Code2,
    media: {
      image: digitalDevelopmentImage,
      label: "Development",
    },
  },
];

function getCardStyle(index, progress, totalCards) {
  const relativeIndex = index - progress;
  const positiveOffset = Math.max(relativeIndex, 0);
  const negativeOffset = Math.max(-relativeIndex, 0);

  const translateY =
    relativeIndex >= 0
      ? Math.min(positiveOffset * 14, 28)
      : -Math.min(negativeOffset * 3.5, 9);

  const scale =
    relativeIndex >= 0
      ? 1 - Math.min(positiveOffset * 0.022, 0.05)
      : 0.992 - Math.min(negativeOffset * 0.01, 0.03);

  const opacity =
    relativeIndex >= 0
      ? 1
      : Math.max(0.2, 0.42 - negativeOffset * 0.14);

  const zIndex =
    relativeIndex >= 0
      ? totalCards - index + 20
      : totalCards - index;

  return {
    transform: `translate3d(0, ${translateY}%, 0) scale(${scale})`,
    opacity,
    zIndex,
  };
}

function MediaPanel({ media, theme }) {
  return (
    <div className="soft-panel relative h-full min-h-[320px] overflow-hidden rounded-[2.25rem]">
      <img
        src={media.image}
        alt={media.label}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />
      <div
        className={`absolute left-[8%] top-[8%] rounded-full px-4 py-2 text-sm font-medium italic ${
          theme === "light" ? "bg-black text-white" : "bg-white text-[#111]"
        }`}
      >
        {media.label}
      </div>
    </div>
  );
}

export default function ServiceCardsShowcase({ onContactClick }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const totalScrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const nextProgress = (scrolled / totalScrollable) * (cards.length - 1);

      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${(cards.length + 0.8) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
        <div className="relative h-full w-full">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isLight = card.theme === "light";

            return (
              <article
                key={card.title}
                className={`absolute inset-0 rounded-[2.75rem] transition-[transform,opacity,box-shadow] duration-200 ease-out will-change-transform hover-lift ${
                  isLight ? "bg-[#f7f6f4] text-[#111827]" : "bg-[#1f1f23] text-white"
                }`}
                style={getCardStyle(index, progress, cards.length)}
              >
                <div className="grid h-full grid-cols-1 gap-0 overflow-hidden rounded-[2.75rem] lg:grid-cols-[0.94fr_1.1fr]">
                  <div className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-10 xl:px-12">
                    <div className="mb-8 flex items-center gap-3">
                      <div
                        className={`float-slow flex h-12 w-12 items-center justify-center rounded-full ${
                          isLight ? "bg-[#1d1d21] text-white" : "bg-white text-[#111]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div
                        className={`rounded-full px-6 py-2 text-[1.05rem] italic ${
                          isLight
                            ? "border border-[#1d1d21] text-[#1d1d21]"
                            : "border border-white/80 text-white"
                        }`}
                      >
                        {card.eyebrow}
                      </div>
                    </div>

                    <h2 className="max-w-[740px] text-balance text-[2.6rem] font-black leading-[0.98] tracking-[-0.05em] sm:text-[3.1rem] lg:text-[4rem] xl:text-[4.4rem]">
                      {card.title}
                    </h2>

                    <p
                      className={`mt-7 max-w-[760px] text-[1.2rem] font-semibold leading-[1.18] sm:text-[1.35rem] ${
                        isLight ? "text-[#111827]" : "text-white"
                      }`}
                    >
                      {card.subtitle}
                    </p>

                    <p
                      className={`mt-8 max-w-[760px] text-[1.08rem] leading-[1.45] sm:text-[1.18rem] ${
                        isLight ? "text-[#1f2937]" : "text-white/82"
                      }`}
                    >
                      {card.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <CartoonButton
                        label={card.accent}
                        onClick={onContactClick}
                        icon={BadgeCheck}
                        color={isLight ? "bg-[#1d1d21]" : "bg-white"}
                        textClassName={isLight ? "text-white" : "text-[#111]"}
                        borderClassName={isLight ? "border-[#111]" : "border-[#d7d7d7]"}
                        hoverShadow={isLight ? "#050505" : "#8f8f8f"}
                        className="hover-lift"
                        iconClassName={isLight ? "text-white" : "text-[#111]"}
                      />
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 lg:p-4">
                    <MediaPanel media={card.media} theme={card.theme} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
