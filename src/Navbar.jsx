import React from "react";
import resume from './images/paraskamble_full_stack.pdf';
import './index.css';
import logo from "./images/logo.png";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="contianer-fluid nav_bg topbar ">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="logo"/>
                </a>
                <a href={resume} download="paras_kamble_full_stack" className="btn btn-outline-dark ms-4 btns">My Resume</a>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto me-5 smb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="page_active"
                        className="nav-link links"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact activeClassName="page_active" className="nav-link links" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact activeClassName="page_active" className="nav-link links" to="/skills">
                        Skills
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact activeClassName="page_active" className="nav-link links" to="/projects">
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact activeClassName="page_active" className="nav-link links" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
