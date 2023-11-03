import React from 'react';
import './ProjectItem.css';
import { Link } from 'react-router-dom';
import TagsList from '../Tags/TagList';



function ProjectItem(props) {
  return (
    <div className="project-section">
    <div className="project-text" >
      <div className="project-image-area">
      <a href={props.linkto}>
        <img src={props.src} alt='wassupdawg' />
      </a>
      </div>
      <div className="project--title-n-text">
        <h1>{props.title}</h1>
        <TagsList labels={props.labels} colors={props.colors}/>
        <p>
            {props.text}
        </p>
      </div>
    </div>
  </div>
  );
}

export default ProjectItem;