import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Array de imágenes (puedes agregar más o cambiar las URLs)
const images = [
  'https://via.placeholder.com/300x200?text=Imagen+1',
  'https://via.placeholder.com/300x200?text=Imagen+2',
  'https://via.placeholder.com/300x200?text=Imagen+3',
  'https://via.placeholder.com/300x200?text=Imagen+4',
  'https://via.placeholder.com/300x200?text=Imagen+5',
  'https://via.placeholder.com/300x200?text=Imagen+6',
  'https://via.placeholder.com/300x200?text=Imagen+7',
  'https://via.placeholder.com/300x200?text=Imagen+8',
  'https://via.placeholder.com/300x200?text=Imagen+9',
  'https://via.placeholder.com/300x200?text=Imagen+10',
  'https://via.placeholder.com/300x200?text=Imagen+11',
  'https://via.placeholder.com/300x200?text=Imagen+12'
];

const Gallery = () => {
  return (
    <Container>
      <h2 className="text-center mt-5">Galería de Imágenes</h2>
      <Row className="mt-4">
        {images.map((image, index) => (
          <Col 
            key={index} 
            xs={12}  /* Ocupa toda la fila en móviles (menores a 768px) */
            sm={6}   /* Muestra 2 imágenes por fila en tabletas (768px - 1199px) */
            md={4}   /* Muestra 3 imágenes por fila en pantallas medianas (768px - 991px) */
            lg={3}   /* Muestra 4 imágenes por fila en pantallas grandes (1200px o más) */
            className="mb-4"
          >
            <div className="gallery-item">
              <img src={image} alt={`Imagen ${index + 1}`} className="img-fluid" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;

