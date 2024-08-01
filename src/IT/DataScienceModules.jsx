import React, { useState } from 'react';
import './DataScienceModules.css';

const DataScience = () => {
  const [activeTab, setActiveTab] = useState('beginner');
  const [activeModule, setActiveModule] = useState(0); // Default to the first module

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

  const [modules] = useState(initialModules);

  const handleModuleClick = (moduleIndex) => {
    if (activeModule !== moduleIndex) {
      setActiveModule(moduleIndex);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveModule(0); // Default to the first module of the new tab
  };

  const activeContent = modules[activeTab][activeModule];

  return (
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
  );
};

export default DataScience;
