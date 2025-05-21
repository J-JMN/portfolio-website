import React from 'react';
import './Header.css';
import profilePic from '../images/profile picture.jpg';

const Header = () => {
  return (
    <header className="header">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Joseph Mburu</h1>
      <p>Full Stack Developer | Designer | Creator</p>
    </header>
  );
};

export default Header;


