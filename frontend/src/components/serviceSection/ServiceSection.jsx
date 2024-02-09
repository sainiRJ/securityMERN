import React from 'react';

const ServiceSection = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Equities and securities are terms commonly used in the world of finance and investing. They refer to different types of financial instruments that represent ownership or rights in a company, organization, or asset.</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-briefcase"></i>
              <h4><a href="#">Financial Planning</a></h4>
              <p>Financial planning is the process of setting and achieving personal or organizational financial goals by creating a comprehensive strategy to manage income, expenses, investments, and assets.</p>
            </div>
          </div>
          
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-card-checklist"></i>
              <h4><a href="#">IPO Service</a></h4>
              <p>An IPO (Initial Public Offering) service refers to the process and assistance provided by financial institutions, investment banks, or advisory firms to companies that are seeking to go public and offer their shares to the general public for the first time.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-bar-chart"></i>
              <h4><a href="#">Derivatives Broking</a></h4>
              <p>Derivatives broking involves facilitating the trading of financial instruments known as derivatives between buyers and sellers. Derivatives are financial contracts or instruments that derive their value from an underlying asset, such as stocks, bonds, commodities, currencies, or indices.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-binoculars"></i>
              <h4><a href="#">Fixed Deposits Stock</a></h4>
              <p>A fixed deposit (also known as a time deposit or term deposit) is a financial instrument offered by banks and other financial institutions. It allows individuals to deposit a certain amount of money for a fixed period at a predetermined interest rate.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-brightness-high"></i>
              <h4><a href="#">Holding Planning</a></h4>
              <p>"Holding planning" is not a standard financial term or concept that I am aware of. It's possible that you might be referring to a specific type of planning related to holding assets, investments, or positions, but without further context or details, I cannot provide a specific explanation.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="600">
              <i className="bi bi-calendar4-week"></i>
              <h4><a href="#">Mutual funds</a></h4>
              <p>Mutual funds are investment vehicles that pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers who make investment decisions on behalf of the fund's shareholders.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
