import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// import { isValidEmail, isValidPassword } from './Utils/validationUtils';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import Home from './Pages/Home.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('jwt-token'));
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={!isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/home" />} />
          <Route path='/home' element={!isAuthenticated ? <Navigate to="/login" /> : <Home setIsAuthenticated={setIsAuthenticated} />} />f
          <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/register' element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
