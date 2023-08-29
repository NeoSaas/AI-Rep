import React from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';


function LogoutButton({ setIsAuthenticated }) {
    const nav = useNavigate();

    const handleLogout = async () => {
        try {
            const csrfToken = getCookie('csrftoken'); // get csrf
            axios.post(
                'http://127.0.0.1:8000/api/logout/',
            );
            setIsAuthenticated(false);
            nav('/');
            console.log("Logout Function Reached")
        } catch (error) {
            console.error(error);
        }
    };

    //depracated
    const getCookie = name => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };


    return (

        <button onClick={handleLogout} className="relative text-white mx-10 py-2 px-4 my-2 transition ease-in-out bg-black dark:bg-slate-600 hover:-translate-y-1 hover:scale-100 dark:hover:bg-red-500 hover:bg-red-500 duration-300 rounded-lg">
            Logout
        </button>
       
    );
}

export default LogoutButton;
