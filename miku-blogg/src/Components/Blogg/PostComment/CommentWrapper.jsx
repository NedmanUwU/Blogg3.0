import React, { useState } from 'react';
import EditCommentForm from './EditCommentForm';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { v4 as uuidv4 } from 'uuid';
import './Comment.css';

const CommentWrapper = ({ post, isLoggedIn }) => {
  const [comments, setComments] = useState(post.comments || []);

  const addComment = (comment) => {
    setComments([...comments, { id: uuidv4(), ...comment, isEditing: false }]);
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

  return (
    <div className='CommentWrapper'>
      {isLoggedIn && (
        <div className='addingNewComment'>
          <CommentForm addComment={addComment} />
        </div>
      )}
      {comments.map((comment) =>
        comment.isEditing ? (
          <EditCommentForm key={comment.id} editComment={editKudos} comments={comments} />
        ) : (
          <Comment
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
            editComment={editComment}
            isLoggedIn={isLoggedIn}
          />
        )
      )}
    </div>
  );
};

export default CommentWrapper;
