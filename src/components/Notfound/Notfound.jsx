import React from 'react'
import notfound from "./../../assets/notfound.png"

function Notfound() {
  return (
    <div className='text-center'>
        <p className='fw-bold fs-2 text-info'>NOT FOUND</p>
      <img src={notfound} alt="" className='w-75'/>
    </div>
  )
}

export default Notfound
