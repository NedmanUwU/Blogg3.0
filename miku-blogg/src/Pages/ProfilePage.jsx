import React from 'react';
import PropTypes from 'prop-types';
import './ProfilePage.css'

const ProfilePage = ({ username, profilePicture, posts }) => {
  return (
    <div className="profile-page">
      <div className="profile-info">
        <h2>Welcome, {username}!</h2>
        <img src={profilePicture} alt="Profile Picture" />
      </div>
      <div className="user-posts">
        <h3>Your Posts:</h3>
        {posts.length > 0 ? (
          posts.map(post => (
            <div className="post" key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  username: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};

export default ProfilePage;
