import React from 'react'

function About() {
  return (
    <div>
      <div className='about d-flex flex-column justify-content-center align-items-center'>
              
              <span className='d-block text-white fs-1 fw-bold'>ABOUT COMPONENT</span>
              <div className="star position-relative mb-2">
                  <i className='fa-solid fa-star text-white'></i>
              </div> 
              <div className="container px-5">
                <div className="row">
                    <div className="col-md-6">
                        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default About
