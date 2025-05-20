import React from 'react';
import './About.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiMysql
} from 'react-icons/si';

const About = () => {
  return (
    <section id="about" tabIndex="-1" aria-labelledby="about-title" className="about-section">
      <h2 id="about-title">About Me</h2>
      <p>
         I am skilled in HTML, CSS, JavaScript, Python, React.js, and SQL. I build fast, responsive, and visually appealing web applications using modern technologies.
      </p>

      <div className="skills">
        <h3>Skills:</h3>
        <div className="skill-icons">
          <SiHtml5 className="skill-icon" title="HTML5" />
          <SiCss3 className="skill-icon" title="CSS3" />
          <SiJavascript className="skill-icon" title="JavaScript" />
          <SiPython className="skill-icon" title="Python" />
          <SiReact className="skill-icon" title="React.js" />
          <SiMysql className="skill-icon" title="SQL" />
        </div>
      </div>
    </section>
  );
};

export default About;
 


