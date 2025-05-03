import React from 'react';
import './CSS/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm <strong>[Your Name]</strong>, a passionate and detail-oriented developer with a focus on
            building modern web applications. I enjoy solving complex problems and constantly learning
            new technologies.
          </p>
          <p>
            My journey started with a curiosity for how things work on the web, and over time, I’ve worked
            on various projects using React, JavaScript, and backend tools like Node.js and MySQL.
          </p>
          <p>
            Outside of coding, I love [hobbies/interests – e.g., photography, gaming, reading, or traveling].
            I believe in continuous growth and strive to improve both professionally and personally.
          </p>
        </div>
        <div className="about-image">
          {/* Replace with your photo if desired */}
          <img src="https://via.placeholder.com/200" alt="Your portrait" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
