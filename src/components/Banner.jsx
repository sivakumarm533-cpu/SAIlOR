import React from 'react'
import '../components/Banner.css'

const banner = () => {

  return (
    <>
    <section className='banner'>
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div id='carousel-imageOne' class="carousel-item active">
        {/* image */}
      {/* <img src={ban1} class=" d-block  img-fluid" alt="..."/> */}
      {/* overlay */}
       <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
       {/* caption */}
      <div class="carousel-caption d-md-block">
        <h1  data-aos="fade-down" data-aos-duration="1100">Welcome to Sailor</h1>
        <p className='mt-5' data-aos="fade-down" data-aos-duration="700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button class="btn btn-danger mt-2 pe-4 ps-4" type="submit" data-aos="fade-up" data-aos-duration="1000" >Get Started</button>
      </div>
    </div>
    <div id='carousel-imageTwo' class="carousel-item ">
        {/* image */}
      {/* <img src={ban2} class="d-block w-100 h-100 img-fluid" alt="..."/> */}
      {/* overlay */}
       <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
       {/* caption */}
      <div class="carousel-caption  d-md-block">
        <h1 data-aos="fade-down" data-aos-duration="1100" >At vero eos et accusamus</h1>
        <p className='mt-5' data-aos="fade-down" data-aos-duration="700" >Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
        <button class="btn btn-danger mt-2 pe-4 ps-4" type="submit" data-aos="fade-up" data-aos-duration="1000" >Get Started</button>
      </div>
    </div>
    <div id='carousel-imageThree' class="carousel-item ">
        {/* image */}
      {/* <img src={ban3} class="d-block w-100 h-100 img-fluid" alt="..."/> */}
      {/* overlay */}
       <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
       {/* caption */}
      <div class="carousel-caption d-md-block">
        <h1 data-aos="fade-down" data-aos-duration="1100" >Temporibus autem quibusdam</h1>
        <p className='mt-5' data-aos="fade-down" data-aos-duration="700" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button class="btn btn-danger mt-2 pe-4 ps-4" type="submit" data-aos="fade-up" data-aos-duration="1000" >Get Started</button>
      </div>
    </div>
  </div>
  <button id='prev' class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>
    </>
  )
}

export default banner
