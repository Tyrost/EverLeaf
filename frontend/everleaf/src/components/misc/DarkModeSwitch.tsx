'use client';

import { useEffect, useState } from "react"
import { LuSunDim, LuMoon } from "react-icons/lu";

export default function DarkModeSwitch() {
    const [darkMode, setdarkMode] = useState<boolean>(false)

    // load local item
    useEffect(() => {
        const jsonItem = localStorage.getItem("isDarkmode");
        if (jsonItem) setdarkMode(JSON.parse(jsonItem));
    }, []);

    // on change, do this
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("isDarkMode", darkMode.toString());
    }, [darkMode]);

    return (
        <div onClick={() => setdarkMode(!)}>
            {
                (darkMode)
                ? <div><LuSunDim/></div>
                : <div><LuMoon/></div>
            }
        </div>
    )
};