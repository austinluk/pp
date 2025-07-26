export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export type Theme = 'light' | 'dark';
