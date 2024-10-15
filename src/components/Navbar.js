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

        {/* Grupo de botones alineados a la derecha visibles solo en pantallas pequeñas */}
        <div className="d-flex align-items-center ms-auto d-lg-none">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Dropdown align="end" className="d-flex align-items-center mx-2">
            <Dropdown.Toggle variant="light" className="d-flex align-items-center bg-white p-0">
              <div className="initials-circle">NE</div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* Opciones del dropdown */}
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="#carrito">
            <BsCart size={24} />
          </Nav.Link>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#quienes-somos">Quienes Somos</Nav.Link>
            <Nav.Link href="#ayuda">Ayuda</Nav.Link>
            <Nav.Link href="#mis-compras">Mis Compras</Nav.Link>

            {/* Elementos visibles solo en pantallas grandes */}
            <Dropdown align="end" className="d-none d-lg-flex mx-2">
              <Dropdown.Toggle variant="light" className="d-flex align-items-center bg-white p-0">
                <div className="initials-circle">NE</div>
                <span className="ms-2">Nombre</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Opciones del dropdown */}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#carrito" className="d-none d-lg-block">
              <BsCart size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;




