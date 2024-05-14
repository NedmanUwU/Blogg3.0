import React from 'react';
import './BlogStyle.css';
import BlogPost from './BlogPost';

const BlogPostList = ({ isLoggedIn, posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost isLoggedIn={isLoggedIn} key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
