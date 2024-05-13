import React from 'react';
import BlogPostList from './BlogPostList';

const BlogPostWrapper = () => {
  const posts = [
    {
      id: 1,
      user: {
        username: 'Miku',
        profilePicture: 'https://example.com/profile.jpg',
      },
      title: 'My First Blog Post',
      body: 'This is the content of my first blog post. Welcome to my blog!',
    },
    {
      id: 2,
      user: {
        username: 'Cinnamoroll',
        profilePicture: 'https://example.com/another_profile.jpg',
      },
      title: 'A Guide to React Development',
      body: 'In this post, I will discuss the basics of React.js and its key concepts.',
    },
    // Add more sample posts as needed
  ];

  return (
    <div className="main-content">
      <h1>Welcome to the Blog!</h1>
      <BlogPostList posts={posts} />
    </div>
  );
};

export default BlogPostWrapper;
