import React, {useEffect, useState} from 'react'
import EditCommentForm from './EditCommentForm';
import CommentForm from './CommentForm';
import Comment from './Comment';
import ProfilePic from '../../../assets/cat2.jpg'
import './Comment.css';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const CommentWrapper = ({ isLoggedIn }) => {
    const [comments, setComments] = useState([])

    const addComment = comment =>{
      setComments([...comments, {id:uuidv4(), kudos: comment, isEditing: false}])
      console.log(comments)}

    const deleteComment = id =>{
      setComments(comments.filter(comment => comment.id !== id))}

    const editComment = id =>{
      setComments(comments.map(comment => comment.id === id ? 
                        {...comment, isEditing: !comment.isEditing} : comment))}

    const editKudos = (kudos, id) => {
      setComments(comments.map(comment => comment.id ==id ? {... comment, kudos, isEditing: !comment.isEditing} : comment))}

    const user = (name, img) => {
      if (!name && !img) {
        return {
          name: 'Miku',
          img: 'D:/Dokument/GitHub/BLogg/mikublogg/src/Assets/cat2.jpg'
        };
      } else {
        return { name, img };
      }
    };

  return (
    <div className='CommentWrapper'>
         {isLoggedIn &&
         <div className='addingNewComment'>
            <CommentForm addComment={addComment}/>
        </div>}
      {comments.map((comment, index) => (
        comment.isEditing ? 
        (<EditCommentForm editComment={editKudos} Kudos={comment}/>) :
        (      
          <Comment
          kudos = {comment} 
          key={index}
          deleteComment={deleteComment}
          editComment={editComment}
          isLoggedIn={isLoggedIn} 
          props={user()}/>)
      ))}
    </div>
  )
}

export default CommentWrapper;