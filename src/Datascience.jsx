// IT.jsx
import React from 'react';
import DSHeader from './IT/DSHeader';
import WhyDS from './IT/WhyDS';
import DataScienceModules from './IT/DataScienceModules';
import Certificate from './Homepage/Certificate';
import FAQsection from './IT/FAQ';
import RelatedCourses from './IT/RelatedCourses';
import Trustus from './IT/Trustus';
import Councelor from './IT/Councelor';
import Induspro from './IT/Induspro';

const Datascience = () => {
  return (
    <div>
      <main>
        <DSHeader pageId="MDSHeader" />
        {/* <DSHeader pageId="MDAHeader" /> */}
        <WhyDS pageId="WhyMDS"/>
        <Councelor />
        <DataScienceModules pageId="MDSmodule" />
        <Trustus />
        <Certificate />
        <Induspro  pageId="MDSinduspro"/>
        <FAQsection pageId="MDSfaq" />
        <RelatedCourses pageId="MDSrelated" />
      </main>
    </div>
  );
};

export default Datascience;
