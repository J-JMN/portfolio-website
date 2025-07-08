import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import project1Img from "../images/Project 1.jpg";
import project2Img from "../images/Project 2.jpg";
import project3Img from "../images/Project 3.jpg";

// Export the data so other components can use it
export const projectsData = [
  {
    id: "tech-time-capsule",
    title: "Tech Time Capsule",
    img: project1Img,
    description:
      "A Tech history website that allows users to document milestones related to tech over the years.",
    detailedDescription:
      "The Tech Time Capsule is a full-stack web application that serves as a community-driven museum of technological history. Authenticated users can contribute by submitting new events, creating custom categories, and managing their contributions. The platform provides a dynamic and filterable timeline to explore the pivotal moments of tech history.",
    technologies: [
      "React",
      "Flask",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "RESTful API",
    ],
    url: "https://tech-time-capsule-client.onrender.com/",
    githubUsername: "J-JMN",
  },
  {
    id: "project-2",
    title: "Project 2",
    img: project2Img,
    description:
      "Real-time chat application leveraging Socket.io and React Hooks.",
    // No detailed description to show the "coming soon" message
  },
  {
    id: "project-3",
    title: "Project 3",
    img: project3Img,
    description:
      "Customizable dashboard with drag-and-drop widgets and API integrations.",
    // No detailed description to show the "coming soon" message
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map(({ id, title, img, description }) => (
          <Link
            to={`/projects/${id}`}
            key={id}
            className="project-card-link"
            aria-label={`View details for ${title}`}
          >
            <article
              className="project-card"
              tabIndex="0"
              role="group"
              title={`${title}: ${description}`}
            >
              <img src={img} alt={title} className="project-image" />
              <div className="project-info">
                <h3>{title}</h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;