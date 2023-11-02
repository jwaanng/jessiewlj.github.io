import React, {useState} from "react";
import "./MobileNav.css";
import { Link } from 'react-router-dom';

function MobileNav(props) {
    const [click, setClick] = useState(false);
    const [xPosition, setX] = useState(100);
    const [scrollLock, setScrollLock] = useState("visible")

    function triggerSidebar() {
        setX(xPosition === 100 ? 0:100);
        setScrollLock(scrollLock === "visible"? "hidden":"visible")
        setClick(!click);
    }

    function toggleLock() {
        document.body.style.overflow = "visible"
    }

    document.body.style.overflow = scrollLock
    return (
        <div className="sidebar">
            <div className="side-menu-icon" onClick={triggerSidebar}> 
                <Link to='/' className='mn-logo'>jessie wang</Link>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className="menu" 
            style={{transform: `translatex(${xPosition}vw)`}}> 
                <Link to='/' className='mn-item'>about me</Link>
                <Link to='/projects' className='mn-item'>projects</Link>
                <Link to='/life' className='mn-item'>life</Link> 
            </div>
        </div>
    )
}

export default MobileNav;