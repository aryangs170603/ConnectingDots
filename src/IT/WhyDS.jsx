import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WhyDS.css';

const DataScienceComponent = ({ city }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch the dynamic content for the selected city
    axios.get(`http://localhost:5000/api/content/${city}`)
      .then(response => {
        setCards(response.data.WhyDS.cards);
      })
      .catch(error => {
        console.error('Error fetching course data:', error);
      });
  }, [city]);

  return (
    <div className="container-yds mx-auto p-6">
      <h1 className="text-5xl text-center mb-10 text-primary">
        <span className="text-accent">Why Data Science?</span>
      </h1>
      <div className="cards-container-yds grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <DataCard
            key={index}
            title={card.title}
            content={card.content}
            listItems={card.listItems}
          />
        ))}
      </div>
    </div>
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
