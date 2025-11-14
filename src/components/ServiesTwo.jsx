import React, { useEffect } from 'react'
import '../components/Services.css'
import Servicesdata from '../data/Services.json'
import Aos from 'aos';
import "aos/dist/aos.css";

const ServiesTwo = () => {
    useEffect( () => {
        Aos.init();
    }
    )
  return (
    <>
    <section className='serviestwo mt-5 mb-5'>
        <div className="container serviceContainer">
            <div className="row">
                {Servicesdata.map((data)=>(
                        <div key={data.id} className="col-lg-6 col-sm-12 " data-Aos="flip-up" data-aos-easing="linear" data-aos-offset="150">
                    <div className="serviceitem row d-flex align-items-center g-2  mt-3">
                        <div className="icon col-2 ps-4">
                            <img src={data.icon} alt="srv" style={{width:"40px", filter: "hue-rotate(355deg)"}} />
                        </div>
                        <div className="servicesContent col-10 p-3">
                           <h5>{data.title}</h5>
                           <p>{data.description}</p>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </section>
    </>
  )
}

export default ServiesTwo
