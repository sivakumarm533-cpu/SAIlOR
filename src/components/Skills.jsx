import React from 'react'
import '../components/Skills.css'

const Skills = () => {
  return (
    <>
    <section className='skills mt-5 mb-5' data-aos="fade-up" data-aos-duration="700"data-aos-offset="100">
        <div className="container">
            <div>
                <h5>Skills</h5>
                <h1 className='underlineskill'></h1>
                <h3>CHECK OUR SKILLS</h3>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6 col-md-12">
                    <div className='progtesbarText d-flex justify-content-between'><p>HTML</p> <p>100%</p></div>
                    <div className="progress mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{width: "100%"}}></div>
                    </div>
                    <div className='progtesbarText d-flex justify-content-between'><p>CSS</p> <p>90%</p></div>
                    <div className="progress mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                    </div>
                    <div className='progtesbarText d-flex justify-content-between'><p>JAVASCRIPT</p> <p>75%</p></div>
                    <div className="progress  mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{width: "75%"}}></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className='progtesbarText d-flex justify-content-between'><p>PHP</p> <p>80%</p></div>
                    <div className="progress mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{width: "80%"}}></div>
                    </div>
                    <div className='progtesbarText d-flex justify-content-between'><p>WORLDPRESS/CMS</p> <p>90%</p></div>
                    <div className="progress mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                    </div>
                    <div className='progtesbarText d-flex justify-content-between'><p>PHOTOSHOPE</p> <p>55%</p></div>
                    <div className="progress mb-4" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{width: "55%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skills
