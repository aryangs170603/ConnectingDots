import React from "react";
import DataScienceModules from "./IT/DataScienceModules";
import DSHeader from './IT/DSHeader';
import WhyChooseUs from "./IT/WhyChooseUs";
import Certificate from "./Homepage/Certificate";
import FAQsection from "./IT/FAQ";
import RelatedCourses from "./IT/RelatedCourses";
import Trustus from './IT/Trustus';
import Councelor from "./IT/Councelor";
import WhyDS from "./IT/WhyDS";
// import Learningpath from "./IT/Learningpath";

const IT = () => {
  return (
    <div>
      <main>
         <DSHeader />
        <Councelor /> 
        <WhyDS />
        <DataScienceModules />
        <Certificate />
        
        
        <WhyChooseUs />
        <Trustus />
        <FAQsection />
        <RelatedCourses />
        {/* <Learningpath /> */}
      </main>
    </div>
  );
};

export default IT;
