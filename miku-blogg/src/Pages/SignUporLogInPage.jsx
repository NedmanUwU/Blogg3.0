import React, { useState } from 'react'
import SignUpForm from '../Components/Authenticator/SignUpForm.jsx';
import LogInForm from '../Components/Authenticator/LogInForm.jsx';

const SignUporLogInPage = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
  
    const handleLoginButtonClick = () => {
      setShowLoginForm(!showLoginForm); // Set showLoginForm state to true when login button is clicked
    };
  return (
    <div className="signin-form-container">
    {!showLoginForm ? (
      <div className='SignUporLogInForm'>
        <SignUpForm />
        <button onClick={handleLoginButtonClick}>Already have an account? Log in instead</button>
      </div>
    ) : (
      <div className='SignUporLogInForm'>
      <LogInForm />
      <button onClick={handleLoginButtonClick}>Don't have an account? Sign up instead</button>
      </div>
    )}
  </div>
);
};

export default SignUporLogInPage; 