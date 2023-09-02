// DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if the 'dark' class is set on the document when the component mounts
        const isDark = document.documentElement.classList.contains('dark');
        setDarkMode(isDark);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            console.log(newMode);
            return newMode;
        });
    }

    return (
        <button onClick={toggleDarkMode} className="flex items-center bg-transparent transition-colors duration-300 ">
            {darkMode ? <FaSun className="w-9 h-auto" /> : <FaMoon className=" w-9 h-auto" />}
        </button>
    );
}

export default DarkModeToggle;
