import React from 'react';
import logo from '../../../assets/img/mehtasecurity.png';
// import '../../../assets/css/style.css';

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" /></a> */}
        <a href="#" className="logo me-auto"><img src={logo} alt="" style={{ minHeight: '100px' }} /></a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li className="dropdown">
              <a href="#services">
                <span>Services</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="#">Career</a></li>
                <li><a href="https://www.nseindia.com/">NSE</a></li>
                <li><a href="https://www.bseindia.com/">BSE</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="https://www.mehtasecurity.in/login" className="get-started-btn scrollto">Login</a>
      </div>
    </header>
  );
}

export default Header;
