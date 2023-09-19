import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ProjectSection } from "./ProjectSection";
import { SkillsSection } from "./SkillsSection";

export const Interface = (props: { onSectionChange: (value: number) => void, menuOpened: boolean }) => {
    const { onSectionChange, menuOpened} = props;
    
    const handleSection = (section: number) => {
        onSectionChange(section);
    }    

    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection setSection={handleSection} menuOpened={menuOpened} />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </div>
    )
};