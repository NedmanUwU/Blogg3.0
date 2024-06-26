import React, { useState } from 'react';
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
            <img src={getDefaultProfilePicture()} alt="Profile" className='profile-icon'/>
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