import React from 'react'
import  Header from "../../common/Header/Header"
import HeroSection from '../../heroSection/HeroSection'
import ClientSection from '../../clientSection/ClientSection';
import AboutSection from '../../aboutSection/AboutSection';
import CountSection from '../../../countSection/CountSection';
import TabSection from '../../../tabSection/TabSection';
import ServiceSection from '../../serviceSection/ServiceSection';
import PortfolioSection from '../../portfolioSection/PortfolioSection';
import TestmonialSection from '../../testmonialSection/TestmonialSection';
import PriceSection from '../../priceSection/PriceSection';
import FaqSection from '../../faqSection/FaqSection';
import TeamSection from '../../teamSection/TeamSection';
import ContactSection from '../../contactSection/ContactSection';
import Footer from '../../common/Footer/Footer'
const LandingPage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ClientSection/>
    <AboutSection/>
    <CountSection/>
    <TabSection/>
    <ServiceSection/>
    <PortfolioSection/>
    <TestmonialSection/>
    <PriceSection/>
    <FaqSection/>
    <TeamSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default LandingPage