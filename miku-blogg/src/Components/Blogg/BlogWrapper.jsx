import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './BlogStyle.css';
import BlogPostList from './BlogPostList';
import BlogPostForm from './BlogPostForm';
import Mikupfp from '../../assets/Mikupfp.jpg';
import Cinnamorollpfp from '../../assets/cinnamorollpfp.jpg';

const BlogWrapper = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([
    // Existing sample posts
    {
      id: uuidv4(),
      user: {
        username: 'Miku',
        profilePicture: Mikupfp,
      },
      title: 'My First Blog Post',
      body: 'Hello everyone! I’m Hatsune Miku! Who? First things first, I’m not your typical pop star—I’m a Vocaloid! Developed by Crypton Future Media, I made my debut in 2007 as a virtual singing synthesizer. My voice is based on samples from Japanese voice actress Saki Fujita, and I sing using Yamaha’s Vocaloid technology. What makes me unique is that my character isn’t just about the music; I have a whole persona and story. Until next time, stay tuned for more music, more fun, and more virtual awesomeness. Thanks for being a part of my world! Yours virtually, Hatsune Miku',
    },
    {
      id: uuidv4(),
      user: {
        username: 'Cinnamoroll',
        profilePicture: Cinnamorollpfp,
      },
      title: 'Exploring the Wonders of React!',
      body: 'Hi everyone, it’s Cinnamoroll here, and today I want to talk about something super exciting: React.js! 🌟 If you’re into web development like me, you’ve probably heard about React. It’s this amazing JavaScript library that makes building user interfaces so much fun and efficient. As a fluffy cloud pup, I’m all about making things cute and user-friendly, and React helps me do just that! Let me break it down for you. React allows developers (and cloud pups like me 😄) to create interactive and dynamic web applications with ease. It uses a component-based architecture, which means you can build reusable pieces of your UI, like building blocks. How cool is that? One of my favorite things about React is how it handles data and state. With React, you can update parts of your UI based on changes in data without reloading the entire page. It’s like magic! ✨ Oh, and did I mention JSX? It’s like a special language that lets you write HTML directly in your JavaScript code. It’s super handy and makes your code look clean and organized. Now, I know diving into new tech can seem daunting, but React has an awesome community and tons of resources to help you get started. Whether you’re a beginner or a seasoned developer, there’s always something new to learn and explore with React. So, if you’re looking to level up your web development skills and add some charm to your projects, give React a try! I promise you won’t be disappointed. That’s all for now, my fellow cloud enthusiasts. Stay curious, keep coding, and embrace the fluffy magic of React! 🌈☁️ Until next time, Cinnamoroll 🐾',
    },
  ]);

  const deletePost = (id) => {
    console.log('Deleting post with id:', id);
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (id) => {
    console.log('Editing post with id:', id);
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isEditing: !post.isEditing } : post
      )
    );
  };

  const updatePost = (updatedPost) => {
    console.log('Updating post:', updatedPost);
    setPosts(
      posts.map((post) =>
        post.id === updatedPost.id ? { ...updatedPost, isEditing: false } : post
      )
    );
  };

  const handleAddPost = (newPost) => {
    console.log('Adding new post:', newPost);
    newPost.id = uuidv4(); // Generate a unique ID for the new post
    newPost.isEditing = false; // Ensure the new post is not in editing mode
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="BlogWrapper">
      {isLoggedIn ? (
        <BlogPostForm onAddPost={handleAddPost} />
      ) : (
        <h2>Please log in to write your own posts</h2>
      )}
      <BlogPostList
        posts={posts}
        isLoggedIn={isLoggedIn}
        onDeletePost={deletePost}
        onEditPost={editPost}
        onUpdatePost={updatePost}
      />
    </div>
  );
};

export default BlogWrapper;
