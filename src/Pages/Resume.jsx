import React from 'react';
import './CSS/Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelor of Science in Information Technology</h3>
          <p>XYZ University • 2020 – Present</p>
          <p>Relevant Courses: Software Engineering, Database Management, Web Development</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>Frontend Developer Intern</h3>
          <p>ABC Tech Solutions • June 2023 – August 2023</p>
          <ul>
            <li>Built responsive React components for client dashboards</li>
            <li>Integrated APIs and optimized UI performance</li>
            <li>Worked with a team using Git, Trello, and agile methodologies</li>
          </ul>
        </div>

        <div className="resume-item">
          <h3>Freelance Web Developer</h3>
          <p>Remote • 2022 – Present</p>
          <ul>
            <li>Developed static and dynamic websites for small businesses</li>
            <li>Customized designs using HTML, CSS, JavaScript, and React</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <ul className="resume-list">
          <li>Meta Front-End Developer (Coursera)</li>
          <li>Responsive Web Design (freeCodeCamp)</li>
          <li>JavaScript Algorithms and Data Structures (freeCodeCamp)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
