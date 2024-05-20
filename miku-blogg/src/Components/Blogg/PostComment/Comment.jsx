import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Comment.css';

const Comment = ({ comment, deleteComment, editComment, isLoggedIn }) => {
  if (!comment.user) {
    return null; // Return null if user is not defined
  }

  return (
    <div className='Comment'>
        <div className='Comment-header'>
          <div className='User-info'>
          <img src={comment.user.profilePicture} alt="User profile" />
          <p>{comment.user.username}</p>
          </div>
          {isLoggedIn && (
          <div className='Comment-Icons'>
              <FontAwesomeIcon className='delete-icon'
                icon={faTrash}
                alt='delete'
                style={{ width: '32px' }}
                onClick={() => deleteComment(comment.id)}
              />
          </div>
          )}
        </div>
        <div className='Comment-content'>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Comment;
