import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SelectorGrid from './SelectorGrid';

// Importación dinámica de todas las imágenes dentro de la carpeta assets/images
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  // Estado para el número de columnas
  const [columns, setColumns] = useState(4); // Valor inicial para 4 fotos por fila

  const handleGridChange = (value) => {
    setColumns(value); // Actualiza el número de columnas según el selector
  };

  const [selectedCount, setSelectedCount] = useState(0); // Contador de imágenes seleccionadas
  const [selectedImages, setSelectedImages] = useState(new Set()); // Conjunto para almacenar imágenes seleccionadas

  const handleImageClick = (index) => {
    const updatedSelectedImages = new Set(selectedImages);

    if (updatedSelectedImages.has(index)) {
      updatedSelectedImages.delete(index); // Deseleccionar la imagen
      setSelectedCount(prevCount => prevCount - 1); // Decrementar el contador
    } else {
      updatedSelectedImages.add(index); // Seleccionar la imagen
      setSelectedCount(prevCount => prevCount + 1); // Incrementar el contador
    }

    setSelectedImages(updatedSelectedImages); // Actualizar el conjunto de imágenes seleccionadas
  };

  return (
    <Container>
      <Row className="my-2 p-1 bg-light rounded">
        <Col className="d-flex justify-content-between align-items-center">
          <h6 className="m-2">Seleccionados {selectedCount}</h6>
          <SelectorGrid onChange={handleGridChange} />
        </Col>
      </Row>
      <Row className="mt-4">
        {images.map((image, index) => (
          <Col 
            key={index} 
            xs={12}  /* Ocupa toda la fila en móviles (menores a 768px) */
            sm={6}   /* Muestra 2 imágenes por fila en tabletas (768px - 1199px) */
            md={4}   /* Muestra 3 imágenes por fila en pantallas medianas (768px - 991px) */
            lg={Math.floor(12 / columns)}   /* Cambia según el valor de columnas */
            className="mb-4"
          >
            <div 
              className={`gallery-item ${selectedImages.has(index) ? 'selected' : ''}`} // Cambiar la clase si la imagen está seleccionada
              onClick={() => handleImageClick(index)} 
            >
              <img 
                src={image} 
                alt={`Imagen ${index + 1}`} 
                className="img-fluid" 
                style={{ border: '1px solid white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} // Estilo de borde y sombra
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;



