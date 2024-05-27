import React, { useState } from 'react';
import { useAuth } from '../../Authenticator/Authenticator';
import EditCommentForm from './EditCommentForm';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { v4 as uuidv4 } from 'uuid';
import './Comment.css';

const CommentWrapper = ({ post }) => {
  const [comments, setComments] = useState(post.comments || []);
  const { currentUser } = useAuth();

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
      {currentUser && (
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
          />
        )
      )}
    </div>
  );
};

export default CommentWrapper;
