import React from 'react';
import './Navbar3.css';
import { Link } from 'react-router-dom';

function NavBar3(props) {
    return (
    <nav className="navbar3" >
        <Link to='/' className='navbar3-logo'>jessie wang</Link>
        <div className='nav3-items'>
            <Link to='/' className='nav3-item'>about me</Link>
            <Link to='/projects' className='nav3-item'>projects</Link>
            <Link to='/life' className='nav3-item'>life</Link> 
        </div>       
    </nav>
    );
}

export default NavBar3;

// smooth={true} duration={1000} offset={-50}