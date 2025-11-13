import React from 'react'
import '../home/Home.css'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Clients from '../../components/Clients'
// import Services from '../../components/Services'
// import Portfolio from '../../components/Portfolio'
import Footer from '../../components/Footer'
import ServiesTwo from '../../components/ServiesTwo'
import Gallery from '../../components/Gallery'
// import Form from '../../hooks/Form'

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <section className='about pt-5 pb-5'>
        <div className='container'>
            <div data-aos="fade-down" data-aos-duration="700">
                <h6>ABOUT</h6>
                <h1 className='underlineabout'></h1>
                <h2>ABOUT US</h2>
            </div>
         </div>
         <About />
    </section> 
    
    <Clients />
    <ServiesTwo />
    <section className='gallery mt-5 mb-5' data-Aos="fade-up" data-aos-easing="linear" data-aos-offset="150">
        <div className='container'>
          <div data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
            <h6>PORTFOLIO</h6>
            <h1 className='underlineportfolio'></h1>
            <h2>NECESSITATIBUS EIUS CONSEQUATUR</h2>
          </div>
        </div>
        <Gallery/>
    </section>
    <Footer />
    </>
  )
}

export default Home
