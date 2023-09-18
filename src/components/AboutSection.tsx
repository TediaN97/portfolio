import { Section } from "./Section"
import { motion } from "framer-motion"

export const AboutSection = () => {
    return (
        <Section items="items-start">
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
            <motion.button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
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
            <motion.div className="flex" 
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
                    delay: 3.5,
                }}
            >
                <img className="w-10 mr-1" src="/linkedin-logo.png" alt="linkedIn"/>
                <img className="w-10 mr-1" src="/github.png" alt="github"/>
                <img className="w-10 mr-1" src="/facebook_logo.png" alt="facebook"/>
                <img className="w-10 mr-1" src="/Instagram_logo.png" alt="instagram"/>
            </motion.div>
        </Section>
    )
}