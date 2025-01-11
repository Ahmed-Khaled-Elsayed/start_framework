import React from 'react'
 import avatar from './../../assets/avatar.svg'

function Home() {
  return (
    <div className='home d-flex flex-column justify-content-center align-items-center'>
        <div className="avatar">
            <img className='w-100' src={avatar} alt="" />
        </div>
        <span className='d-block text-white fs-1 fw-bold'>START FRAMEWORK</span>
        <div className="star position-relative mb-2">
            <i className='fa-solid fa-star text-white'></i>
        </div> 
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}

export default Home
