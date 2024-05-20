import React, { useState } from 'react';
import PropTypes from 'prop-types';
import icon from '../../../assets/bars-icon.svg';
import ProfilePicture from '../../../assets/cat1.jpg';
import './Comment.css';

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      text,
      user: {
        username: 'CatBlogger',
        profilePicture: ProfilePicture,
      },
    };

    addComment(newComment);
    setText('');
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
  addComment: PropTypes.func.isRequired,
};

export default CommentForm;
