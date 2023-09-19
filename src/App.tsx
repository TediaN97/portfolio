import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Scroll, ScrollControls } from '@react-three/drei';
import { Interface } from './components/Interface';
import { useEffect, useRef, useState } from 'react';
import { Menu } from './components/Menu';
import gsap from 'gsap';
import { ScrollManager } from './components/ScrollManager';
import { MotionConfig } from 'framer-motion';
import { framerMotionConfig } from './config/framerMotionConfig';
import { Preloader } from './components/Preloader';

function App() {

    const [ section, setSection] = useState(0);
    const [ menuOpened, setMenuOpened ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const $follower = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000)
    }, []);
    
    useEffect(() => {
        const ctx = gsap.context(() => {
            const xTo = gsap.quickTo($follower.current, "x", {
                duration: 0.6,
                ease: "power3",
            })

            const yTo = gsap.quickTo($follower.current, "y", {
                duration: 0.6,
                ease: "power3",
            })

            window.addEventListener("mousemove", (e) => {
                xTo(e.clientX)
                yTo(e.clientY)
            })

            return () =>
                window.removeEventListener("mousemove", (e) => {
                    xTo(e.clientX)
                    yTo(e.clientY)
                })
        })

        return () => {
            ctx.revert()
        }
    }, [loading]);

  return (
        <div className='bg-gradient-to-r from-yellow-500 to-orange-500 font-body'>
            { loading 
                ? 
                    <Preloader /> 
                :
            <div>
                <div ref={$follower}
                    className="pointer-events-none fixed left-0 top-0 aspect-square w-[50vmin] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform"
                    >
                        <div className="h-full w-full animate-spin-slow bg-white opacity-40"></div>
                </div>
                    <div className="relative grid h-screen w-full place-items-center">
                        <div className="absolute inset-0 backdrop-blur-3xl"></div>
                            <MotionConfig 
                                transition={{
                                    ...framerMotionConfig,
                                    
                                }}
                            >
                            <Canvas className='' shadows camera={{ position: [0, 1, 4], fov: 30 }}>
                                <ScrollControls pages={4} damping={0.1}>
                                    <ScrollManager section={section} onSectionChange={setSection} />
                                    <Scroll>
                                        <Experience section={section} menuOpened={menuOpened} />
                                    </Scroll>
                                    <Scroll html>
                                        <Interface onSectionChange={setSection} menuOpened={menuOpened} />
                                    </Scroll> 
                                </ScrollControls>
                            </Canvas>
                            <Menu onSectionChange={ setSection } menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
                        </MotionConfig>
                </div>
            </div>
            }
        </div>
  )
}

export default App;