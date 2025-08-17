import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "ThenStep",
    subtitle: "AI-Powered Platform",
    description: "An AI-powered platform that intuitively understands user needs — from safe paths to smart meals — without asking twice. ThenStep finds what fits with AI's help.",
    year: "2024",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Supabase"],
    demoUrl: "https://www.youtube.com/watch?v=mIPAovu09cM",
    githubUrl: "https://github.com/yourusername/thenstep"
  },
  {
    id: 2,
    title: "Freddy the Freelancer",
    subtitle: "WhatsApp Automation Bot",
    description: "A WhatsApp bot that seamlessly connects clients with skilled freelancers, streamlining the hiring process through automated conversations and smart matching.",
    year: "2024",
    tags: ["Node.js", "WhatsApp API", "MongoDB", "AWS"],
    liveUrl: "https://heyfreddy.xyz",
    githubUrl: "https://github.com/yourusername/freddy-freelancer"
  },
  {
    id: 3,
    title: "Portfolio Website",
    subtitle: "Personal Showcase",
    description: "Modern portfolio website showcasing projects and skills with responsive design and smooth animations.",
    year: "2024",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio"
  }
];
