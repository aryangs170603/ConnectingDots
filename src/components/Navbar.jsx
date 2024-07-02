import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="cderplogo white bg.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Connecting Dots ERP logo"
          />
          Connecting Dots ERP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <OffcanvasExample />
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
