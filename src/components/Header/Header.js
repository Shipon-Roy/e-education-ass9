import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand>E-EDUCATION</Navbar.Brand>
                <Nav className="mx-auto">
                    <NavLink className="header-nav" to="/home">Home</NavLink>
                    <NavLink className="header-nav" to="/services">Services</NavLink>
                    <NavLink className="header-nav" to="/about">About</NavLink>
                    <NavLink className="header-nav" to="/coursedetails">Course Details</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;