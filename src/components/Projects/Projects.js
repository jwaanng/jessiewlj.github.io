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
                src="../Gallery/eateat.png"
                title="EATEAT"
                text={<><h3>Hey! Are you visiting Toronto and don't know where to eat? Then EATEAT is created just. for. you. Now you can get a personalized food itinerary at the convinience of clicking 'run' on 'main.py'!
                    </h3><ul><li>Used OOP fundamentals to implement a node-based map giving users restaurant recommendations based on preferences and proximity in a team of 4.</li>
                    <li>Used Tkinter package to create intuitive UI, where user can input preferences and choose map options</li>
                    <li>Utilized Tkinter map view to create a user-interactive map of restaurants based on a CSV dataset of locations, classification of food, and coordinates.</li>
                    </ul></>}
                labels={["Python", "Tkinter"]} colors={[COLOR2, COLOR3]}/>

                <ProjectItem
                src='../Gallery/uoftguesser.png'
                title="UofTGuesser"
                text={<><h3>Imagine GeoGuessr, Kahoot, and our favourite university had a baby: UofTGuesser! I created UofTGuesser to try to get
                    a grasp of front end development while also giving me an excuse to explore our campus a bit to take pictures for this project. </h3><ul><li>Developed a fullstack trivia style guessing game based on the University of Toronto campus</li>
                    <li>Used MongoDB to store location data and photo data using google cloud APIs, connecting to a react front end using express.js</li>
                    </ul></>}
                labels={["React.js", "Express", "MongoDB", "GoogleCloud"]} colors={[COLOR1, COLOR2, COLOR3, COLOR4]}/>

                <ProjectItem
                src="../Gallery/pie.jpg"
                title="Escape From LOL"
                text={<><h3>Since making games always seemed super cool, and I loved games, I decided to make my own- based off of my love-hate relationship with videogame XXX.
                    The goal of 'Escape From LOL' is to solve simple puzzles, fight simple mobs, while being hunted down by your duo in order to escape from the dooming "we can't end on a loss"</h3>
                    <ul><li>Created an RPG game using GoDot game engine and GDScript</li>
                    <li>Implemented core game mechanics, such as player movement, combat systems, and non-player mobs, lives, story, animation system and dialogue using GDScript.</li> 
                    <li>Utilized GoDot's node system for efficient scene management and resource handling.</li>
                    <li>Optimized game physics using real life physics </li>
                    </ul></>}
                    labels={["GoDot", "GDScript"]} colors={[COLOR1, COLOR2]}
                    />

                <ProjectItem
                src="../Gallery/myself.PNG"
                title="jwaanng.github.io"
                text={<><h3>This personal website made using React.js, HTML, CSS, and some tears. Now I have a place to store my projects, my portfolio, my life... 
                    plus, I learned a lot of valuable lessons:</h3><ul><li>Responsiveness is tricky</li>
                    <li>'border: 1px red solid;'</li>
                    <li>I can put easter eggs!</li>
                    </ul></>}
                    labels={["React"]} colors={[COLOR1]}
                        />
            </div>
        </>
    )
}

export default Projects;