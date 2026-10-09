import designHero from "../../assets/design-hero.jpg";
import uiUx from "../../assets/ui ux.jpeg";
import devHero from "../../assets/dev-hero.jpg";
import dev1 from "../../assets/dev-1.jpg";
import dev2 from "../../assets/dev-2.jpg";
import dev3 from "../../assets/dev-3.jpg";
import mywork from "../../assets/mywork.jpg";

export const portfolioData = {
  profile: {
    name: "Muhammad Hadi",
    location: "Rawalpindi, PK",
    availability: "available for work",
    role: "Digital Solutions Engineer & Designer",
    typewriterRoles: [
      "Digital Solutions Engineer",
      "Backend Developer",
      "Creative Technologist",
      "UI/UX Designer",
      "MERN Stack Engineer",

    ],
    email: "alihadipro90@gmail.com",
    intro:
      "Blending creative design with modern development to create distinctive brands and engaging digital experiences.",
    stats: [
      ["20+", "Projects delivered"],
      ["10+", "Happy clients"],
      ["5", "Years experience"],
      ["20+", "Technologies"],
    ],
  },
  marquee: [
    "Branding",
    "Visual Identity",
    "React",
    "Node.js",
    "UI/UX",
    "MongoDB",
    "Typography",
    "Express",
    "Packaging",
    "TypeScript",
  ],
  design: {
    hero: designHero,
    services: [
      ["Branding", "Naming support, positioning, tone and the full mark."],
      [
        "Logo Design",
        "Primary, secondary and responsive lockups with clear rules.",
      ],
      [
        "Visual Identity",
        "Color, type scale, grid, imagery, motion and guidelines.",
      ],
      [
        "UI/UX Design",
        "Flows, wireframes, high-fidelity screens and design systems.",
      ],
      ["Social Media", "Templates and campaign kits that survive a busy feed."],
      [
        "Posters",
        "Editorial, oversized-type poster art for events and launches.",
      ],
      ["Marketing Material", "Decks, brochures, banners and pitch collateral."],
      ["Packaging", "Structure, dielines and shelf-ready surface design."],
      ["Illustration", "Custom digital illustration and iconography sets."],
    ],
    projects: [
      {
        img: 34,
        w: 900,
        h: 1100,
        title: "Crimson Coffee Co.",
        category: "Brand Identity",
        desc: "A full identity for a specialty roastery: mark, stationery, packaging and a rulebook the team can actually follow.",
        tools: ["Illustrator", "Photoshop", "InDesign"],
        detail: "12-week engagement · 40-page brand guide",
      },
      {
        img: mywork,
        w: 900,
        h: 700,
        title: "My Work Poster Series",
        category: "Poster Series",
        desc: "Oversized type, torn edges and a two-color print system for a three-night underground music festival.",
        tools: ["Illustrator", "Photoshop"],
        detail: "6 posters · Screen-print ready",
      },
      {
        img: uiUx,
        w: 900,
        h: 900,
        title: "Elvora App",
        category: "UI/UX Design",
        desc: "User-focused restaurant app design that makes discovering meals, placing orders, and creating personal accounts simple and seamless—from browsing the menu to checkout and order tracking.",
        tools: ["Figma", "Illustrator"],
        detail: "12 screens · Design system included",
      },
      {
        img:12,
        w: 900,
        h: 800,
        title: "Obsidian Skincare",
        category: "Packaging",
        desc: "Matte black cartons with crimson foil, built as a scalable range system for eight SKUs.",
        tools: ["Illustrator", "Photoshop", "Dimension"],
        detail: "8 SKUs · Dieline + print supervision",
      },
    ],
    skills: [
      ["Adobe Photoshop", 95],
      ["Adobe Illustrator", 93],
      ["Adobe After Effects", 90],
      ["Adobe InDesign", 85],
      ["Davinci", 92],
      ["Adobe XD", 90],
      ["Capcut", 88],
      ["Figma", 89],
    ],
  },
  development: {
    hero: devHero,
    services: [
      [
        "Frontend Development",
        "React interfaces with clean state, routing and accessibility.",
      ],
      [
        "Backend Development",
        "Node and Express services with insane structure and logging.",
      ],
      [
        "Full-Stack Apps",
        "End-to-end MERN products from schema to deployed UI.",
      ],
      ["REST API Development", "Versioned, documented, validated endpoints."],
      [
        "Database Integration",
        "MongoDB modelling, indexing and aggregation pipelines.",
      ],
      [
        "Authentication",
        "JWT and session auth, roles, permissions and secure flows.",
      ],
      ["Responsive Design", "Layouts that behave from 320px to ultrawide."],
      [
        "Performance",
        "Bundle budgets, caching, query tuning and Core Web Vitals.",
      ],
      [
        "Maintenance",
        "Dependency care, monitoring, fixes and feature iteration.",
      ],
    ],
    projects: [
      {
        img: dev1,
        title: "Cheqnovex",
        desc: "Automate cheque filling with intelligent data entry and precise print alignment for dates, payee details, amounts in words and digits, and stamps.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Recharts"],
        features: [
          "Role-based access",
          "Aggregation pipelines",
          "Scheduled email reports",
        ],
      },
      {
        img: dev2,
        title: "Saas Application",
        desc: "Headless storefront with cart persistence, Stripe checkout, inventory sync and an admin panel for catalogue management.",
        stack: ["React", "TypeScript", "Express", "MongoDB", "Stripe"],
        features: [
          "Cart persistence",
          "Admin catalogue CRUD",
          "Order webhooks",
        ],
      },
      {
        img: dev3,
        title: "DRIVEXA",
        desc: "Realtime vehicle booking app which is capable of handling dynamic pricing and route optimization.",
        stack: ["React", "Socket.IO", "Node.js", "MongoDB", "Tailwind"],
        features: ["Realtime sync", "Optimistic updates", "Workspace invites"],
      },
    ],
    skills: {
      Frontend: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "CSS3",
        "Tailwind CSS",
      ],
      Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "WebSockets"],
      Data: ["MongoDB", "Mongoose", "Schema Design", "Indexing", "Aggregation"],
      Workflow: ["Git", "GitHub", "CI/CD", "Testing", "Deployment"],
    },
  },
  about: {
    education: [
      [
        "Bachelor's in Software Engineering",
        "Focused on systems thinking, software architecture, problem solving, and product-oriented development.",
      ],
      [
        "Visual Design Foundation",
        "Built on typography, composition, and communication strategy to bridge design and engineering work.",
      ],
    ],
    timeline: [
      [
        "2022",
        "Started freelancing as a brand and poster designer for local studios.",
      ],
      [
        "2023",
        "Shipped first production React interfaces; fell for component architecture.",
      ],
      [
        "2024",
        "Went full MERN — Node, Express and MongoDB services behind real products.",
      ],
      [
        "2025",
        "Led end-to-end identity + product builds for startups and agencies.",
      ],
      [
        "2026",
        "Running a dual practice: brand systems by day, full-stack builds by night.",
      ],
    ],
  },
  contact: {
    email: "alihadipro90@gmail.com",
    location: "Rawalpindi, Pakistan.",
    responseTime: "24-7 Available",
  },
};
