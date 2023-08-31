import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import LogoutButton from './authentication/LogoutButton';

function Navbar({ setActiveTab }) {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 w-64 h-screen fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-white text-2xl">Admin Panel</h1>
        <DarkModeToggle />
        <LogoutButton />
      </div>
      <ul className="mt-8 space-y-2">
        <li
          className="cursor-pointer text-white hover:text-blue-500 my"
          onClick={() => setActiveTab('conversations')}
        >
          Conversations
        </li>
        <li
          className="cursor-pointer text-white hover:text-blue-500"
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
