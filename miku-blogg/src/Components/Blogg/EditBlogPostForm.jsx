import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfilePicture from '../../assets/cat1.jpg';

const EditBlogPostForm = ({ editPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new blog post object
    const newPost = {
      title,
      body,
      user: {
        username: 'CatBlogger',
        profilePicture: ProfilePicture,
      },
    };

    editPost(value, article);
    setTitle('');
    setBody('');
  };

  return (
    <div className="blog-post-form">
      <h2>Welcome Catblogger!</h2>
      <form onSubmit={handleSubmit}>
        <div className='text-input'>
          <label htmlFor="title">Title:</label>

          <input
            type="text"
            id="title"
            value={title}
            placeholder='Update your title...'
            onChange={handleTitleChange}
            required
        /></div>
        <div className='text-input'>
          <label htmlFor="body">Text:</label>
          <textarea
          id="body"
          value={body}
          placeholder='Update your thoughts...'
          onChange={handleBodyChange}
          required 
          ></textarea>
        </div>
        <button type="submit">Update!</button>
      </form>
    </div>
  );
};

BlogPostForm.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};

export default EditBlogPostForm;
