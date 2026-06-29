import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navlinks me-auto">
            <HashLink className="nav-link" to="/#about">حول</HashLink>
            <HashLink className="nav-link" to="/#pricing">خطة الدفع</HashLink>
            <HashLink className="nav-link" to="/#player">النجوم</HashLink>
            <HashLink className="nav-link" to="/#programs">برامجنا</HashLink>
            <HashLink className="nav-link" to="/#joinUs">انضم لنا</HashLink>
          </Nav>
        </Navbar.Collapse>

        <h3 className="fw-bold mb-0">Anderlecht Academy</h3>
        <img src="\assets\img\logo-anderlacht.jpeg" alt="logo" width={50} height={50} />
      </Container>
    </Navbar>
  );
};

export default NavBar;