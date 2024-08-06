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
import Induspro from "./IT/Induspro";

const IT = ({ city }) => {
  return (
    <div>
      <main>
        <DSHeader city={city} />
        <WhyDS city={city} />
        <Councelor />
        <DataScienceModules />
        <Trustus />
        <WhyChooseUs />
        <Certificate />
        <Induspro />
        <FAQsection />
        <RelatedCourses />
      </main>
    </div>
  );
};

export default IT;
