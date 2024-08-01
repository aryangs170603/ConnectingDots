import React from 'react';
import './DSHeader.css';

const DSHeader = () => {
    return (
        <div className="container-it-ds-header">
            <div className="left-section-it-ds">
                <h1>Data Science &<br />Machine Learning<br />Program</h1>
                <h2>Data Science Course <span>Online</span></h2>
                <p>Unlock the power of data with Connecting Dot's Data Science course, mastering crucial skills for success in the field, all backed by secure placement support.</p>
                <ul className="features-it-ds">
                    <li>Live Class</li>
                    <li>1:1 mentorship</li>
                    <li>Industry projects</li>
                </ul>
                <div className="alumni-it-ds">
                    <span>Find our Alumni at -</span>
                    <div className="alumni-logos-it-ds">
                        <img src="https://via.placeholder.com/50x20?text=amazon" alt="amazon logo" />
                        <img src="https://via.placeholder.com/50x20?text=samsung" alt="samsung logo" />
                        <img src="https://via.placeholder.com/50x20?text=intuit" alt="intuit logo" />
                        <img src="https://via.placeholder.com/50x20?text=microsoft" alt="microsoft logo" />
                        <img src="https://via.placeholder.com/50x20?text=google" alt="google logo" />
                    </div>
                </div>
                <div className="buttons-it-ds">
                    <button className="batch-button-it-ds">Next Batch starts in AUGUST</button>
                    <button className="brochure-button-it-ds">Download Brochure</button>
                </div>
            </div>
            <div className="right-section-it-ds">
                <h3>Book a <span>FREE</span> live class</h3>
                <form 
                    action="#" 
                    method="POST" 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '1rem'
                    }}
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        style={{ 
                            width: '100%', 
                            padding: '0.5rem', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '0.375rem' 
                        }} 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your Email" 
                        style={{ 
                            width: '100%', 
                            padding: '0.5rem', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '0.375rem' 
                        }} 
                    />
                    <input 
                        type="text" 
                        name="year" 
                        placeholder="Year of Passing" 
                        style={{ 
                            width: '100%', 
                            padding: '0.5rem', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '0.375rem' 
                        }} 
                    />
                    <div 
                        className="phone-input-it-ds" 
                        style={{ 
                            display: 'flex', 
                            gap: '0.5rem', 
                            width: '23.5vw' 
                        }}
                    >
                        <select 
                            style={{ 
                                flex: '0 0 80px', 
                                padding: '0.5rem', 
                                height: '3.5vw', 
                                border: '1px solid #d1d5db', 
                                borderRadius: '0.375rem'
                            }}
                        >
                            <option>+91</option>
                            {/* Add more country codes as needed */}
                        </select>
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Enter your phone number" 
                            style={{ 
                                flex: '1', 
                                padding: '0.5rem', 
                                height: '3.5vw', 
                                border: '1px solid #d1d5db', 
                                borderRadius: '0.375rem'
                            }} 
                        />
                    </div>
                  <button 
                    type="submit" 
                    className="submit-button-it-ds" 
                    style={{ 
                        backgroundColor: '#dc2626', 
                        color: 'white', 
                        padding: '0.5rem', 
                        borderRadius: '0.375rem'
                    }}
                    onClick={() => alert('You Have Booked a Live Demo!')}
                  >
                    Book Live Class
                  </button>

                </form>
               
            </div>
        </div>
    );
};

export default DSHeader;
