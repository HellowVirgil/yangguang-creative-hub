import ResumeHeader from "@/components/resume/ResumeHeader";
import EducationSection from "@/components/resume/EducationSection";
import WorkExperienceSection from "@/components/resume/WorkExperienceSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import PersonalSection from "@/components/resume/PersonalSection";
import ContactSection from "@/components/resume/ContactSection";
import TechSkillsSection from "@/components/resume/TechSkillsSection";
import ParticleBackground from "@/components/effects/ParticleBackground";
import FloatingSkills from "@/components/effects/FloatingSkills";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* 粒子背景效果 */}
      <ParticleBackground />

      {/* 漂浮技能标签 */}
      <FloatingSkills />

      {/* Header Section */}
      <ResumeHeader />

      {/* Education Section */}
      <EducationSection />

      {/* Work Experience Section */}
      <WorkExperienceSection />

      {/* Tech Skills Section */}
      <TechSkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Personal Section */}
      <PersonalSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted-foreground mb-4">
            © 2025 杨广 - 用技术创造美好
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
