import React, { useState, useEffect } from 'react';
import './DataScienceModules.css';

const DataScienceModules = () => {
  const [activeTab, setActiveTab] = useState('beginner');
  const [activeModule, setActiveModule] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Jsonfolder/curriculumdata.json');
        const data = await response.json();
        setData(data.dataScienceCurriculum);
      } catch (error) {
        console.error('Error fetching module data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleModuleClick = (moduleIndex) => {
    if (activeModule !== moduleIndex) {
      setActiveModule(moduleIndex);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveModule(0);
  };

  const activeContent = data.tabs.find(tab => tab.type === activeTab).modules[activeModule];

  return (
    <div className="container-ds">
      <div className="header-ds">
        <h1>{data.title}</h1>
      </div>
      <div className="tabs">
        {data.tabs.map(tab => (
          <div
            key={tab.type}
            className={`tab ${activeTab === tab.type ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.type)}
          >
            <p>{tab.type.charAt(0).toUpperCase() + tab.type.slice(1)}</p>
            <span>{tab.duration}</span>
          </div>
        ))}
      </div>
      <div className="content-container">
        <div className="content">
          {data.tabs.find(tab => tab.type === activeTab).modules.map((module, index) => (
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

export default DataScienceModules;
