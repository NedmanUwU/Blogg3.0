import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconLoggedOut from '../../assets/icon.png';
import IconLoggedIn from '../../assets/cat1.jpg';
import './Profilestyle.css';

const Profile = ({isLoggedIn, onLogin}) => {
  const handleLoginClick = () => {
    onLogin(); // Call the onLogin function from props
  };

    const getDefaultProfilePicture = () => {
      return isLoggedIn ? IconLoggedIn : IconLoggedOut;
    }; //Changes pfp depending on login status

    return (
      <div className='Header-profile'>        
          <div>
            {isLoggedIn ? (
                <button className="login-button" onClick={handleLoginClick}>Log out</button>
                ) : (
                <button className="login-button" onClick={handleLoginClick}>Log in</button>
                )}
          </div>
          {isLoggedIn ? (
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