import React from 'react';
import './WhyDS.css';

const DataScienceComponent = () => {
  return (
    <div className="container-yds mx-auto p-6">
      <h1 className="text-5xl text-center mb-10 text-primary">
         <span className="text-accent">Why Data Science?</span>
      </h1>
      <div className="cards-container-yds grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DataCard
          title="What is Data Science?"
          content="Data Science involves extracting actionable insights from raw data using various scientific methods, algorithms, and processes. It provides tools for working with data from diverse sources, including financial logs, multimedia files, and sensors."
        />
        <DataCard
          title="What does a Data Scientist do?"
          content="A data scientist analyzes data to provide actionable insights for various processes. They possess strong statistical, analytical, and technical skills to work with structured and unstructured data."
          listItems={['Identify data sources and collect data.', 'Analyze data effectively.', 'Formulate strategies to solve business challenges.']}
        />
        <DataCard
          title="Why take Data Science training?"
          content="Data scientists are in high demand across industries, making a Data Science certification valuable. Our training course is designed for both beginners and professionals to equip them with essential skills."
          listItems={['Junior/Senior Data Scientist', 'Forecasting/Risk Analyst', 'Machine Learning Engineer']}
        />
      </div>
    </div>
  );
};

const DataCard = ({ title, content, listItems }) => {
  return (
    <div className="cardClass-yds">
      <h2 className="text-3xl font-semibold mb-3 textPrimaryClass">{title}</h2>
      <p className="textMutedForegroundClass mb-4">{content}</p>
      {listItems && (
        <ul className="list-disc list-inside textMutedForegroundClass mb-4">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataScienceComponent;
