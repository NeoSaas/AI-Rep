// LoginScreen.js
import React from 'react';
import LoginForm from './LoginForm';

function LoginScreen() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 m-4">
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginScreen;
