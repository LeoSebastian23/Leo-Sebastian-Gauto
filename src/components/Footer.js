import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer-custom">
    <Container fluid>
      {/* Logo y menú */}
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center footer-logo">LOGO</Col>
        <Col xs={12} md={4}>
          <ul className="footer-menu list-unstyled">
            {['Inicio', 'Quiénes somos', 'Mi perfil', 'Mis compras', 'Ayuda'].map((item) => (
              <li key={item}>
                <a href="#!" className="text-white">{item}</a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      {/* Legal y redes sociales */}
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

export default Footer;


