import React from 'react';
import './Navbar.css';
import logo from '../assets/emblem.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            
            <a href="#home" className="navbar-logo"> <img src={logo} alt='logo' style={{height:'100px'}}/></a>
            
            <h1 className="nav-text">Watershed Management Department</h1>
            <div className='menu-bar'>
            
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link">About</a>
                </li> 
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a href="#services" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                </li>
                
                <li className="nav-item">
                    <a href="#contact" className="nav-link">FAQ</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Register</a>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;