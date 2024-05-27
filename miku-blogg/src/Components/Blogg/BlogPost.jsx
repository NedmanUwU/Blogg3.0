import React, { useState } from 'react';
import { useAuth } from '../Authenticator/Authenticator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const BlogPost = ({ post, deletePost, editPost, children }) => {
  const { currentUser } = useAuth();
  // State to track whether full content is shown or not
  const [showFullContent, setShowFullContent] = useState(false);

  // Splitting post body into paragraphs, used later for hiding full posts on initial render
  const paragraphs = post.body.split('\n\n');

  // Function to toggle full content display
  const toggleFullContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    // Render a single post
    <div className="blog-post">
      <div className="blog-header">
        {/* User information */}
        <div className="user-info">
          <img src={post.user.profilePicture} alt="Profile Picture" />
          <p>{post.user.username}</p>
        </div>
        {/* Render edit and delete icons if logged in user is the post owner */}
        {currentUser && post.user.uid === currentUser.uid && (
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
        {/* Conditionally render the "Read More" button depending on post length,
        as well as toggle between 'Read more' and 'Read less' */}
        {paragraphs.length > 2 && (
          <button onClick={toggleFullContent}>
            {showFullContent ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      {/* Render comments section */}
      <div className='Comment-section'>
        {children}
      </div>
    </div>
  );
};

export default BlogPost;
