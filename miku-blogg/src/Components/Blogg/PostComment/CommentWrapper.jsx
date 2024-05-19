import React, { useState } from 'react';
import EditCommentForm from './EditCommentForm';
import CommentForm from './CommentForm';
import Comment from './Comment';
import ProfilePic from '../../../assets/cat2.jpg';
import './Comment.css';
import { v4 as uuidv4 } from 'uuid';

const CommentWrapper = ({ isLoggedIn }) => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, { id: uuidv4(), kudos: comment, isEditing: false }]);
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const editComment = (id) => {
    setComments(comments.map((comment) =>
      comment.id === id ? { ...comment, isEditing: !comment.isEditing } : comment
    ));
  };

  const editKudos = (kudos, id) => {
    setComments(comments.map((comment) =>
      comment.id === id ? { ...comment, kudos, isEditing: !comment.isEditing } : comment
    ));
  };

  const user = () => ({
    name: "John Doe",
    img: ProfilePic,
  });

  return (
    <div className='CommentWrapper'>
      {isLoggedIn && (
        <div className='addingNewComment'>
          <CommentForm addComment={addComment} />
        </div>
      )}
      {comments.map((comment) =>
        comment.isEditing ? (
          <EditCommentForm key={comment.id} editComment={editKudos} Kudos={comment} />
        ) : (
          <Comment
            key={comment.id}
            kudos={comment}
            deleteComment={deleteComment}
            editComment={editComment}
            isLoggedIn={isLoggedIn}
            props={user()}
          />
        )
      )}
    </div>
  );
};

export default CommentWrapper;
