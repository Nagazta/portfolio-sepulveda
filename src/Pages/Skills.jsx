import React from 'react';
import './CSS/Skill.css';

const skills = {
  "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
  "Backend": ["Node.js", "Express", "Spring Boot", "MySQL", "MongoDB"],
  "Tools & Others": ["Git", "GitHub", "VS Code", "Figma", "Postman", "npm"],
  "Soft Skills": ["Problem Solving", "Communication", "Teamwork", "Adaptability"]
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-section">
          <h2>{category}</h2>
          <ul>
            {items.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
