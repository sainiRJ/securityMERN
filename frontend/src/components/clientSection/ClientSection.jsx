
import React from 'react';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
import  client1 from '../../assets/img/clients/client-1.png';
import client2 from "../../assets/img/clients/client-2.png";
import client3 from "../../assets/img/clients/client-3.png"
import client4 from "../../assets/img/clients/client-4.png"
import client5 from "../../assets/img/clients/client-5.png"
import client6 from "../../assets/img/clients/client-6.png"
import client7 from "../../assets/img/clients/client-7.png"
import client8 from "../../assets/img/clients/client-8.png"
import "./clientSection.css"



// Import other client images...

const ClientSection = () => {
  // 
  return (
    <section id="clients" className="clients">
    <div className="container" data-aos="zoom-in">
          {/* Adding an additional class to make client in horizontal*/}
      <div className="clients-slider swiper " >
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide"><img src={client1} className="img-fluid" alt="" /></div>
          <div className="swiper-slide"><img src={client2} className="img-fluid" alt="" /></div>
          <div className="swiper-slide"><img src={client3} className="img-fluid" alt="" /></div>
          <div className="swiper-slide"><img src={client4} className="img-fluid" alt="" /></div>
          <div className="swiper-slide"><img src={client5} className="img-fluid" alt="" /></div>
          <div className="swiper-slide"><img src={client6} className="img-fluid" alt="" /></div>
          <div className="swiper-slide"><img src={client7} className="img-fluid" alt="" /></div>
          <div className="swiper-slide"><img src={client8} className="img-fluid" alt="" /></div>
        </div>
        <div class="swiper-pagination" >
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span>
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 3" aria-current="true"></span>
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span>
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span>
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6"></span>
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span>
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 8"></span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default ClientSection;

