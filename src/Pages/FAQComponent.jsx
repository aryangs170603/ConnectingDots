import React, { useState } from 'react';
import './FAQComponent.css';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What is SAP?', answer: ' SAP is a software corporation that manages business operations and customer relations. It is a leading software provider in the world, with over 40,000 employees and more than 200,000 customers.'},
    { question: 'What is SAP software used for?', answer: 'SAP software is used for enterprise resource planning (ERP) to manage business operations and customer relations.' },
    { question: 'What are the different types of SAP Modules?', answer: 'There are several SAP modules including SAP ERP, SAP CRM, SAP SCM, SAP PLM, and SAP SRM.' },
    { question: 'What is SAP software used for?', answer: 'SAP software is used for enterprise resource planning (ERP) to manage business operations and customer relations.' },
    { question: 'What is SAP?', answer: ' SAP is a software corporation that manages business operations and customer relations. It is a leading software provider in the world, with over 40,000 employees and more than 200,000 customers.' },
    { question: 'What is SAP software used for?', answer: 'SAP software is used for enterprise resource planning (ERP) to manage business operations and customer relations.' },
    { question: 'What are the different types of SAP Modules?', answer: 'There are several SAP modules including SAP ERP, SAP CRM, SAP SCM, SAP PLM, and SAP SRM.' },
    { question: 'What are the different types of SAP Modules?', answer: 'There are several SAP modules including SAP ERP, SAP CRM, SAP SCM, SAP PLM, and SAP SRM.' },
    { question: 'What are the different types of SAP Modules?', answer: 'There are several SAP modules including SAP ERP, SAP CRM, SAP SCM, SAP PLM, and SAP SRM.' },
    { question: 'What is SAP software used for?', answer: 'SAP software is used for enterprise resource planning (ERP) to manage business operations and customer relations.' },
    { question: 'What is SAP software used for?', answer: 'SAP software is used for enterprise resource planning (ERP) to manage business operations and customer relations.' },
    { question: 'What is SAP software used for?', answer: 'SAP software is used for enterprise resource planning (ERP) to manage business operations and customer relations.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const halfLength = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, halfLength);
  const rightColumn = faqs.slice(halfLength);

  return (
    <div className="faq-container">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <p>Got a Question? We are here to Answer</p>
      <div className="faq-columns">
        <div className="faq-column">
          {leftColumn.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => handleToggle(index)}>
                {faq.question}
                <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="faq-column">
          {rightColumn.map((faq, index) => (
            <div key={index + halfLength} className="faq-item">
              <div className="faq-question" onClick={() => handleToggle(index + halfLength)}>
                {faq.question}
                <span className="faq-toggle">{activeIndex === index + halfLength ? '-' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index + halfLength ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
