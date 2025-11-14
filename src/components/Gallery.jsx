import { useEffect , useState } from 'react'
import '../components/Gallery.css'
import Masonry from "react-masonry-css"; 

const Gallery = () => {

  const breakpointColumnsObj = {
    default: 3, // 3 columns for large screens
    800: 2,     // 2 columns below 700px
    500: 1      // 1 column below 400px
  };


    const [gallery,setGallery] =useState([])

    useEffect(()=>{
        fetch("/Portfolio.json")
        .then ((res)=>res.json())
        .then ((data)=>setGallery(data))
        .catch((err)=> console.log("error in feath data",err))
    })

  return (
    <>
    <div className="container">
          <div className='groupButtons pt-4 pb-4 text-center' data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
            <button className="btn btn-danger me-2 pe-3 ps-3" type="button">All</button>
            <button className="btn btn-outline-danger me-2 pe-3 ps-3 " type="button">App</button>
            <button className="btn btn-outline-danger me-2 pe-3 ps-3" type="button">Card</button>
            <button className="btn btn-outline-danger m-2 pe-3 ps-3" type="button">Web</button>
          </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column" >
          {gallery.map((image) => (
        <div key={image.id} className='gallearycard'>
          <div className='galleryImage'>
            <img
            src={image.Url}
            alt='images'
            style={{ width: "100%", borderRadius: "8px" }}
           />
           <div className='gallerytext p-2 ps-3'>
            <h4>{image.title}</h4>
            <p>{image.description}</p>
          </div>
          </div>
          
        </div>

        
      ))}

        </Masonry>
    </div>
    </>
  )
}

export default Gallery
