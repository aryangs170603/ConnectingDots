import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ourclients.css';

import amdocsLogo from '../Logos/Ourclients/amdocs.png';
import googleLogo from '../Logos/Ourclients/google.png';
import tcsLogo from '../Logos/Ourclients/tcs.png';
import zensarLogo from '../Logos/Ourclients/zensar.png';
import ibmLogo from '../Logos/Ourclients/ibm.png';
import microsoftLogo from '../Logos/Ourclients/microsoft.png';
import cognizantLogo from '../Logos/Ourclients/cognizant.png';
import infosysLogo from '../Logos/Ourclients/infosys.png';
import deloiteLogo from '../Logos/Ourclients/deloitte.png';
import adobeLogo from '../Logos/Ourclients/adobe.png';
import accentureLogo from '../Logos/Ourclients/accenture.png';
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
    <Container fluid className="k text-center">
      <h2 className="section-title">Our Clients</h2>
      <div className="clients-marquee">
        <div className="clients-marquee-track">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-container">
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo"
              />
            </div>
          ))}
          {clients.map((client, index) => (
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
    </Container>
  );
};

export default OurClients;
