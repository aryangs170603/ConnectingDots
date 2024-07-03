import React from 'react';
import Header from './components/Header';
import HeaderCarousel from './components/Homepage/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee from './components/Homepage/Marquee';
import PlacementSection from './components/Homepage/PlacementSection';
import Keypoints from './components/Homepage/Keypoints';
import PopCourses from './components/Homepage/PopCourses';


function App() {
  return (
    <div className="App">
      <Marquee />
      <Header />
      <HeaderCarousel />
      <Marquee />
      <Keypoints />
      <PopCourses />
      <PlacementSection />
      
    </div>
  );
}

export default App;
