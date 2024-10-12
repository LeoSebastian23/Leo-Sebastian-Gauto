import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaStar, FaEye } from 'react-icons/fa';

const importImages = () => {
    const context = require.context('../assets/imagesProfiles', false, /\.(png|jpe?g|svg)$/);
    const images = {};
    context.keys().forEach((key) => {
      const fileName = key.replace('./', '');
      images[fileName] = context(key);
    });
    return images;
  };

  const images = importImages();

// Datos de ejemplo de los fotógrafos destacados
const photographers = [
  {
    name: 'Paula Pérez',
    location: 'Buenos Aires, CABA',
    specialty: 'Tienda de mascotas',
    rating: 4,
    profilePic: images['paula.png'], // Cambia la ruta a la imagen correspondiente
  },
  {
    name: 'Pedro Fuentes',
    location: 'Buenos Aires, CABA',
    specialty: 'Eventos',
    rating: 4,
    profilePic: images['pedro.png'],
  },
  {
    name: 'Patricio Funes',
    location: 'Buenos Aires, CABA',
    specialty: 'Fundación rescate',
    rating: 4,
    profilePic: images['patricio.png'],
  },
  {
    name: 'Macarena Ramirez',
    location: 'La Plata, GBA',
    specialty: 'Bicho feliz fundación',
    rating: 4,
    profilePic: images['macarena.png'],
  }
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar key={i} color={i < rating ? 'red' : '#e4e5e9'} />
    );
  }
  return stars;
};

const FeaturedPhotographers = () => {
  return (
    <Container className="mt-5">
      <h4 className="text-start mb-4">Fotógrafos Destacados</h4>
      <Row>
        {photographers.map((photographer, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center" style={{borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
              <Card.Img variant="top" src={photographer.profilePic} className="rounded-circle" style={{ width: '100px', height: '100px', margin: '20px auto' }} />
              <Card.Body>
                <Card.Title>{photographer.name}</Card.Title>
                <Card.Text className="text-muted">
                  <FaMapMarkerAlt /> {photographer.location}
                </Card.Text>
                <Card.Text className="text-muted">
                  ✨ {photographer.specialty}
                </Card.Text>
                <div className="mb-3">
                  {renderStars(photographer.rating)}
                </div>
                <Button variant="outline-secondary">
                  <FaEye /> Contactar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedPhotographers;
