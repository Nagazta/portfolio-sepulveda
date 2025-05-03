import React from 'react';
import './CSS/Index.css';  // Optional: Create a custom CSS file for styling

const Index = () => {
  return (
    <div className="index-page">
      <div className="welcome-section">
        <h1 className="greeting">Welcome to My Portfolio!</h1>
        <p className="intro">
          Hi, I'm Kyle Sepulveda, a passionate developer with a love for building amazing applications.
          This portfolio showcases my work, skills, and experiences. Feel free to explore!
        </p>
       
      </div>

      <div className="highlights-section">
        <h2>My Key Projects</h2>
        <p>Here are a few projects I’m most proud of:</p>
        {/* You can add dynamic project sections later */}
      </div>
    </div>
  );
};

export default Index;
