import digitalDevImage from "../assets/services/digitalDev.jpg";
import influencerMarketingImage from "../assets/services/influencerMarketing.jpg";
import socialMediaImage from "../assets/services/SocialMedia.jpg";
import videoGraphyImage from "../assets/services/VideoGraphy.jpg";
import howItWorkImage from "../assets/project/howITWork.jpg";
import project1 from "../assets/project/project1.jpg";
import project2 from "../assets/project/project2.png";
import project3 from "../assets/project/project3.png";
import project4 from "../assets/project/project4.png";
import project5 from "../assets/project/project5.png";

export const blogTagStyles = [
  "bg-[#fff4db] text-[#ba7f00]",
  "bg-[#eef3ff] text-[#3f63d1]",
  "bg-[#ffeaf3] text-[#c13b78]",
  "bg-[#e8f8ea] text-[#228552]",
  "bg-[#fff1ea] text-[#d15d32]",
];

export const blogPosts = [
  {
    id: 1,
    slug: "ux-review-presentations",
    title: "UX review presentations",
    description:
      "A practical guide to structuring UX review presentations so stakeholders understand the problem, trust the design decisions, and leave the room aligned on what happens next.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research", "Presentation"],
    image: project1,
    detailTitle: "UX review presentations that win support faster",
    intro:
      "A strong UX review is not only about showing polished screens. It is about helping stakeholders understand the problem, the thinking behind the decisions, and the value of the final direction.",
    sections: [
      {
        heading: "Start with the problem, not the pixels",
        paragraphs: [
          "Open with the customer pain point, the business constraint, and the specific objective of the work. This gives your audience context before they start reacting to layouts and colors.",
          "When teams understand the problem first, feedback becomes more focused and the presentation feels strategic instead of decorative.",
        ],
      },
      {
        heading: "Show your reasoning clearly",
        paragraphs: [
          "Present two or three key decisions and explain why they matter. This can include navigation, information hierarchy, interaction flow, or accessibility improvements.",
          "Simple comparison frames, before-and-after examples, and annotated visuals help people absorb the story quickly.",
        ],
      },
      {
        heading: "End with confident next steps",
        paragraphs: [
          "Summarize approvals needed, open questions, and what happens after the meeting. A great review creates momentum by making the next step obvious.",
        ],
      },
    ],
    closing:
      "The best presentations reduce uncertainty. They guide attention, answer likely questions early, and make the work easier to champion inside the company.",
  },
  {
    id: 2,
    slug: "migrating-to-linear-101",
    title: "Migrating to Linear 101",
    description:
      "A grounded walkthrough for teams moving into Linear, covering workflow cleanup, issue structure, adoption habits, and how to avoid carrying unnecessary process into a new tool.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research"],
    image: project2,
    detailTitle: "Migrating to Linear 101",
    intro:
      "Teams often move to Linear because they want less ceremony and more clarity. The transition works best when you keep workflows simple and focus on visibility first.",
    sections: [
      {
        heading: "Audit your current setup",
        paragraphs: [
          "Review issue types, sprint rituals, handoff points, and custom fields before the migration. This helps you avoid carrying unnecessary complexity into the new system.",
        ],
      },
      {
        heading: "Map processes to real team habits",
        paragraphs: [
          "Use statuses that match how the team already works. A lightweight process is easier to adopt and easier to maintain over time.",
          "Templates and labels should support daily work, not force everyone into extra admin.",
        ],
      },
      {
        heading: "Launch with a short training window",
        paragraphs: [
          "A focused onboarding week gives everyone time to learn views, shortcuts, and ownership expectations without overwhelming the team.",
        ],
      },
    ],
    closing:
      "If the system becomes easier to read and faster to update, adoption usually follows naturally.",
  },
  {
    id: 3,
    slug: "building-your-api-stack",
    title: "Building your API stack",
    description:
      "An overview of what makes an API stack reliable in real projects, from contracts and testing to observability, documentation, and long-term maintainability.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research"],
    image: project3,
    detailTitle: "Building your API stack",
    intro:
      "A healthy API stack balances reliability, observability, developer experience, and long-term maintainability. The exact tooling matters less than the consistency of the system.",
    sections: [
      {
        heading: "Define the contract early",
        paragraphs: [
          "Schemas, naming conventions, and error patterns should be decided before teams start shipping multiple services independently.",
        ],
      },
      {
        heading: "Invest in testing and monitoring",
        paragraphs: [
          "Integration tests, health checks, and traceable logs help you catch issues early and debug production incidents faster.",
        ],
      },
      {
        heading: "Make the docs part of the product",
        paragraphs: [
          "Good API documentation reduces support load and gives internal and external teams confidence when integrating with your platform.",
        ],
      },
    ],
    closing:
      "Strong API platforms feel boring in the best way: predictable, stable, and easy to work with.",
  },
  {
    id: 4,
    slug: "grid-system-for-better-design-user-interface",
    title: "Grid system for better design user interface",
    description:
      "A closer look at how grid systems improve alignment, consistency, and readability across digital products without forcing layouts to feel rigid or repetitive.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Interface"],
    image: project4,
    detailTitle: "Grid system for better Design User Interface",
    intro:
      "A grid system is a design tool used to arrange content on a page. It creates a consistent visual rhythm, improves alignment, and makes dense interfaces easier to scan.",
    sections: [
      {
        heading: "Why grids matter",
        paragraphs: [
          "If you've worked in New York City and used the streets, it's easy to picture why a grid helps. It gives structure and predictable spacing so users can move through information faster.",
          "In interface design, the same principle applies. Grids create order without making layouts feel rigid when used thoughtfully.",
        ],
      },
      {
        heading: "Breaking down the grid",
        paragraphs: [
          "Most grids are made of columns, gutters, and margins. Columns hold the content, gutters create breathing room, and margins define the frame of the layout.",
          "On smaller screens, the grid often collapses into fewer columns so the design can stay readable and easy to navigate.",
        ],
      },
      {
        heading: "Choosing the right structure",
        paragraphs: [
          "Column grids are common for editorial and marketing pages, modular grids work well for product and commerce experiences, and hierarchical grids are useful when content priority varies strongly.",
          "The goal is not to force every surface into the same pattern. The goal is to create a system that makes your interface feel connected.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "A good grid supports both designers and users. It improves scalability, strengthens consistency, and helps layouts adapt across breakpoints.",
        ],
      },
    ],
    closing:
      "When the structure is strong, the interface feels calmer, clearer, and easier to trust.",
  },
  {
    id: 5,
    slug: "what-is-wireframing",
    title: "What is wireframing?",
    description:
      "A clear introduction to wireframing, why it matters early in product work, and how low-fidelity structure helps teams validate flows before visual polish begins.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research", "Presentation"],
    image: project5,
    detailTitle: "What is wireframing?",
    intro:
      "Wireframing is the practice of planning page structure before visual design begins. It helps teams focus on layout, hierarchy, and user flow without getting distracted by final styling.",
    sections: [
      {
        heading: "Why wireframes matter",
        paragraphs: [
          "Wireframes make discussions faster because they isolate structure from polish. This helps product, design, and engineering teams align on the core experience early.",
        ],
      },
      {
        heading: "Keep them lightweight",
        paragraphs: [
          "A useful wireframe should be quick to change. It is a thinking tool, not a deliverable that needs visual perfection.",
        ],
      },
      {
        heading: "Use them to validate flows",
        paragraphs: [
          "Navigation paths, content groups, and primary actions become easier to test when the interface is reduced to essentials.",
        ],
      },
    ],
    closing:
      "Great wireframes create clarity before the design team invests in high-fidelity execution.",
  },
  {
    id: 6,
    slug: "pm-mental-models",
    title: "PM mental models",
    description:
      "A concise look at how product managers use mental models to simplify messy decisions, create shared language, and focus teams on what matters most.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Product", "Research", "Frameworks"],
    image: socialMediaImage,
    detailTitle: "PM mental models",
    intro:
      "Product managers use mental models to simplify messy systems and make better decisions under uncertainty.",
    sections: [
      {
        heading: "Create shared language",
        paragraphs: [
          "Frameworks help teams speak about tradeoffs in a more consistent way, especially when the product spans multiple stakeholders and priorities.",
        ],
      },
      {
        heading: "Reduce noise",
        paragraphs: [
          "The right model focuses attention on what matters most, whether that is user value, feasibility, speed, or business impact.",
        ],
      },
      {
        heading: "Use models as guides, not rules",
        paragraphs: [
          "A model is most useful when it sharpens judgment. It becomes less useful when it replaces judgment entirely.",
        ],
      },
    ],
    closing:
      "The best PMs adapt their models to the problem instead of forcing the problem into the model.",
  },
  {
    id: 7,
    slug: "practical-wireframing-for-fast-teams",
    title: "What is wireframing?",
    description:
      "A more practical take on wireframing for fast teams, with advice on matching fidelity to decisions, keeping reviews focused, and iterating without slowing delivery.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research", "Presentation"],
    image: digitalDevImage,
    detailTitle: "Practical wireframing for fast teams",
    intro:
      "Fast-moving teams need wireframes that support iteration, not process for its own sake. The most useful wireframes show just enough detail to move the work forward.",
    sections: [
      {
        heading: "Match fidelity to the decision",
        paragraphs: [
          "If the open question is about information hierarchy, keep the wireframe low fidelity. If the question is about interaction detail, add only the minimum needed to test it.",
        ],
      },
      {
        heading: "Make review easier",
        paragraphs: [
          "Simple annotations can prevent meetings from drifting into visual preferences too early.",
        ],
      },
    ],
    closing:
      "The lighter the artifact, the easier it becomes to learn quickly and iterate with confidence.",
  },
  {
    id: 8,
    slug: "how-collaboration-makes-us-better-designers",
    title: "How collaboration makes us better designers",
    description:
      "Why stronger collaboration between design, product, and engineering leads to sharper feedback, better execution, and more resilient design outcomes.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research", "Presentation"],
    image: influencerMarketingImage,
    detailTitle: "How collaboration makes us better designers",
    intro:
      "Design quality improves when ideas are challenged early, shared openly, and built with input from the people who will implement and measure the result.",
    sections: [
      {
        heading: "Feedback creates perspective",
        paragraphs: [
          "Different disciplines notice different risks. Collaboration helps surface issues in usability, feasibility, and messaging before they become expensive.",
        ],
      },
      {
        heading: "Shared ownership leads to better execution",
        paragraphs: [
          "When people contribute to the direction, they are more likely to defend it, refine it, and execute it well.",
        ],
      },
    ],
    closing:
      "Strong collaboration makes design less fragile and more effective in the real world.",
  },
  {
    id: 9,
    slug: "our-top-10-javascript-frameworks-to-use",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "A practical perspective on choosing JavaScript frameworks based on team experience, product constraints, ecosystem maturity, and what actually supports long-term delivery.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Software Development", "Tools", "SaaS"],
    image: howItWorkImage,
    detailTitle: "Our top 10 Javascript frameworks to use",
    intro:
      "Framework choices should reflect team experience, product constraints, and the kind of scale you expect to support.",
    sections: [
      {
        heading: "Developer ergonomics matter",
        paragraphs: [
          "A framework that feels productive for your team often outperforms a theoretically better option that no one enjoys maintaining.",
        ],
      },
      {
        heading: "Think beyond launch",
        paragraphs: [
          "Community health, documentation quality, and ecosystem maturity all shape long-term project stability.",
        ],
      },
    ],
    closing:
      "The right framework is the one that helps your team ship confidently and evolve without unnecessary friction.",
  },
  {
    id: 10,
    slug: "podcast-creating-a-better-cx-community",
    title: "Podcast: creating a better CX community",
    description:
      "A simple framework for building a stronger customer experience community, from defining the promise to creating useful conversations people want to return to.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Podcasts", "Customer Success", "Presentation"],
    image: videoGraphyImage,
    detailTitle: "Podcast: creating a better CX community",
    intro:
      "A strong customer experience community grows through clear purpose, useful conversations, and steady participation from the people it serves.",
    sections: [
      {
        heading: "Start with one clear promise",
        paragraphs: [
          "People join communities when they know what they will gain, whether that is support, learning, peer exchange, or industry insight.",
        ],
      },
      {
        heading: "Design for contribution",
        paragraphs: [
          "Good communities are not built only on content. They are built on participation. Make it easy for members to ask, answer, and share.",
        ],
      },
    ],
    closing:
      "Communities become valuable when they feel active, relevant, and genuinely helpful over time.",
  },
];

export const blogPostsPerPage = 6;
