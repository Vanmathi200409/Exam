
import React from 'react'
import {Route,Routes } from 'react-router-dom';
import Home from './Source/Home';
import SignUp from'./Source/Signup';
import Login from'./Source/Login';
 import Dashboard from './Source/Dashboard';  
import { AuthProvider } from './Source/Auth';
import Exams from './Source/Exams';

function App() {
  return (
     <AuthProvider>
      <div className="App">
        <Routes>
        <Route path='/' element={<Home/>}/> 
          <Route path="/signup"element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/Exams" element={<Exams />}/>
          </Routes>
      </div>
      </AuthProvider>
  );
}

export default App;





