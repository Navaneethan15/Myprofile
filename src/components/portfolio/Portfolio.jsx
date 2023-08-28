import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useEffect } from 'react';
import img33 from '../../img/profile1.jpg';
// import 'Swiper/css'; 


const Portfolio =() =>{
    return(
        <div className="portfolio">
        
    {/* heading */}
    <span> Recent Projects</span>
    <span> Portfolio</span>

        {/* Slider  */}
       


    <Swiper
      spaceBetween={60}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
      
        </div>
    )
}
export default Portfolio;