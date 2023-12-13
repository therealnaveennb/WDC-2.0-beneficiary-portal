import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/emblem.png";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { FaFileAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbReport } from "react-icons/tb";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 200) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <div>
      <div className="nav-firstRow">
        <a href="#home" className="nav-logo">
          <img src={logo} alt="logo" style={{ height: "100px" }} />
        </a>
        <h1 className="nav-text">
          Watershed Development Component-Pradhan Mantri Krishi Sinchayee Yojana
          2.0 - MIS <br />
          Department of Land Resources (भूमि संसाधन विभाग)
          <br />
          Ministry of Rural Development (ग्रामीण विकास मंत्रालय)
          <br />
          Government of India (भारत सरकार)
        </h1>
        
      </div>

      <div className={fix ? "nav-menuFixed" : "nav-menu"}>
        <div className="nav-item">
          <Link to="/" className="nav-link">
            <FaHouse /> Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/about" className="nav-link">
            <FaCircleExclamation /> About
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <BiSolidDashboard /> Dashboard
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/documents" className="nav-link">
            <FaFileAlt /> Documents
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/Contact Us" className="nav-link">
          <TbReport/> Report
          </Link>
        </div>
        <div className="nav-item">
          <Link to="video" className="nav-link">
            <FaVideo /> Video
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/login" className="nav-link">
            <MdOutlineLogin /> Login
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/register" className="nav-link">
            {CgProfile} Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
