import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ourclients.css';

import amdocsLogo from '../Logos/Ourclients/amdocs1.png';
import googleLogo from '../Logos/Ourclients/google1.png';
import tcsLogo from '../Logos/Ourclients/tcs1.png';
import zensarLogo from '../Logos/Ourclients/zensar.png';
import ibmLogo from '../Logos/Ourclients/ibm1.png';
import microsoftLogo from '../Logos/Ourclients/microsoft1.png';
import cognizantLogo from '../Logos/Ourclients/cognizant1.png';
import infosysLogo from '../Logos/Ourclients/infosys2.png';
import deloiteLogo from '../Logos/Ourclients/deloitte.png';
import adobeLogo from '../Logos/Ourclients/adobe1.png';
import accentureLogo from '../Logos/Ourclients/accenture1.png';
import wiproLogo from '../Logos/Ourclients/wipro.png';
import techMahindraLogo from '../Logos/Ourclients/techmahindra.png';

const clients = [
  { name: 'Amdocs', logo: amdocsLogo },
  { name: 'Google', logo: googleLogo },
  { name: 'TCS', logo: tcsLogo },
  { name: 'Zensar', logo: zensarLogo },
  { name: 'IBM', logo: ibmLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Cognizant', logo: cognizantLogo },
  { name: 'Infosys', logo: infosysLogo },
  { name: 'Deloitte', logo: deloiteLogo },
  { name: 'Adobe', logo: adobeLogo },
  { name: 'Accenture', logo: accentureLogo },
  { name: 'Wipro', logo: wiproLogo },
  { name: 'Tech Mahindra', logo: techMahindraLogo },
];

const OurClients = () => {
  return (
    <Container fluid className="our-clients-section text-center">
      <h2 className="section-titleC">Our Clients</h2>
      <div className="marquee-container">
        <div className="clients-marquee">
          <div className="clients-marquee-track">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="client-logo-container">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="clients-marquee reverse">
          <div className="clients-marquee-track">
            {clients.concat(clients).map((client, index) => (
              <div key={index + clients.length} className="client-logo-container">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurClients;
