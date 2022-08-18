import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
        <nav className="navbar n-1 navbar-expand-lg navbar-dark  py-3 ">
    <div className="container">
    <Link className="navbar-brand name-nav1 mx-4 text-white text-center" to="home">START REACT</Link>
    <button className="navbar-toggler border-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  pe-5">

        <li className="nav-item ">
          <Link className="nav-link text-white li-nav" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white li-nav" to="about">ABOUT</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white li-nav" to="contact">CONTACT</Link>
        </li>

      </ul>

    </div>
  </div>
</nav>



    </div>
  )
}
