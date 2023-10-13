import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/authentication/LoginScreen';
import AdminPanel from './components/AdminPanel';
import './index.css';
import ExpandedConversation from './components/ExpandedConversation';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login setIsAuthenticated={setIsAuthenticated}/>} /> 
          {
            isAuthenticated ? 
              [
                <>
                  <Route path="/admin" element={<AdminPanel setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>}/>  
                  <Route path="/admin/conversation/" element={<ExpandedConversation/>} />
                </>
              ]
              :
              null
          }
          <Route path={"*"} element={ <Login setIsAuthenticated={setIsAuthenticated}/>}/>
          {/* <ProtectedRoute path="/admin" element={<AdminPanel/>} isAuthenticated={isAuthenticated}/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
