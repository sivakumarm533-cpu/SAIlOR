import React from 'react'
import '../components/Footer.css'
import { AiOutlineX } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-mg-5 col-sm-5 mt-5">
                    <h4 className='mb-4'>SAILOR</h4>
                    <h6>A108 Adam Street</h6>
                    <h6 className='mb-4'>New York, NY 535022</h6>
                    <h6><strong>Phone:</strong> +1 5589 55488 55</h6>
                    <h6 className='mb-4'><strong>Email:</strong> info@example.com</h6>
                    <div className='socialLinks mb-3'>
                        <a href="#"><AiOutlineX/></a>
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="col-lg-2 col-mg-3 col-sm-3 mt-5">
                    <h4 className='mb-4'>Useful Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Terme of services</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-mg-3 col-sm-4 mt-5">
                    <h4 className='mb-4'>Our Services</h4>
                    <ul>
                        <li>Web Design</li>
                        <li>Web development</li>
                        <li>Product Management</li>
                        <li>Marketing</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-mg-12 mt-5 mb-3">
                    <h4 className='mb-4'>Our Newsletter</h4>
                    <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>

                    <form action="post" method='summit'>
                        <div class="footerinput input-group mb-3">
                            <input type="text" class="form-control" aria-label="Subscribe" aria-describedby="inputGroup-sizing-default"/>
                            <button class="input-group-text bg-danger text-light" id="inputGroup-sizing-default">Subscribe</button>
                    </div>
                    </form>
                </div>
                <hr/>
                <div className="col-12 text-center">
                    <h6>© Copyright Sailor All Rights Reserved</h6>
                    <p>Designed by <span className='text-danger'>BootstrapMade</span> Distributed by <span className='text-danger'>ThemeWagon</span></p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer
