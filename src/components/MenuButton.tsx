import { ReactNode } from "react";
import { motion } from "framer-motion";

export const MenuButton = (props: {label: ReactNode, onClick: () => void}) => {

    const { label, onClick } = props;
    
    return (
        <motion.button onClick={onClick} className="text-2xl font-bold cursor-pointe"
            whileHover={{
                scale: 1.3,
                color: '#4f46e5',
                originX: 0
            }}
            transition={{
                type: "spring",
                stiffness: 300
            }}
        >
            {label}
        </motion.button>
    )

}