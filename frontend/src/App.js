import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/LoginScreen';
import AdminPanel from './components/AdminPanel';
import PrivateRoute from './privateroutes/PrivateRoute';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminPanel isAuthenticated={isAuthenticated}/>}/>
          <Route path="/" exact element={<Login setIsAuthenticated={setIsAuthenticated}/>} /> {/* Default route */}
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route path='/admin' element={<AdminPanel isAuthenticated={isAuthenticated}/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
