import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './Form.css';

const SignUpForm = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('https://lh3.googleusercontent.com/pw/AP1GczM65ELCwzYNAgC3qrRW5Rog1TRLL4bU_UxmBGV4EZQLkbtvGL38Vw2xvRmJYhFFhyT738jb01XoBoOdR1_7zR2dHH8lbI1ljzlQACy1Zb5Tb8-t7w=w2400'); // Default profile picture

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set account doc
      const account = {
        userUid: user.uid,
        username: username,
        email: user.email,
        profilePicture: profilePicture,
      };

      console.log(account);

      console.log(profilePicture);
      await setDoc(doc(db, 'accounts', user.uid), account);

      onSignUp(user);
      
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="pfp-select">
          <label htmlFor="profilePicture">Select profile picture:</label>
          <select
            id="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            required
          >
            <option value='https://lh3.googleusercontent.com/pw/AP1GczM65ELCwzYNAgC3qrRW5Rog1TRLL4bU_UxmBGV4EZQLkbtvGL38Vw2xvRmJYhFFhyT738jb01XoBoOdR1_7zR2dHH8lbI1ljzlQACy1Zb5Tb8-t7w=w2400'>Coder Cat</option>
            <option value='https://lh3.googleusercontent.com/pw/AP1GczOyHAp-Ng2OzQh0rVibsf1_Xh1B08ywEG_F2dfhDRIDmWkE8rt9IJdB3SDrBWvr-D8k36lGltGvSXQHP2i-43gUzukszeveS063kWNG3m4Bo-VEqw=w2400'>Sleepy Cat</option>
            <option value='https://lh3.googleusercontent.com/pw/AP1GczPPsob1Ez_dYAyQW-xXf6OqddizuhhYLFTCYhOK1p-9mR92-79d-Ud0gxIBLLRm6RUe0tWdBgKt4k6L9QyD0dy78gw8bYD43eE1M5ZRnwOliN0wOQ=s300-p-k'>Froggy Cat</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

export default SignUpForm;