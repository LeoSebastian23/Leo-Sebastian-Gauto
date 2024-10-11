import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';  // Icono de carrito de compras

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-2">
      <Container>
        {/* Elemento Navbar.Brand con estilo personalizado */}
        <Navbar.Brand href="#home" className="brand-custom">
            LOGO
        </Navbar.Brand>
        {/* Toggle para el menú en dispositivos móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Alinear a la derecha usando ms-auto */}
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#quienes-somos">Quienes Somos</Nav.Link>
            <Nav.Link href="#ayuda">Ayuda</Nav.Link>
            <Nav.Link href="#mis-compras">Mis Compras</Nav.Link>
            {/* Dropdown para el nombre */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center">
              <div className="initials-circle"> NE </div>
              <span className="ms-2">Nombre</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Opciones del dropdown, vacías por ahora */}
              </Dropdown.Menu>
            </Dropdown>
            {/* Icono de carrito de compras */}
            <Nav.Link href="#carrito">
              <BsCart size={24} /> {/* Tamaño del ícono */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

