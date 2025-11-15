
import React from "react";
import "./MainButton.css"

interface AnimatedSvgButtonProps {
  label: string;
  onClick?: () => void;
}

const MainButton: React.FC<AnimatedSvgButtonProps> = ({ label, onClick }) => {

    return (
        <div className="svg-wrapper cursor-pointer" onClick={onClick}>
            <svg height="45" width="150" xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height="45" width="150" />
            </svg>
        <div className="text">{label}</div>
        </div>
    );
}

export default MainButton
