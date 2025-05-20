import React from 'react';
import './Nav.css';

const Nav = ({ activeLink, onLinkClick, theme, toggleTheme }) => {
  return (
    <nav role="navigation" aria-label="Primary navigation" className="nav">
      <div className="logo">J.MBURU</div>
      <ul>
        {['about', 'projects', 'contact'].map(section => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeLink === section ? 'active' : ''}
              onClick={e => {
                e.preventDefault();
                onLinkClick(section);
              }}
              aria-current={activeLink === section ? 'page' : undefined}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="nav-toggle-btn"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        onClick={toggleTheme}
        type="button"
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
};

export default Nav;
