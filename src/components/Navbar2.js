import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

function Navbar2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            jessie wang
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                about me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/life'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                life
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;