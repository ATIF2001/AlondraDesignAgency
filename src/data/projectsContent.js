import dashboardImage from "../assets/project/dashboard.png";
import doctorPortalImage from "../assets/project/Doctor portal.png";
import joveraErpImage from "../assets/project/jovera ERP.png";
import joveraTourismImage from "../assets/project/jovera Tourism.png";
import joveraGroupImage from "../assets/project/joveragroup.png";
import project3Image from "../assets/project/project3.png";
import realEstateLandingPageImage from "../assets/project/realestatelandingpage.png";
import yallaImage from "../assets/project/yalla.png";

export const projectSectionCopy = {
  title: "Selected Works",
  subtitle: "Crafting digital experiences that solve real problems",
  viewDetails: "View Details",
  tech: "Tech Stack",
  overview: "Overview",
  features: "Key Features",
  problems: "Problems Solved",
  impact: "Impact",
  visit: "Visit Website",
  crm: "CRM Login",
  play: "Google Play",
  app: "App Store",
  behance: "View on Behance",
};

export const projects = [
  {
    slug: "mano-crm",
    title: "manoCRM",
    category: "Tourism CRM Platform",
    tech: "React Node.js MongoDB AWS",
    description:
      "A specialized Tourism Customer Relationship Management (CRM) platform designed to streamline lead management, sales, and partnership operations for travel agencies and tourism businesses.",
    features: [
      "Lead Management: Capture, track, and nurture leads from multiple sources",
      "Package Selling: Create, customize, and sell tourism packages directly to leads",
      "Partner Management: Seamlessly manage partnerships with 100+ hotels across UAE",
      "Tourism Operations: Coordinate logistics for customer bookings and activities",
      "Analytics & Reporting: Track sales performance and partner performance",
    ],
    problems: [
      "Disorganized Lead Management - Centralizes all leads in one system",
      "Inefficient Package Selling - Automated pricing and booking confirmations",
      "Complex Hotel & Partner Coordination - Unified partner management dashboard",
      "Poor Customer Experience - Automated follow-ups ensure seamless experience",
      "Limited Performance Insights - Advanced analytics for data-driven decisions",
    ],
    impact: "100+ hotel partnerships across UAE",
    image: dashboardImage,
  },
  {
    slug: "jovera-crm",
    title: "Jovera CRM",
    category: "All-in-One Business Management",
    tech: "React Node.js MongoDB AWS",
    description:
      "A robust all-in-one sales, HR, and accounting management platform designed for businesses that rely on lead generation and agent performance.",
    features: [
      "Lead Management & Calling Module: Agents can call leads directly and log outcomes",
      "Performance Tracking: Monitor agent activity, calls, conversions, and commissions",
      "HR & Payroll Management: Track salaries, attendance, and manage payroll seamlessly",
      "Accounting & Financial Oversight: Track deals, revenue, and employee compensation",
      "Role-Based Access Control: Assign permissions for secure data access",
      "Analytics & Reporting: Real-time dashboards for comprehensive business insights",
    ],
    problems: [
      "Disorganized Lead Management - Centralized lead tracking system",
      "Lack of Agent Accountability - Real-time performance metrics dashboards",
      "Manual Payroll Calculations - Automated payroll and commission tracking",
      "Fragmented HR and Accounting - Integrated single source of truth",
      "Unauthorized Data Access - Role-based access control for security",
      "Limited Business Insights - Real-time analytics for data-driven management",
    ],
    impact: "Complete business operations automation",
    image: joveraErpImage,
  },
  {
    slug: "vanguard-properties-crm",
    title: "Vanguard Properties CRM",
    category: "Real-Time SaaS CRM + Website Control",
    tech: "React.Js Node.js Express.Js PostgreSQL AWS",
    description:
      "A real-time SaaS CRM and website control system currently running at Vanguard Properties. It combines a full CRM with a website CMS to manage listings, blogs, and lead capture while controlling website behavior.",
    features: [
      "SaaS CRM + Website CMS: One system for CRM and website content control",
      "Property Management: Create, edit, and publish listings in real time",
      "Blog Management: Create blogs and update site content instantly",
      "Lead Generation & Assignment: Capture leads and assign them to agents",
      "Web Contact Control: Manage and route website contact requests",
      "Role-Based Dashboards: Superadmin, admin, and agent roles with different views",
    ],
    problems: [
      "Disconnected CRM and website updates - Unified platform for both",
      "Slow publishing workflow - Real-time updates to properties and blogs",
      "Manual lead routing - Automated assignment to agents",
      "Lack of accountability - Role-based dashboards per team member",
      "Limited control over website behavior - CMS-driven changes without developers",
    ],
    impact: "Live system in daily use at Vanguard Properties",
    image: project3Image,
    embed: {
      id: "cOe6jVnZvyI",
      iframeSrc:
        "https://go.screenpal.com/player/cOe6jVnZvyI?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1",
      title: "Vanguard Properties CRM walkthrough",
    },
  },
  {
    slug: "yalla-lifestyle",
    title: "Yalla Lifestyle",
    category: "Company Website",
    tech: "React.Js Next.js Netlify",
    description:
      "A modern and dynamic company website for Yalla Lifestyle, showcasing their services and brand identity with a focus on user experience and visual appeal.",
    features: [
      "Dynamic Content: Easily update services and portfolio",
      "Responsive Design: Seamless experience across all devices",
      "Brand Showcase: Highlighting Yalla Lifestyle's unique offerings",
      "Contact Integration: Easy communication with potential clients",
      "Visual Appeal: Modern design with engaging visuals",
      "Performance Optimization: Fast loading times for better UX",
    ],
    problems: [
      "Static Content - Dynamic updates without developer intervention",
      "Inconsistent User Experience - Responsive design for all devices",
      "Weak Brand Representation - Modern design showcasing unique offerings",
      "Limited Contact Options - Integrated contact forms for easy communication",
      "Poor Visual Appeal - Engaging visuals to captivate visitors",
      "Slow Performance - Optimization for fast loading times",
    ],
    impact: "A stronger lifestyle brand showcase with better lead capture",
    image: yallaImage,
  },
  {
    slug: "jovera-group-website",
    title: "Jovera Group Website",
    category: "Dynamic Corporate Website",
    tech: "React.Js Express.Js MongoDB",
    description:
      "A fully dynamic and CRM-driven corporate website with pixel-perfect responsive design and real-time content management capabilities.",
    features: [
      "CRM-Driven Content: Update website components from CRM in real-time",
      "Responsive Design: Pixel-perfect experience on all devices",
      "CRM-Powered Career Page: Manage job openings and applications centrally",
      "Role-Based Access: Content management with security controls",
      "Scalable Architecture: Modular design that grows with the business",
      "Modern UI: Professional brand representation with dynamic data",
    ],
    problems: [
      "Static Content - Dynamic CRM-driven updates without developers",
      "Inconsistent Data - Synchronized information across platforms",
      "Poor Mobile Experience - Responsive design for all devices",
      "Inefficient Recruitment - Centralized candidate management workflow",
      "Limited Content Control - CRM-controlled components for flexibility",
      "Lack of Scalability - Modular architecture for seamless growth",
      "Weak Brand Image - Pixel-perfect UI reflecting professionalism",
    ],
    impact: "Real-time website management without developer dependency",
    image: joveraGroupImage,
  },
  {
    slug: "jovera-tourism",
    title: "Jovera Tourism",
    category: "Travel Booking Platform",
    tech: "React.Js Express.Js Flutter MongoDB",
    description:
      "A modern mobile-first travel booking platform that allows users to explore and book tour packages with ease, built with Flutter for iOS and Android.",
    features: [
      "Tour Package Booking: Browse and book curated tourism packages",
      "In-App Chat Support: Real-time chat with support agents",
      "Secure Online Payments: Integrated payment gateway with instant confirmation",
      "Cross-Platform: Single Flutter codebase for Android and iOS",
      "User-Friendly Experience: Clean interface with smooth animations",
      "Fast Performance: Optimized for mobile devices",
    ],
    problems: [
      "Complex Booking Process - Direct in-app booking eliminates phone calls",
      "Lack of Real-Time Support - In-app chat provides instant assistance",
      "Unsecure Payments - Integrated secure payment gateway",
      "Inconsistent Experience - Flutter ensures consistency across platforms",
      "Limited Accessibility - Mobile-first solution for on-the-go planning",
    ],
    impact: "Seamless mobile booking experience",
    image: joveraTourismImage,
  },
  {
    slug: "deltawy-accounting-program",
    title: "Deltawy Accounting Program",
    category: "Financial Software UI/UX",
    tech: "Figma",
    description:
      "Comprehensive UI/UX design for an accounting program focused on user experience and financial data visualization.",
    features: [
      "Clean interface design for financial data",
      "Intuitive navigation system",
      "Data visualization components",
      "Responsive layouts",
      "Design system documentation",
    ],
    problems: [],
    impact: "Enhanced user experience for accounting workflows",
    image: doctorPortalImage,
  },
  {
    slug: "real-estate-landing-page",
    title: "Real Estate Landing Page",
    category: "Property Website Design",
    tech: "Figma",
    description:
      "Modern landing page design for real estate businesses focused on property showcase and lead generation.",
    features: [
      "Property showcase layouts",
      "Lead capture forms",
      "Interactive property filters",
      "Mobile-optimized design",
      "Call-to-action optimization",
    ],
    problems: [],
    impact: "Conversion-focused real estate web presence",
    image: realEstateLandingPageImage,
  },
];
