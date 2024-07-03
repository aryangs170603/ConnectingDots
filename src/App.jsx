import React from 'react';
import Header from './components/Homepage/Navbar';
import HeaderCarousel from './Pages/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee1 from './Pages/Marquee1';
import Marquee2 from './Pages/Marquee2';
import PlacementSection from './Pages/PlacementSection';
import Keypoints from './Pages/Keypoints';
import PopCourses from './Pages/PopCourses';

function App() {
  return (
    <div className="App">
      <Marquee1 />
      <Header />
      <HeaderCarousel />
      <Marquee2 />
      <Keypoints />
      <PopCourses />
      <PlacementSection />
    </div>
  );
}

export default App;
