import './AboutMe.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="intro-container">
      <div className='separator'></div>
      <div className="image-container-about">
        <img src="professional4.jpg" alt="idk what pic to put" className="about-photo"/>
      </div>
      <div className="text-container">
        <h2 className="title">What's Up? </h2>
        <p className="text">
          I'm Jessie! I'm currently a second year student at the University of Toronto who's passionate about 
          cognitive science, computer science, <s>leagueoflegends</s> and math (not sure abt this one ngl).
        </p>
      </div>
    </div>
  );
}

export default AboutMe;