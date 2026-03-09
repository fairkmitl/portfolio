import type { SiteContent } from "./types";

export const siteContent: SiteContent = {
  metadata: {
    title: "Weerapat Buachuen — Senior Software Engineer",
    description:
      "Portfolio of Weerapat Buachuen, a Senior Software Engineer with 7+ years of experience building scalable software systems across backend, frontend, and cloud infrastructure.",
    url: "https://weerapat.dev",
  },

  personal: {
    name: "Weerapat Buachuen",
    title: "Senior Software Engineer",
    location: "Bangkok, Thailand",
    email: "weerapat.buachuen@gmail.com",
    phone: "+66945218645",
    linkedIn: "linkedin.com/in/weerapat-buachuen-63458a1ab",
    linkedInUrl: "https://linkedin.com/in/weerapat-buachuen-63458a1ab",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  about: {
    summary:
      "Senior Software Engineer with 7+ years of experience designing, developing, and maintaining scalable software systems. Strong background across backend and frontend domains, enabling end-to-end ownership of complex features from system design to production deployment. Experienced in architectural decision-making, data modeling, and improving system reliability through modular design and standardization.",
    philosophy: [
      "Proven ability to lead technical initiatives and influence engineering best practices.",
      "Collaborate effectively with cross-functional teams to deliver high-impact solutions aligned with business objectives.",
      "End-to-end ownership — from requirement analysis and system design to deployment and production support.",
    ],
  },

  experience: [
    {
      company: "GoUpscale Technology",
      role: "Senior Software Engineer",
      period: "Sep 2023 – Feb 2026",
      highlights: [
        "Contributed to architectural design and technical decision-making within owned backend product features.",
        "Designed scalable data models and optimized database structures to support growing system complexity.",
        "Improved system reliability and maintainability by restructuring core modules and standardizing architectural patterns.",
        "Owned end-to-end feature delivery, from requirement analysis and system design to deployment and production support.",
        "Conducted peer code reviews and helped elevate engineering standards and development practices.",
        "Collaborated closely with product and design teams to translate business requirements into robust technical solutions.",
      ],
    },
    {
      company: "NPD S Group Co., Ltd.",
      role: "Software Engineer / Project Manager",
      period: "Apr 2021 – Jul 2023",
      highlights: [
        "Led company-wide digital transformation initiatives, implementing internal software solutions across multiple departments.",
        "Managed end-to-end ERP system development projects, coordinating stakeholders, timelines, and technical execution.",
        "Architected and maintained core web services and cloud infrastructure to ensure system scalability and stability.",
        "Developed internal platforms, including time attendance (PWA) and business data visualization systems.",
        "Established technical documentation and process guidelines to support operational continuity.",
      ],
    },
    {
      company: "Bangsue Industrial (SCG Group)",
      role: "Software Engineer",
      period: "Jul 2019 – Mar 2021",
      note: "Initially contracted via Getlinks; later transitioned to direct hire.",
      highlights: [
        "Designed and developed online ordering and CRM/CMS platforms serving administrators and customers.",
        "Built e-commerce systems integrated with payment gateways, SMS providers, shipping APIs, and social platforms.",
        "Designed database schemas and managed AWS-based cloud deployment.",
      ],
    },
    {
      company: "Anunda Technology Co., Ltd.",
      role: "Full Stack Developer",
      period: "Jul 2018 – Jun 2019",
      highlights: [
        "Developed internal business applications to support organizational workflows.",
        "Translated user requirements into scalable web-based solutions.",
      ],
    },
  ],

  skills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "PHP"],
    },
    {
      category: "Backend & API Development",
      skills: [
        "Node.js (Express)",
        "Django",
        "Flask",
        "Laravel",
        "RESTful APIs",
        "GraphQL",
      ],
    },
    {
      category: "Frontend Development",
      skills: ["Vue.js", "React.js", "Angular"],
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS", "Google Cloud Platform (GCP)", "VPS", "Linux (Ubuntu)"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Firestore"],
    },
    {
      category: "Architecture & Engineering Practices",
      skills: [
        "Software Architecture",
        "System Design",
        "Requirements Analysis",
        "Technical Documentation",
        "Code Review",
        "Project Leadership",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Software Engineering",
      institution: "Chulalongkorn University",
      period: "2021 – 2023",
      details: [
        "Thesis: Automated Stock Trading System Using Deep Learning",
        "Developed predictive models for stock price forecasting.",
        "Built automated trade execution via brokerage API integration.",
        "Designed cloud-based data processing and storage pipeline.",
      ],
    },
    {
      degree: "Bachelor of Engineering in Telecommunication Engineering",
      institution: "King Mongkut's Institute of Technology Ladkrabang",
      period: "2015 – 2019",
    },
  ],

  awards: [
    {
      title: "SET (The Stock Exchange of Thailand) Research Scholarship",
      year: "2023",
      description:
        "Awarded for research on automated stock trading systems using deep learning models.",
    },
  ],
};
