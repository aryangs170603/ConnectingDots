import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ourclients.css';

import logo1 from '../Logos/Ourclients/Artboard 2.svg';
import logo2 from '../Logos/Ourclients/ajio_a16cd7a85b.svg';
import logo3 from '../Logos/Ourclients/bharatagri_d4794042fe.svg';
import logo4 from '../Logos/Ourclients/bharatpe_a3a5a3f552.svg';
import logo5 from '../Logos/Ourclients/byjus_e7b97a9c80 (1).svg';
import logo6 from '../Logos/Ourclients/capgemini_31a863e94f.svg';
import logo7 from '../Logos/Ourclients/dream11_d6c8d97a52.svg';
import logo8 from '../Logos/Ourclients/eatfit_9dc276a187.svg';
import logo9 from '../Logos/Ourclients/globallogic_c30eb641f7.svg';
import logo10 from '../Logos/Ourclients/homelane_e9cadd0c3c.svg';
import logo11 from '../Logos/Ourclients/ibm_795b5429ee.svg';
import logo12 from '../Logos/Ourclients/leapfinance_0d785d05eb.svg';
import logo13 from '../Logos/Ourclients/moneytap_d5a6c9d532.svg';
import logo14 from '../Logos/Ourclients/ola_15b5ee2b82.svg';
import logo15 from '../Logos/Ourclients/pagarbook_2746958f65.svg';
import logo16 from '../Logos/Ourclients/paytm_a5c1ce2bc6.svg';
import logo17 from '../Logos/Ourclients/salesken_baefe048ac.svg';
import logo18 from '../Logos/Ourclients/sharechat_23a9923a34.svg';
import logo19 from '../Logos/Ourclients/smallcase_1740bcc33f.svg';
import logo20 from '../Logos/Ourclients/swiggy_bc1b88842e.svg';
import logo21 from '../Logos/Ourclients/urbanpiper_2884348a0b.svg';
import logo22 from '../Logos/Ourclients/vyapar_3f3770ebb5.svg';

const clients = [
  { name: 'Airmeet', logo: logo1 },
  { name: 'Ajio', logo: logo2 },
  { name: 'BharatAgri', logo: logo3 },
  { name: 'BharatPe', logo: logo4 },
  { name: 'Byjus', logo: logo5 },
  { name: 'Capgemini', logo: logo6 },
  { name: 'Dream11', logo: logo7 },
  { name: 'EatFit', logo: logo8 },
  { name: 'GlobalLogic', logo: logo9 },
  { name: 'HomeLane', logo: logo10 },
  { name: 'IBM', logo: logo11 },
  { name: 'LeapFinance', logo: logo12 },
  { name: 'MoneyTap', logo: logo13 },
  { name: 'Ola', logo: logo14 },
  { name: 'PagarBook', logo: logo15 },
  { name: 'Paytm', logo: logo16 },
  { name: 'SalesKen', logo: logo17 },
  { name: 'ShareChat', logo: logo18 },
  { name: 'Smallcase', logo: logo19 },
  { name: 'Swiggy', logo: logo20 },
  { name: 'UrbanPiper', logo: logo21 },
  { name: 'Vyapar', logo: logo22 },
];

const OurClients = () => {
  const group1 = clients.slice(0, Math.ceil(clients.length / 3));
  const group2 = clients.slice(Math.ceil(clients.length / 3), Math.ceil((2 * clients.length) / 3));
  const group3 = clients.slice(Math.ceil((2 * clients.length) / 3));

  return (
    <Container fluid className="our-clients-section text-center">
      <h2 className="section-titleC">Our Clients</h2>
      <div className="clients-marquee">
        <div className="clients-marquee-track">
          {group1.concat(group1).map((client, index) => (
            <div key={index} className="client-logo-container">
              <img src={client.logo} alt={client.name} className="client-logo" />
            </div>
          ))}
        </div>
      </div>
      <div className="clients-marquee reverse">
        <div className="clients-marquee-track">
          {group2.concat(group2).map((client, index) => (
            <div key={index} className="client-logo-container">
              <img src={client.logo} alt={client.name} className="client-logo" />
            </div>
          ))}
        </div>
      </div>
      <div className="clients-marquee">
        <div className="clients-marquee-track">
          {group3.concat(group3).map((client, index) => (
            <div key={index} className="client-logo-container">
              <img src={client.logo} alt={client.name} className="client-logo" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurClients;
