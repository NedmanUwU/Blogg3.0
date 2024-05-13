import React, { useState } from 'react';
import './BlogStyle.css';
import BlogPostList from './BlogPostList';
import BlogPostForm from './BlogPostForm';
import Mikupfp from '../../assets/Mikupfp.jpg'
import Cinnamorollpfp from '../../assets/cinnamorollpfp.jpg'

const BlogWrapper = ({isLoggedIn}) => {
  const [posts, setPosts] = useState([
    // Existing sample posts
    {
      id: 1,
      user: {
        username: 'Miku',
        profilePicture: Mikupfp,
      },
      title: 'My First Blog Post',
      body: 'Hello everyone! I’m Hatsune Miku! Who? First things first, I’m not your typical pop star—I’m a Vocaloid! Developed by Crypton Future Media, I made my debut in 2007 as a virtual singing synthesizer. My voice is based on samples from Japanese voice actress Saki Fujita, and I sing using Yamaha’s Vocaloid technology. What makes me unique is that my character isn’t just about the music; I have a whole persona and story. Until next time, stay tuned for more music, more fun, and more virtual awesomeness. Thanks for being a part of my world! Yours virtually, Hatsune Miku',
    },
    {
      id: 2,
      user: {
        username: 'Cinnamoroll',
        profilePicture: Cinnamorollpfp,
      },
      title: 'A Guide to React Development',
      body: 'In this post, I will discuss React.js basics.',
    },
  ]);

  const handleAddPost = (newPost) => {
    // Append new post to the posts state
    setPosts([newPost, ...posts,]);
  };

  return (
    <div className="BlogWrapper">
      {isLoggedIn ? (
        <BlogPostForm onAddPost={handleAddPost} />
      ) : (
        <h2>Please log in to continue</h2>
      )}
      <BlogPostList posts={posts} />
    </div>
  );
};

export default BlogWrapper;