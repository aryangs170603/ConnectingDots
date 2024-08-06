// --------------------------------Data Science Header Imports
import React, { useState, useEffect } from 'react';
import './DataSciencePage.css';
import ContactForm from '../Homepage/ContactForm';

// Why Data Science Imports
// Cousellor imports
// Data Science Curriulum imports
 const initialModules = {
    beginner: [
      {
        title: "Tableau + Excel",
        duration: "5 Months",
        content: [
          "Basic Visual Analytics",
          "More Charts and Graphs, Operations on Data and Calculations in Tableau",
          "Advanced Visual Analytics and Level Of Detail (LOD) Expressions",
          "Geographic Visualizations, Advanced Charts, and Worksheet and Workbook Formatting",
          "Introduction to Excel and Formulas",
          "Pivot Tables, Charts and Statistical functions"

        ]
      },
      {
        title: "Python Basic to Advance",
        duration: "4 Months",
        content: [
          "Basic Python Concepts",
          "Control Flow and Functions",
          "Data Structures and Classes",
          "Exception Handling and Recursion",
          "Regular Expressions and Libraries",
          "Exploratory Data Analysis",
          "Practical Applications"
        ]
      },
      {
        title: "Structured Query Language(SQL)",
        duration: "3 Months",
        content: [
          "CRUD Operations",
          "Normalization",
          "Joins (INNER, OUTER, LEFT, RIGHT, CROSS, SELF JOIN)",
          "Transactions",
          "Advanced Queries on University Schema",
          "Stored Procedures",
          "Common Table Expressions"
        ]
      },
      {
        title: "Big Data Computing",
        duration: "3 Months",
        content: [
          "Introduction to Big Data",
          "Hadoop and Its Evolution",
          "HDFS Architecture",
          "Hadoop Ecosystem",
          "HDFS Commands",
          "Intro Linux Commands"
        ]
      },
      {
        title: "Machine Learning Ops",
        duration: "1 Month",
        content: [
          "Introduction to Machine Learning",
          "Types of ML Algorithms",
          "Feature Selection",
          "Handling Categorical Data",
          "Linear Regression",
          "Logistic Regression",
          "KNN (K-Nearest Neighbors)"
        ]
      },
    ],
    advanced: [
      {
        title: "Data Structures and Algorithms",
        duration: "6 Months",
        content: [
          "Sorting Algorithms",
          "Searching Algorithms",
          "Linked Lists  ",
          "Stacks and Queues",
          "Tree Traversal Techniques",
          "Graphs",
          "Advanced Topics"
        ]
      },
      {
        title: "Data Engineering",
        duration: "5 Months",
        content: [
          "Introduction to Data Engineering",
          "Data Pipelines",
          "ETL Processes",
          "Data Warehousing"
        ]
      },
      {
        title: "AI and Deep Learning",
        duration: "4 Months",
        content: [
          "Introduction to AI",
          "Deep Learning Architectures",
          "Convolutional Neural Networks",
          "Recurrent Neural Networks"
        ]
      },
      {
        title: "Project Specializations",
        duration: "4 Months",
        content: [
          "Specialization 1",
          "Specialization 2",
          "Specialization 3",
          "Specialization 4"
        ]
      },
      {
        title: "Production ML Systems",
        duration: "2 Months",
        content: [
          "Production Machine Learning",
          "Scaling ML Systems",
          "ML System Design",
          "Case Studies"
        ]
      },
    ],
  };

// Trust us imports
import Logos from '../Logos/Ourclients/Artboard 10.png';
import Logos1 from '../Logos/Ourclients/Artboard 11.png';
import Logos2 from '../Logos/Ourclients/Artboard 12.png';
import Logos3 from '../Logos/Ourclients/Artboard 13.png';
import Logos4 from '../Logos/Ourclients/Artboard 14.png';
import Logos5 from '../Logos/Ourclients/Artboard 15.png';
import Logos6 from '../Logos/Ourclients/Artboard 16.png';
import Logos7 from '../Logos/Ourclients/Artboard 17.png';
import Logos8 from '../Logos/Ourclients/Artboard 18.png';
import Logos9 from '../Logos/Ourclients/Artboard 19.png';
import Logos10 from '../Logos/Ourclients/Artboard 20.png';
import Logos11 from '../Logos/Ourclients/Artboard 21.png';
import Logos12 from '../Logos/Ourclients/Artboard 22.png';
import Logos13 from '../Logos/Ourclients/Artboard 23.png';
import Logos14 from '../Logos/Ourclients/Artboard 24.png';
import Logos15 from '../Logos/Ourclients/Artboard 25.png';
import Logos16 from '../Logos/Ourclients/Artboard 26.png';
import Logos17 from '../Logos/Ourclients/Artboard 40.png';
import Logos18 from '../Logos/Ourclients/Artboard 41.png';
import Logos19 from '../Logos/Ourclients/Artboard 42.png';
import Logos20 from '../Logos/Ourclients/Artboard 43.png';
import Logos21 from '../Logos/Ourclients/Artboard 44.png';
import Logos22 from '../Logos/Ourclients/Artboard 45.png';
import Logos23 from '../Logos/Ourclients/Artboard 46.png';
import Logos24 from '../Logos/Ourclients/Artboard 47.png';
import Logos25 from '../Logos/Ourclients/Artboard 48.png';
import Logos26 from '../Logos/Ourclients/Artboard 49.png';
import Logos27 from '../Logos/Ourclients/Artboard 50.png';
import Logos28 from '../Logos/Ourclients/Artboard 51.png';
import Logos29 from '../Logos/Ourclients/Artboard 52.png';

  const logos1 = [
    Logos,
    Logos1,
    Logos2,
    Logos3,
    Logos4,
    Logos15,
    Logos16,
    Logos17,
    Logos18,
    Logos19
  ];

  const logos2 = [
    Logos5,
    Logos6,
    Logos7,
    Logos8,
    Logos9,
    Logos20,
    Logos21,
    Logos22,
    Logos23,
    Logos24
  ];

  const logos3 = [
    Logos10,
    Logos11,
    Logos12,
    Logos13,
    Logos14,
    Logos25,
    Logos26,
    Logos27,
    Logos28,
    Logos29
  ];

  const duplicateLogos = (logos) => {
    return [...logos, ...logos];
  }

// Program Highlights imports
import Assignmentlogo from "../Logos/DSimages/assignment-icon.png"; 
import Jobreadylogo from "../Logos/DSimages/job-readiness-icon.png"; 
import Companylogo from "../Logos/DSimages/company-icon.png"; 
import Expalt from "../Logos/DSimages/Expaltlogo.png";
    const steps = [
      {
        title: "25+ Assignments",
        description:
          "Work on 25+ Assignements",
        progress: 25,
        imgSrc: Assignmentlogo,
        alt: "Assignments Logo",
      },

      {
        title: "Tied-up with 2000+ Companies",
        description:
          "ConnectingDotsERP has tied up with 2000+ Companies to provide Jobs to Many Students.",
        progress: 50,
        imgSrc: Companylogo,
        alt: "Company Logo",
      },
      {
        title: "Experience Alteration System",
        description:
          "A dedicated placement who completed the course.",
        progress: 75,
        imgSrc: Expalt,
        alts: "Job Readiness Logo",
      },
      {
        title: "Job Readiness Program",
        description:
          "A dedicated placement who completed the course.",
        progress: 100,
        imgSrc: Jobreadylogo,
        alts: "Job Readiness Logo",
      },
    ];

// Industry Projects imports
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ContactForm from '../Homepage/ContactForm';
import aiLogo from '../Logos/Relatedgifs/artificial-intelligence (1).gif';
import clLogo from '../Logos/Relatedgifs/cloud--network.gif';
import codeLogo from '../Logos/Relatedgifs/coding.gif';
import compLogo from '../Logos/Relatedgifs/computer.gif';
import exchLogo from '../Logos/Relatedgifs/exchange.gif';
import javaLogo from '../Logos/Relatedgifs/java (1).gif';
import pieLogo from '../Logos/Relatedgifs/pie-chart.gif';
import setLogo from '../Logos/Relatedgifs/setting.gif';
import sciLogo from '../Logos/Relatedgifs/science.gif';
import phyLogo from '../Logos/Relatedgifs/physics.gif';
    const Indusprocourses = [
      { name: 'Revealing the Power of Data', description: 'Here, in Excel, you need to find the vital stats of the departments such as weak spots and bottlenecks in the processes, and find ways to scale them up.', icon: aiLogo },
      { name: 'Human Resource Management System', description: 'This application helps the student complete their HR toolkit with the secure management of tracking and delivering HR documents, organizing personal records, payroll data, etc.', icon: pieLogo },
      { name: 'Vehicle Sales Analysis', description: 'The idea behind introducing this project in our Data Science & Analytics with AI Certification course is to understand how to analyze and generate Vehicle Sales Report and dive into the data of ‘total vehicles sold’, ‘total revenue generated’, seasonality of the revenue and so on.', icon: sciLogo },
      { name: 'Supply Chain & Logistics Analysis', description: 'In the Data Science & Analytics with Al,students will have a project where they will have to evaluate every stage of a supply chain starting from the time the business acquires raw materials or supplies from its suppliers to the delivery of the final product to the consumers.', icon: clLogo },
      { name: 'Face Detection', description: 'This is probably the most popular application of the computer version. Therefore, in our Data Science & Analytics with Al Course, we teach the technology that finds applications in various industries, such as security and social media. Thus, we are building a face detection project through OpenCV.', icon: compLogo },
      { name: 'Full-Stack Python', description: 'Full-stack development with Python', icon: codeLogo },
      { name: 'Full-Stack Java', description: 'Full-stack development with Java', icon: javaLogo },
      { name: 'PowerBI', description: 'Business intelligence with PowerBI', icon: setLogo },
      { name: 'Google Cloud Platform', description: 'Learn GCP from experts', icon: exchLogo },
      { name: 'Reactjs Framework', description: 'Learn Reactjs from Industry Experts', icon: phyLogo },
    ];

// FAQ's imports
import faqVideo from '../Logos/DSimages/faqvideo.mp4';

// Related Courses imports
// import aiLogo from '../Logos/Relatedgifs/artificial-intelligence (1).gif';
// import clLogo from '../Logos/Relatedgifs/cloud--network.gif';
// import codeLogo from '../Logos/Relatedgifs/coding.gif';
// import compLogo from '../Logos/Relatedgifs/computer.gif';
// import exchLogo from '../Logos/Relatedgifs/exchange.gif';
// import javaLogo from '../Logos/Relatedgifs/java (1).gif';
// import pieLogo from '../Logos/Relatedgifs/pie-chart.gif';
// import setLogo from '../Logos/Relatedgifs/setting.gif';
// import sciLogo from '../Logos/Relatedgifs/science.gif';
// import phyLogo from '../Logos/Relatedgifs/physics.gif';
    const Relatedcourses = [
        { name: 'Artificial Intelligence', description: 'Learn AI from scratch', icon: aiLogo },
        { name: 'Masters in Data Science', description: 'Become a data science expert', icon: pieLogo },
        { name: 'Masters in Data Analytics', description: 'Master data analytics skills', icon: sciLogo },
        { name: 'Salesforce', description: 'Salesforce developer courses', icon: clLogo },
        { name: 'UI/UX Design', description: 'Design stunning user interfaces', icon: compLogo },
        { name: 'Full-Stack Python', description: 'Full-stack development with Python', icon: codeLogo },
        { name: 'Full-Stack Java', description: 'Full-stack development with Java', icon: javaLogo },
        { name: 'PowerBI', description: 'Business intelligence with PowerBI', icon: setLogo },
        { name: 'Google Cloud Platform', description: 'Learn GCP from experts', icon: exchLogo },
        { name: 'Reactjs Framework', description: 'Learn Reactjs from Industry Experts', icon: phyLogo },
      ];
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const DataScincePage = () => {    

// hooks and functionality of all Component  

  // Data science header
  const [showContactForm, setShowContactForm] = useState(false);
  const [course, setCourse] = useState('');

  const handleOpenContactForm = (courseName) => {
      setCourse(courseName);
      setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
      setShowContactForm(false);
      setCourse('');
  };
  
 // Data science curriculum hooks and functionality
     const [activeTab, setActiveTab] = useState('beginner');
     const [activeModule, setActiveModule] = useState(0); 
      const [modules] = useState(initialModules);

       const handleModuleClick = (moduleIndex) => {
         if (activeModule !== moduleIndex) {
           setActiveModule(moduleIndex);
         }
       };

       const handleTabChange = (tab) => {
         setActiveTab(tab);
         setActiveModule(0); 
       };

       const activeContent = modules[activeTab][activeModule];

    // Program Highlights hooks and functionality
    const [progress, setProgress] = useState(0);

      const handleMouseEnter = (stepProgress) => {
        setProgress(stepProgress);
      };

    // Industry Projects hooks and functionality
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setCarouselIndex(selectedIndex);
    };

   // FAQ's Section hooks and functionality
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);

    // Related Courses hooks and Functionality
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      if (showModal) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }

      return () => {
        document.body.classList.remove('modal-open');
      };
    }, [showModal]);

    const handleEnrollNowClick = (relcourse) => {
      setSelectedCourse(relcourse);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedCourse(null);
    };

    const handleSelect = (selectedIndex) => {
      setActiveIndex(selectedIndex);
    };
  }
  
  // ---------------------------------------------Return-------------------------------------------------------------------------------------------------------

  return(

    //---------------------------------------------- Data science header
   <div className="Datasciencepage">
    <div className="container-it-ds-header">

        <div className="left-section-it-ds">
            <h1><span className='ds-header-span'>Masters in Data Science</span> &<br/>Machine Learning<br />Program</h1>
            <h2> <span className='ds-header-span-2'>Data Science Course</span></h2>
            <p>Unlock the power of data with <span className='ds-header-span-3'>Connecting Dots</span> Data Science course, mastering crucial skills for success in the field, all backed by secure placement support.</p>
            <ul className="features-it-ds">
                <li>Live Class</li>
                <li>1:1 mentorship</li>
                <li>Industry projects</li>
            </ul>
            <div className="alumni-it-ds">
                <span>Find our Alumni at -</span>
                <div className="alumni-logos-it-ds">
                    <img src="https://via.placeholder.com/50x20?text=amazon" alt="amazon logo" />
                    <img src="https://via.placeholder.com/50x20?text=samsung" alt="samsung logo" />
                    <img src="https://via.placeholder.com/50x20?text=intuit" alt="intuit logo" />
                    <img src="https://via.placeholder.com/50x20?text=microsoft" alt="microsoft logo" />
                    <img src="https://via.placeholder.com/50x20?text=google" alt="google logo" />
                </div>
            </div>
            <div className="buttons-it-ds">
                <button 
                    className="batch-button-it-ds" 
                    onClick={() => handleOpenContactForm('Data Science Program')}
                >
                    Next Batch starts in AUGUST
                </button>
                <button 
                    className="brochure-button-it-ds" 
                    onClick={() => handleOpenContactForm('Book Live Demo')}
                >
                    Book Live Demo
                </button>
            </div>
        </div>
        <div className="right-section-it-ds">
            <h3>Book a <span>FREE</span> live class</h3>
            <form 
                action="#" 
                method="POST" 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1rem'
                }}
            >
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    style={{ 
                        width: '100%', 
                        padding: '0.5rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.375rem' 
                    }} 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your Email" 
                    style={{ 
                        width: '100%', 
                        padding: '0.5rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.375rem' 
                    }} 
                />
                <input 
                    type="text" 
                    name="year" 
                    placeholder="Year of Passing" 
                    style={{ 
                        width: '100%', 
                        padding: '0.5rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.375rem' 
                    }} 
                />
                <div 
                    className="phone-input-it-ds" 
                    style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        maxwidth: '23.5vw' 
                    }}
                >
                    <select 
                        style={{ 
                            flex: '0 0 80px', 
                            padding: '0.5rem', 
                            height: '3.5vw', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '0.375rem'
                        }}
                    >
                        <option>+91</option>
                        {/* Add more country codes as needed */}
                    </select>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Enter your phone number" 
                        style={{ 
                            flex: '1', 
                            padding: '0.5rem', 
                            height: '3.5vw', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '0.375rem'
                        }} 
                    />
                </div>
              <button 
                type="submit" 
                className="submit-button-it-ds" 
                style={{ 
                    backgroundColor: '#dc2626', 
                    color: 'white', 
                    padding: '0.5rem', 
                    borderRadius: '0.375rem'
                }}
                onClick={() => alert('You Have Booked a Live Demo!')}
              >
                Book Live Class
              </button>

            </form>
        </div>
        {showContactForm && (
            <ContactForm onClose={handleCloseContactForm} course={course} />
        )}
    </div>


    {/* // -----------------------------------Why data science */}
     <div className="cardClass-yds">
       <h2
         className="text-3xl font-semibold mb-3 textPrimaryClass"
         dangerouslySetInnerHTML={{ __html: title }}></h2>
       <p
         className="textMutedForegroundClass mb-4"
         dangerouslySetInnerHTML={{ __html: content }}
       ></p>
       {listItems && (
         <ul className="list-disc list-inside textMutedForegroundClass mb-4">
           {listItems.map((item, index) => (
             <li key={index}>{item}</li>
           ))}
         </ul>
       )}
     </div>
    {/*---------------------------------------------- counsellor section */}
     <div className="counselor-container-it-ds">
       <div className="counselor-content-it-ds">
         <div className="counselor-text-it-ds">
           <h2 className="title-it-ds-counc">Connect with an Academic Counsellor</h2>
           <p className="subtitle-it-ds-counc">Get all the information about the course benifits</p>
           <p className="eligibility-it-ds">Eligibility: Anyone who graduated </p>
         </div>
         <div className="button-container-it-ds-counc">
           <button className="request-button-it-ds-counc" onClick={handleCallback}>
             Request Callback
           </button>
         </div>
       </div>
     </div>


     {/* -----------------------------Data Science Curriculum */}

     <div className="container-ds">
       <div className="header-ds">
         <h1>DATA SCIENCE CURRICULUM</h1>
       </div>
       <div className="tabs">
         <div
           className={`tab ${activeTab === 'beginner' ? 'active' : ''}`}
           onClick={() => handleTabChange('beginner')}
         >
           <p>Beginner</p>
           <span>15 Months</span>
         </div>
         <div
           className={`tab ${activeTab === 'advanced' ? 'active' : ''}`}
           onClick={() => handleTabChange('advanced')}
         >
           <p>Advanced</p>
           <span>20 Months</span>
         </div>
       </div>
       <div className="content-container">
         <div className="content">
           {modules[activeTab].map((module, index) => (
             <div
               key={index}
               className={`module ${activeModule === index ? 'selected' : ''}`}
               onClick={() => handleModuleClick(index)}
             >
               <div className="module-header">
                 <p>MODULE - {index + 1}</p>
                 <h2>{module.title}</h2>
                 <span>{module.duration}</span>
               </div>
             </div>
           ))}
         </div>
         <div className="module-details-container">
           {activeContent && (
             <div className="module-details expanded">
               <h2>{activeContent.title}</h2>
               <p><strong>Duration:</strong> {activeContent.duration}</p>
               <ul>
                 {activeContent.content.map((item, index) => (
                   <li key={index}>{item}</li>
                 ))}
               </ul>
             </div>
           )}
         </div>
       </div>
       <div className="footer">
         <button>Download Curriculum</button>
       </div>
     </div>

   {/* ---------------------------Trust us section */}
     <div className="container-it-ds">

       <div className="logos-it-ds">
         <div className="marquee-it-ds">
           <div className="marquee-content-it-ds">

             {duplicateLogos(logos1).map((src, index) => (
               <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
             ))}
           </div>
         </div>
         <div className="marquee-it-ds">
           <div className="marquee-content-it-ds">
             {duplicateLogos(logos2).map((src, index) => (
               <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
             ))}
           </div>
         </div>
         <div className="marquee-it-ds">
           <div className="marquee-content-it-ds">
             {duplicateLogos(logos3).map((src, index) => (
               <img src={src} alt={`Logo ${index}`} className="logo-it-ds" key={index} />
             ))}
           </div>
         </div>
       </div>
       <div className="info-it-ds">
         <div className="container-it-ds-title">
           <h2>ORGANISATIONS TRUST US </h2>
         </div>
         <h2 className="title-it-ds"> <span className='highlight-span-cards'>1000+</span> Organizations<br></br> TRUST US WITH THEIR <br></br>Openings</h2>
         <p className="description-it-ds">
           <span className='highlight-span-cards'>Organizations</span>, across the globe trust our students and their brilliant <span className='highlight-span-cards'>technical skills</span> in Full Stack Development, <span className='highlight-span-cards'>Data Science & Analytics with AI</span>, Java Full Stack Developer, Digital Marketing Course, AWS Cloud Technology, which results in them getting hired at excellent companies with impressive pay scales.<span className='highlight-span-cards'>Connecting Dots ERP</span>, India’s fastest-growing <span className='highlight-span-cards'>Software Training Institute</span> provides a range of IT Courses helping to shape the future of our students in every way possible. The Coding Courses provided by our Institute are highly valuable and worthy for the students.
         </p>
         <div className="statistics-it-ds">
           <div className="stat-it-ds">
             <span className="number-it-ds">1000+</span> <span className="label-it-ds">Hiring companies</span>
           </div>
           <div className="stat-it-ds">
             <span className="number-it-ds">100+</span> <span className="label-it-ds">Students already placed</span>
           </div>
         </div>
       </div>
     </div>

     {/* ---------------------------Program Highlights*/}
     <div className="container-it-ds-prgrm">
       <h2>PROGRAM HIGHLIGHTS</h2>
       <div className="progress-bar-it-ds">
         <div className="progress-it-ds" style={{ width: `${progress}%` }}></div>
       </div>

       <div className="cards-it-ds">
         {steps.map((step, index) => (
           <div
             key={index}
             className="card-it-ds"
             onMouseEnter={() => handleMouseEnter(step.progress)}
           >
             <img
               src={step.imgSrc}
               alt={step.title}
               className="card-img-it-ds"
             />
             <h3>{step.title}</h3>
             <hr></hr>
             <p>{step.description}</p>
           </div>
         ))}
       </div>
     </div>

     {/* ---------------------------Industry Project */}
     <div className="induspro-container text-center">
       <div className="induspro-title">
         <h2>INDUSTRY PROJECT</h2>
       </div>
       <Carousel
         activeIndex={carouselIndex}
         onSelect={handleSelect}
         interval={3000} // 3 seconds interval for automatic sliding
         indicators={false}
         controls={false}
         pause="hover" // Pause the carousel on hover
       >
         <Carousel.Item>
           <div className="induspro-grid">
             {Indusprocourses.slice(0, 5).map((induscourse, index) => (
               <div key={index} className="induspro-card">
                 <div className="induspro-container">
                   <img src={induscourse.icon} alt={`${induscourse.name} icon`} className="induspro-icon" />
                 </div>
                 <h3>{induscourse.name}</h3>
                 <p>{induscourse.description}</p>
               </div>
             ))}
           </div>
         </Carousel.Item>
         <Carousel.Item>
           <div className="induspro-grid">
             {Indusprocourses.slice(5, 10).map((induscourse, index) => (
               <div key={index} className="induspro-card">
                 <div className="induspro-container">
                   <img src={induscourse.icon} alt={`${induscourse.name} icon`} className="induspro-icon" />
                 </div>
                 <h3>{induscourse.name}</h3>
                 <p>{induscourse.description}</p>
               </div>
             ))}
           </div>
         </Carousel.Item>
       </Carousel>
       <div className="induspro-radio-buttons">
         <input
           type="radio"
           name="carousel-radio"
           checked={carouselIndex === 0}
           onChange={() => handleSelect(0)}
         />
         <input
           type="radio"
           name="carousel-radio"
           checked={carouselIndex === 1}
           onChange={() => handleSelect(1)}
         />
       </div>
     </div>

     

     {/* ---------------------------FAQ section */}
     <div className="container-faq-ds">
       <h2>FREQUENTLY ASKED QUESTIONS</h2>
       <div className="faq-content">
         <div className="faq-image">
           
           <video loop autoPlay muted>
             <source src={faqVideo} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
         </div>
         <div className="faq-questions">
           {faqItems.map((item, index) => (
             <div key={index} className="accordion-item">
               <button
                 aria-expanded={expandedIndex === index}
                 onClick={() => handleToggle(index)}
               >
                 <span className="accordion-title">{item.question}</span>
                 <span className="icon" aria-hidden="true"></span>
               </button>
               <div
                 className="accordion-content"
                 style={{
                   opacity: expandedIndex === index ? 1 : 0,
                   maxHeight: expandedIndex === index ? '9em' : 0
                 }}
               >
                 <p>{item.answer}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>

     {/*------------------------- Related Courses section */}
     <div className="related-courses-container text-center">
       <div className="related-courses-title">
         <h2>RELATED COURSES</h2>
       </div>
       <Carousel
         activeIndex={activeIndex}
         onSelect={handleSelect}
         interval={3000} // 3 seconds interval for automatic sliding
         indicators={false}
         controls={false}
         pause="hover" // Pause the carousel on hover
       >
         <Carousel.Item>
           <div className="related-courses-grid">
             {Relatedcourses.slice(0, 5).map((relcourse, index) => (
               <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(relcourse.name)}>
                 <div className="related-icon-container">
                   <img src={relcourse.icon} alt={`${relcourse.name} icon`} className="related-course-icon" />
                 </div>
                 <h3>{relcourse.name}</h3>
                 <p>{relcourse.description}</p>
               </div>
             ))}
           </div>
         </Carousel.Item>
         <Carousel.Item>
           <div className="related-courses-grid">
             {Relatedcourses.slice(5, 10).map((relcourse, index) => (
               <div key={index} className="related-course-card" onClick={() => handleEnrollNowClick(relcourse.name)}>
                 <div className="related-icon-container">
                   <img src={relcourse.icon} alt={`${relcourse.name} icon`} className="related-course-icon" />
                 </div>
                 <h3>{relcourse.name}</h3>
                 <p>{relcourse.description}</p>
               </div>
             ))}
           </div>
         </Carousel.Item>
       </Carousel>
       <div className="related-carousel-radio-buttons">
         <input
           type="radio"
           name="carousel-radio"
           checked={activeIndex === 0}
           onChange={() => handleSelect(0)}
         />
         <input
           type="radio"
           name="carousel-radio"
           checked={activeIndex === 1}
           onChange={() => handleSelect(1)}
         />
       </div>

       {showModal && <ContactForm onClose={handleCloseModal} course={selectedCourse} />}
     </div>
     
  </div>
  );
}
  export default DataScincePage;
