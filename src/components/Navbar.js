import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import myImage from '../assets/images/myImage.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get current URL location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img src={myImage} alt="Description of the image" className="home-image2" />
            <button className="menu-toggle" onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <ul className={isOpen ? 'open' : ''}>
                <li><Link className={`backgroundclronhover ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
                <li><Link className={`backgroundclronhover ${location.pathname === "/services" ? "active" : ""}`} to="/services">Services</Link></li>
                <li><Link className={`backgroundclronhover ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link></li>
                <li><Link className={`backgroundclronhover ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</Link></li>
                <li><Link className={`backgroundclronhover ${location.pathname === "/our-clients" ? "active" : ""}`} to="/our-clients">Our Clients</Link></li>
                <li><Link className={`backgroundclronhover ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard">Dashboard</Link></li>
                <li><Link className={`backgroundclronhover ${location.pathname === "/registration-form" ? "active" : ""}`} to="/registration-form">Registration-Form</Link></li>

            </ul>
        </nav>
    );
};

export default Navbar;
