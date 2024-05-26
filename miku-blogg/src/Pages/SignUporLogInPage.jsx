import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../Components/Authenticator/SignUpForm.jsx';
import LogInForm from '../Components/Authenticator/LogInForm.jsx';

const SignUporLogInPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [showLoginForm, setShowLoginForm] = useState(false);
  
    const handleLoginButtonClick = () => {
      setShowLoginForm(!showLoginForm); // Set showLoginForm state to true when login button is clicked
    };

    // Callback function to handle navigation after successful sign-up/ log-in
    const handleSignUp = () => {
      navigate('/'); // Navigate to the homepage
    };

    const handleLogin = () => {
      navigate('/'); // Navigate to the homepage
    }

  return (
    <div className="signin-form-container">
    {!showLoginForm ? (
      <div className='SignUporLogInForm'>
        <LogInForm onLogin={handleLogin}/>
        <button className='toggleButton' onClick={handleLoginButtonClick}>Don't have an account? <strong>Sign up</strong> instead</button>
      </div>
    ) : (
      <div className='SignUporLogInForm'>
        <SignUpForm onSignUp={handleSignUp}/>
        <button className='toggleButton' onClick={handleLoginButtonClick}>Already have an account? <strong>Log in</strong> instead</button>
      </div>
    )}
  </div>
);
};

export default SignUporLogInPage; 