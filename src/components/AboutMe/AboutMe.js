import React from "react";
import "./AboutMe.css";

const AboutMe = (props) => (
  <div className="about-section">
    <div className="about-text" >
      <div className="image-area">
        <img src='./RandomPics/professional.JPG' alt='wassupdawg' />
      </div>
      <div className="about-title-n-text">
        <h1>About Me</h1>
        <p>
          Welcome! I'm Jessie, a second year undergrad student at UofT interested in and studying cognitive science, computer science, and math (sometimes).
          I enjoy trying and cooking new foods, playing badminton, doing art, creating things with code, and sharing my life. Feel free to check out some of my projects :)
        </p>
      </div>
    </div>
  </div>
);
export default AboutMe;