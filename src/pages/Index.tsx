import ResumeHeader from "@/components/resume/ResumeHeader";
import EducationSection from "@/components/resume/EducationSection";
import WorkExperienceSection from "@/components/resume/WorkExperienceSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import PersonalSection from "@/components/resume/PersonalSection";
import ContactSection from "@/components/resume/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <ResumeHeader />
      
      {/* Education Section */}
      <EducationSection />
      
      {/* Work Experience Section */}
      <WorkExperienceSection />
      
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
            © 2024 杨广（云澹）- 用技术创造美好
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
