import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../firebase/authFunctions';
import { useAuth } from '../Authenticator/Authenticator';
import PropTypes from 'prop-types';
import IconLoggedOut from '../../assets/icon.png';
import './Profilestyle.css';


const Profile = () => {
  const { currentUser } = useAuth();
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const userDoc = doc(db, 'accounts', currentUser.uid);
          const userSnap = await getDoc(userDoc);
          if (userSnap.exists()) {
            const userData = userSnap.data();

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

    const getDefaultProfilePicture = () => {
      return currentUser ? profilePicture : IconLoggedOut;
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