import React, { useState } from "react";
import card1 from "./../../assets/card1.png"
import card2 from "./../../assets/card2.png"
import card3 from "./../../assets/card3.png"


function Portfolio() {

  let [x,setx]=useState()
  
  function pop(y)
  {
    setx(y);
  }

  return (
    <div className="portfolio d-flex flex-column align-items-center ">


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          
          <div class="modal-body">
            <img className="w-100" src={x} alt="" />
          </div>
          
        </div>
      </div>
    </div>
    
      <span className="d-block fs-1 fw-bold">PORTFOLIO COMPONENT</span>
      <div className="star position-relative mb-2">
        <i className="fa-solid fa-star text-white"></i>
      </div>

      <div className="container py-4">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <div class="card position-relative" >
              <img src={card1} className ="rounded-2  card-img-top" alt="..." />
              <div onClick={()=>{pop(card1)}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer rounded-2 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                <i className="plus fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div class="card " >
              <img src={card2} className ="rounded-2  card-img-top" alt="..." />
              <div onClick={()=>{pop(card2)}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer rounded-2 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                <i className="plus fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div class="card " >
              <img src={card3} className ="rounded-2  card-img-top" alt="..." />
              <div onClick={()=>{pop(card3)}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer rounded-2 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                <i className="plus fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div class="card " >
              <img src={card1} className ="rounded-2  card-img-top" alt="..." />
              <div onClick={()=>{pop(card1)}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer rounded-2 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                <i className="plus fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div class="card " >
              <img src={card2} className ="rounded-2  card-img-top" alt="..." />
              <div onClick={()=>{pop(card2)}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer rounded-2 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                <i className="plus fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div class="card " >
              <img src={card3} className ="rounded-2  card-img-top" alt="..." />
              <div onClick={()=>{pop(card3)}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="layer rounded-2 w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-center align-items-center">
                <i className="plus fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Portfolio;
