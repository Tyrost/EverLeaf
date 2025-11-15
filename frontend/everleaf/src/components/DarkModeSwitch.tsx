'use client';

import { useEffect, useState } from "react"
import { LuSunDim, LuMoon } from "react-icons/lu";

export default function DarkModeSwitch() {
    const [darkMode, setdarkMode] = useState<boolean>(false)

    // load local item
    useEffect(() => {
        const json = localStorage.getItem("isDarkmode");
        if (json) setdarkMode(JSON.parse(json));
    }, []);

    // on change, do this
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("isDarkMode", darkMode.toString());
    }, [darkMode]);

    return (
        <div>
            {
                (darkMode)
                ? <div><LuSunDim/></div>
                : <div><LuMoon/></div>
            }
        </div>
    )
};