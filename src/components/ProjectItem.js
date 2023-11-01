import React from 'react';
import './ProjectItem.css';
import { Link } from 'react-router-dom';

function ProjectItem(props) {
  return (
    <>
        <div class="project-container">
            <div class="text-container">
                <img className='project-image' src={props.src}></img>
            </div>
            <div class="text-container">
                <div className='project-text'>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProjectItem;