import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import ProjectDetail from './components/ProjectDetail';

const Home = ({ onHireClick }) => (
  <>
    <Header onHireClick={onHireClick} />
    <About />
    <Projects />
    <Contact />
  </>
);

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [activeLink, setActiveLink] = useState('about');
  const location = useLocation();

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      if (location.pathname === '/') {
        const sections = ['about', 'projects', 'contact'];
        const scrollPos = window.scrollY + window.innerHeight / 2;
        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            setActiveLink(sec);
            return;
          }
        }
        const headerEl = document.getElementById('header');
        if (headerEl && window.scrollY < headerEl.offsetHeight) {
            setActiveLink('about');
        } else {
            setActiveLink('');
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);


  const scrollToSection = id => {
    
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveLink(id);
        }
    }
  };
  
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const handleHireClick = () => scrollToSection('contact');

  return (
    <>
      <AnimatedBackground theme={theme} />
      <Nav activeLink={activeLink} onLinkClick={scrollToSection} theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" style={{
        maxWidth: '900px',
        margin: '80px auto 40px',
        borderRadius: '22px',
        padding: '50px 40px 50px',
        backgroundColor: theme === 'dark' ? 'rgba(30,30,30,0.25)' : 'rgba(255,255,255,0.3)',
        backdropFilter: 'saturate(240%) blur(30px)',
        boxShadow: theme === 'dark' ? '0 25px 90px rgba(0,0,0,0.9)' : '0 25px 90px rgba(0,0,0,0.15)',
        position: 'relative',
        zIndex: 10,
        color: 'inherit'
      }}>
        <Routes>
          <Route path="/" element={<Home onHireClick={handleHireClick} />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
        <footer style ={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: '400',
        lineHeight: '1.5',
        padding: '10px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: theme === 'dark' ? 'rgba(30,30,30,0.25)' : 'rgba(255,255,255,0.3)',
        backdropFilter: 'saturate(240%) blur(30px)',
        boxShadow: theme === 'dark' ? '0 25px 90px rgba(0,0,0,0.9)' : '0 25px 90px rgba(0,0,0,0.15)',
        borderRadius: '0 0 22px 22px',
        position: 'relative',
        zIndex: 10,
        userSelect: 'none',
        color: 'inherit'
      }}>
        © {new Date().getFullYear()} Joseph Mburu. All Rights Reserved.
      </footer>
      </main>
    </>
  );
};

export default App;
