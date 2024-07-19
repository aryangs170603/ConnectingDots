import React from 'react';
//import axios from 'axios'
import Navbar from './components/Navbar';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HeaderCarousel from './Pages/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee1 from './Pages/Marquee1';
import Marquee2 from './Pages/Marquee2';
// import PlacementSection from './Pages/PlacementSection';
import Keypoints from './Pages/Keypoints';
import PopCourses from './Pages/PopCourses';
import Ourclients from './Pages/Ourclients';
import Footer2 from './components/Footer2';


//import database from './components/Database';

import Achievements from './Pages/Achievements';
import Training2P from './Pages/Training2P';
import Stickyform from './Pages/Stickyform';
import Certificate from './Pages/Certificate';
import OurBranches from './Pages/OurBranches';
// import Founders from './Pages/Founder';
import Whatsapp from './Pages/FloatingWhatsApp';
import FeedbackandReviews from './Pages/FeedbackandReviews';
//import Navbar from './components/AboutUs.jsx';
// import PopupForm from './components/PopupForm';

import Wave from './components/Wave.jsx'
function AppH() {
  return (
    <div className="App">
      <Marquee1 />
       {/* <About/> */}
      <Navbar />
       <main>
      <HeaderCarousel />
      <Marquee2 />
       {/* <PopupForm/> */}
      <Keypoints />
      <Ourclients />
      <database />
      <PopCourses />
      {/* <PlacementSection /> */}
      <Certificate />  
      {/* <Achievements /> */}
    
      <FeedbackandReviews />
      
       <Training2P />
       
     
      <OurBranches />   
      </main>
      <Stickyform />
     
      <Wave />
      <Footer2 />
      <Whatsapp />

    </div>
  );
}

export default AppH;