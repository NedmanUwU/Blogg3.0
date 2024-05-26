import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../Authenticator/Authenticator';
import PropTypes from 'prop-types';
import Miku from '../../assets/Miku_Sit.png';

const BlogPostForm = ({ onAddPost }) => {
  // State for title and body inputs
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const { currentUser } = useAuth();
  const [profilePicture, setProfilePicture] = useState('');
  const [username, setUsername] = useState('');

  //fetching the users username and pfp
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
  
  // Event handler for title input change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Event handler for body input change
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new blog post object with the User's information
    const newPost = {
      title,
      body,
      category,
      user: {
        uid: currentUser.uid,
        username: username,
        profilePicture: profilePicture,
      },
    };

    // Invoke onAddPost callback with new post data
    onAddPost(newPost);
    // Clear title and body inputs after submission
    setTitle('');
    setBody('');
    setCategory('General');
  };

  return (
    <div className="blog-post-form">
      <div className='Welcome-message'>
        <h2>Welcome {username}!</h2>
        <img src={Miku} alt="Miku" />
      </div>
      {/* Form for creating a new blog post, title and bodytext*/}
      <form onSubmit={handleSubmit}>
        <div className='text-input'>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder='Write a title...'
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className='text-input'>
          <label htmlFor="body">Text:</label>
          <textarea
            id="body"
            value={body}
            placeholder='Write your thoughts...'
            onChange={handleBodyChange}
            required
          ></textarea>
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="Technology">Technology</option>
            <option value="Announcements">Announcements</option>
      </select>
        <button type="submit">Post!</button>
      </form>
    </div>
  );
};

// Prop types validation
BlogPostForm.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};

export default BlogPostForm;
