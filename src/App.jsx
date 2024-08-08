import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import Datascience from './Datascience';
import DataAnalytics from './DataAnalytics';
import Chatbot from './components/Chatbot';

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
            <Route path="/Datascience" element={<Datascience />} />
            <Route path="/DataAnalytics" element={<DataAnalytics />} />
          </Routes>
        </main>

        <Stickyform />
        <Wave />
        <Footer2 />
        <Whatsapp />
      </div>
    </Router>
  );
}

export default App;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Marquee1 from './Homepage/Marquee1';
// import Navbar from './components/Navbar';
// import Wave from './components/Wave';
// import Footer2 from './components/Footer2';
// import Stickyform from './components/Stickyform';
// import Whatsapp from './Homepage/FloatingWhatsApp';
// import Homepage from './Homepage';
// import IT from './IT';
// import Chatbot from './components/Chatbot';
// // This component handles the dynamic routing and passing of city parameter
// const CoursePage = () => {
//   const { city } = useParams();
//   return <IT city={city} />;
// };
// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <div className="background-animation">
//           <div className="starsec"></div>
//           <div className="starthird"></div>
//           <div className="starfourth"></div>
//           <div className="starfifth"></div>
//         </div>

//         <Marquee1 />
//         <Navbar />

//         <main>
//           <Chatbot />
//           <Routes>
//             <Route path="/" element={<Homepage />} />
//             <Route path="/course/:city" element={<CoursePage />} />
//           </Routes>
//         </main>

//         <Stickyform />
//         <Wave />
//         <Footer2 />
//         <Whatsapp />
//       </div>
//     </Router>
//   );
// };



// export default App;
