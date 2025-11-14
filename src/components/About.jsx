import React from 'react'
import '../components/About.css'
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import AboutInfo from "../data/AboutInfo.json"

const About = () => {
  return (
    <>
    <div className="container">
            <div className='row pt-5'>
                <div className='col-lg-6 col-md-12 col-sm-12'data-aos="fade-down" data-aos-duration="700" data-aos-offset="100">
                    <p>{AboutInfo.title}</p>
                    <div className='aboutList'>
                    <ul>
                        <li><MdOutlineTaskAlt />{AboutInfo.points}</li>
                        <li><MdOutlineTaskAlt />{AboutInfo.pointstwo}</li>
                        <li><MdOutlineTaskAlt />{AboutInfo.pointsthree}</li>
                    </ul>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'data-aos="fade-down" data-aos-duration="700"data-aos-offset="100">
                    <p>{AboutInfo.titletwo}</p>
                    <button class="btn btn-danger pe-3 ps-3" type="submit">Read More <FaArrowRight /> </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
