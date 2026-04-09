import {
  ClipboardList,
  Goal,
  Ruler,
  Swords,
} from "lucide-react";
import customer1 from "../assets/customer/customer1.png";
import customer2 from "../assets/customer/customer2.png";
import customer3 from "../assets/customer/customer3.png";
import customer4 from "../assets/customer/customer4.png";
import customer5 from "../assets/customer/customer5.png";
import howItWorkImage from "../assets/project/howITWork.jpg";
import project1 from "../assets/project/project1.jpg";
import project2 from "../assets/project/project2.png";
import project3 from "../assets/project/project3.png";
import project4 from "../assets/project/project4.png";
import project5 from "../assets/project/project5.png";
import digitalDevImage from "../assets/services/digitalDev.jpg";
import influencerMarketingImage from "../assets/services/influencerMarketing.jpg";

export const projects = [
  { title: "Jovera Group", image: project1 },
  { title: "Jovera Group", image: project2 },
  { title: "Jovera Group", image: project3 },
  { title: "Jovera Group", image: project4 },
  { title: "Jovera Group", image: project4 },
  { title: "Jovera Group", image: project5 },
];

export const workflowSteps = [
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

export const blogPosts = [
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

export const customers = [
  { name: "Jovera Tourism", image: customer1 },
  { name: "Jovera Tourism", image: customer2 },
  { name: "Vanguard Properties", image: customer3 },
  { name: "Jovera Real Estate", image: customer4 },
  { name: "Jovera Group", image: customer5 },
];

export const aboutStats = [
  { value: "100+", label: "clients supported across campaigns and launches" },
  { value: "12+", label: "creative and digital disciplines under one roof" },
  { value: "24/7", label: "campaign attention for fast-moving brands" },
];

export const howItWorksImageSrc = howItWorkImage;
