import React from "react";
import "./Portfolio.css";
// import Sidebar from '../../img/sidebar.png';
// import Ecommerce from '../../img/ecommerce.png';
import MusicApp from "../../img/musicapp.png";
// import HOC from '../../img/hoc.png';
import slider1 from "../../img/slider1.jpg";
import slider2 from "../../img/slider2.jpg";
import slider3 from "../../img/slider3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span> Recent Projects</span>
      <span> Portfolio</span>

      {/* Slider  */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Portfolio;
