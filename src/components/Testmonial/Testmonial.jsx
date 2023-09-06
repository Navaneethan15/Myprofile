import React from 'react'
import './Testmonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testmonial = () => {
    const clients=[
        {
            img: profilePic1,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic2,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic3,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic4,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },

    ]


  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients alwys get </span>
            <span>Exceptional Work</span>
            <span> Form me...</span>
            <div className="blur t-blur1" style={{background: "var(--puple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
           
        </div>
            {/* slider */}
    <Swiper
    
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{clickable: true}}
    
    >
    {clients.map((client, index) => {
        return(
            <SwiperSlide key={index}>
                <img src={client.img} alt="" />
                <span> {client.review}</span>
            </SwiperSlide>
        )
    })}
    
    </Swiper>


    </div>
  )
}

export default Testmonial