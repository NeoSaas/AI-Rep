// LoginScreen.js
import React from 'react';
import LoginForm from './LoginForm';

function LoginScreen({setIsAuthenticated}) {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#452d36] to-[#234b66]">
            <div className="w-full max-w-lg bg-gradient-to-br from-[#452d36] to-[#234b66] border-2 border-white rounded-lg shadow-md p-8 m-4">
                <LoginForm setIsAuthenticated={setIsAuthenticated}/>
            </div>
        </div>
    );
}

export default LoginScreen;
