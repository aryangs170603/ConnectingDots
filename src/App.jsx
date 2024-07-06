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
import Branches from './Pages/Branches';
import Footer from './Pages/Footer';
import FeedbackandReviews from './Pages/FeedbackandReviews';
import FAQComponent from './Pages/FAQComponent';


function App() {
  return (
    <div className="App">
      <Marquee1 />
      <Navbar />
      <HeaderCarousel />
      <Marquee2 />
      <Keypoints />
      <PopCourses />
      {/* <PlacementSection /> */}
      <FeedbackandReviews />
      <FAQComponent />
      {/* <Branches /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
