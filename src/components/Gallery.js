import React, { useState, useCallback, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import SelectorGrid from './SelectorGrid';

// Importar todas las imágenes de la carpeta
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

// Simulacion de imágenes adquiridas 
const acquiredImages = new Set([1, 3, 4]);

const Gallery = () => {
  const [columns, setColumns] = useState(4);
  const [selectedImages, setSelectedImages] = useState(new Set());

  // Manejar selección/deselección de imágenes
  const toggleSelection = useCallback((index) => {
    setSelectedImages((prev) => {
      const updated = new Set(prev);
      updated.has(index) ? updated.delete(index) : updated.add(index);
      return updated;
    });
  }, []);

  // Memoiza el conteo de imágenes seleccionadas para optimizar el rendimiento.
  const selectedCount = useMemo(() => selectedImages.size, [selectedImages]);

  return (
    <Container>
      <Row className="my-2 p-1 bg-light rounded">
        <Col className="d-flex justify-content-between align-items-center bg-white rounded">
          <h6 className="m-2">Seleccionados {selectedCount}</h6>
          <SelectorGrid onChange={setColumns} />
        </Col>
      </Row>
      <Row className="mt-4">
        {images.map((image, index) => (
          <Col 
            key={index} 
            xs={12}
            sm={6}
            md={4}
            lg={Math.floor(12 / columns)}
            className="mb-4"
          >
            <div className={`gallery-item ${selectedImages.has(index) ? 'selected' : ''}`}>
              <img 
                src={image} 
                alt={`Imagen ${index + 1}`} 
                className="img-fluid gallery-image"
              />
              {!acquiredImages.has(index) && (
                <>
                  <div className="watermark">Logo</div>
                  <button
                    className="buy-icon-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelection(index);
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                </>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;








