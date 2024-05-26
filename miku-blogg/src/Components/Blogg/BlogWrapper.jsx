import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../Authenticator/Authenticator';
import './BlogStyle.css';
import BlogPostList from './BlogPostList';
import BlogPostForm from './BlogPostForm';
import Mikupfp from '../../assets/Mikupfp.jpg';
import Cinnamorollpfp from '../../assets/cinnamorollpfp.jpg';

const BlogWrapper = () => {
  // State for managing blog posts
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([
    // Existing sample posts
    {
      id: uuidv4(),
      user: {
        username: 'Cinnamoroll',
        profilePicture: Cinnamorollpfp,
      },
      title: 'Spreading Joy Through Cloud Crafts!',
      body: 'Hey everyone, it’s Cinnamoroll! Today, I want to share one of my favorite pastimes with you: cloud crafts! ☁️✨\n\nAs a fluffy cloud pup, I adore spreading joy and happiness wherever I go, and what better way to do that than with adorable cloud-themed crafts? From fluffy pillows to dreamy mobiles, there’s no limit to the fun and creativity you can unleash with cloud crafting.\n\nJoin me on a fluffy adventure as we explore different cloud craft ideas together! Whether you’re a seasoned crafter or just starting out, there’s something for everyone to enjoy.\n\nLet’s start by gathering some fluffy materials – soft fabrics, fluffy stuffing, and maybe even some sparkly embellishments for that extra touch of magic. Then, let your imagination soar as you create your very own cloud masterpieces!\n\nAnd the best part? You can share your creations with friends and loved ones, spreading smiles and warmth wherever your clouds may float.\n\nSo, grab your crafting supplies and let’s get started on a journey of fluffy fun and creativity! Together, we’ll spread joy through the whimsical world of cloud crafts.\n\nUntil next time,\nCinnamoroll 🐾',
      category: 'General'
    },
    {
      id: uuidv4(),
      user: {
        username: 'Miku',
        profilePicture: Mikupfp,
      },
      title: 'Virtual Concert Announcement!',
      body: 'Hey everyone! It’s Hatsune Miku here with some exciting news! I’m thrilled to announce that I’ll be performing a virtual concert next month! 🎤✨\n\nGet ready for an unforgettable experience filled with music, dancing, and digital magic. Whether you’re a long-time fan or new to the virtual concert scene, you won’t want to miss this show. Stay tuned for more details coming soon!\n\nI can’t wait to see you all there, singing and dancing along with me from the comfort of your homes. Virtual concerts are such a unique and wonderful way to connect with all of you, no matter where you are in the world.\n\nWe’re working hard to make this concert an incredible experience, with stunning visuals and amazing new songs that I know you’ll love. Keep an eye out for ticket information and exclusive sneak peeks as we get closer to the date.\n\nThank you for your continued support, and let’s make this virtual concert a memory we’ll cherish forever. See you all at the concert!\n\nYours virtually,\nHatsune Miku',
      category: 'Announcements'
    },
    {
      id: uuidv4(),
      user: {
        username: 'Cinnamoroll',
        profilePicture: Cinnamorollpfp,
      },
      title: 'The Joy of Baking!',
      body: 'Hello friends! It’s Cinnamoroll, and today I want to share one of my favorite hobbies with you: baking! 🍰🌟\n\nThere’s something truly magical about mixing ingredients, watching them transform in the oven, and then enjoying a delicious treat with friends and family. Whether it’s fluffy pancakes for breakfast or decadent cakes for special occasions, baking always brings joy to my heart.\n\nOne of my favorite things to bake is cookies. There’s just something so comforting about the smell of freshly baked cookies filling the kitchen. Plus, they’re perfect for sharing with friends over a cup of tea or coffee.\n\nAnother favorite of mine is baking bread. It’s a bit more time-consuming, but the reward of a warm, crusty loaf is well worth the effort. There’s nothing like the taste of homemade bread, especially when it’s fresh out of the oven.\n\nSo, grab your apron and join me in the kitchen as we whip up some sweet memories together! Let’s get baking! 🍪🥧\n\nLove,\nCinnamoroll',
      category: 'General'
    },
    {
      id: uuidv4(),
      user: {
        username: 'Miku',
        profilePicture: Mikupfp,
      },
      title: 'Behind the Scenes: Music Production',
      body: 'Hi everyone! Hatsune Miku here. Today, I want to take you behind the scenes of my music production process! 🎵💻\n\nCreating music as a virtual idol is a collaborative effort involving talented composers, lyricists, and producers. From brainstorming ideas to recording vocals and fine-tuning the sound, every step is carefully orchestrated to bring my songs to life.\n\nOne of the most exciting parts of the process is working with different producers. Each one brings their unique style and creativity, which helps keep my music fresh and diverse. I love experimenting with different genres and sounds to create something new and exciting for my fans.\n\nRecording vocals is another crucial step. Even though I’m a digital character, my voice is based on real recordings. We use advanced software to manipulate and fine-tune these recordings to match the desired pitch, tone, and emotion.\n\nAfter recording, the production team works on mixing and mastering the tracks. This involves adjusting levels, adding effects, and ensuring the final product sounds polished and professional.\n\nI’m incredibly grateful to my team and fans for their support and inspiration. Together, we create magic that transcends the digital realm. Stay tuned for more music adventures!\n\nYours virtually,\nMiku',
      category: 'General'
    },
    {
      id: uuidv4(),
      user: {
        username: 'Miku',
        profilePicture: Mikupfp,
      },
      title: 'My First Blog Post',
      body: 'Hello everyone! I’m Hatsune Miku!\n\nWho? First things first, I’m not your typical pop star—I’m a Vocaloid! Developed by Crypton Future Media, I made my debut in 2007 as a virtual singing synthesizer. My voice is based on samples from Japanese voice actress Saki Fujita, and I sing using Yamaha’s Vocaloid technology.\n\nWhat makes me unique is that my character isn’t just about the music; I have a whole persona and story. I’ve performed in concerts worldwide, collaborated with various artists, and even starred in video games and merchandise. My fans, known as "Piapro," are incredibly creative and have contributed to my growth and success.\n\nI want to use this blog to share more about my world, my projects, and my thoughts. I hope to give you all a glimpse into the life of a digital diva and the amazing community that surrounds me.\n\nUntil next time, stay tuned for more music, more fun, and more virtual awesomeness. Thanks for being a part of my world!\n\nYours virtually,\nHatsune Miku',
      category: 'General'
    },
  ]);

  // State for managing the selected category filter
  const [filter, setFilter] = useState('All');

  // Function to delete a post
  const deletePost = (id) => {
    console.log('Deleting post with id:', id);
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Function to toggle editing mode for a post
  const editPost = (id) => {
    console.log('Editing post with id:', id);
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isEditing: !post.isEditing } : post
      )
    );
  };

  // Function to update a post with new data, gathered from the edit form
  const updatePost = (updatedPost) => {
    console.log('Updating post:', updatedPost);
    setPosts(
      posts.map((post) =>
        post.id === updatedPost.id ? { ...updatedPost, isEditing: false } : post
      )
    );
  };

  // Function to add a new post
  const handleAddPost = (newPost) => {
    console.log('Adding new post:', newPost);
    newPost.id = uuidv4(); // Generate a unique ID for the new post
    newPost.isEditing = false; // Ensure the new post is not in editing mode
    setPosts([newPost, ...posts]);
  };

  // Filter posts based on the selected category
  const filteredPosts =
  filter === 'All' ? posts : posts.filter((post) => post.category === filter);

  return (
    <div className="BlogWrapper">
      {/* Render BlogPostForm if user is logged in, else display message */}
      {currentUser ? (
        <BlogPostForm onAddPost={handleAddPost} />
      ) : (
        <h2>Please log in to write your own posts</h2>
      )}
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('General')}>General</button>
        <button onClick={() => setFilter('Technology')}>Technology</button>
        <button onClick={() => setFilter('Announcements')}>Announcements</button>
      </div>
      {/* Render all existing posts, including newly created ones through the form */}
      <BlogPostList
        posts={filteredPosts} 
        onDeletePost={deletePost}
        onEditPost={editPost}
        onUpdatePost={updatePost}
      />
    </div>
  );
};

export default BlogWrapper;
