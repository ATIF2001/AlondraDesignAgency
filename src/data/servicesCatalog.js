import digitalDevImage from "../assets/services/digitalDev.jpg";
import influencerMarketingImage from "../assets/services/influencerMarketing.jpg";
import socialMediaImage from "../assets/services/SocialMedia.jpg";
import brandGuidelinesImage from "../assets/servicesPages/brand - Copy.webp";
import contentCreationImage from "../assets/servicesPages/contentCreation.jpg";
import facebookMarketingImage from "../assets/servicesPages/facebook.png";
import instagramMarketingImage from "../assets/servicesPages/mohamed_hassan-instagram-3157976.jpg";
import linkedinMarketingImage from "../assets/servicesPages/linkedin.jpg";
import motionGraphicsImage from "../assets/servicesPages/motion-graphics-course-23-12-2024 - Copy.jpg";
import photographyImage from "../assets/servicesPages/photo.webp";
import tiktokMarketingImage from "../assets/servicesPages/tiktok.jpeg";
import videoProductionImage from "../assets/servicesPages/videoProduction.jpg";
import project1 from "../assets/project/project1.jpg";
import project2 from "../assets/project/project2.png";
import project3 from "../assets/project/project3.png";
import project4 from "../assets/project/project4.png";
import project5 from "../assets/project/project5.png";


function createService(slug, title, category, description, image, bullets) {
  return {
    slug,
    title,
    category,
    description,
    image,
    bullets,
  };
}

export const serviceGroups = [
  {
    title: "SOCIAL",
    items: [
      createService(
        "social-media-abu-dhabi",
        "Social Media Abu Dhabi",
        "Social",
        "Localized social campaigns tailored for Abu Dhabi audiences, combining strategy, content planning, and paid amplification.",
        socialMediaImage,
        ["Localized social strategy", "Arabic and English content direction", "Paid campaign management"],
      ),
      createService(
        "social-media-dubai",
        "Social Media Dubai",
        "Social",
        "High-visibility social media execution built for fast-moving Dubai brands and competitive digital spaces.",
        socialMediaImage,
        ["Platform-specific planning", "Brand-led content calendars", "Performance reporting"],
      ),
      createService(
        "instagram-marketing",
        "Instagram Marketing",
        "Social",
        "Reels, stories, and feed systems designed to build brand recall and turn visual attention into customer action.",
        instagramMarketingImage,
        ["Reels strategy", "Creative direction", "Growth-focused posting systems"],
      ),
      createService(
        "tiktok-marketing",
        "TikTok Marketing",
        "Social",
        "Short-form campaigns that feel native to TikTok while still carrying a strong brand message.",
        tiktokMarketingImage,
        ["Short-form concepts", "Trend adaptation", "Creator-ready scripting"],
      ),
      createService(
        "facebook-marketing",
        "Facebook Marketing",
        "Social",
        "Audience-focused Facebook campaigns built to support awareness, traffic, and lead generation goals.",
        facebookMarketingImage,
        ["Campaign targeting", "Lead generation creatives", "Meta ad optimization"],
      ),
      createService(
        "twitter-marketing",
        "Twitter Marketing",
        "Social",
        "Messaging-driven campaign work for brands that need relevance, conversation, and real-time visibility.",
        socialMediaImage,
        ["Campaign messaging", "Live activation support", "Community tone guidance"],
      ),
      createService(
        "linkedin-marketing",
        "LinkedIn Marketing",
        "Social",
        "Professional platform strategy for B2B brands, executive positioning, and trust-building content.",
        linkedinMarketingImage,
        ["Thought leadership planning", "B2B campaign execution", "Lead-focused audience strategy"],
      ),
      createService(
        "influencer-marketing",
        "Influencer Marketing",
        "Social",
        "Strategic creator partnerships that bring credibility, reach, and measurable engagement to campaigns.",
        influencerMarketingImage,
        ["Creator matching", "Campaign management", "Performance summaries"],
      ),
    ],
  },
  {
    title: "CREATIVE",
    items: [
      createService("video-production", "Video Production", "Creative", "End-to-end video production for ads, branded stories, launch campaigns, and premium digital content.", videoProductionImage, ["Concept and scripting", "Production planning", "Editing and delivery"]),
      createService("photography", "Photography", "Creative", "Photography direction that supports campaigns, social media systems, product launches, and brand storytelling.", photographyImage, ["Art direction", "Campaign photography", "Post-production finishing"]),
      createService("campaign-concepts", "Campaign Concepts", "Creative", "Big-picture creative thinking that turns business goals into memorable campaign directions.", contentCreationImage, ["Creative ideation", "Messaging themes", "Launch-ready concept boards"]),
      createService("content-creation", "Content Creation", "Creative", "Recurring content systems that keep your brand active, polished, and consistent across channels.", contentCreationImage, ["Content planning", "Design support", "Channel-ready assets"]),
      createService("motion-graphics", "Motion Graphics", "Creative", "Animated visuals for ads, explainers, social loops, and presentation-driven brand moments.", motionGraphicsImage, ["Animated brand assets", "Campaign motion design", "Short-form motion content"]),
    ],
  },
  {
    title: "BRANDING",
    items: [
      createService("brand-strategy", "Brand Strategy", "Branding", "A sharper strategic foundation for how your brand sounds, looks, and competes in the market.", project1, ["Positioning framework", "Audience alignment", "Messaging direction"]),
      createService("visual-identity", "Visual Identity", "Branding", "Identity systems designed to make your brand feel premium, distinctive, and scalable.", brandGuidelinesImage, ["Identity exploration", "Color and typography systems", "Application mockups"]),
      createService("logo-systems", "Logo Systems", "Branding", "Primary marks, responsive logo sets, and practical brand signatures for digital and print use.", brandGuidelinesImage, ["Logo concepts", "Responsive lockups", "Usage guidance"]),
      createService("brand-guidelines", "Brand Guidelines", "Branding", "Clear documentation that helps teams use your brand consistently across every touchpoint.", brandGuidelinesImage, ["Usage rules", "Visual standards", "Team-ready documentation"]),
      createService("packaging-direction", "Packaging Direction", "Branding", "Packaging design direction that supports shelf presence, storytelling, and premium perception.", project4, ["Packaging moodboards", "Layout systems", "Brand-consistent packaging direction"]),
    ],
  },
  {
    title: "DIGITAL",
    items: [
      createService("website-design", "Website Design", "Digital", "Modern websites designed for clarity, performance, and a strong first impression.", project2, ["Wireframes and layout", "Responsive design", "High-conversion page structure"]),
      createService("landing-pages", "Landing Pages", "Digital", "Focused landing pages built for campaigns, launches, and measurable action.", project3, ["Campaign landing page design", "Conversion-first structure", "Fast delivery"]),
      createService("ui-ux-design", "UI/UX Design", "Digital", "User experience design that balances clarity, aesthetics, and business goals.", project4, ["User flows", "Interface systems", "Experience refinement"]),
      createService("digital-development", "Digital Development", "Digital", "Frontend and web implementation for polished digital experiences that actually ship.", digitalDevImage, ["Web development", "Performance-minded builds", "Maintainable implementation"]),
      createService("conversion-optimization", "Conversion Optimization", "Digital", "Practical improvements that help more visitors take action across your digital funnel.", project5, ["Page optimization", "Funnel analysis", "Action-oriented improvements"]),
    ],
  },
];

export const serviceItems = serviceGroups.flatMap((group) => group.items);

export function getServiceBySlug(slug) {
  return serviceItems.find((service) => service.slug === slug) ?? null;
}
