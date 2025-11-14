import React from 'react'
import '../components/Clients.css'
// import Logos from '../../public/ClientLogo.json'
import Cl1 from '../assets/images/clientlogos/c1.png'
import Cl2 from '../assets/images/clientlogos/c2.png'
import Cl3 from '../assets/images/clientlogos/c3.png'
import Cl4 from '../assets/images/clientlogos/c4.png'
import Cl5 from '../assets/images/clientlogos/c5.png'
import Cl6 from '../assets/images/clientlogos/c6.png'

const Clients = () => {
  return (
   <>
   <section className='clients pt-4 pb-4'>
    <div className='container'>
        <div className='row gy-4 gx-5 align-items-center justify-content-center'>
            <div className='clientlogo col-12 col-sm-12 col-md-4 col-lg-2 text-center' >
                <img src={Cl1} className='w-100 p-4'  alt="clientlogo" />
            </div>
            <div className='clientlogo col-12 col-sm-12 col-md-4 col-lg-2 text-center' >
                <img src={Cl2} className='w-100 p-4' alt="clientlogo" />
            </div>
            <div className='clientlogo col-12 col-sm-12 col-md-4 col-lg-2 text-center' >
                <img src={Cl3} className='w-100 p-4' alt="clientlogo" />
            </div>
            <div className='clientlogo col-12 col-sm-12 col-md-4 col-lg-2 text-center' >
                <img src={Cl4} className='w-100 p-4 ' alt="clientlogo" />
            </div>
            <div className='clientlogo col-12 col-sm-12 col-md-4 col-lg-2 text-center' >
                <img src={Cl5} className='w-100 p-4' alt="clientlogo" />
            </div>
            <div className='clientlogo col-12 col-sm-12 col-md-4 col-lg-2 text-center'>
                <img src={Cl6} className='w-100 p-4' alt="clientlogo" />
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Clients
