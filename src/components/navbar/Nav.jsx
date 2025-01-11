import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="position-sticky top-0 z-3 ">
      <nav className="myNav navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand text-white fs-2 fw-bold" to={""}>
          START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to={"about"}>
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to={"portfolio"}>
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-bold" to={"contact"}>
                  CONTACT
                </NavLink>
              </li>
             </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
