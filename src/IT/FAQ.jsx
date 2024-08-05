import React, { useState } from 'react';
import './FAQ.css';
import faqVideo from '../Logos/DSimages/faqvideo.mp4';

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
          {/* Updated video element for continuous play without controls */}
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
  );
};

const faqItems = [
  {
    question: 'Who should take this Data Science course?',
    answer: 'This Data Science course is designed for everyone, even if you have no coding experience. We offer a Beginner module that covers the basics of coding to get you started.',
  },
  {
    question: 'Why is ConnectingDots Data Science program considered one of the best data science courses?',
           answer: 'The ConnectingDots Data Science and Machine Learning program is considered one of the best data science courses because it:\n' },
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
