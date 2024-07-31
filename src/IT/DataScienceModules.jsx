import React, { useState } from 'react';
import './DataScienceModules.css';

const DataScience = () => {
  const [activeTab, setActiveTab] = useState('beginner');
  const [expandedModule, setExpandedModule] = useState(null);

  const handleModuleToggle = (moduleIndex) => {
    setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex);
  };

  return (
    <div className="container-ds" onClick={() => setExpandedModule(null)}>
      <div className="header-ds">
        <h1>Up-to-date curriculum with the fast-evolving Data Science and ML field.</h1>
      </div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'beginner' ? 'active' : ''}`}
          onClick={() => setActiveTab('beginner')}
        >
          <p>Beginner</p>
          <span>15 Months</span>
        </div>
        <div
          className={`tab ${activeTab === 'advanced' ? 'active' : ''}`}
          onClick={() => setActiveTab('advanced')}
        >
          <p>Advanced</p>
          <span>7 Months</span>
        </div>
      </div>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {activeTab === 'beginner' && (
          <div>
            <div
              className={`module ${expandedModule === 1 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(1)}
            >
              <div className="module-header">
                <p>MODULE - 1</p>
                <h2>Beginner Module</h2>
                <span>5 Months</span>
              </div>
              <div className="module-details">
                <h3>Tableau + Excel</h3>
                <ul>
                  <li>Basic Visual Analytics</li>
                  <li>More Charts and Graphs, Operations on Data and Calculations in Tableau</li>
                  <li>Advanced Visual Analytics and Level Of Detail (LOD) Expressions</li>
                  <li>Geographic Visualizations, Advanced Charts, and Worksheet and Workbook Formatting</li>
                  <li>Introduction to Excel and Formulas</li>
                  <li>Pivot Tables, Charts and Statistical functions</li>
                  <li>Google Spreadsheets</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 2 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(2)}
            >
              <div className="module-header">
                <p>MODULE - 2</p>
                <h2>Python Basic to Advance</h2>
                <span>4 Months</span>
              </div>
              <div className="module-details">
                <h3>Python</h3>
                <ul>
                  <li>Basic Python Concepts</li>
                  <li>Control Flow and Functions</li>
                  <li>Data Structures and Classes</li>
                  <li>Exception Handling and Recursion</li>
                  <li>Regular Expressions and Libraries</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Practical Applications</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 3 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(3)}
            >
              <div className="module-header">
                <p>MODULE - 3</p>
                <h2>Foundations of Machine Learning and Deep Learning</h2>
                <span>3 Months</span>
              </div>
              <div className="module-details">
                <h3>SQL</h3>
                <ul>
                  <li>CRUD Operations</li>
                  <li>Normalization</li>
                  <li>Joins (INNER, OUTER, LEFT, RIGHT, CROSS, SELF JOIN)</li>
                  <li>Transactions</li>
                  <li>Advanced Queries on University Schema</li>
                  <li>Stored Procedures</li>
                  <li>Common Table Expressions (CTE)</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 4 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(4)}
            >
              <div className="module-header">
                <p>MODULE - 4</p>
                <h2>Big Data Computing</h2>
                <span>3 Months</span>
              </div>
              <div className="module-details">
                <h3>Big Data</h3>
                <ul>
                  <li>Intro to Big Data</li>
                  <li>Hadoop and Its Evolution</li>
                  <li>HDFS Architecture</li>
                  <li>Hadoop Ecosystem</li>
                  <li>HDFS Commands</li>
                  <li>Intro Linux Commands</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 5 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(5)}
            >
              <div className="module-header">
                <p>MODULE - 5</p>
                <h2>Machine Learning Ops</h2>
                <span>1 Month</span>
              </div>
              <div className="module-details">
                <h3>Machine Learning</h3>
                <ul>
                  <li>Introduction to Machine Learning</li>
                  <li>Types of ML Algorithms</li>
                  <li>Feature Selection</li>
                  <li>Handling Categorical Data</li>
                  <li>Linear Regression</li>
                  <li>Logistic Regression</li>
                  <li>KNN (K-Nearest Neighbors)</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 6 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(6)}
            >
              <div className="module-header">
                <p>MODULE - 6</p>
                <h2>Advanced Data Structures and Algorithms</h2>
                <span>4 Months</span>
              </div>
              <div className="module-details">
                <h3>Data Structure & Algorithm</h3>
                <ul>
                  <li>Sorting Algorithms</li>
                  <li>Searching Algorithms</li>
                  <li>Linked Lists</li>
                  <li>Stacks and Queues</li>
                  <li>Tree Traversal Techniques</li>
                  <li>Graphs</li>
                  <li>Advanced Topics</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'advanced' && (
          <div>
            <div
              className={`module ${expandedModule === 7 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(7)}
            >
              <div className="module-header">
                <p>MODULE - 1</p>
                <h2>Advanced Data Analysis Techniques</h2>
                <span>5 Months</span>
              </div>
              <div className="module-details">
                <h3>Tableau + Excel</h3>
                <ul>
                  <li>Basic Visual Analytics</li>
                  <li>More Charts and Graphs, Operations on Data and Calculations in Tableau</li>
                  <li>Advanced Visual Analytics and Level Of Detail (LOD) Expressions</li>
                  <li>Geographic Visualizations, Advanced Charts, and Worksheet and Workbook Formatting</li>
                  <li>Introduction to Excel and Formulas</li>
                  <li>Pivot Tables, Charts and Statistical functions</li>
                  <li>Google Spreadsheets</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 8 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(8)}
            >
              <div className="module-header">
                <p>MODULE - 2</p>
                <h2>Advanced Machine Learning and AI</h2>
                <span>4 Months</span>
              </div>
              <div className="module-details">
                <h3>Python</h3>
                <ul>
                  <li>Basic Python Concepts</li>
                  <li>Control Flow and Functions</li>
                  <li>Data Structures and Classes</li>
                  <li>Exception Handling and Recursion</li>
                  <li>Regular Expressions and Libraries</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Practical Applications</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 9 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(9)}
            >
              <div className="module-header">
                <p>MODULE - 3</p>
                <h2>Deep Learning Specialization</h2>
                <span>3 Months</span>
              </div>
              <div className="module-details">
                <h3>SQL</h3>
                <ul>
                  <li>CRUD Operations</li>
                  <li>Normalization</li>
                  <li>Joins (INNER, OUTER, LEFT, RIGHT, CROSS, SELF JOIN)</li>
                  <li>Transactions</li>
                  <li>Advanced Queries on University Schema</li>
                  <li>Stored Procedures</li>
                  <li>Common Table Expressions (CTE)</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 10 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(10)}
            >
              <div className="module-header">
                <p>MODULE - 4</p>
                <h2>Big Data and Cloud Computing</h2>
                <span>3 Months</span>
              </div>
              <div className="module-details">
                <h3>Big Data</h3>
                <ul>
                  <li>Intro to Big Data</li>
                  <li>Hadoop and Its Evolution</li>
                  <li>HDFS Architecture</li>
                  <li>Hadoop Ecosystem</li>
                  <li>HDFS Commands</li>
                  <li>Intro Linux Commands</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 11 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(11)}
            >
              <div className="module-header">
                <p>MODULE - 5</p>
                <h2>AI Model Deployment</h2>
                <span>1 Month</span>
              </div>
              <div className="module-details">
                <h3>Machine Learning</h3>
                <ul>
                  <li>Introduction to Machine Learning</li>
                  <li>Types of ML Algorithms</li>
                  <li>Feature Selection</li>
                  <li>Handling Categorical Data</li>
                  <li>Linear Regression</li>
                  <li>Logistic Regression</li>
                  <li>KNN (K-Nearest Neighbors)</li>
                </ul>
              </div>
            </div>
            <div
              className={`module ${expandedModule === 12 ? 'expanded' : ''}`}
              onClick={() => handleModuleToggle(12)}
            >
              <div className="module-header">
                <p>MODULE - 6</p>
                <h2>Complex Data Structures and Optimization</h2>
                <span>4 Months</span>
              </div>
              <div className="module-details">
                <h3>Data Structure & Algorithm</h3>
                <ul>
                  <li>Sorting Algorithms</li>
                  <li>Searching Algorithms</li>
                  <li>Linked Lists</li>
                  <li>Stacks and Queues</li>
                  <li>Tree Traversal Techniques</li>
                  <li>Graphs</li>
                  <li>Advanced Topics</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="footer">
        
        <button>Download Curriculum</button>
      </div>
    </div>
  );
};

export default DataScience;
