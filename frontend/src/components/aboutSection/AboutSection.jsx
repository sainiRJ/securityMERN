import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content-inner">
              <h3>WEALTH MANAGEMENT</h3>
              <p>
                Having served over 1,00,000 clients over the last 25 years, our team has witnessed all types of bull and bear markets and strongly believe that in order to protect oneself from the volatility and to generate returns consistently, one needs an effective wealth manager. We offer Wealth Management services to all our clients and work very closely with each client to understand their long-term and short-term goals and thereupon provide them a variety of investment opportunities. Our work doesn’t end there, from advising to executing to monitoring/evaluating we maintain a very proactive approach towards the wealth management aspect for our investors/clients.
              </p>
              <a href="#about" className="about-btn">
                <span>About us</span> <i className="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-receipt"></i>
                  <h4>Strong in-house research team</h4>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Goal based investment planners</h4>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-images"></i>
                  <h4>Strong domain knowledge in Mutual Fund industry</h4>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-shield"></i>
                  <h4>Process driven organization</h4>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-shield"></i>
                  <h4>Staggered investment approach</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          <i className="ri-check-double-line"></i> Sistema Asia Fund India is a Securities & Exchange Board of India registered category II Alternative Investment fund (AIF).
        </p>
        <p>
          <i className="ri-check-double-line"></i> Mehta is the exclusive partner with Sistema (A Russian Conglomerate with interest in Telecom, Retail, Real Estate, Technology, Healthcare etc.) for this fund
        </p>
        <p>
          <i className="ri-check-double-line"></i> Invests in Series B+ rounds of technology enabled portfolio companies located in
        </p>
        <p>
          <i className="ri-check-double-line"></i> India with gateway platform between India / SEA and Russia / Europe.
        </p>
        <p>
          <i className="ri-check-double-line"></i> Mid-Stage Investing is Under-Represented in India and offers an Attractive Playing Field.
        </p>
        <p>
          <i className="ri-check-double-line"></i> Experienced Team Has a Unique Blend of VC Investing, Operational Build-up and M&A Skills.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
