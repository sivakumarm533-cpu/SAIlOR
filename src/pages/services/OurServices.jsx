import React from 'react'
import Navbar from '../../components/Navbar'
// import Services from '../../components/Services'
import Footer from '../../components/Footer'
import ServiesTwo from '../../components/ServiesTwo'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (
    <>
    <Navbar />
    {/* <Services /> */}
    <section className="navhome pt-4  pb-4">
          <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                 <h5 className="mb-0">Services</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item text-danger"><a href="#"><Link to={"/"}>Home</Link></a></li>
                   <li className="breadcrumb-item active" aria-current="page">Services</li>
                 </ol>
              </nav>
            </div>
          </div>
      </section>
    <ServiesTwo />
    <Footer />
    </>
  )
}

export default OurServices
