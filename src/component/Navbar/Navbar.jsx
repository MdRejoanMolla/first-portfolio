import React from 'react';
// import { Link } from 'react-scroll';
import { Link } from "react-router-dom";
import Toggle from '../Toggle/Toggle';
import './Navbar.css';

const Navbar = () => {
      return (
            <div className='navbar'>
                  <div className="n-left">
                        <Link to='/' className="name">Rejoan</Link>
                        <Toggle />
                  </div>
                  <div className="right">
                        <div className="list">
                              <ul style={{ listStyle: 'none' }}>
                                    <Link className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='home' smooth={true} activeClass='activeClass'>
                                          <li >Home</li>
                                    </Link>

                                    <Link className={({ isActive }) => (isActive ? 'active-link' : 'link')} spy={true} to='skills' smooth={true} >
                                          <li>Skills</li>
                                    </Link>
                                    <Link className={({ isActive }) => (isActive ? 'active-link' : 'link')} spy={true} to='exprience' smooth={true}>
                                          <li>Experience</li>
                                    </Link>
                                    <Link className={({ isActive }) => (isActive ? 'active-link' : 'link')} spy={true} to='projects' smooth={true}>
                                          <li>Projects</li>
                                    </Link>
                                    <Link className={({ isActive }) => (isActive ? 'active-link' : 'link')} spy={true} to='blogs' smooth={true}>
                                          <li>Blogs</li>
                                    </Link>
                                    <Link className={({ isActive }) => (isActive ? 'active-link' : 'link')} spy={true} to='about' smooth={true}>
                                          <li>About </li>
                                    </Link>




                              </ul>
                        </div>
                        <a href="#contact">
                              <button className="button r-button">contact me</button>
                        </a>

                  </div>
            </div >
      );
};

export default Navbar;