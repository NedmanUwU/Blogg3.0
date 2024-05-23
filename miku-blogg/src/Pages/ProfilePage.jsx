import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProfilePage.css';
import Pfp1 from '../assets/cat1.jpg';
import pfp2 from '../assets/cat2.jpg';
import Pfp3 from '../assets/cat3.jpg';

const ProfilePage = ({ username, profilePicture, onUpdateProfile }) => {
  // State variables to track selected username and profile picture
  const [newUsername, setNewUsername] = useState(username);
  const [newProfilePicture, setNewProfilePicture] = useState(profilePicture);

  // Handler function to update profile
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({
      username: newUsername,
      profilePicture: newProfilePicture,
    });
  };

  return (
    <div className="profile-page">
      <div className="profile-info">
        <h2>Welcome, {username}!</h2>
        <img src={profilePicture} alt="Profile Picture" />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newUsername">Choose a new username:</label>
            <input
              type="text"
              id="newUsername"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="newProfilePicture">Update your profile picture:</label>
            <select
              id="newProfilePicture"
              value={newProfilePicture}
              onChange={(e) => setNewProfilePicture(e.target.value)}
            >
              <option value={Pfp1}>Coder Cat</option>
              <option value={pfp2}>Sleepy Cat</option>
              <option value={Pfp3}>Froggy Cat</option>
            </select>
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  username: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  onUpdateProfile: PropTypes.func.isRequired,
};

export default ProfilePage;
