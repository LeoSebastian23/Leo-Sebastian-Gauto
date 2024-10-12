import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsCamera, BsGeoAlt, BsImages, BsCalendar, BsStar, BsCart } from 'react-icons/bs';

const UserProfileCard = () => {
  return (
    <div className="bg-light my-4 d-flex justify-content-center">
      <Card className="user-profile-card" style={{ width: '99%' }} >
        {/* Imagen de portada */}
        <Card.Img variant="top" src="/portada.jpg" className="cover-image" />

        {/* Imagen de perfil */}
        <div className="profile-picture d-flex justify-content-center">
          <img 
            src="/avatar.png" 
            className="rounded-circle border border-white"
            alt='profile'
            style={{ width: '112px', height: '112px', position: 'relative', top: '-56px' }}
          />
        </div>

        {/* Cuerpo de la tarjeta */}
        <Card.Body className="text-center">
          {/* Título */}
          <Card.Title className="mb-4">Expo Mascotas 2024</Card.Title>

          {/* Información del evento */}
          <div className="user-info">
            <p><BsCamera className="me-2" />Fotógrafo: Juan Bianchi</p>
            <p><BsGeoAlt className="me-2" />Centro de Convenciones, Bariloche</p>
              <p><BsImages className="me-2" />Imágenes: 12 fotos</p>
              <p><BsCalendar className="me-2" />Expira: 15/06/2024</p>
          </div>

          {/* Botones */}
          <div className="d-flex justify-content-center mt-4">
            <Button variant="outline-secondary" className="d-flex align-items-center mx-5">
              <BsStar className="me-2" /> Calificar
            </Button>
            <Button variant="danger" className="d-flex align-items-center">
              <BsCart className="me-2" /> Agregar Todo
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserProfileCard;


