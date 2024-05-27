import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Authenticator/Authenticator';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import CommentForm from './CommentForm';
import Comment from './Comment';
import EditCommentForm from './EditCommentForm'; // Ensure you import this
import PropTypes from 'prop-types'; // Import PropTypes
import './Comment.css';

const CommentWrapper = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const { currentUser } = useAuth();

  // Guard clause to prevent errors if postId is undefined
  if (!postId) {
    console.error('postId is undefined');
    return null;
  }

  const commentsCollectionRef = collection(db, 'blogposts', postId, 'comments');

  useEffect(() => {
    // Function to fetch comments from Firestore
    const fetchComments = async () => {
      try {
        // Query the "comments" subcollection for the specified post ID
        const querySnapshot = await getDocs(commentsCollectionRef);
        const fetchedComments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setComments(fetchedComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId, commentsCollectionRef]);

  const addComment = async (newComment) => {
    try {
      const docRef = await addDoc(commentsCollectionRef, newComment);
      setComments([...comments, { id: docRef.id, ...newComment }]);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const deleteComment = async (id) => {
    try {
      await deleteDoc(doc(commentsCollectionRef, id));
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className='CommentWrapper'>
      {currentUser && (
        <div className='addingNewComment'>
          <CommentForm postId={postId} addComment={addComment} />
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
          />
        )
      )}
    </div>
  );
};

// PropTypes validation
CommentWrapper.propTypes = {
  postId: PropTypes.string.isRequired
};

export default CommentWrapper;
