import React from 'react';
import './BlogStyle.css';
import BlogPost from './BlogPost';
import EditBlogPostForm from './EditBlogPostForm';
import CommentWrapper from './PostComment/CommentWrapper';

const BlogPostList = ({ isLoggedIn, posts, onDeletePost, onEditPost, onUpdatePost }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
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
            <CommentWrapper />
            </BlogPost>
        )
      ))}
    </div>
  );
};

export default BlogPostList;