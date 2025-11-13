// import React from 'react'
// import '../components/Portfolio.css'


// const portfolioItems = [
//   { id: 1, image: '../../public/products/masonry-portfolio-1.jpg', title: 'App 1' },
//   { id: 2, image: '../../public/products/masonry-portfolio-2.jpg', title: 'Web 1' },
//   { id: 3, image: '../../public/products/masonry-portfolio-3.jpg', title: 'Card 1' },
//   { id: 4, image: '../../public/products/masonry-portfolio-4.jpg', title: 'App 2' },
//   { id: 5, image: '../../public/products/masonry-portfolio-5.jpg', title: 'Web 2' },
//   { id: 6, image: '../../public/products/masonry-portfolio-6.jpg', title: 'Card 2' },
//   { id: 7, image: '../../public/products/masonry-portfolio-7.jpg', title: 'Web 2' },
//   { id: 8, image: '../../public/products/masonry-portfolio-8.jpg', title: 'Card' },
//   { id: 9, image: '../../public/products/masonry-portfolio-9.jpg', title: 'Web 2' }
// ]

// const Portfolio = () => {
//   return (
//     <>
//       <section className='portfolio pt-5 pb-5'>
//         <div className='container'>
//           <div data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
//             <h6>PORTFOLIO</h6>
//             <h2>NECESSITATIBUS EIUS CONSEQUATUR</h2>
//           </div>

//           <div className='groupButtons pt-4 pb-4' data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
//             <button className="btn btn-danger me-2 pe-3 ps-3" type="button">All</button>
//             <button className="btn btn-danger me-2 pe-3 ps-3" type="button">App</button>
//             <button className="btn btn-danger me-2 pe-3 ps-3" type="button">Card</button>
//             <button className="btn btn-danger m-2 pe-3 ps-3" type="button">Web</button>
//           </div>

//           <div className="portfolioGrid" data-Aos="fade-up" data-aos-easing="linear" data-aos-offset="100">
//             {portfolioItems.map((item) => (
//               <div key={item.id} className='portfolioCard col-4'  >
//                 <div className='portfolio-item'>
//                   <img src={item.image} alt={item.title} className='img-fluid' />
//                   <h5 className='mt-2'>{item.title}</h5>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Portfolio
