'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import Footer from '@/components/ui/Footer';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experiences';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="relative">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
