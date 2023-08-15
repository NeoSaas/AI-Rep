import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LoginScreen';
import AdminPanel from './components/AdminPanel';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="/" exact element={<Login/>} /> {/* Default route */}
        {/* You can add a 404 route or other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
