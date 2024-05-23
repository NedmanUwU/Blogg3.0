import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Landingpage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';
import SignUpPage from './Pages/SignUporLogInPage';
import './App.css';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const toggleLogin = () => {
      setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogin={toggleLogin}/>

      <Routes>
        <Route path= '/' element ={<Landingpage isLoggedIn={isLoggedIn}/>} />
        <Route path= '/about' element ={<AboutPage isLoggedIn={isLoggedIn}/>} />
        <Route path= '/profile' element ={<ProfilePage isLoggedIn={isLoggedIn}/>} />
        <Route path= '/signin' element ={<SignUpPage isLoggedIn={isLoggedIn}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
