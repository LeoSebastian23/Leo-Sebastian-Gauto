import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsCamera, BsGeoAlt, BsImages, BsStar, BsCart } from 'react-icons/bs';

const UserProfileCard = () => {
  return (
    <div className="my-4 d-flex justify-content-center">
      <Card className="user-profile-card">
        <Card.Img variant="top" src="/portada.jpg" className="cover-image" />
        <div className="profile-picture">
          <img 
            src="/avatar.png" 
            alt='profile'
            className="profile-avatar"
          />
        </div>
        <Card.Body className="text-center">
          <Card.Title>Expo Mascotas 2024</Card.Title>
          <div className="user-info">
            <p><BsCamera className="me-2" />Juan Bianchi</p>
            <p><BsGeoAlt className="me-2" />Centro de Convenciones, Bariloche</p>
            <div className="d-flex justify-content-center align-items-center event-info">
              <p className="mb-0 mx-2"><BsImages className="me-2" />12 fotos</p>
              <p className="mb-0 mx-2 text-danger exp">Expira: 15/06/2024</p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="outline-secondary" className="d-flex align-items-center mx-3">
              <BsStar className="me-2" /> Calificar
            </Button>
            <Button variant="danger" className="add-all-btn">
              <BsCart className="me-2" /> Agregar Todo
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserProfileCard;





