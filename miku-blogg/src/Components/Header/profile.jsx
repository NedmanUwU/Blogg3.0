import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../firebase/authFunctions';
import { useAuth } from '../Authenticator/Authenticator';
import PropTypes from 'prop-types';
import IconLoggedOut from '../../assets/icon.png';
import './Profilestyle.css';


const Profile = () => {
  const { currentUser } = useAuth();
  const handleLoginClick = () => {
    onLogin(); // Call the onLogin function from props
  };

    const getDefaultProfilePicture = () => {
      return currentUser ? currentUser.profilePicture : IconLoggedOut;
    }; //Changes pfp depending on login status

    return (
      <div className='Header-profile'>        
          <div>
            {currentUser ? (
                <button className="login-button" onClick={signOutUser}>Log out</button>
                ) : (
                  <Link to="/signin"><button className="login-button">Log in</button></Link>
                )}
          </div>
          {currentUser ? (
        <Link to="/profile"><img src={getDefaultProfilePicture()} alt="Profile" className='profile-icon'/></Link>
      ) : (
        <Link to="/signin"><img src={getDefaultProfilePicture()} alt="Profile" className='profile-icon'/></Link>
      )}
    </div>
  );
};

Profile.propTypes ={
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
}

Profile.defaultProps = {
    isLoggedIn: false, //Default status is logged out
};

export default Profile;