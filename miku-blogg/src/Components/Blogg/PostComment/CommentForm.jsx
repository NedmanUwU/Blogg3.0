import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useAuth } from '../../Authenticator/Authenticator';
import PropTypes from 'prop-types';
import icon from '../../../assets/bars-icon.svg';
import './Comment.css';

const CommentForm = ({ postId, addComment }) => {
  const { currentUser } = useAuth();
  const [text, setText] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [username, setUsername] = useState('');

  //fetching the user's username and profile picture
  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const userDoc = doc(db, 'accounts', currentUser.uid);
          const userSnap = await getDoc(userDoc);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            setUsername(userData.username || '');
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

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      text,
      user: {
        uid: currentUser.uid,
        username,
        profilePicture,
      },
    };

    try {
      await addComment(newComment);
      setText('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form className='CommentForm' onSubmit={handleSubmit}>
      <div className='Comment-Input'>
        <img src={icon} className='Bar-Icon' alt='Icon' />
        <input
          className='Input-field'
          value={text}
          placeholder='Write your comment...'
          onChange={handleTextChange}
          required
        />
        <button type='submit' className='Comment-btn'>
          Submit!
        </button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired
};

export default CommentForm;
