import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditBlogPostForm = ({ post, onUpdatePost }) => {
  // State for title and body inputs, initialized with post data
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  // Event handler for title input change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Event handler for body input change
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update post object with new title and body
    onUpdatePost({ ...post, title, body });
  };

  return (
    //Form for editing an existing blog post, based on 'BlogPostForm'
    <div className="blog-post-form-edit">
      <h2>Edit your post</h2>
      <form onSubmit={handleSubmit}>
        <div className="text-input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Update your title..."
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="text-input">
          <label htmlFor="body">Text:</label>
          <textarea
            id="body"
            value={body}
            placeholder="Update your thoughts..."
            onChange={handleBodyChange}
            required
          ></textarea>
        </div>
        <button type="submit">Update!</button>
      </form>
    </div>
  );
};

// Prop types validation
EditBlogPostForm.propTypes = {
  post: PropTypes.object.isRequired,
  onUpdatePost: PropTypes.func.isRequired,
};

export default EditBlogPostForm;
