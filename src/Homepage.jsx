import React from "react";
//import axios from 'axios'
import Navbar from "./components/Navbar";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HeaderCarousel from "./Homepage/HeaderCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Marquee1 from "./Homepage/Marquee1";
import Marquee2 from "./Homepage/Marquee2";
import PlacementSection from "./Homepage/PlacementSection";
import Keypoints from "./Homepage/Keypoints";
import PopCourses from "./Homepage/PopCourses";
import Footer2 from "./components/Footer2";
import Achievements from "./Homepage/Achievements";
import Ourstats from "./Homepage/Ourstats";
import Stickyform from "./components/Stickyform";
import Certificate from "./Homepage/Certificate";
import OurBranches from "./Homepage/OurBranches";
import Chevron from "./Homepage/Chevron";
import Whatsapp from "./Homepage/FloatingWhatsApp";
import FeedbackandReviews from "./Homepage/FeedbackandReviews";
//import Navbar from './components/AboutUs.jsx';
// import PopupForm from './components/PopupForm';
import Ourclients from "./Homepage/Ourclients";
import Wave from "./components/Wave.jsx";
function Homepage() {
  return (
    <div className="App">
      <Marquee1 />
      {/* <About/> */}
      <Navbar />
      <main>
        <HeaderCarousel />
        <Marquee2 />
        <Chevron />
        {/* <PopupForm/> */}
        <Keypoints />
        <Ourclients />
        <PopCourses />
        <PlacementSection />
        <Ourstats />
        <Achievements />
        <FeedbackandReviews />
        <Certificate />
        <OurBranches />
      </main>
      <Stickyform />
      <Wave />
      <Footer2 />
      <Whatsapp />
    </div>
  );
}

export default Homepage;
