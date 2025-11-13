import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Blog from '../../components/Blog'
import { Link } from 'react-router-dom'

const OurBlog = () => {
  return (
    <>
    <Navbar />
    <section className="navhome pt-4  pb-4">
          <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                 <h5 className="mb-0">Blog</h5>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item text-danger"><a href="#"><Link to={"/"}>Home</Link></a></li>
                   <li className="breadcrumb-item active" aria-current="page">Blog</li>
                 </ol>
              </nav>
            </div>
          </div>
      </section>
    <Blog />
    <Footer />
    </>
  )
}

export default OurBlog
