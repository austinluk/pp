import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  tags: string[];
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
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
  icon: ReactNode;
  ariaLabel: string;
}

export type Theme = 'light' | 'dark';
