import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ props, kudos, deleteComment, editComment, isLoggedIn }) => {
  return (
    <div className='Comment'>
      <img src={props.img} alt="User profile" />
      <div className='Comment-content'>
        <div className='Comment-header'>
          <h3>{props.name}</h3>
          {isLoggedIn && (
            <div className='Comment-Icons'>
              <FontAwesomeIcon
                icon={faPenToSquare}
                alt='edit'
                style={{ width: '32px' }}
                onClick={() => editComment(kudos.id)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                alt='delete'
                style={{ width: '32px' }}
                onClick={() => deleteComment(kudos.id)}
              />
            </div>
          )}
        </div>
        <p>{kudos.kudos}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  props: propTypes.shape({
    name: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
  }).isRequired,
  kudos: propTypes.shape({
    id: propTypes.string.isRequired,
    kudos: propTypes.string.isRequired,
    isEditing: propTypes.bool.isRequired,
  }).isRequired,
  deleteComment: propTypes.func.isRequired,
  editComment: propTypes.func.isRequired,
  isLoggedIn: propTypes.bool.isRequired,
};

export default Comment;
