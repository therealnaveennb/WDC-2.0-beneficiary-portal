import React from 'react';
import './Navbar.css';
import logo from '../assets/emblem.png';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='nav-firstRow'>
            <a href="#home" className="nav-logo"> <img src={logo} alt='logo' style={{height:'100px'}}/></a>
            
            <h1 className="nav-text">Watershed Management Department</h1>
            </div>
            
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to ='/'className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to ='about'className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                    <Link to ='about'className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                    <Link to ='about'className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                    <Link to ='about'className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                    <Link to ='about'className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                    <Link to ='about'className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                    <Link to ='about'className="nav-link" >About</Link>
                </li>
            </ul>
           
        </nav>
    );
};

export default Navbar;