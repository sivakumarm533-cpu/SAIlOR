import React from 'react'
import '../components/Pricing.css'

const Pricing = () => {
  return (
    <>
    <section className="pricing mt-5 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="700">
                    <div class="card text-center mt-3 shadow-sm ">
                            <div class="card-header pt-3 pb-3">
                                Free
                            </div>
                        <div class="card-body mt-4 mb-4">
                        <h4 class="card-title"><sup>$</sup>0<span>/month</span></h4>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                        </div>
                        <div class="card-footer text-body-secondary">
                            <button className="btn btn-danger pe-4 ps-4" type="button">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="900">
                    <div class="card text-center mt-3 shadow-sm">
                            <div class="card-header bg-danger pt-3 pb-3 text-light">
                                Business
                            </div>
                        <div class="card-body mt-4 mb-4">
                        <h4 class="card-title"><sup>$</sup>19<span>/month</span></h4>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                        </div>
                        <div class="card-footer text-body-secondary">
                            <button className="btn btn-danger pe-4 ps-4" type="button">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                    <div class="card text-center mt-3 shadow-sm">
                            <div class="card-header pt-3 pb-3">
                                Developer
                            </div>
                        <div class="card-body mt-4 mb-4">
                        <h4 class="card-title"><sup>$</sup>0<span>/month</span></h4>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                        </div>
                        <div class="card-footer text-body-secondary">
                            <button className="btn btn-danger pe-4 ps-4" type="button">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" data-aos="fade-up" data-aos-duration="1100">
                    <div class="card text-center mt-3 shadow-sm">
                            <div class="card-header pt-3 pb-3">
                                Ulitmate
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">Advanced<span class="visually-hidden">unread messages</span></span>
                            </div>
                        <div class="card-body mt-4 mb-4">
                        <h4 class="card-title"><sup>$</sup>0<span>/month</span></h4>
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                                <li>Pharetra massa</li>
                                <li>Massa ultricies mi</li>
                            </ul>
                        </div>
                        <div class="card-footer text-body-secondary">
                            <button className="btn btn-danger pe-4 ps-4" type="button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Pricing
