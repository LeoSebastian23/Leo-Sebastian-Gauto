import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { FaFileAlt } from 'react-icons/fa'; // Icono de papeleo

const AlbumTab = ({ date }) => {
  return (
    <Row className="album-tab mx-2 py-2 bg-light rounded d-flex align-items-center">
      <Col className="d-flex align-items-center">
        <Nav.Link
          href="/album"
          className="text-danger d-flex align-items-center album-link"
        >
          <FaFileAlt className="me-2" />
          Álbumes
        </Nav.Link>
        <span className="ms-3 text-muted">{date}</span>
      </Col>
    </Row>
  );
};

export default AlbumTab;

