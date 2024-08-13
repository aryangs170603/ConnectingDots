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
import Datascience from './IT/Datascience';
import DataAnalytics from './IT/DataAnalytics';
import BussinessAnalytics from './IT/BussinessA';
import GptAi from './IT/GptAi';
import Fullstack from './IT/Fullstack';
import Java from './IT/Java';
import Mern from './IT/MernStack';
import UIUX from './IT/UIUX';
import Python from './IT/Python';
import Sales from './IT/Salesforce';
import Chatbot from './components/Chatbot';
import SAPEWM from './SAP/sapewm';
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
            {/* IT PAGE */}
            <Route path="/Datascience" element={<Datascience />} />
            <Route path="/DataAnalytics" element={<DataAnalytics />} />
            <Route path="/BussinessAnalytics" element={<BussinessAnalytics />} />
            <Route path="/GPT" element={<GptAi />} />
            <Route path="/FullStack" element={<Fullstack />} />
            <Route path="/Java" element={<Java />} />
            <Route path="/Mern" element={<Mern />} />
            <Route path="/Python" element={<Python />} />
            <Route path="/Salesforce" element={<Sales />} />
            <Route path="/UIUX" element={<UIUX />} />
            {/* SAP PAGE*/}
            <Route path="/SAPEWM" element={<SAPEWM />} />
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
