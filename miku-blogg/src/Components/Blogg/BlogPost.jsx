import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <div className="user-info">
        <img src={post.user.profilePicture} alt="Profile" />
        <p>{post.user.username}</p>
      </div>
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
