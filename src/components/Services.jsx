import React, { useEffect } from 'react'
import '../components/Services.css'
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineViewList } from "react-icons/md";
import { HiMiniChartBar } from "react-icons/hi2";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import { AiFillSun } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        Aos.init();
    })
  return (
    <>
    <section className='services pt-5 pb-5'>
        <div className='container'>
            <div className='row '>
                <div class="col-lg-6 col-sm-12 " data-Aos="fade-up" >

                    
                    {/* <div className="row">
                        <div className="col-sm-2 col-12">
                            <FaBriefcase className='icon' />
                        </div>
                        <div className="col-sm-10 col-12">
                            <h5><a href="#">Lorem Ipsum</a></h5>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div> */}
                    <div class="serviceitem d-flex">
                         <FaBriefcase className='icon' />
                    <div className='servicesContent'>
                         <h5><a href="#">Lorem Ipsum</a></h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    </div>
                </div>


                <div class="col-lg-6 col-sm-12 " >
                    <div class="serviceitem d-flex">
                         <MdOutlineViewList className='icon' />
                    <div className='servicesContent'>
                         <h5><a href="#">Lorem Ipsum</a></h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6 col-sm-12  " >
                    <div class="serviceitem d-flex">
                         <HiMiniChartBar className='icon' />
                    <div className='servicesContent'>
                         <h5><a href="#">Lorem Ipsum</a></h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6 col-sm-12  " >
                    <div class="serviceitem d-flex">
                         <FaMagnifyingGlassDollar className='icon' />
                    <div className='servicesContent'>
                         <h5><a href="#">Lorem Ipsum</a></h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6 col-sm-12  " >
                    <div class="serviceitem d-flex">
                         <AiFillSun className='icon' />
                    <div className='servicesContent'>
                         <h5><a href="#">Lorem Ipsum</a></h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    </div>
                </div>

                <div class="col-lg-6 col-sm-12  " >
                    <div class="serviceitem d-flex">
                         <FaCalendarAlt className='icon' />
                    <div className='servicesContent'>
                         <h5><a href="#">Lorem Ipsum</a></h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
    </>
  )
}

export default Services


