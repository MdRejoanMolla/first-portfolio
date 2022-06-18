import React from 'react';
import './Intro.css';
import Github from '../img/github.png';
import LinkIn from '../img/linkedin.png';
import Vector1 from '../img/Vector1.png';
import Vector2 from '../img/Vector2.png';
import boy from '../img/rejoan.jpg';
import crown from '../img/crown.png';
import glassesimoji from '../img/glassesimoji.png';
import Floating from '../FloatingDive/Floating';
import resume from './rejoanresume final.pdf';
const Intro = () => {
      return (
            <div className='intro' id=''>
                  <div className="i-left">
                        <div className="i-name">
                              <span>Hy! I Am </span>
                              <span className='typing'> Md Rejoan Molla</span>
                              <span>I pursue a challenging career in any dynamic organization where I shall have the opportunity to utilize my talent, skill, and prove my skill for professional career development.
                              </span>

                        </div>
                        <a href={resume} download>
                              <button className="button i-button">Download Resume</button>
                        </a>
                        <div className="i-icons">
                              <a href="https://github.com/MdRejoanMolla">
                                    <img src={Github} alt="" />
                              </a>
                              <a href="https://www.linkedin.com/in/md-rejoan-molla-08752b240/"> <img src={LinkIn} alt="" /></a>


                        </div>

                  </div >
                  <div className="i-right">
                        <img src={Vector1} alt="" />

                        <img src={Vector2} alt="" />
                        <img src={boy} alt="" />
                        <img style={{ top: '-10%', left: '-15%' }} src={glassesimoji} alt="" />
                        <div style={{ top: '-4%', left: '68%' }} className='floating-div'>
                              <Floating img={crown} txt1='Web' txt2='Developer' />
                        </div>
                  </div>

            </div >
      );
};

export default Intro;