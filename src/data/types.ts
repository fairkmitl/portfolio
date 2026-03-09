export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  linkedInUrl: string;
  github: string;
  githubUrl: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
}

export interface AboutContent {
  summary: string;
  philosophy: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  note?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

export interface Award {
  title: string;
  year: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteContent {
  metadata: SiteMetadata;
  personal: PersonalInfo;
  nav: NavItem[];
  about: AboutContent;
  experience: WorkExperience[];
  skills: SkillCategory[];
  education: Education[];
  awards: Award[];
}
