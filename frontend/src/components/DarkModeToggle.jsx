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
        <button onClick={toggleDarkMode} className="flex items-center p-2 bg-gray-200 rounded dark:bg-slate-600 transition-colors duration-300 mx-10">
            {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export default DarkModeToggle;
