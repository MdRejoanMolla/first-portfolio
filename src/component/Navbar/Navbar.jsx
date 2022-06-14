import React from 'react';
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';

const Navbar = () => {
      return (
            <div className='navbar'>
                  <div className="n-left">
                        <div className="name">Rejoan</div>
                        <Toggle />
                  </div>
                  <div className="right">
                        <div className="list">
                              <ul style={{ listStyle: 'none' }}>
                                    <Link spy={true} to='home' smooth={true} activeClass='activeClass'>
                                          <li>Home</li>
                                    </Link>
                                    <Link spy={true} to='service' smooth={true} >
                                          <li>Services</li>
                                    </Link>
                                    <Link spy={true} to='exprience' smooth={true}>
                                          <li>Experience</li>
                                    </Link>
                                    <Link spy={true} to='portfolio' smooth={true}>
                                          <li>Portfolio</li>
                                    </Link>




                              </ul>
                        </div>
                        <a href="#contact">
                              <button className="button r-button">contact us</button>
                        </a>
                  </div>
            </div >
      );
};

export default Navbar;