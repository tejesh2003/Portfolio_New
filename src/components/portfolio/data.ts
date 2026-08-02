export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  "Full-Stack Engineer",
  "Backend Developer",
  "React Developer",
  "FastAPI Developer",
  "Problem Solver",
  "AWS Enthusiast",
];

export const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tejesh-chintada/", icon: "linkedin" as const },
  { name: "GitHub", href: "https://github.com/tejesh2003", icon: "github" as const },
  { name: "LeetCode", href: "https://leetcode.com/u/Tejesh_2003/", icon: "leetcode" as const },
  { name: "CodeChef", href: "https://www.codechef.com/users/tejesh_22", icon: "codechef" as const },
  { name: "HackerRank", href: "https://www.hackerrank.com/profile/tejeshchintada22", icon: "hackerrank" as const },
];

export const EXPERIENCE = [
  {
    company: "Finstack",
    role: "Full-Stack Software Development Engineer",
    period: "July 2025 — Present",
    highlights: [
      "Delivered 20+ bug fixes across multiple production applications.",
      "Migrated a critical microservice through two major architectural transitions.",
      "Designed and shipped 10+ REST APIs powering internal and client-facing surfaces.",
      "Contributed to seven microservices spanning the platform.",
      "Partnered with clients to align product requirements with business goals.",
      "Improved deployment workflows and system reliability across services.",
    ],
  },
  {
    company: "Emoha",
    role: "Software Engineering Intern",
    period: "December 2024 — May 2025",
    highlights: [
      "Resolved 40+ UI issues improving the customer-facing experience.",
      "Built reusable frontend components adopted across product surfaces.",
      "Improved API performance and reduced payload sizes on hot paths.",
      "Contributed scalable backend enhancements to core services.",
      "Enhanced responsiveness and maintainability across the codebase.",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    tint: "from-indigo-500/40 to-cyan-500/40",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    title: "Frontend",
    tint: "from-fuchsia-500/40 to-indigo-500/40",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    tint: "from-cyan-500/40 to-emerald-500/40",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "Microservices"],
  },
  {
    title: "Databases",
    tint: "from-purple-500/40 to-pink-500/40",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    tint: "from-amber-500/40 to-orange-500/40",
    skills: ["AWS", "Docker", "CI/CD", "Git", "Linux"],
  },
  {
    title: "Tools & Practices",
    tint: "from-emerald-500/40 to-cyan-500/40",
    skills: ["System Design", "Data Structures", "Algorithms", "Agile", "Jira"],
  },
];

export const PROJECTS = [
  {
    name: "FinSage",
    tagline: "Investment Tracking Platform",
    description:
      "A multi-portfolio investment platform with real-time market data, personalized financial news, and interactive analytics for informed decisions.",
    highlights: [
      "Multi-portfolio support with per-asset tracking",
      "Real-time stock tracking & live price updates",
      "Personalized financial news feed",
      "Interactive portfolio analytics & insights",
    ],
    stack: ["React", "Node.js", "MongoDB", "Chart.js"],
    accent: "from-indigo-500 via-blue-500 to-cyan-400",
    github: "https://github.com/tejesh2003",
    demo: "#",
  },
  {
    name: "DevTinder",
    tagline: "Developer Matching Platform",
    description:
      "A social platform for developers to match, connect, and chat in real time — engineered for scale with optimized data access and infinite scrolling feeds.",
    highlights: [
      "Real-time chat with WebSockets",
      "Infinite scrolling developer feed",
      "Optimized database queries & indexes",
      "Highly scalable, service-oriented architecture",
    ],
    stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    accent: "from-fuchsia-500 via-purple-500 to-indigo-500",
    github: "https://github.com/tejesh2003",
    demo: "#",
  },
  {
    name: "DocuEmbed",
    tagline: "Document Processing Pipeline",
    description:
      "A high-performance document ingestion pipeline with async workflows, multi-format parsing, and intelligent processing for downstream retrieval.",
    highlights: [
      "Multi-format document ingestion",
      "Intelligent document processing",
      "Async, event-driven workflow",
      "High-performance pipeline throughput",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Celery"],
    accent: "from-cyan-400 via-teal-400 to-emerald-400",
    github: "https://github.com/tejesh2003",
    demo: "#",
  },
];

export const ACHIEVEMENTS = [
  { value: 700, suffix: "+", label: "Problems Solved" },
  { value: 5, suffix: "+", label: "Direct Client Management" },
  { value: 40, suffix: "+", label: "Shipped Production features" },
  { value: 2496, suffix: "", label: "JEE Advanced Rank" },
  { value: 5, suffix: "★", label: "HackerRank C++" },
  { value: 480, suffix: "th", label: "CodeChef Div 2 · Starters 113" },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Software Engineering Virtual Internship",
    org: "JPMorgan Chase & Co.",
    accent: "from-indigo-500 to-cyan-400",
  },
];