import { Section } from "./Section"
import { motion } from "framer-motion"

const skills = [
    {
        title: "HTML",
        src: "/html.png",
    },
    {
        title: "CSS",
        src: "/css.png",
    },
    {
        title: "TailwindCSS",
        src: "/tailwind.png",
    },
    {
        title: "JavaScript",
        src: "/javascript.png",
    },
    {
        title: "TypeScript",
        src: "/typescript.png",
    },
    {
        title: "NodeJS",
        src: "/nodeJS.png",
    },
    {
        title: "ReactJS",
        src: "/react.png",
    },
    {
        title: "Python",
        src: "/python.png",
    },
    {
        title: "Java",
        src: "/java.png",
    },
    {
        title: "Git",
        src: "/git.png",
    },
    {
        title: "MongoDB",
        src: "/mongodb.png",
    },
    {
        title: "PostgreSQL",
        src: "/postgresql.png",
    }
]

const languages = [
    {
        title: "Slovak",
        src: "/slovakia.png"
    },
    {
        title: "English",
        src: "/england.png",
    },
    {
        title: "Russian",
        src: "/russia.png"
    }
]


export const SkillsSection = () => {
    return (
        <Section items="items-center">
            <motion.h2 className="text-4xl font-extrabold leading-snug">
                Tech stack
            </motion.h2>
            <motion.div className="items-center justify-center grid grid-cols-7"
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div className="flex items-center justify-center rounded-full bg-gray-50 shadow-xl mr-7 mt-10 hover:shadow-blue-400 p-5" key={index}
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 1,
                            delay: 1 + index * 0.2,
                        }}
                    >
                        <img src={skill.src} alt={skill.title} />
                    </motion.div>
                ))}
            </motion.div>
            <motion.h2 className="text-4xl font-extrabold mt-10 leading-snug"
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 1,
                    delay: 3.2,
                }}
            >
                Language stack
            </motion.h2>
            <div className="inline-flex items-center justify-center">
                {languages.map((language, index) => (
                    <motion.div className="flex items-center justify-center rounded-full bg-gray-50 shadow-xl mr-7 mt-10 hover:shadow-blue-400 p-5" key={index}
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 1,
                            delay: 3.2 + index * 0.2,
                        }}
                    >
                        <img src={language.src} alt={language.title} />
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}