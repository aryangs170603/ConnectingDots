// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Marquee1 from './Homepage/Marquee1';
import Navbar from './components/Navbar';
import Wave from './components/Wave';
import Footer2 from './components/Footer2';
import Stickyform from './components/Stickyform';
import Whatsapp from './Homepage/FloatingWhatsApp';
import Homepage from './Homepage';
import IT from './IT';

import Menubar from './components/Menubar';
import Chatbot from './components/Chatbot';
// import FAQsection from './IT/FAQ';
// import HeaderCarousel1 from './components/HeaderCarousel1';




function App() {
  return (
    
    <Router>
      <div className="App">
        
        <div className="background-animation">
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>
        
        <Marquee1 />
        <Navbar />
      
        <main>
          <Chatbot/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="src/IT.jsx" element={<IT />} />
          </Routes>
        </main>
        <Stickyform />
        <Wave />
        <Footer2 />
        {/* <FAQsection /> */}
       
      
        
        <Whatsapp />
        <Menubar />
      </div>
    </Router>
    
  );
}

export default App;
