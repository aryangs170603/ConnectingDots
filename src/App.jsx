import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HeaderCarousel from './Pages/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee1 from './Pages/Marquee1';
import Marquee2 from './Pages/Marquee2';
import PlacementSection from './Pages/PlacementSection';
import Keypoints from './Pages/Keypoints';
import PopCourses from './Pages/PopCourses';
import Ourclients from './Pages/Ourclients';
import Footer from './components/Footer';

import FAQComponent from './Pages/FAQComponent';
import Achievements from './Pages/Achievements';
import Training2P from './Pages/Training2P';
import Contactform from './Pages/Contactform';
import Certificate from './Pages/Certificate';
import OurBranches from './Pages/OurBranches';
import Founders from './Pages/Founder';
import Whatsapp from './Pages/FloatingWhatsApp';
import FeedbackandReviews from './Pages/FeedbackandReviews';

function App() {
  return (
    <div className="App">
      <Marquee1 />
      <Navbar />
       <main>
      <HeaderCarousel />
      <Marquee2 />
      <Keypoints />
      <PopCourses />
      <Ourclients />
      {/* <PlacementSection /> */}
      <Certificate />
          <FeedbackandReviews />
      <Founders />
     
      <Achievements />
      <FAQComponent />
      <Training2P />
         <OurBranches />   
      </main>
      <Contactform />
      <Footer />
      
      <Whatsapp />
      
    </div>
  );
}

export default App;
