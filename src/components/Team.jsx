import React from 'react'
import '../components/Team.css'
import '../components/Footer.css'
import { AiOutlineX } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const team =[
    {id:1, image:'/products/team-1.jpg' ,name:"walter wight" ,position:"Chiff Excutive officer" ,descrioption :"Explicabo voluptatem mollitia et repellat qui dolorum quasi"},
    {id:2, image:'/products/team-2.jpg' ,name:"Sarra jamson" ,position:"Product Manager" ,descrioption :"Explicabo voluptatem mollitia et repellat qui dolorum quasi"},
    {id:3, image:'/products/team-3.jpg' ,name:"William romer" ,position:"CTO" ,descrioption :"Explicabo voluptatem mollitia et repellat qui dolorum quasi"},
    {id:4, image:'/products/team-4.jpg' ,name:"Amada josh" ,position:"Accountant" ,descrioption :"Explicabo voluptatem mollitia et repellat qui dolorum quasi"}
]

const Team = () => {
  return (
    <>
    <section className='team my-5 mx-2'>
        <div className="container">
            <div className="row d-flex gap-4 justify-content-center">
                {team.map((members)=>(
                    <div className="employee col-lg-6 col-md-6 col-sm-12 shadow d-flex" data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
                    <div className='employeeImg mt-4 ms-3 me-3'>
                        <img src={members.image} alt="Team" className='h-50 rounded ' />
                    </div>
                    <div className='employeedetaile ms-3 mt-4'>
                        <h3>{members.name}</h3>
                        <h6>{members.position}</h6>
                        <span><hr className='w-25' /></span>
                        <p>{members.descrioption}</p>
                        <div className='teamSocialLinks mb-2'>
                            <a href="#"><AiOutlineX/></a>
                            <a href="#"><FaFacebook/></a>
                            <a href="#"><FaInstagram/></a>
                            <a href="#"><FaLinkedin/></a>
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

export default Team
