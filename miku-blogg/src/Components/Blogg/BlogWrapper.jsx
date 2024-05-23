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
        username: 'Cinnamoroll',
        profilePicture: Cinnamorollpfp,
      },
      title: 'Spreading Joy Through Cloud Crafts!',
      body: 'Hey everyone, it’s Cinnamoroll! Today, I want to share one of my favorite pastimes with you: cloud crafts! ☁️✨\n\nAs a fluffy cloud pup, I adore spreading joy and happiness wherever I go, and what better way to do that than with adorable cloud-themed crafts? From fluffy pillows to dreamy mobiles, there’s no limit to the fun and creativity you can unleash with cloud crafting.\n\nJoin me on a fluffy adventure as we explore different cloud craft ideas together! Whether you’re a seasoned crafter or just starting out, there’s something for everyone to enjoy.\n\nLet’s start by gathering some fluffy materials – soft fabrics, fluffy stuffing, and maybe even some sparkly embellishments for that extra touch of magic. Then, let your imagination soar as you create your very own cloud masterpieces!\n\nAnd the best part? You can share your creations with friends and loved ones, spreading smiles and warmth wherever your clouds may float.\n\nSo, grab your crafting supplies and let’s get started on a journey of fluffy fun and creativity! Together, we’ll spread joy through the whimsical world of cloud crafts.\n\nUntil next time,\nCinnamoroll 🐾',
    },    
    {
      id: uuidv4(),
      user: {
        username: 'Miku',
        profilePicture: Mikupfp,
      },
      title: 'Virtual Concert Announcement!',
      body: 'Hey everyone! It’s Hatsune Miku here with some exciting news! I’m thrilled to announce that I’ll be performing a virtual concert next month! 🎤✨ Get ready for an unforgettable experience filled with music, dancing, and digital magic. Whether you’re a long-time fan or new to the virtual concert scene, you won’t want to miss this show. Stay tuned for more details coming soon! See you all at the concert!\n\nYours virtually,\nHatsune Miku',
    },
    {
      id: uuidv4(),
      user: {
        username: 'Cinnamoroll',
        profilePicture: Cinnamorollpfp,
      },
      title: 'The Joy of Baking!',
      body: 'Hello friends! It’s Cinnamoroll, and today I want to share one of my favorite hobbies with you: baking! 🍰🌟 There’s something truly magical about mixing ingredients, watching them transform in the oven, and then enjoying a delicious treat with friends and family. Whether it’s fluffy pancakes for breakfast or decadent cakes for special occasions, baking always brings joy to my heart. So, grab your apron and join me in the kitchen as we whip up some sweet memories together! Let’s get baking! 🍪🥧\n\nLove,\nCinnamoroll',
    },
    {
      id: uuidv4(),
      user: {
        username: 'Miku',
        profilePicture: Mikupfp,
      },
      title: 'Behind the Scenes: Music Production',
      body: 'Hi everyone! Hatsune Miku here. Today, I want to take you behind the scenes of my music production process! 🎵💻 Creating music as a virtual idol is a collaborative effort involving talented composers, lyricists, and producers. From brainstorming ideas to recording vocals and fine-tuning the sound, every step is carefully orchestrated to bring my songs to life. I’m incredibly grateful to my team and fans for their support and inspiration. Together, we create magic that transcends the digital realm. Stay tuned for more music adventures!\n\nYours virtually,\nMiku',
    },
    {
      id: uuidv4(),
      user: {
        username: 'Miku',
        profilePicture: Mikupfp,
      },
      title: 'My First Blog Post',
      body: 'Hello everyone! I’m Hatsune Miku!\n\nWho? First things first, I’m not your typical pop star—I’m a Vocaloid! Developed by Crypton Future Media, I made my debut in 2007 as a virtual singing synthesizer. My voice is based on samples from Japanese voice actress Saki Fujita, and I sing using Yamaha’s Vocaloid technology. What makes me unique is that my character isn’t just about the music; I have a whole persona and story.\n\nUntil next time, stay tuned for more music, more fun, and more virtual awesomeness. Thanks for being a part of my world!\n\nYours virtually,\nHatsune Miku',
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
