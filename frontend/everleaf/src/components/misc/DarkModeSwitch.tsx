'use client';

import { useEffect, useState } from "react"
import { LuSunDim, LuMoon } from "react-icons/lu";

export default function DarkModeSwitch() {
    const [darkMode, setdarkMode] = useState<boolean>(false)

    // load local item if user has visited site
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
        <button onClick={() => setdarkMode(!darkMode)} className="bg-neutral-50 dark:bg-neutral-900">
            {
                (darkMode)
                ? <div><LuSunDim className="text-6xl"/></div>
                : <div><LuMoon className="text-6xl"/></div>
            }
        </button>
    )
};