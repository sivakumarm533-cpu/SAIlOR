import React from 'react'
import Navbar from '../../components/Navbar'
import About2 from '../../components/About2'
import Footer from '../../components/Footer'
import Team from '../../components/Team'
import '../about/AboutUs.css'
import { Link } from 'react-router-dom'
import Skills from '../../components/Skills'

const AboutUs = () => {
  return (
    <>
    <Navbar /> 
    <section className="navhome pt-4  pb-4">
              <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                     <h5 className="mb-0">About</h5>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item text-danger"><a href="#"><Link to={"/"}>Home</Link></a></li>
                       <li className="breadcrumb-item active" aria-current="page">About</li>
                     </ol>
                  </nav>
                </div>
              </div>
          </section>     
    <About2 />
    <Team />
    <Skills/>
    <Footer />
    </>
  )
}

export default AboutUs
