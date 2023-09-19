import { Environment } from "@react-three/drei";
import { Avatar } from "./models/Avatar"
import { Final_bedroom } from "./models/Final_bedroom"
import { Desktop } from "./models/Desktop";
import { useControls } from "leva"
import { motion } from "framer-motion-3d"
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, animate } from "framer-motion";
import { Wooden_floor } from "./models/Wooden_floor";

export const Experience = (props: { section: number, menuOpened: boolean }) => {
    
    const { section, menuOpened } = props;

    const {animation} = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Falling", "Standing", "Walking"]
        }
    });

    
    const cameraPositionX = useMotionValue(0);
    const cameraPositionY = useMotionValue(0);
    const cameraPositionZ = useMotionValue(0);
    const cameraLookAtZ = useMotionValue(0);

    useEffect(() => {
        animate(cameraPositionX, menuOpened ? 4 : -4, {
            type: 'spring',
            mass: 5, 
            stiffness: 500, 
            damping: 50,
            restDelta: 0.0001,
            }
        );
        animate(cameraPositionY, menuOpened ? 1 : 1, {
            type: 'spring',
            mass: 5, 
            stiffness: 500, 
            damping: 50,
            restDelta: 0.0001,
            }
        );
        animate(cameraPositionZ, menuOpened ? -2 : -2, {
            type: 'spring',
            mass: 5, 
            stiffness: 500, 
            damping: 50,
            restDelta: 0.0001,
            }
        );
        animate(cameraLookAtZ, menuOpened ? 0 : 0.5, 
            {
                type: 'spring',
                mass: 5, 
                stiffness: 500, 
                damping: 50,
                restDelta: 0.0001,
            }
        );

    }, [menuOpened])
    
    useFrame((state) => {
        state.camera.position.x = cameraPositionX.get();
        state.camera.position.y = cameraPositionY.get();
        state.camera.position.z = cameraPositionZ.get();
        state.camera.lookAt(0, 0, cameraLookAtZ.get());
    });
    
    
    return (
        <>
            <Environment preset="sunset" />
            <motion.group 
                animate={{
                    y:section === 0 ? -1 : -1
                }}

            >
                <Final_bedroom />
                <Avatar animation={animation} section={0}/>
                <Desktop />
                <Wooden_floor />
            </motion.group>
        </>
    )
}