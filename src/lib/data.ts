export type Category =
  | "Mobile Apps"
  | "Backend"
  | "Web"
  | "Desktop"
  | "Client Projects";

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface ExpertiseArea {
  id: string;
  index: string;
  title: string;
  focus: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  current?: boolean;
  location?: string;
  link?: string;
  linkLabel?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ClientWork {
  id: string;
  name: string;
  role: string;
  type: string;
  description: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
  projectSlug?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  location?: string;
  note?: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  date: string;
}

export interface Highlight {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  categories: Category[];
  year: string;
  note?: string;
  company?: string;
  githubUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  coverImage?: string;
  images?: string[];
  videos?: string[];
}

export interface SkillGroup {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

/* ---------- Media helpers (uses ONLY real files from public/) ---------- */

function media(folder: string, file: string): string {
  return `/images/${folder}/${file}`.replace(/ /g, "%20");
}

const shopImages = Array.from({ length: 22 }, (_, i) =>
  media("shop management", `${i + 1}.jpeg`)
);
const clinicImages = Array.from({ length: 21 }, (_, i) =>
  media("clinic appointment system", `${i + 1}.jpeg`)
);
const hostelImages = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12].map((n) =>
  media("hostle management", `${n}.png`)
);

const hostelVideoLocal = media(
  "hostle management",
  "Recording 2026-02-01 113209.mp4"
);
const hostelVideo = "/videos/Hostle%20Management.mp4";
const medicineVideoLocal = "/images/medicine_reminder/video.mp4";
const medicineVideo = "/videos/Medicine%20Reminder.mp4";
const bzarVideo = "/videos/Bazar%20360.mp4";
const mmcVideo = "/videos/MMC%20Transport.mp4";
const v2aVideo = "/videos/Video%20to%20Audio%20Converter.mp4";

export const PERSONAL = {
  name: "Shahbaz Ahmed",
  nameUpper: "SHAHBAZ AHMED",
  role: "Full-Stack Mobile & Backend Engineer",
  headline: "Crafting Digital Worlds with Precision.",
  intro:
    "I am an ambitious Software Engineering Student and Full-Stack Mobile Developer with a strong foundation in Flutter (Dart) and backend engineering using Python, FastAPI, and Django.",
  bio: "I focus on building high-performance applications that bridge the gap between complex backend architecture and seamless user experiences.",
  philosophy:
    "Technology should support the user's goals instead of creating unnecessary complexity.",
  tagline:
    "I build scalable systems, useful applications, and seamless digital experiences across mobile, backend, and web technologies.",
  brand: [
    "Engineering",
    "Problem Solving",
    "Modern Technology",
    "Clean Architecture",
  ],
  stackLine:
    "Flutter × Backend Engineering × FastAPI × Python × Node.js × SQL / NoSQL × Web Development",
  location: "Mansehra, Pakistan · Available Globally / Remote",
  status: "Available for work",
  email: "shahbaz1139141@gmail.com",
  github: "https://github.com/python1139141-alt",
  linkedin: "https://www.linkedin.com/in/shahbaz-ahmed-01a747388/",
  whatsapp: "https://wa.me/923152188206",
  profileImage: "/profile_picture.jpeg",
};

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: PERSONAL.github, handle: "@python1139141-alt" },
  { label: "LinkedIn", href: PERSONAL.linkedin, handle: "shahbaz-ahmed-01a747388" },
  { label: "WhatsApp", href: PERSONAL.whatsapp, handle: "03152188206" },
  { label: "Email", href: `mailto:${PERSONAL.email}`, handle: PERSONAL.email },
];

export const EXPERTISE: ExpertiseArea[] = [
  {
    id: "mobile",
    index: "01",
    title: "Mobile Development",
    focus:
      "Cross-platform mobile applications with clean UI and scalable architecture.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "State Management",
      "Offline Storage",
      "Charts",
      "PDF Generation",
    ],
  },
  {
    id: "backend",
    index: "02",
    title: "Backend Development",
    focus:
      "Building scalable backend systems, APIs, data processing systems, desktop applications, and modular architecture.",
    skills: [
      "Python",
      "Node.js",
      "Django",
      "FastAPI",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Docker",
    ],
  },
  {
    id: "web",
    index: "03",
    title: "Web Development",
    focus: "Building responsive, modern, full-stack web applications.",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "APIs",
      "Django",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "devnox-solutions",
    company: "Devnox Solutions",
    role: "Full-Stack Developer — Flutter & FastAPI",
    type: "Full-Time",
    period: "Present",
    current: true,
    location: "Mansehra, Pakistan",
    link: "https://www.devnoxsolutions.com/",
    linkLabel: "devnoxsolutions.com",
    summary:
      "Architecting cross-platform internal products and client applications as a full-stack engineer across mobile, desktop, and backend.",
    responsibilities: [
      "Architected cross-platform internal products and client applications using Flutter.",
      "Built applications from a single codebase targeting both mobile and desktop deployment.",
      "Worked across full-stack application development end to end.",
      "Developed backend functionality and APIs using Python-based technologies.",
      "Delivered a Python-based desktop store management system using Tkinter and SQLite.",
      "Built offline-capable point-of-sale functionality for non-technical staff.",
    ],
    technologies: ["Flutter", "Dart", "Python", "FastAPI", "Tkinter", "SQLite", "Firebase"],
  },
  {
    id: "petalnex-ltd",
    company: "Petalnex Ltd",
    role: "Software Developer & Flutter Developer",
    type: "Contract",
    period: "3 Months",
    link: "https://pk.linkedin.com/company/petalnex",
    linkLabel: "LinkedIn",
    summary:
      "Software Developer & Flutter Developer role focused on Flutter application development at Petalnex Ltd.",
    responsibilities: [
      "Contributed to Flutter-based application development as a Software Developer at Petalnex Ltd.",
    ],
    technologies: ["Flutter", "Dart", "Next.js", "Node.js"],
  },
  {
    id: "codematics-uraan",
    company: "Codematics Uraan",
    role: "Flutter Intern",
    type: "Internship",
    period: "4 Months",
    location: "Abbottabad, Pakistan",
    link: "https://www.codematics.co/en/",
    linkLabel: "codematics.co",
    summary:
      "An early professional experience that strengthened my Flutter and mobile application development foundations.",
    responsibilities: [
      "Built and maintained Flutter mobile applications during the internship at Codematics Uraan.",
    ],
    technologies: ["Flutter", "Dart"],
  },
];

export const CLIENT_WORK: ClientWork[] = [
  {
    id: "mmc-transport",
    name: "MMC Transport App",
    role: "Logistics & Supply Chain Application",
    type: "Freelance project",
    description:
      "A client project featuring role-based applications for transport and logistics management, connecting field and back-office teams.",
    technologies: ["Flutter", "React", "Firebase", "REST APIs"],
    projectSlug: "mmc-transport-international",
  },
  {
    id: "kameti-app",
    name: "Kameti App",
    role: "Digital Financial Management System",
    type: "Freelance project",
    description:
      "A digital financial management system for organizing and tracking group savings, contributions, and payouts.",
    technologies: [],
    link: "https://github.com/python1139141-alt/Kameti",
    linkLabel: "GitHub",
    projectSlug: "kameti-app",
  },
  {
    id: "client-web-interfaces",
    name: "Client Web Interfaces",
    role: "Local Enterprise Solutions",
    type: "Freelance project",
    description:
      "Client web interfaces for local enterprises — including a venue and booking site for Dastoor Marquee, a wedding venue in Mansehra.",
    technologies: [],
    link: "https://dastoor-marquee-psi.vercel.app/",
    linkLabel: "Live site",
    projectSlug: "client-web-interfaces",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "bs-software-engineering",
    degree: "Bachelor of Science in Software Engineering",
    school: "Hazara University",
    period: "2023 — 2027",
    note: "Currently pursuing",
  },
  {
    id: "fsc-pre-engineering",
    degree: "FSC Pre-Engineering",
    school: "Royal College of Sciences, Mansehra",
    period: "2021 — 2023",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "ibm-software-engineering",
    name: "IBM Software Engineering",
    provider: "Coursera",
    date: "December 2025",
  },
  {
    id: "flutter-developer-certificate",
    name: "Flutter Developer Certificate",
    provider: "Codematics Uraan",
    date: "July 2025",
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    id: "fullstack",
    index: "01",
    title: "Full-Stack Developer",
    subtitle: "Mobile & Web",
    description:
      "End-to-end product thinking — from backend APIs and data models to the interface a user actually touches.",
  },
  {
    id: "problem-solver",
    index: "02",
    title: "Problem Solver",
    subtitle: "Clean Architecture",
    description:
      "I break complex problems into simple, maintainable systems built to last and easy to extend.",
  },
  {
    id: "open-source",
    index: "03",
    title: "Open Source Creator",
    subtitle: "Active Builder",
    description:
      "I share useful projects, clones, templates, and utilities with the wider developer community.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "shop-management-system",
    slug: "shop-management-system",
    name: "Shop Management System",
    tagline: "Retail operations, simplified.",
    description:
      "A shop management system built with Flutter and Dart to handle day-to-day retail operations from a single mobile application.",
    technologies: ["Flutter", "Dart"],
    categories: ["Mobile Apps"],
    year: "2024",
    coverImage: "/picture_banners/shop_management_system.jpg",
    images: shopImages,
  },
  {
    id: "clinic-appointment-system",
    slug: "clinic-appointment-system",
    name: "Clinic Appointment System",
    tagline: "Smarter scheduling for clinics.",
    description:
      "A Clinic Appointment System built with Flutter, Dart, and Firebase for reliable, real-time appointment booking and management.",
    technologies: ["Flutter", "Dart", "Firebase"],
    categories: ["Mobile Apps"],
    year: "2024",
    coverImage: "/picture_banners/clinic_appointment_system.jpg",
    images: clinicImages,
  },
  {
    id: "hostel-management-system",
    slug: "hostel-management-system",
    name: "Hostel Management System",
    tagline: "Administration made effortless.",
    description:
      "A Flutter application for hostel administration and management, covering occupancy, records, and daily operations.",
    technologies: ["Flutter", "Dart"],
    categories: ["Mobile Apps"],
    year: "2024",
    coverImage: "/picture_banners/hostle_management_system.jpg",
    images: hostelImages,
    videos: [hostelVideoLocal, hostelVideo],
  },
  {
    id: "medicine-reminder-app",
    slug: "medicine-reminder-app",
    name: "Medicine Reminder App",
    tagline: "Timely care, intelligently scheduled.",
    description:
      "A private client project: an Android medicine reminder application with intelligent scheduling and alerts to keep patients on track.",
    technologies: ["Python", "FastAPI", "MySQL"],
    categories: ["Mobile Apps", "Backend", "Client Projects"],
    year: "2025",
    coverImage: "/picture_banners/medicine_reminder_app.png",
    note: "Private client project",
    videos: [medicineVideoLocal, medicineVideo],
  },
  {
    id: "bzar-360",
    slug: "bzar-360",
    name: "Bzar 360",
    tagline: "Multi-vendor marketplace, engineered.",
    description:
      "A Devnox working project with private source code, focused on robust multi-vendor marketplace functionality across buyers and sellers.",
    technologies: ["Flutter", "Dart"],
    categories: ["Mobile Apps", "Client Projects"],
    year: "2025",
    coverImage: "/picture_banners/bzar_360.png",
    note: "Devnox working project · private source",
    company: "Devnox Solutions",
    videos: [bzarVideo],
  },
  {
    id: "video-to-audio-converter",
    slug: "video-to-audio-converter",
    name: "Video to Audio Converter",
    tagline: "Extract sound from any video.",
    description:
      "A utility application designed to convert video files into audio for quick, offline media extraction.",
    technologies: ["Python", "Kotlin"],
    categories: ["Desktop"],
    year: "2023",
    coverImage: "/picture_banners/Video_to_Audio_Converter.jpg",
    videos: [v2aVideo],
  },
  {
    id: "mmc-transport-international",
    slug: "mmc-transport-international",
    name: "MMC Transport International",
    tagline: "Logistics, role-based and connected.",
    description:
      "A client project featuring role-based applications for transport and logistics management, connecting field and back-office teams.",
    technologies: ["Flutter", "React", "Firebase", "REST APIs"],
    categories: ["Client Projects", "Web", "Mobile Apps"],
    year: "2025",
    coverImage: "/picture_banners/MMC_Transport_International.webp",
    note: "Client project",
    videos: [mmcVideo],
  },
  {
    id: "kameti-app",
    slug: "kameti-app",
    name: "Kameti App",
    tagline: "Group savings, managed simply.",
    description:
      "A digital financial management system for organizing and tracking group savings, contributions, and payouts.",
    technologies: [],
    categories: ["Mobile Apps", "Client Projects"],
    year: "2025",
    coverImage: "/picture_banners/Kameti_App.png",
    note: "Freelance project",
    githubUrl: "https://github.com/python1139141-alt/Kameti",
  },
  {
    id: "client-web-interfaces",
    slug: "client-web-interfaces",
    name: "Client Web Interfaces",
    tagline: "Local enterprise, online.",
    description:
      "Client web interfaces for local enterprises — including a venue and booking site for Dastoor Marquee, a wedding venue in Mansehra.",
    technologies: [],
    categories: ["Web", "Client Projects"],
    year: "2025",
    note: "Freelance project",
    demoUrl: "https://dastoor-marquee-psi.vercel.app/",
  },
  {
    id: "cipherscan",
    slug: "cipherscan",
    name: "CipherScan",
    tagline: "Your credentials, locked offline.",
    description:
      "An offline credential vault that securely stores your logins and generates scannable QR codes — available as a downloadable Android app.",
    technologies: ["Flutter", "Dart", "Android"],
    categories: ["Mobile Apps", "Client Projects"],
    year: "2025",
    coverImage: "/picture_banners/cipher_scan.webp",
    note: "Client project",
    liveUrl: "https://cipherscan-mu.vercel.app/",
  },
  {
    id: "baithak",
    slug: "baithak",
    name: "Baithak",
    tagline: "Where every meal feels like home.",
    description:
      "A warm, inviting website for Baithak — a restaurant and dining experience — showcasing the menu, ambience, and story.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    categories: ["Web", "Client Projects"],
    year: "2025",
    coverImage: "/picture_banners/baithak.jpg",
    note: "Client project",
    liveUrl: "https://baithak-website-rho.vercel.app/",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "mobile",
    name: "Mobile Development",
    description:
      "Cross-platform applications with clean UI and scalable architecture.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "State Management",
      "Offline Storage",
      "Charts",
      "PDF Generation",
    ],
  },
  {
    id: "backend",
    name: "Backend Engineering",
    description:
      "Scalable APIs, data processing, and modular server-side architecture.",
    skills: [
      "Python",
      "Node.js",
      "Django",
      "FastAPI",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Docker",
    ],
  },
  {
    id: "web",
    name: "Web Development",
    description: "Responsive, modern, full-stack web applications.",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "APIs",
      "Django",
    ],
  },
  {
    id: "databases",
    name: "Databases",
    description: "Relational storage, modelling, and querying (SQL & NoSQL).",
    skills: ["Firebase", "MySQL", "Supabase", "SQLite", "PostgreSQL"],
  },
  {
    id: "db-tools",
    name: "Database Management",
    description: "Tools for administering and managing databases.",
    skills: ["phpMyAdmin"],
  },
  {
    id: "tooling",
    name: "Tools & Infrastructure",
    description: "The workflow and systems behind shipped software.",
    skills: ["Git", "Docker", "Firebase", "Tkinter", "REST APIs", "CI/CD"],
  },
];

export const PROJECT_FILTERS: ("All" | Category)[] = [
  "All",
  "Mobile Apps",
  "Backend",
  "Web",
  "Desktop",
  "Client Projects",
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
