import React from 'react';
import './Councelor.css';

const buttonClass = "bg-secondary text-secondary-foreground px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-saffron hover:text-saffron";
const containerClass = "bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-md flex flex-row items-center";
const textClass = "text-zinc-800";

const CallbackComponent = () => {
  const handleCallback = () => {
    alert('Callback request submitted!');
  };

  return (
  <div className="Councelor-cont">
    <div className={containerClass}>
      <div className="w-1/2 text-left">
        <h2 className={`text-2xl font-semibold ${textClass}`}>Connect with an Academic Counsellor</h2>
        <p className="text-zinc-600 mt-2">Get all the information about scholarships and low cost EMI options</p>
        <p className="text-zinc-500 mt-4">Eligibility: Anyone who graduated in 2022 or before</p>
      </div>
      <div className="w-1/2 flex justify-end">
        <button className={buttonClass} onClick={handleCallback}>
          Request Callback
        </button>
      </div>
    </div>
  </div>
  );
};

export default CallbackComponent;
