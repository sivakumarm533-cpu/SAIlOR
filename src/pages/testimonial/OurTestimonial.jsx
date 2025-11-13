import React from 'react'
import Testimonial from '../../components/Testimonial'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const OurTestimonial = () => {
  return (
    <>
    <Navbar />
    <section className="navhome pt-4  pb-4">
              <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                     <h5 className="mb-0">Testimonial</h5>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item text-danger"><a href="#"><Link to={"/"}>Home</Link></a></li>
                       <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
                     </ol>
                  </nav>
                </div>
              </div>
          </section> 
    <Testimonial />
    <Footer />
    </>
  )
}

export default OurTestimonial
