import React from 'react';
import './Projects.css';
import project1Img from "../images/Project 1.jpg";
import project2Img from "../images/Project 2.jpg";
import project3Img from "../images/Project 3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Tech Time Capsule",
      img: project1Img,
      description: "A Tech history website that allows users to document milestones related to tech over the years and fetches data from wikipedia API",
      url: "https://portfolio-website-eight-peach-20.vercel.app/"
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
        {projects.map(({ title, img, description, url }, index) => (
          <article
            key={index}
            className="project-card"
            tabIndex="0"
            role="group"
            aria-label={`Project: ${title}`}
            title={`${title}: ${description}`}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Visit ${title}`}
            >
            <img src={img} alt={title} className="project-image" loading="lazy" />
            <div className="project-info">{title}</div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;




