import React from 'react'
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Comment = ({props, kudos, deleteComment, editComment, isLoggedIn}) => {
  return (
    <div className='Comment'>
        <img src={props.img} alt="Userprofile" />
        <div className='Comment-content'>
          <div className='Comment-header'>
            <h3>{props.name}</h3>
            {isLoggedIn &&
            <div className='Comment-Icons'>
                <FontAwesomeIcon icon={faPenToSquare} alt='edit'style={{width: '32px'}} onClick={() => editComment(kudos.id)}/>
                <FontAwesomeIcon icon={faTrash} alt='delete'    style={{width: '32px'}} onClick={()=> deleteComment(kudos.id)}/>
            </div>}
          </div>       
          <p>{kudos.kudos}</p>
        </div>
    </div>
  );
};

Comment.propTypes ={
    name: propTypes.string.isRequired,
};

export default Comment;