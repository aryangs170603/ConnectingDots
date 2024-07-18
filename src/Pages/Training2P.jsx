import React from "react";
import "./Training2P.css";

const cardsContent = [
  { title: "Card 1", subtitle: "Hover Me", contentTitle: "Title 1", contentText: "This is the content for card 1." },
  { title: "Card 2", subtitle: "Hover Me", contentTitle: "Title 2", contentText: "This is the content for card 2." },
  { title: "Card 3", subtitle: "Hover Me", contentTitle: "Title 3", contentText: "This is the content for card 3." },
  { title: "Card 4", subtitle: "Hover Me", contentTitle: "Title 4", contentText: "This is the content for card 4." },
  { title: "Card 5", subtitle: "Hover Me", contentTitle: "Title 5", contentText: "This is the content for card 5." },
  { title: "Card 6", subtitle: "Hover Me", contentTitle: "Title 6", contentText: "This is the content for card 6." },
];

const Training2P = () => {
  return (
    <div className="courses-container text-center">
      {cardsContent.map((card, index) => (
        <div className="cardBox" key={index}>
          <div className="card1">
            <h2>{card.title}</h2>
            <span>{card.subtitle}</span>
            <div className="content">
              <h3>{card.contentTitle}</h3>
              <p>{card.contentText}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Training2P;
