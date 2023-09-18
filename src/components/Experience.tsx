import { Environment } from "@react-three/drei";
import { Avatar } from "./models/Avatar"
import { Final_bedroom } from "./models/Final_bedroom"
import { Desktop } from "./models/Desktop";
import { useControls } from "leva"
import { motion } from "framer-motion-3d"
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, animate } from "framer-motion";

export const Experience = (props: { section: number, menuOpened: boolean }) => {
    
    const { section, menuOpened } = props;

    const {animation} = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Falling", "Standing", "Walking"]
        }
    });

    
    const cameraPositionX = useMotionValue(0);
    const cameraLookAtX = useMotionValue(0);

    useEffect(() => {
        animate(cameraPositionX, menuOpened ? -2 : 0, {
            type: 'spring',
            mass: 5, 
            stiffness: 500, 
            damping: 50,
            restDelta: 0.0001}
        );
        animate(cameraLookAtX, menuOpened ? 0.5 : 0, 
            {
                type: 'spring',
                mass: 5, 
                stiffness: 500, 
                damping: 50,
                restDelta: 0.0001
            }
        );
    }, [menuOpened])
    
    useFrame((state) => {
        state.camera.position.x = cameraPositionX.get();
        state.camera.lookAt(cameraLookAtX.get(), 0, 0);
    });
    
    
    return (
        <>
            <Environment preset="sunset" />
            <motion.group position={[-0.5, 2, 0]} rotation-y={40} 
                animate={{
                    y:section === 0 ? -1 : -1
                }}

            >
                <Final_bedroom />
                <Avatar animation={animation} section={0}/>
                <Desktop />
            </motion.group>
        </>
    )
}