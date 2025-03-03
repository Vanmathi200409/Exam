/* import React from 'react'
import './App.css'
import Home from './Component/Home'
//import About from './Component/About'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Services from './Component/Services'
import NoMatch from './Component/NoMatch'
import Order from './Component/Order'
import Product from './Component/Product'
import Signup from './Component/Signup'
import NewProduct from './Component/NewProduct'
import FeatProd from './Component/FeatProd'
import User from './Component/User'
import UserDet from './Component/UserDet'
import AuthProvider from './Component/Auth'
import Profile from './Component/Profile'
import Login from './Component/Login'
import ReqAuth from './Component/ReqAuth'
import Mobile from './Component/Mobile'
import MobilePage from './Component/MobilePage'
import MobileUsers from './Component/MobileUsers'
const LazyAbout=React.lazy(()=>import('./Component/About'))
export default function App() {
return (
<AuthProvider>
<div className='App'>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/> 
<Route path='/about' element={
<React.Suspense fallback='Loading ... '>
<LazyAbout/>
</React.Suspense>}/>
<Route path="/mobile" element={<Mobile />} />
<Route path='/services' element ={<Services/>}/>
<Route path='/order' element={<Order/>}/>
<Route path='*' element={<NoMatch/>}/>
<Route path='/product' element={<ReqAuth><Product/></ReqAuth>}>
<Route index element={<FeatProd/>}/>
<Route path='new' element={<NewProduct/>}/>
<Route path='featured' element={<FeatProd/>}/>
</Route>
<Route path='/user' element={<User/>}>
<Route path=':userId'element={<UserDet/>}/>
</Route>
<Route path='/profile' element={<ReqAuth><Profile/></ReqAuth>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/Signup' element={<Signup/>}/>
<Route path='/mobileusers' element={<MobileUsers />} />
<Route path='/mobile2/:pid' element={<MobilePage />} />



</Routes>
</div>
</AuthProvider>
)
} 
 
 */
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





