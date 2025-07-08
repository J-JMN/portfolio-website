import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects'; // We'll export this from Projects.jsx
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="project-detail-container">
        <h2>Project Not Found</h2>
        <Link to="/" className="back-link">Go Back Home</Link>
      </div>
    );
  }

  // Check if there is detailed content
  if (!project.detailedDescription && !project.technologies) {
    return (
      <div className="project-detail-container">
        <h2 className="project-title">{project.title}</h2>
        <img src={project.img} alt={project.title} className="project-detail-image" />
        <p className="no-content-message">More details for this project are coming soon!</p>
        <Link to="/" className="back-link">‹ Go Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <h2 className="project-title">{project.title}</h2>
      <img src={project.img} alt={project.title} className="project-detail-image" />
      
      <div className="project-content">
        <h3>About the Project</h3>
        <p>{project.detailedDescription}</p>

        <h3>Technologies Used</h3>
        <div className="technologies-list">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-action-link">Live Site</a>}
          {project.githubUsername && <a href={`https://github.com/${project.githubUsername}/${project.id}`} target="_blank" rel="noopener noreferrer" className="project-action-link">View on GitHub</a>}
        </div>
      </div>
      
      <Link to="/#projects" className="back-link">‹ Go Back to Projects</Link>
    </div>
  );
};

export default ProjectDetail;