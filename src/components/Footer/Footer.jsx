import React from 'react'

function Footer() {
  return (
    <>
    <div className='footer py-5'>
      <div className="container py-5">
        <div className="row">
            <div className="foot col-lg-4 d-flex flex-column align-items-center ">
                <h3>LOCATION</h3>
                <span className='d-block'>2215 John Daniel Drive</span>
                <span className='d-block'>Clark, MO 65243</span>
            </div>
            <div className="foot col-lg-4 d-flex flex-column align-items-center ">
                <h3>AROUND THE WEB</h3>
                <div className="icons d-flex">
                    <div className="item d-flex justify-content-center align-items-center"><i className='fa-brands fa-facebook'></i></div>
                    <div className="item d-flex justify-content-center align-items-center"><i className='fa-brands fa-twitter'></i></div>
                    <div className="item d-flex justify-content-center align-items-center"><i className='fa-brands fa-linkedin-in'></i></div>
                    <div className="item d-flex justify-content-center align-items-center"><i className='fa-solid fa-globe'></i></div>
                </div>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center">
                <h3>ABOUT FREELANCER</h3>
                <span className='d-block text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
                
            </div>
        </div>
      </div>

      
    </div>

    <div className=" copywrite container-fluid text-center py-4">
    <span>Copyright © Your Website 2025</span>
  </div>
  </>
  )
}

export default Footer
