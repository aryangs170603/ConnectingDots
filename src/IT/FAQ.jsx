import React, { useState } from 'react';
import './FAQ.css';
import faqImage from '../Logos/DSimages/faqimage.png';

const FAQAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container-faq-ds">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-content">
        <div className="faq-image">
          <img src={faqImage} alt="FAQ visual representation" />
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
  );
};

const faqItems = [
  {
    question: 'Why is the moon sometimes out during the day?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    question: 'Why is the sky blue?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    question: 'Will we ever discover aliens?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    question: 'How much does the Earth weigh?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    question: 'How do airplanes stay up?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  }
];

export default FAQAccordion;
