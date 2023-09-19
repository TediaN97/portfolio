import { Section } from "./Section"
import { motion } from "framer-motion"

export const AboutSection = (props: { setSection: ( value: number) => void, menuOpened: boolean}) => {

    const { setSection, menuOpened } = props;

    return (
        <Section items="">
            <motion.div 
                animate={
                    menuOpened ? "open" : "closed"
                  }
                variants={{
                    open: {
                        x: "-100%",
                        opacity: 0, 
                        transition:{
                            duration: 0.7,
                            ease: [0.83, 0, 0.17, 1],
                        }
                    },
                    closed: {
                        x: 0,
                        opacity: 1, 
                        transition:{
                            duration: 0.7,
                            ease: [0.83, 0, 0.17, 1],
                        }
                    }
                }}   
            > 
                <h1 className="text-6xl font-extrabold leading-snug text-white">
                    Hello, I'm
                    <br />
                    <span className="px-1 italic text-green-400">Matúš Sabat</span>

                </h1>
                <motion.p className="text-lg text-gray-400 mt-4"
                    initial={{
                        opacity: 0,
                        y:25
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.5,
                    }}
                >
                    I am a software engineer based in Košice, Slovakia.
                </motion.p>
                <motion.button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16" onClick={() => setSection(3)}
                    initial={{
                        opacity: 0,
                        y:25
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 2.5,
                    }}
                >
                    Hire Me
                </motion.button>
            </motion.div>
        </Section>
    )
}