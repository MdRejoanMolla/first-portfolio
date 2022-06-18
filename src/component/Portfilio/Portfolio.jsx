import React from 'react';
import './Portfolio.css';
import six from '../img/2022-06-12 (11) (1).jpg';
import seven from '../img/2022-06-12 (5) (1).jpg';
import twelve from '../img/2022-06-12 (6).jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Portfolio = () => {
      return (
            <div className='portfolio' id='portfolio'>
                  <span>My Recently</span>
                  <span>Projects</span>
                  <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        grabCursor={true}
                        className='portfolio-slider'
                  >
                        <SwiperSlide className='swiper-slider'>
                              <a href="https://bicycle-hand.web.app/">
                                    <img src={six} alt="" />

                              </a>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slider'>
                              <a href="https://keen-quokka-807717.netlify.app/">
                                    <img src={seven} alt="" />
                              </a>
                        </SwiperSlide>
                        <SwiperSlide>
                              <a href="https://independent-service-a45e8.web.app/">
                                    <img src={twelve} alt="" />
                              </a>
                        </SwiperSlide>

                  </Swiper>
            </div>
      );
};

export default Portfolio;