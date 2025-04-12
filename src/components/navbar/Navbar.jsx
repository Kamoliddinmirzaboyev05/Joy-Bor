import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
function Navbar() {
  return (
    <div className="navbarPage">
      <nav>
        <div className="container">
          <div className="logo">
            <img src="/logo.png" alt="" />
            <h2>Joy Bor</h2>
          </div>
          <div className="navLinks">
            <Link>Bu qanday ishlaydi?</Link>
            <Link>Bog'lanish</Link>
          </div>
          <div className="dashboard">
            <FaUserGraduate />
            <p>Kamoliddin M.</p>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
