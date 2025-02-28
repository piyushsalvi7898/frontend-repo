import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import myImage from '../assets/images/myImage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'; // Keep your custom styles if needed

const NavbarComponent = () => {
    const location = useLocation();

    return (
        <Navbar expand="lg" bg="light" variant="light" className="px-3">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={myImage} alt="Logo" className="home-image2" style={{ height: '40px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className={location.pathname === "/" ? "active" : ""} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} className={location.pathname === "/about" ? "active" : ""} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} className={location.pathname === "/our-clients" ? "active" : ""} to="/our-clients">Our Clients</Nav.Link>
                        <Nav.Link as={Link} className={location.pathname === "/dashboard" ? "active" : ""} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} className={location.pathname === "/registration-form" ? "active" : ""} to="/registration-form">Registration</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
