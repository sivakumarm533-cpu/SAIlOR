import React from 'react'
import '../components/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='Navbar'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navcontainer container p-1">
          <div className="logo">
            <a className="navbar-brand" to="/"><Link to={"/"} style={{fontSize:"26px"}}>SAILOR</Link></a>
          </div>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item ">
                <a className="nav-link active" to="/"><Link to={"/"}>Home</Link></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Link to={"/about"}>About</Link></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" to="/about"><Link to={"/about"}>About Us</Link></a></li>
                  <li><a className="dropdown-item" to="#"><Link to={"/team"}>Team</Link></a></li>
                  <li><a className="dropdown-item" to="#"><Link to={"/testimonial"}>Testimonial</Link></a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/server"><Link to={"/services"}>Services</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/portfolio"><Link to={"/portfolio"}>Portfolio</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/pricing"><Link to={"/pricing"}>Pricing</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/blog"><Link to={"/blog"}>Blog</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/contact"><Link to={"/contact"}>Contact</Link></a>
              </li>
            </ul>

            <form className="d-flex gap-2">
              <button className="btn btn-danger pe-3 ps-3" type="button">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
