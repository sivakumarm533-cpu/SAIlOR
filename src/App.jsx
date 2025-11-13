import './App.css'
import AboutUs from './pages/about/AboutUs';
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router";
import OurServices from './pages/services/OurServices';
import OurPortfolio from './pages/portfolio/OurPortfolio';
import OurPricing from './pages/pricing/OurPricing';
import OurBlog from './pages/blog/OurBlog';
import OurContact from './pages/contact/OurContact';
import OurTeam from './pages/team/OurTeam';
import OurTestimonial from './pages/testimonial/OurTestimonial';


function App() {

  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path='/testimonial' element={<OurTestimonial />}/>
        <Route path="/services" element={<OurServices />} />
        <Route path="/portfolio" element={<OurPortfolio />}/>
        <Route path="/pricing" element={<OurPricing />}/>
        <Route path="/blog" element={<OurBlog />}/>
        <Route path="/contact" element={<OurContact />}/>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
