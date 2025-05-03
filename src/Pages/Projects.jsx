import React from 'react';
import './CSS/Projects.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my projects, skills, and resume.",
    tech: ["React", "CSS", "React Router"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Clothing Inventory System",
    description: "A web app to manage clothing stock, orders, and restocking activities.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/yourusername/clothing-inventory",
  },
  {
    title: "AI Job Matching System",
    description: "A project that uses AI to recommend jobs based on user profiles.",
    tech: ["Python", "Flask", "Machine Learning"],
    github: "https://github.com/yourusername/ai-job-matching",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Used:</strong> {project.tech.join(', ')}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
