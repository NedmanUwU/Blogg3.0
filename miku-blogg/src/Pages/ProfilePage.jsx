import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../Components/Authenticator/Authenticator';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './ProfilePage.css';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newProfilePicture, setNewProfilePicture] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const userDoc = doc(db, 'accounts', currentUser.uid);
          const userSnap = await getDoc(userDoc);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            setUsername(userData.username || '');
            setEmail(currentUser.email || '');
            setPassword(currentUser.password || '');
            setProfilePicture(userData.profilePicture || '');
          } else {
            console.error('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  // Handle updating username
  const handleUpdateUsername = async () => {
    if (newUsername.trim()) {
      try {
        const userDoc = doc(db, 'accounts', currentUser.uid);
        await updateDoc(userDoc, { username: newUsername });
        setUsername(newUsername);
        setNewUsername('');
      } catch (error) {
        console.error('Error updating username:', error);
      }
    }
  };

  // Handle updating profile picture
  const handleUpdateProfilePicture = async () => {
    if (newProfilePicture.trim()) {
      try {
        const userDoc = doc(db, 'accounts', currentUser.uid);
        await updateDoc(userDoc, { profilePicture: newProfilePicture });
        setProfilePicture(newProfilePicture);
        setNewProfilePicture('');
      } catch (error) {
        console.error('Error updating profile picture:', error);
      }
    }
  };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

  return (
    <div className="profile-page">
      <div className="profile-info">
        <h2>This is your profile, <br /> {username}</h2>
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Username:</strong> {username}</p>
      </div>
      <div className="update-form">
        <h3>Update Information</h3>
        <div className="update-field">
          <label htmlFor="newUsername">New Username:</label>
          <input
            type="text"
            id="newUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <button onClick={handleUpdateUsername}>Update Username</button>
        </div>
        <div className="update-field">
          <label htmlFor="newProfilePicture">Choose a new Profile Picture:</label>
          <select
            id="profilePicture"
            value={newProfilePicture}
            onChange={(e) => setNewProfilePicture(e.target.value)}
          >
            <option value='https://lh3.googleusercontent.com/pw/AP1GczM65ELCwzYNAgC3qrRW5Rog1TRLL4bU_UxmBGV4EZQLkbtvGL38Vw2xvRmJYhFFhyT738jb01XoBoOdR1_7zR2dHH8lbI1ljzlQACy1Zb5Tb8-t7w=w2400'>Coder Cat</option>
            <option value='https://lh3.googleusercontent.com/pw/AP1GczOyHAp-Ng2OzQh0rVibsf1_Xh1B08ywEG_F2dfhDRIDmWkE8rt9IJdB3SDrBWvr-D8k36lGltGvSXQHP2i-43gUzukszeveS063kWNG3m4Bo-VEqw=w2400'>Sleepy Cat</option>
            <option value='https://lh3.googleusercontent.com/pw/AP1GczPPsob1Ez_dYAyQW-xXf6OqddizuhhYLFTCYhOK1p-9mR92-79d-Ud0gxIBLLRm6RUe0tWdBgKt4k6L9QyD0dy78gw8bYD43eE1M5ZRnwOliN0wOQ=s300-p-k'>Froggy Cat</option>
          </select>
          <button onClick={handleUpdateProfilePicture}>Update Profile Picture</button>
        </div>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  currentUser: PropTypes.object,
};

export default ProfilePage;
