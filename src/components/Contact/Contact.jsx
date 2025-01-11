import React from "react";

function Contact() {
  return (
    <div className="contact d-flex flex-column align-items-center">
      <span className="d-block fs-1 fw-bold">CONTACT SECTION</span>
      <div className="star position-relative mb-2">
        <i className="fa-solid fa-star text-white"></i>
      </div>
      <form className="myform w-50 mt-5">
        <div className="mb-4 field">
          
          <input
            type="text"
            className="form-control"
            placeholder="userName"
          />
          
        </div>
        <div className="mb-4 field">
          
          <input
            type="number"
            className="form-control"
            placeholder="userAge"
          />
          
        </div>
        <div className="mb-4 field">
          
          <input
            type="email"
            className="form-control"
            placeholder="userEmail"
          />
          
        </div>
        <div className="mb-4 field">
          
          <input
            type="password"
            className="form-control"
            placeholder="userPassword"
          />
          
        </div>
       
        
        <button className="btn">
          send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
