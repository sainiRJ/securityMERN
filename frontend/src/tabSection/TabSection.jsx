import React from 'react';

const TabSection = () => {
  return (
    <section id="tabs" className="tabs">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex">
          <li className="nav-item col-3">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <i className="ri-gps-line"></i>
              <h4 className="d-none d-lg-block">Financial Planning</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i className="ri-body-scan-line"></i>
              <h4 className="d-none d-lg-block">Fixed Deposits Stock</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
              <i className="ri-sun-line"></i>
              <h4 className="d-none d-lg-block">Holding Planning</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
              <i className="ri-store-line"></i>
              <h4 className="d-none d-lg-block">Derivatives Broking</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                <p className="fst-italic">
                  Financial planning is the process of setting and achieving personal or organizational financial goals by creating a comprehensive strategy to manage income, expenses, investments, and assets. It involves analyzing your current financial situation, identifying your financial goals, and developing a roadmap to reach those goals while considering factors such as risk tolerance, time horizon, and tax implications.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Goal Setting: Clearly define short-term and long-term financial goals. These goals could include saving for retirement, buying a home, paying for education, creating an emergency fund, etc.</li>
                  <li><i className="ri-check-double-line"></i> Budgeting: Create a detailed budget that outlines your income and expenses. This helps you track your spending, identify areas where you can save money, and allocate funds toward your goals.</li>
                  <li><i className="ri-check-double-line"></i> Investment Planning: Determine how to allocate your investments across various asset classes (stocks, bonds, real estate, etc.) based on your risk tolerance, time horizon, and financial goals. This also involves selecting specific investment vehicles, such as mutual funds, stocks, or exchange-traded funds (ETFs).</li>
                  <li><i className="ri-check-double-line"></i> Risk Management: Evaluate your insurance needs, including health insurance, life insurance, disability insurance, and liability insurance, to protect yourself and your family from unexpected events.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src="https://www.mehtasecurity.in/public/frontend/frontassets/img/tabs-1.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <p>
                  A fixed deposit (also known as a time deposit or term deposit) is a financial instrument offered by banks and other financial institutions. It allows individuals to deposit a certain amount of money for a fixed period at a predetermined interest rate. The principal amount and interest earned are paid back to the depositor at the end of the fixed period.
                </p>
                <p className="fst-italic">
                  Guaranteed Returns: Fixed deposits offer a guaranteed return on your investment. The interest rate is fixed at the time of deposit placement and remains constant throughout the tenure.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Low Risk: Fixed deposits are considered low-risk investments because the principal amount is generally secured, and the interest rate is predetermined.</li>
                  <li><i className="ri-check-double-line"></i> Liquidity: While fixed deposits have a fixed term, some banks offer the option of premature withdrawal, although it may come with penalties or reduced interest rates.</li>
                  <li><i className="ri-check-double-line"></i> Income Stream: Fixed deposits can provide a steady source of income, especially for retirees or those seeking stable returns.</li>
                  <li><i className="ri-check-double-line"></i> Inflation Risk: The returns from fixed deposits might not keep up with inflation, which could erode the purchasing power of your money over time.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="https://www.mehtasecurity.in/public/frontend/frontassets/img/tabs-2.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <p>
                  If you could provide more information or clarify what you mean by "holding planning," I would be happy to assist you further. For example, are you referring to holding period planning, estate planning, investment holding strategies, or something else entirely? The more details you provide, the better I can assist you.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> "Holding planning" is not a standard financial term or concept that I am aware of. It's possible that you might be referring to a specific type of planning related to holding assets, investments, or positions, but without further context or details, I cannot provide a specific explanation.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="https://www.mehtasecurity.in/public/frontend/frontassets/img/tabs-3.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <p>
                  Derivatives broking involves facilitating the trading of financial instruments known as derivatives between buyers and sellers. Derivatives are financial contracts or instruments that derive their value from an underlying asset, such as stocks, bonds, commodities, currencies, or indices. The primary role of a derivatives broker is to act as an intermediary between traders who want to buy or sell these derivative contracts.
                </p>
                <p className="fst-italic">
                  Matching Buyers and Sellers: Derivatives brokers connect buyers and sellers who are interested in trading derivative contracts. Buyers may be looking to speculate on price movements, hedge their existing positions, or manage risk, while sellers may be looking to profit from market movements or offset their exposure.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Executing Trades: Once a buyer and a seller agree on the terms of a derivative contract, the broker facilitates the execution of the trade. This involves ensuring that the contract's specifications, such as contract size, expiration date, strike price (if applicable), and other relevant details, are accurate.</li>
                  <li><i className="ri-check-double-line"></i> Providing Market Information: Derivatives brokers offer market insights, real-time price quotes, and other relevant information to assist traders in making informed decisions. They help clients understand the potential risks and rewards associated with different derivative contracts.</li>
                  <li><i className="ri-check-double-line"></i> Liquidity: Brokers contribute to market liquidity by bringing together a wide range of market participants, making it easier for traders to buy or sell derivatives contracts quickly and efficiently.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="https://www.mehtasecurity.in/public/frontend/frontassets/img/tabs-4.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabSection;
