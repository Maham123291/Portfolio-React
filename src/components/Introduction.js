// src/pages/Introduction.js
import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="introduction-section">
      <img
        src="https://cdn.vectorstock.com/i/1000v/79/38/little-girl-profile-avatar-isolated-cute-female-vector-21387938.avif"
        alt="Profile"
        className="profile-picture"
      />
      <div className="name">MAHAM WASEEM</div>
      <div className="bio-text">
      Hi there! I'm Maham Waseem, a passionate Computer Science undergrad with a keen interest in web development and design. I believe in continuous learning and am always eager to learn new technologies and expand my skill set.Welcome to my introduction page!
      </div>
    </div>
  );
};

export default Introduction;
