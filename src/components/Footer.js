import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container fluid>
        {/* Primera fila: Logo*/}
        <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center">
            <div className="footer-logo">
              LOGO
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="footer-menu">
              <ul className="list-unstyled">
                <li><a href="#!" className="text-white">Inicio</a></li>
                <li><a href="#!" className="text-white">Quiénes somos</a></li>
                <li><a href="#!" className="text-white">Mi perfil</a></li>
                <li><a href="#!" className="text-white">Mis compras</a></li>
                <li><a href="#!" className="text-white">Ayuda</a></li>
              </ul>
            </div>
          </Col>
</Row>
        {/* Segunda fila: Legal y redes sociales */}
        <Row className="justify-content-end">
          <Col xs={12} md={8} className="footer-legal text-white text-end">
            <a href="#!" className="text-white">Protegido por reCAPTCHA</a> | 
            <a href="#!" className="text-white"> Privacidad</a> | 
            <a href="#!" className="text-white"> Condiciones</a>
          <div className="footer-social d-inline">
            <FaInstagram className="social-icon" />
            <FaFacebookF className="social-icon" />
          </div>
  </Col>
</Row>

      </Container>
    </footer>
  );
};

export default Footer;


