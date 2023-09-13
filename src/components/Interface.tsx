import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ProjectSection } from "./ProjectSection";
import { SkillsSection } from "./SkillsSection";

export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </div>
    )
};