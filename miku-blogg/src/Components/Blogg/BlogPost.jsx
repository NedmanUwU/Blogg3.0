import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const BlogPost = ({ post, isLoggedIn, deletePost, editPost, children }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const paragraphs = post.body.split('\n\n');

  const toggleFullContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="blog-post">
      <div className="blog-header">
        <div className="user-info">
          <img src={post.user.profilePicture} alt="Profile Picture" />
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
      <div className={`post-content ${showFullContent ? 'show-full' : ''}`}>
        <h2>{post.title}</h2>
        {/* Render paragraphs based on showFullContent state */}
        {paragraphs.slice(0, showFullContent ? paragraphs.length : 2).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {/* Conditionally render the "Read More" button */}
        {paragraphs.length > 2 && (
          <button onClick={toggleFullContent}>
            {showFullContent ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      <div className='Comment-section'>
        {children}
      </div>
    </div>
  );
};

export default BlogPost;
