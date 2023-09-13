import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar"
import { Final_bedroom } from "./Final_bedroom"
import { Desktop } from "./Desktop";
import { useControls } from "leva"

export const Experience = () => {
 
    const {animation} = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Falling", "Standing", "Walking"]
        }
    });
    
    return (
        <>
            <Environment preset="sunset" />
            <group position-y={-1} rotation-y={90}>
                <Final_bedroom />
                <Avatar animation={animation}/>
                <Desktop />
            </group>
        </>
    )
}