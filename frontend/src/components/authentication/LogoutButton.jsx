import React from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';


function LogoutButton({ setIsAuthenticated }) {
    const nav = useNavigate();

    const handleLogout = async () => {
        try {
            const csrfToken = getCookie('csrftoken'); // Get CSRF token from cookie
            axios.post(
                'http://127.0.0.1:8000/api/logout/',
                // {},
                // {
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'X-CSRFToken': csrfToken,
                //     },
                // }
            );
            setIsAuthenticated(false);
            nav('/');
        } catch (error) {
            console.error(error);
        }
    };

    // Function to retrieve CSRF token from cookie
    const getCookie = name => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };


    return (

        <button onClick={handleLogout} className="relative text-white py-2 px-4 mx-10 my-2 transition ease-in-out bg-black dark:bg-slate-600 hover:-translate-y-1 hover:scale-100 dark:hover:bg-red-500 hover:bg-red-500 duration-300 rounded-lg">
            Logout
        </button>
       
    );
}

export default LogoutButton;
