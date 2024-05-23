import React from 'react';
import './BlogStyle.css';
import BlogPost from './BlogPost';
import EditBlogPostForm from './EditBlogPostForm';
import CommentWrapper from './PostComment/CommentWrapper';

const BlogPostList = ({ isLoggedIn, posts, onDeletePost, onEditPost, onUpdatePost }) => {
  return (
    <div className="blog-list">
      {/* Map through each post in the posts array */}
      {posts.map((post) => (
        // Conditional rendering based on whether the post is being edited, render either post or editform
        post.isEditing ? (
          <EditBlogPostForm
            key={post.id}
            post={post}
            onUpdatePost={onUpdatePost}
          />
        ) : (
          <BlogPost
            key={post.id}
            isLoggedIn={isLoggedIn}
            post={post}
            deletePost={onDeletePost}
            editPost={onEditPost}>
            <CommentWrapper post={post} isLoggedIn={isLoggedIn}/>
          </BlogPost>
        )
      ))}
    </div>
  );
};

export default BlogPostList;
