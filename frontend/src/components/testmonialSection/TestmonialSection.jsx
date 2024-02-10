import React from 'react'
import testimonials_1 from '../../assets/img/testimonials/testimonials-1.jpg';
import testimonials_2 from '../../assets/img/testimonials/testimonials-2.jpg'
import testimonials_3 from '../../assets/img/testimonials/testimonials-3.jpg'
import testimonials_4 from '../../assets/img/testimonials/testimonials-4.jpg'
import testimonials_5 from '../../assets/img/testimonials/testimonials-5.jpg'

const TestmonialSection = () => {
  return (
    <section id="testimonials " className="testimonials ">
    <div className="container " data-aos="fade-up ">
      <div className="section-title ">
        <h2>Testimonials</h2>
        <p>I'm glad you're interested in collecting testimonials! Testimonials are valuable statements from clients, customers, or users who have had a positive experience with your product, service, or organization.</p>
      </div>

      <div className="testimonials-slider swiper " data-aos="fade-up " data-aos-delay="100 ">
        <div className="swiper-wrapper ">

          <div className="swiper-slide ">
            <div className="testimonial-wrap ">
              <div className="testimonial-item ">
                <img src={testimonials_1} className="testimonial-img " alt=" "/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left "></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right "></i>
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-slide ">
            <div className="testimonial-wrap ">
              <div className="testimonial-item ">
                <img src={testimonials_2} className="testimonial-img " alt=" "/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left "></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right "></i>
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-slide ">
            <div className="testimonial-wrap ">
              <div className="testimonial-item ">
                <img src={testimonials_3} className="testimonial-img " alt=" "/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left "></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right "></i>
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-slide ">
            <div className="testimonial-wrap ">
              <div className="testimonial-item ">
                <img src={testimonials_4} className="testimonial-img " alt=" "/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left "></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right "></i>
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-slide ">
            <div className="testimonial-wrap ">
              <div className="testimonial-item ">
                <img src={testimonials_5} className="testimonial-img " alt=" "/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left "></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right "></i>
                </p>
              </div>
            </div>
          </div>

        </div>
        <div class="swiper-pagination "></div>
      </div>

    </div>
  </section>  )
}

export default TestmonialSection