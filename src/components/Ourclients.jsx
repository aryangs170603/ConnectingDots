import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const clients = [
  { name: 'Amdocs', logo: 'src/Logos/amdocs.png' },
  { name: 'Google', logo: 'src/Logos/google.png' },
  { name: 'TCS', logo: 'src/Logos/tcs.png' },
  { name: 'Zensar', logo: 'src/Logos/zensar.png' },
  { name: 'IBM', logo: 'src/Logos/ibm.png' },
  { name: 'Amazon', logo: 'src/Logos/amazon.png' },
  { name: 'Microsoft', logo: 'src/Logos/microsoft.png' },
  { name: 'Apple', logo: 'src/Logos/apple.png' },
  { name: 'Facebook', logo: 'src/Logos/meta.png' },
  { name: 'X', logo: 'src/Logos/twitter.png' },
  { name: 'LinkedIn', logo: 'src/Logos/linkedin.png' },
  { name: 'Salesforce', logo: 'src/Logos/salesforce.png' },
  { name: 'Oracle', logo: 'src/Logos/oracle.png' },
  { name: 'SAP', logo: 'src/Logos/grc.png' },
  { name: 'Adobe', logo: 'src/Logos/adobe.png' }
];

const groupLogos = (logos, groupSize) => {
  const groupedLogos = [];
  for (let i = 0; i < logos.length; i += groupSize) {
    groupedLogos.push(logos.slice(i, i + groupSize));
  }
  return groupedLogos;
};

const OurClients = () => {
  const groupedClients = groupLogos(clients, 5);

  return (
    <Container fluid className="our-clients-section text-center">
      <h2 className="section-title">Our Clients</h2>
      <Carousel className="clients-carousel" indicators={false} interval={3000}>
        {groupedClients.map((group, index) => (
          <Carousel.Item key={index} className="client-slide">
            <div className="d-flex justify-content-center">
              {group.map((client, idx) => (
                <img
                  key={idx}
                  src={client.logo}
                  alt={client.name}
                  className="client-logo mx-2"
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default OurClients;
