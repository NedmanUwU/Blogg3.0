import React from 'react';
import './BlogStyle.css';
import BlogPost from './BlogPost';
import EditBlogPostForm from './EditBlogPostForm';

const BlogPostList = ({ isLoggedIn, posts }) => {

  const deletePost = id =>{
    setPosts(posts.filter(post => post.id !== id))
  }

  const editPost = id =>{
    setPosts(posts.map(post => post.id === id ? 
                      {...post, isEditing: !post.isEditing} : post))
  }

  const editArticle = (article, id) => {
    setPosts(posts.map(post => post.id ==id ? {... post, article, isEditing: !post.isEditing} : post))
  }


  return (
    <div className="blog-list">
      {posts.map((post) => (
        post.isEditing ? (<EditBlogPostForm editPost={editArticle} article={post}/>) : (
        <BlogPost isLoggedIn={isLoggedIn} key={post.id} post={post}           deletePost={deletePost}
        editPost={editPost}/>)
      ))}
    </div>
  );
};

export default BlogPostList;
