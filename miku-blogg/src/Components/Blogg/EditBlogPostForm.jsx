import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditBlogPostForm = ({ post, onUpdatePost }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePost({ ...post, title, body });
  };

  return (
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

EditBlogPostForm.propTypes = {
  post: PropTypes.object.isRequired,
  onUpdatePost: PropTypes.func.isRequired,
};

export default EditBlogPostForm;
