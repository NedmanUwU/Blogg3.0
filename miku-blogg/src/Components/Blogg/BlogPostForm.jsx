import React, { useState } from 'react';
import { useAuth } from '../Authenticator/Authenticator';
import PropTypes from 'prop-types';
import Miku from '../../assets/Miku_Sit.png';

const BlogPostForm = ({ onAddPost }) => {
  // State for title and body inputs
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { currentUser } = useAuth();

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
      user: {
        username: currentUser.username,
        profilePicture: currentUser.img,
      },
    };

    // Invoke onAddPost callback with new post data
    onAddPost(newPost);
    // Clear title and body inputs after submission
    setTitle('');
    setBody('');
  };

  return (
    <div className="blog-post-form">
      <div className='Welcome-message'>
        <h2>Welcome {currentUser.username}!</h2>
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
