// src/components/ClientCarousel.jsx
import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './Ourclients.css'; // Ensure this path is correct
import amdocs from '../Logos/Companylogos/amdocs.png';
import google from '../Logos/Companylogos/google.png';
import tcs from '../Logos/Companylogos/tcs.png';
import zenzar from '../Logos/Companylogos/zensar.png';
const Ourclient = () => {
  const clients = [
    { imgSrc: require(amdocs), name: 'Amdocs' },
    { imgSrc: require(google), name: 'Google' },
    { imgSrc: require(tcs), name: 'TCS' },
    { imgSrc: require(zenzar), name: 'Zensar' },
    
  ];

  return (
    <div className="client-carousel">
      <h2 className="carousel-title">Our Clients</h2>
      <Carousel>
        {[...Array(3)].map((_, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-around">
              {clients.map((client, i) => (
                <Card key={i}>
                  <Card.Img variant="top" src={client.imgSrc} alt={`Client ${i + 1}`} />
                  <Card.Body>
                    <Card.Title>{client.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Ourclient;
