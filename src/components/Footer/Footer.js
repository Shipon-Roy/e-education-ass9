import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'

const Footer = () => {
    return (
        <div className="bg-dark">
            <Nav className="mx-auto">
            <NavLink className="header-nav" to="/home">Home/</NavLink>
            <NavLink className="header-nav" to="/services">Services/</NavLink>
            <NavLink className="header-nav" to="/about">About/</NavLink>
            <NavLink className="header-nav" to="/coursedetails">Course Details/</NavLink>
            </Nav>
            <p className="text-center text-light">© 2021 by made in Shipon Roy.</p>
        </div>
    );
};

export default Footer;