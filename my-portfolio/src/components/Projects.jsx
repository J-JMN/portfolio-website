import React from 'react';
import './Projects.css';
import project1Img from './images/Project 1.jpg';
import project2Img from './images/Project 2.jpg';
import project3Img from './images/Project 3.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      img: project1Img,
      description: "A robust web-based e-commerce platform built using React and Node.js."
    },
    {
      title: "Project 2",
      img: project2Img,
      description: "Real-time chat application leveraging Socket.io and React Hooks."
    },
    {
      title: "Project 3",
      img: project3Img,
      description: "Customizable dashboard with drag-and-drop widgets and API integrations."
    }
  ];

  return (
    <section id="projects" tabIndex="-1" aria-labelledby="projects-title" className="projects-section">
      <h2 id="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map(({title, img, description}, index) => (
          <article
            key={index}
            className="project-card"
            tabIndex="0"
            role="group"
            aria-label={`Project: ${title}`}
            title={`${title}: ${description}`}
          >
            <img src={img} alt={title} className="project-image" loading="lazy" />
            <div className="project-info">{title}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;



