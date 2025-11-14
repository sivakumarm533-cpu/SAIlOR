import React from 'react'
import '../components/Testimonial.css'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";


const testimonial =[
    {id:1 ,image:'/products/t1.png' ,name:"Saul Goodman" ,position:"Ceo & Founder" ,description:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."},
    {id:2 ,image:'/products/t2.png' ,name:"Sara Wilsson" ,position:"Designer" ,description:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et."},
    {id:3 ,image:'/products/t3.png' ,name:"Jena Karlis" ,position:"Store Owner" ,description:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et."},
    {id:4 ,image:'/products/t4.png' ,name:"Metta jhon" ,position:"Freelancer" ,description:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et."}
]

const Testimonial = () => {
  return (
    <>
    <section className='testimonial my-5 mx-2'>
    <div className="container">
    <div className='row d-flex justify-content-center'>
            {testimonial.map((person) => (
              <div className="heads col-6 shadow d-flex m-2" data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
                                  <div key={person.id} className='headsImg mt-5 ms-3 me-3'>
                                      <img src={person.image} alt="Team" />
                                  </div>
                                  <div className='headsdetaile ms-3 mt-4'>
                                      <h3>{person.name}</h3>
                                      <h4>{person.position}</h4>
                                      <p><RiDoubleQuotesL className='text-danger'/> {person.description}<RiDoubleQuotesR className='text-danger'/> </p>
                                  </div>
                              </div>
            ))}
          </div>
          </div>
        </section>  
    </>
  )
}

export default Testimonial
