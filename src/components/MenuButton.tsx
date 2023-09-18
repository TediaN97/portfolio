import { ReactNode } from "react";

export const MenuButton = (props: {label: ReactNode, onClick: () => void}) => {

    const { label, onClick } = props;
    
    return (
        <button onClick={onClick} className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors">
            {label}
        </button>
    )

}