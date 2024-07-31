import React from "react";
import DataScienceModules from "./IT/DataScienceModules";
import HeaderCarousel1 from './IT/HeaderCarousel1';
import WhyChooseUs from "./IT/WhyChooseUs";
import Certificate from "./Homepage/Certificate";
import FAQsection from "./IT/FAQ";
// import Trustus from './IT/Trustus';

const IT = () => {
  return (
    <div>
      <main>
         <HeaderCarousel1 /> 
        <DataScienceModules />
        <Certificate />
        <WhyChooseUs />
        {/* <Trustus /> */}
        
        {/* <FAQsection /> */}
      </main>
    </div>
  );
};

export default IT;
