import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import myImage from '../assets/images/myImage.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img src={myImage} alt="Description of the image" className="home-image2" />
            <button className="menu-toggle" onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'} {/* Button text changes based on state */}
            </button>
            <ul className={isOpen ? 'open' : ''}> {/* Add 'open' class if menu is open */}
                <li><Link className='backgroundclronhover' to="/">Home</Link></li>
                <li><Link className='backgroundclronhover' to="/services">Services</Link></li>
                <li><Link className='backgroundclronhover' to="/about">About Us</Link></li>
                <li><Link className='backgroundclronhover' to="/contact">Contact Us</Link></li>
                <li><Link className='backgroundclronhover' to="/our-clients">Our Clients</Link></li>
                <li><Link className='backgroundclronhover' to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;