import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <>
            <div className='projects-container'>
                <ProjectItem
                src="food1.jpg"
                title="EAT EAT"
                description="DSLJFL SDJFSDLJFL SJDJFL SDJF JFDJSFSF"/>

                <ProjectItem
                src="hextech.jpg"
                title="EAT EAT2"
                description="222 2222222222 222222 222 2 22222222222 2222222"/>

                <ProjectItem
                src="clouds2.png"
                title="EAT EAT3"
                description="3333 333333 333333 3333333333 333 333333"/>
            </div>
        </>
    )
}

export default Projects;