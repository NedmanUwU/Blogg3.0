import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const BlogPost = ({ post, isLoggedIn, deletePost, editPost }) => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <div className="user-info">
          <img src={post.user.profilePicture} alt="ProfilePicture" />
          <p>{post.user.username}</p>
        </div>
        {isLoggedIn && post.user.username === 'CatBlogger' && (
        <div className="Post-Icons">
            <FontAwesomeIcon
              className="edit-icon"
              icon={faPenToSquare}
              alt="edit"
              style={{ width: '32px' }}
              onClick={() => editPost(post.id)}
            />
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrash}
              alt="delete"
              style={{ width: '32px' }}
              onClick={() => deletePost(post.id)}
            />
        </div>
        )}
      </div>
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
