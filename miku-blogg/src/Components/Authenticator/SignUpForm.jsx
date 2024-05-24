import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../../firebase/authFunctions';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import './Form.css';

const SignUpForm = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('cat1.jpg'); // Default profile picture

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // Save the username and profile picture to Firestore
      const db = getFirestore();
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        profilePicture // Save selected profile picture
      });

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
            <option value='../../assets/cat1.jpg'>Coder Cat</option>
            <option value='../../assets/cat2.jpg'>Sleepy Cat</option>
            <option value='../../assets/cat3.jpg'>Froggy Cat</option>
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