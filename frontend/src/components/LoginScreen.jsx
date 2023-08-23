// LoginScreen.js
import React from 'react';
import LoginForm from './LoginForm';

function LoginScreen({setIsAuthenticated}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-600">
            <div className="w-full max-w-lg bg-slate-200 rounded-lg shadow-md p-8 m-4">
                <LoginForm setIsAuthenticated={setIsAuthenticated}/>
            </div>
        </div>
    );
}

export default LoginScreen;
