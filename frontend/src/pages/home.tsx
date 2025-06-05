import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import AchievementsSection from "@/components/achievements-section";
import CareerHighlights from "@/components/career-highlights"
import GoalsSection from "@/components/goals-section"
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <CareerHighlights />
        <GoalsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
