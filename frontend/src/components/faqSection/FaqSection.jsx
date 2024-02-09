import React from 'react'

const FaqSection = () => {
  return (
    <section id="faq " className="faq ">
    <div className="container " data-aos="fade-up ">

      <div className="section-title ">
        <h2>Frequently Asked Questions</h2>
      </div>

      <ul className="faq-list accordion " data-aos="fade-up ">

        <li>
          <a data-bs-toggle="collapse " className="collapsed " data-bs-target="#faq1 ">How Do I Open an Account with Your Broking Firm? <i className="bx bx-chevron-down icon-show "></i><i className="bx bx-x icon-close "></i></a>
          <div id="faq1 " className="collapse " data-bs-parent=".faq-list ">
            <p>
              Opening an account with our broking firm is easy. Simply visit our website, fill out the online application form, and follow the instructions to submit the required documents.
            </p>
          </div>
        </li>

        <li>
          <a data-bs-toggle="collapse " data-bs-target="#faq2 " className="collapsed ">What Services Does Your Broking Firm Offer? <i className="bx bx-chevron-down icon-show "></i><i className="bx bx-x icon-close "></i></a>
          <div id="faq2 " className="collapse " data-bs-parent=".faq-list ">
            <p>
              Our broking firm offers a range of services, including stock trading, options trading, commodity trading, portfolio management, research and analysis, and investment advisory.
            </p>
          </div>
        </li>

        <li>
          <a data-bs-toggle="collapse " data-bs-target="#faq3 " className="collapsed ">What Types of Accounts Do You Offer? <i className="bx bx-chevron-down icon-show "></i><i className="bx bx-x icon-close "></i></a>
          <div id="faq3 " className="collapse " data-bs-parent=".faq-list ">
            <p>
             We offer various types of accounts, including individual accounts, joint accounts, corporate accounts, and retirement accounts, each tailored to different client needs.
            </p>
          </div>
        </li>

        <li>
          <a data-bs-toggle="collapse " data-bs-target="#faq4 " className="collapsed ">How Can I Place Trades? <i className="bx bx-chevron-down icon-show "></i><i className="bx bx-x icon-close "></i></a>
          <div id="faq4 " className="collapse " data-bs-parent=".faq-list ">
            <p>
             You can place trades through our online trading platform, mobile app, or by contacting our trading desk directly. We provide user-friendly tools for executing trades efficiently.
            </p>
          </div>
        </li>

        <li>
          <a data-bs-toggle="collapse " data-bs-target="#faq5 " className="collapsed ">How Do You Ensure the Security of My Account and Personal Information? <i className="bx bx-chevron-down icon-show "></i><i className="bx bx-x icon-close "></i></a>
          <div id="faq5 " className="collapse " data-bs-parent=".faq-list ">
            <p>
              Security is a top priority for us. We employ advanced encryption and authentication measures to safeguard your account and personal information. Our systems undergo regular security audits.
            </p>
          </div>
        </li>

        <li>
          <a data-bs-toggle="collapse " data-bs-target="#faq6 " className="collapsed ">Do You Offer Educational Resources for Traders and Investors? <i className="bx bx-chevron-down icon-show "></i><i className="bx bx-x icon-close "></i></a>
          <div id="faq6 " className="collapse " data-bs-parent=".faq-list ">
            <p>
              Absolutely, we offer educational resources such as webinars, seminars, and tutorials to help traders and investors enhance their knowledge and skills.
            </p>
          </div>
        </li>

      </ul>

    </div>
  </section>
    )
}

export default FaqSection