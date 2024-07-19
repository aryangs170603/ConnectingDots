import React, { useState } from "react";
import "./Training2P.css";
import book from "../Logos/T2P gifs/book.gif";
import cert from "../Logos/T2P gifs/certificate.gif";
import cv from "../Logos/T2P gifs/cv.gif";
import intprep from "../Logos/T2P gifs/interviewprep.gif";
import jobs from "../Logos/T2P gifs/jobs.gif";
import mockint from "../Logos/T2P gifs/mockint.gif";

const CardComponent = () => {
  const [cardStates, setCardStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  const cardData = [
    { img: book, frontText: "BOOKS", backText: "Learn with Books" },
    { img: cv, frontText: "CV", backText: "Craft Your CV" },
    {
      img: intprep,
      frontText: "INTERVIEW",
      backText: "Prepare for Interviews",
    },
    {
      img: mockint,
      frontText: "MOCK INTERVIEWS",
      backText: "Practice with Mock Interviews",
    },
    { img: cert, frontText: "CERTIFICATE", backText: "Get Certified" },
    { img: jobs, frontText: "JOBS", backText: "Find Your Job" },
  ];

  return (
    <div className="T2P">
      <div className="T2P-title">
        <h1>TRAINING TO PLACEMENT APPROACH</h1>
      </div>
      <div className="cardsT2P-wrapper">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="cardT2P-container"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={`cardT2P ${cardStates[index] ? "rotated" : ""}`}>
              <div className="cardT2P-contents cardT2P-front">
                <div className="cardT2P-depth">
                  <div className="cardT2P-img1">
                    <img src={card.img} alt="Logo" className="cardT2P-logo" />
                  </div>
                  <h2>{card.frontText}</h2>
                </div>
              </div>
              <div className="cardT2P-contents cardT2P-back">
                <div className="cardT2P-depth">
                  <h2>{card.backText}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
