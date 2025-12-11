import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Pics/SkillSprout logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="SkillSprout Logo" className="logo-img" />
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
            <li><a href="#tutors">Tutors</a></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="#login" className="login-link">Login</a>
          <button className="register-button">Find Tutor</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
