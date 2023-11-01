import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';
import { Link } from 'react-router-dom';

function Projects() {
    const COLOR1 = "#586994"
    const COLOR2 = "#7D869C"
    const COLOR3 = "#A2ABAB"
    const COLOR4 = "#B4C4AE"
    const COLOR5 = '#E5E8B6'

    return (
        <>
            <div className='projects-container'>
                <ProjectItem
                src="../Gallery/food1.jpg"
                title="EATEAT"
                text={<ul><li>Used OOP fundamentals to implement a node-based map giving users restaurant recommendations based on preferences and proximity in a team of 4.</li>
                    <li>Used Tkinter package to create intuitive UI, where user can input preferences and choose map options</li>
                    <li>Utilized Tkinter map view to create a user-interactive map of restaurants based on a CSV dataset of locations, classification of food, and coordinates.</li>
                    </ul>}
                labels={["Python", "Tkinter"]} colors={[COLOR2, COLOR3]}/>

                <ProjectItem
                src='../Gallery/hextech.jpg'
                title="UoftGuesser"
                text={<ul><li>Developed a fullstack trivia style guessing game based on the University of Toronto campus</li>
                    <li>Used MongoDB to store location data and photo data using google cloud APIs, connecting to a react front end using express.js</li>
                    </ul>}
                labels={["React.js", "Express", "MongoDB", "GoogleCloud"]} colors={[COLOR1, COLOR2, COLOR3, COLOR4]}/>

                <ProjectItem
                src="../Gallery/pie.jpg"
                title="Escape From LOL"
                text={<ul><li>Created an RPG game personifying love-hate relationship with video game LoL</li>
                    <li>Implemented core game mechanics, such as player movement, combat systems, and non-player mobs, lives, story, animation system and dialogue using GDScript.</li> 
                    <li>Utilized Godot's node system for efficient scene management and resource handling.</li>
                    <li>Optimized game physics using real life physics </li>
                    </ul>}
                    labels={["GoDot", "GDScript"]} colors={[COLOR1, COLOR2]}
                    />
            </div>
        </>
    )
}

export default Projects;