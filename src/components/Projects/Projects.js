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
                    src='../Gallery/uoftguesser.png'
                    title="UofTGuesser"
                    text={<><h3>Imagine GeoGuessr, Kahoot, and our favourite university had a baby: UofTGuesser! I created UofTGuesser to try to get
                        a grasp of front end development while also giving me an excuse to explore our campus a bit to take pictures for this project. </h3><ul><li>Developed a fullstack trivia style guessing game based on the University of Toronto campus</li>
                        <li>Used MongoDB to store location data and photo data using google cloud APIs, connecting to a react front end using express.js</li>
                        </ul></>}
                    linkto="https://github.com/jwaanng/uoftguessertwo"
                    labels={["React.js", "Express", "MongoDB", "GoogleCloud"]} colors={[COLOR1, COLOR2, COLOR3, COLOR4]}/>

                <ProjectItem
                src="../Gallery/cat.jpg"
                title="PETPAL"
                text={<><h3>A dating app style app to find your new furry friend! This app taught me a lot about software architecture, using API calls, and MongoDB in java</h3><ul>
                    <li>Created an app inspired by modern dating-app mechanics, to facilitate pet adoption and listing</li>.
                    <li>Implemented clean architecture principles and design patterns, ensuring a robust and maintainable app.</li>
                    <li>Leveraged Java Swing to design a user interface, supporting use cases including account creation, login, intuitive pet swiping, and matching functionalities based on preferences.</li>
                    <li>Integrated Google Maps and Google Cloud storage, allowing geolocation capabilities.</li>
                    </ul></>}
                linkto="https://github.com/jwaanng/jwaanng.github.io"
                    labels={["Java", "MongoDB", "CLEAN", "GoogleCloud"]} colors={[COLOR1, COLOR2, COLOR3, COLOR4]}
                        />

                <ProjectItem
                src="../Gallery/eateat.png"
                title="EATEAT"
                text={<><h3>Hey! Are you visiting Toronto and don't know where to eat? Then EATEAT is created just. for. you. Now you can get a personalized food itinerary at the convenience of clicking 'run' on 'main.py'!
                    </h3><ul><li>Used OOP fundamentals to implement a node-based map giving users restaurant recommendations based on preferences and proximity in a team of 4.</li>
                    <li>Used Tkinter package to create intuitive UI, where user can input preferences and choose map options</li>
                    <li>Utilized Tkinter map view to create a user-interactive map of restaurants based on a CSV dataset of locations, classification of food, and coordinates.</li>
                    </ul></>}
                linkto="https://github.com/jwaanng/eat-eat"
                labels={["Python", "Tkinter"]} colors={[COLOR2, COLOR3]}/>

                <ProjectItem
                src="../Gallery/myself.PNG"
                title="jwaanng.github.io"
                text={<><h3>This personal website made using React.js, HTML, CSS, and some tears. Now I have a place to store my projects, my portfolio, and my life. 
                    Plus, I learned many valuable lessons:</h3><ul><li>Responsiveness is tricky</li>
                    <li>'border: 1px red solid;'</li>
                    </ul></>}
                linkto="https://github.com/jwaanng/jwaanng.github.io"
                    labels={["React.js"]} colors={[COLOR1]}
                        />

                <ProjectItem
                src="../Gallery/pie.jpg"
                title="Escape From LOL"
                text={<><h3>Inspired by my enthusiasm for games and a love-hate relationship with a certain video game XXX, I channeled that dynamic into the creation of my own RPG.
                    The goal of 'Escape From LOL' is to solve simple puzzles, fight mobs, while being hunted down by your duo in order to escape from the dooming "we can't end on a loss."</h3>
                    <ul><li>Created an RPG game using GoDot game engine and GDScript</li>
                    <li>Implemented core game mechanics, such as player movement, combat systems, and non-player mobs, lives, story, animation system and dialogue using GDScript.</li> 
                    <li>Utilized GoDot's node system for efficient scene management and resource handling.</li>
                    <li>Optimized game physics using real life physics </li>
                    </ul></>}
                    labels={["GoDot", "GDScript"]} colors={[COLOR1, COLOR2]}
                    />
            </div>
        </>
    )
}

export default Projects;