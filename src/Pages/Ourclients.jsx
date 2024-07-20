import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ourclients.css';

import amdocsLogo from '../Logos/Ourclients/Artboard 2.png';

import Logo from '../Logos/Ourclients/Artboard 10.png';
import Logo1 from '../Logos/Ourclients/Artboard 11.png';
import Logo2 from '../Logos/Ourclients/Artboard 12.png';
import Logo3 from '../Logos/Ourclients/Artboard 13.png';
import Logo4 from '../Logos/Ourclients/Artboard 14.png';
import Logo5 from '../Logos/Ourclients/Artboard 15.png';
import Logo6 from '../Logos/Ourclients/Artboard 16.png';
import Logo7 from '../Logos/Ourclients/Artboard 17.png';
import Logo8 from '../Logos/Ourclients/Artboard 18.png';
import Logo9 from '../Logos/Ourclients/Artboard 19.png';
import Logo10 from '../Logos/Ourclients/Artboard 20.png';
import Logo11 from '../Logos/Ourclients/Artboard 21.png';
import Logo12 from '../Logos/Ourclients/Artboard 22.png';
import Logo13 from '../Logos/Ourclients/Artboard 23.png';
import Logo14 from '../Logos/Ourclients/Artboard 24.png';
import Logo15 from '../Logos/Ourclients/Artboard 25.png';
import Logo16 from '../Logos/Ourclients/Artboard 26.png';
import Logo17 from '../Logos/Ourclients/Artboard 40.png';
import Logo18 from '../Logos/Ourclients/Artboard 41.png';
import Logo19 from '../Logos/Ourclients/Artboard 42.png';
import Logo20 from '../Logos/Ourclients/Artboard 43.png';
import Logo21 from '../Logos/Ourclients/Artboard 44.png';
import Logo22 from '../Logos/Ourclients/Artboard 45.png';
import Logo23 from '../Logos/Ourclients/Artboard 46.png';
import Logo24 from '../Logos/Ourclients/Artboard 47.png';
import Logo25 from '../Logos/Ourclients/Artboard 48.png';
import Logo26 from '../Logos/Ourclients/Artboard 49.png';
import Logo27 from '../Logos/Ourclients/Artboard 50.png';
import Logo28 from '../Logos/Ourclients/Artboard 51.png';
import Logo29 from '../Logos/Ourclients/Artboard 52.png';
import Logo30 from '../Logos/Ourclients/Artboard 53.png';
import Logo31 from '../Logos/Ourclients/Artboard 54.png';


const clients = [
  { name: 'Amdocs', logo: amdocsLogo },
  
  { name: 'TCS', logo: Logo },
  { name: 'TCS', logo: Logo1 },
  { name: 'TCS', logo: Logo2 },
  { name: 'TCS', logo: Logo3 },
  { name: 'TCS', logo: Logo4 },
  { name: 'TCS', logo: Logo5 },
  { name: 'TCS', logo: Logo6 },
  { name: 'TCS', logo: Logo7 },
  { name: 'TCS', logo: Logo8 },
  { name: 'TCS', logo: Logo9 },
  { name: 'TCS', logo: Logo10 },
  { name: 'TCS', logo: Logo11 },
  { name: 'TCS', logo: Logo12 },
  { name: 'TCS', logo: Logo13 },
  { name: 'TCS', logo: Logo14 },
  { name: 'TCS', logo: Logo15 },
  { name: 'TCS', logo: Logo16 },
  { name: 'TCS', logo: Logo17 },
  { name: 'TCS', logo: Logo18 },
  { name: 'TCS', logo: Logo19 },
  { name: 'TCS', logo: Logo21 },
  { name: 'TCS', logo: Logo22 },
  { name: 'TCS', logo: Logo23 },
  { name: 'TCS', logo: Logo24 },
  { name: 'TCS', logo: Logo25 },
  { name: 'TCS', logo: Logo26 },
  { name: 'TCS', logo: Logo27 },
  { name: 'TCS', logo: Logo28 },
  { name: 'TCS', logo: Logo29 },
  { name: 'TCS', logo: Logo30 },
  { name: 'TCS', logo: Logo31 },
  { name: 'TCS', logo: Logo20 },
];

const OurClients = () => {
  return (
    <Container fluid className="our-clients-section text-center">
      <h2 className="section-titleC">OUR CLIENTS</h2>
      <div className="marquee-container">
        <div className="marquee marquee1">
          <div className="marquee-content">
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
        <div className="marquee marquee2 reverse">
          <div className="marquee-content">
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
        <div className="marquee marquee3">
          <div className="marquee-content">
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
      </div>
    </Container>
  );
};

export default OurClients;
