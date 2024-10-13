import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home" className="brand-custom">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#quienes-somos">Quienes Somos</Nav.Link>
            <Nav.Link href="#ayuda">Ayuda</Nav.Link>
            <Nav.Link href="#mis-compras">Mis Compras</Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" className="d-flex align-items-center bg-white p-0">
                <div className="initials-circle">NE</div>
                <span className="ms-2">Nombre</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Opciones del dropdown */}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#carrito">
              <BsCart size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;


