import React from 'react'
import '../components/About2.CSS'
import AboutImg from '../assets/images/bannerimg/aboutbanner.png'
import { FaCheck } from "react-icons/fa";
import Tab from "../../public/data/TabAbout.json"


const About2 = () => {
  return (
    <>
    <section className='abouttwo'>
        <div className="container mt-5 mb-5 py-5">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
                    <div className='AboutTwoleftImg position-relative t-0'>
                        <img src={AboutImg} alt="about" className='position-absolute' />
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 " data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
                    <div className='rightContant mt-4 ms-3'>
                        <h2>Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero</h2>
                       <div className='nav_tabs mt-3'>
                            <ul class="nav">
                                <li class="nav-item pe-4">
                                    <a class="nav-link active" 
                                    id='one' 
                                    data-bs-toggle='tab' 
                                    role='tab' 
                                    aria-current="page" 
                                    href="nav-tabone">Saepe fuga</a>
                                </li>
                                <li class="nav-item ps-4 pe-4">
                                    <a class="nav-link" 
                                    id='two'
                                    data-bs-toggle='tab'
                                    role='tab'
                                    href="nav-tabtwo">Voluplyal</a>
                                </li>
                                <li class="nav-item ps-4 pe-4">
                                    <a class="nav-link" 
                                    id='three' 
                                    data-bs-toggle='tab' 
                                    role='tab'
                                    href="nav-tabthree">Corrupit</a>
                                </li>
                            </ul>
                                <div className="tab-pane" id='nav-tabone'>
                                    <div className='m-3'>
                                        <p>{Tab.subtitle}</p>
                                        <h4><FaCheck className='text-danger' />{Tab.c1title}</h4>
                                        <p>{Tab.c1para}</p>
        
                                        <h4><FaCheck className='text-danger'/>{Tab.c2title}</h4>
                                        <p>{Tab.c2para}</p>
        
                                        <h4><FaCheck className='text-danger' />{Tab.c3title}</h4>
                                        <p>{Tab.c3para}</p>
                                    </div>
                                </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='abouttwocount mt-5 mb-5'>
        <div className="container">
            <div className='row' >
                <div className="abouttwocount col-3 text-center mt-5 mb-5" data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
                    <h1 >232</h1>
                    <br />
                    <p className='underlineabouttwo'></p>
                    <p>Client</p>
                </div>
                <div className="abouttwocount col-3 text-center mt-5 mb-5" data-aos="fade-up" data-aos-duration="800"data-aos-offset="100">
                    <h1>521</h1>
                    <br />
                    <p className='underlineabouttwo'></p>
                    <p>Projects</p></div>
                <div className="abouttwocount col-3 text-center mt-5 mb-5" data-aos="fade-up" data-aos-duration="900"data-aos-offset="100">
                    <h1>1432</h1>
                    <br />
                    <p className='underlineabouttwo'></p>
                    <p>Houres of support</p>
                </div>
                <div className="abouttwocount col-3 text-center mt-5 mb-5" data-aos="fade-up" data-aos-duration="1000"data-aos-offset="100">
                    <h1>32</h1>
                    <br />
                    <p className='underlineabouttwo'></p>
                    <p>workers</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About2
