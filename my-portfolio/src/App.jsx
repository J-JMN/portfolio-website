import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, 
  });
}, []);


  useEffect(() => {
    const onScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 75;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveLink(sec);
          return;
        }
      }
      setActiveLink('');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
    }
  };

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  const handleHireClick = () => scrollToSection('contact');

  return (
    <>
      <Nav activeLink={activeLink} onLinkClick={scrollToSection} theme={theme} toggleTheme={toggleTheme} />
      <AnimatedBackground theme={theme} />
      <main id="root" style={{
        maxWidth: '900px',
        margin: '80px auto 40px',
        borderRadius: '22px',
        padding: '50px 40px 50px',
        backgroundColor: theme === 'dark' ? 'rgba(30,30,30,0.25)' : 'rgba(255,255,255,0.3)',
        backdropFilter: 'saturate(240%) blur(30px)',
        boxShadow: theme === 'dark' ? '0 25px 90px rgba(0,0,0,0.9)' : '0 25px 90px rgba(0,0,0,0.15)',
        position: 'relative',
        zIndex: 10,
        userSelect: 'none',
        color: 'inherit'
      }}>
        <Header onHireClick={handleHireClick} />
        <About />
        <Projects />
        <Contact />
        <footer style ={{
          marginTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: theme === 'dark' ? '#fff' : '#000',
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
          &copy; {new Date().getFullYear()} Joseph Mburu. All Rights Reserved.
        </footer>
      </main>
    </>
  );
};

export default App;

