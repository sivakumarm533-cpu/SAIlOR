import React from 'react'
import '../components/Blog.css'
import Img from '/blog/image1.png'
import Img2 from '/blog/image2.png'
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";

const Blog = () => {
  return (
    <>
    <section className='blog' data-aos="fade-down" data-aos-duration="700" data-aos-offset="200">
        <div className="container">
            <div className="row">
                <div className='col-lg-8 col-md-12 col-sm-12 '>

                    {/* blog 1 */}
                    <div className='blogArtical mt-5 mb-5 shadow'>
                        <div className='ArticalImage img-fluid'>
                            <img src={Img} alt="articl" />
                        </div>
                        <div className='ArticalBody p-3 '>
                            <div className='ArticalHead'>
                                <h4>Est cum et quod quos aut ut et sit sunt Voluptate porro consequatur</h4>
                            </div>
                            <div className='ArticalInformation '>
                                <div className='Artical-icon d-flex gap-3 '>
                                    <span>
                                        <p><IoPersonCircleOutline/>  john dow</p>
                                    </span>
                                    <span>
                                        <p><CiClock2/>  Jan 1,2025</p>
                                    </span>
                                    <span>
                                        <p><AiOutlineMessage/>  12Comments</p>
                                    </span>
                                </div>
                            </div>
                            <div className='ArticalContant'>
                                <p>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
                            </div>
                            <div className='Artical-button me-3'>
                                <button className="btn btn-danger pe-3 ps-3 " type="button">Read More</button>
                            </div>
                        </div>
                    </div>


                    {/* blog2 */}
                    <div className='blogArtical mt-5 mb-5 shadow'>
                        <div className='ArticalImage img-fluid'>
                            <img src={Img} alt="articl" />
                        </div>
                        <div className='ArticalBody p-3 '>
                            <div className='ArticalHead'>
                                <h4>Est cum et quod quos aut ut et sit sunt Voluptate porro consequatur</h4>
                            </div>
                            <div className='ArticalInformation '>
                                <div className='Artical-icon d-flex gap-3 '>
                                    <span>
                                        <p><IoPersonCircleOutline/>  john dow</p>
                                    </span>
                                    <span>
                                        <p><CiClock2/>  Jan 1,2025</p>
                                    </span>
                                    <span>
                                        <p><AiOutlineMessage/>  12Comments</p>
                                    </span>
                                </div>
                            </div>
                            <div className='ArticalContant'>
                                <p>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
                            </div>
                            <div className='Artical-button me-3'>
                                <button className="btn btn-danger pe-3 ps-3 " type="button">Read More</button>
                            </div>
                        </div>
                    </div>



                    {/* blog3 */}
                    <div className='blogArtical mt-5 mb-5 shadow'>
                        <div className='ArticalImage img-fluid'>
                            <img src={Img} alt="articl" />
                        </div>
                        <div className='ArticalBody p-3 '>
                            <div className='ArticalHead'>
                                <h4>Est cum et quod quos aut ut et sit sunt Voluptate porro consequatur</h4>
                            </div>
                            <div className='ArticalInformation '>
                                <div className='Artical-icon d-flex gap-3 '>
                                    <span>
                                        <p><IoPersonCircleOutline/>  john dow</p>
                                    </span>
                                    <span>
                                        <p><CiClock2/>  Jan 1,2025</p>
                                    </span>
                                    <span>
                                        <p><AiOutlineMessage/>  12Comments</p>
                                    </span>
                                </div>
                            </div>
                            <div className='ArticalContant'>
                                <p>Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.</p>
                            </div>
                            <div className='Artical-button me-3'>
                                <button className="btn btn-danger pe-3 ps-3 " type="button">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Aside col-lg-4 col-md-12 col-sm-12 mt-5 mb-4 '>
                    <div className='Asidebar p-4 shadow'>
                        <h5>Search</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                            <button class="input-group-text bg-danger text-light" id="inputGroup-sizing-default">Search</button>
                        </div>

                        <h5>Categories</h5>
                        <ul className='fs-6'>
                            <li>Generel <small>(12)</small></li>
                            <li>LifeStyle <small>(14)</small></li>
                            <li>Traval <small>(16)</small></li>
                            <li>Design <small>(17)</small></li>
                            <li>Criavive <small>(11)</small></li>
                            <li>Edication <small>(10)</small></li>
                        </ul>

                        <div className='resentPost '>
                            <h5>Resent</h5>
                            <div className='row gap-4'>
                                <div className="col-3">
                                    <img src={Img2} className='rounded' alt="blog" style={{width:'100px'}}/>
                                </div>
                                <div className="col-8 ">
                                    <h6>Lorem ipsum dolor, sit amet</h6>
                                    <p style={{color:'gray'}}><CiClock2/>  Jan 1,2025</p>
                                </div>
                            </div>

                            <div className='row gap-4 mt-3 mb-3'>
                                <div className="col-3">
                                    <img src={Img2} className='rounded' alt="blog" style={{width:'100px'}}/>
                                </div>
                                <div className="col-8 ">
                                    <h6>Lorem ipsum dolor, sit amet</h6>
                                    <p style={{color:'gray'}}><CiClock2/>  Jan 1,2025</p>
                                </div>
                            </div>

                            <div className='row gap-4'>
                                <div className="col-3">
                                    <img src={Img2} className='rounded' alt="blog" style={{width:'100px'}}/>
                                </div>
                                <div className="col-8 ">
                                    <h6>Lorem ipsum dolor, sit amet</h6>
                                    <p style={{color:'gray'}}><CiClock2/>  Jan 1,2025</p>
                                </div>
                            </div>

                            
                        </div>

                        <div className='tags mt-3'>
                            <h5>Tags</h5>
                            <div className='tagnames '>
                                <button type="button" class="btn btn-sm btn-outline-secondary">IT</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary ms-2">App</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary ms-2">Web</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary ms-2">Bussiness</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary ms-2">Office</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary ms-2">Class</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary mt-2">Creative</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary ms-2 mt-2">Studio</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog
