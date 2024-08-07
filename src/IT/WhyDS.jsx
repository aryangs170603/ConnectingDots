import React, { useState, useEffect } from 'react';
import './WhyDS.css';

const DataScienceComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch JSON data
    fetch('Jsonfolder/Whyds.json')  // Path to your JSON file
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-yds mx-auto p-6">
      <SectionComponent section={data.dataScience} />
      
    </div>
  );
};

const SectionComponent = ({ section }) => {
  return (
    <>
      <h1 className="text-5xl text-center mb-10 text-primary">
        <span className="text-accent">{section.title}</span>
      </h1>
      <div className="cards-container-yds grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.cards.map((card, index) => (
          <DataCard
            key={index}
            title={card.title}
            content={card.content}
            listItems={card.listItems}
          />
        ))}
      </div>
    </>
  );
};

const DataCard = ({ title, content, listItems }) => {
  return (
    <div className="cardClass-yds">
      <h2
        className="text-3xl font-semibold mb-3 textPrimaryClass"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
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
  );
};

export default DataScienceComponent;
