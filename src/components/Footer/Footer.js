import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <img src="myself.png"></img>
            <div className='name'>
              made with ˚ʚ♡ɞ˚ by jessie wang 
            </div>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link opgg'
              to='https://www.op.gg/summoners/na/57saxophones'
              target='_blank'
              aria-label='OP.GG'
            >
              <i class="fa-solid fa-gamepad"></i>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link github'
              to='https://github.com/jwaanng'
              target='_blank'
              aria-label='Github'
            >
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/jessie-wang-645040207/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;