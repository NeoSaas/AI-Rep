import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/LoginScreen';
import AdminPanel from './components/AdminPanel';
import ProtectedRoute from './privateroutes/PrivateRoute';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login setIsAuthenticated={setIsAuthenticated}/>} /> 
          <Route path="/admin" element={<AdminPanel setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}>  
            {/* <Route path='/admin' element={<AdminPanel setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}/> */}
          </Route>
          <ProtectedRoute path="/admin" element={<AdminPanel/>} isAuthenticated={isAuthenticated}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
