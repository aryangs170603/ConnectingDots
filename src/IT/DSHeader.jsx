import React, { useState, useEffect } from 'react';
import './DSHeader.css';
import ContactForm from '../Homepage/ContactForm'; 

const DSHeader = ({ pageId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showContactForm, setShowContactForm] = useState(false);
    const [course, setCourse] = useState('');

    useEffect(() => {
        fetch('Jsonfolder/dsHeaderData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const pageData = data.MDSpage[pageId] ;
                if (pageData) {
                    setData(pageData);
                } else {
                    throw new Error('Page data not found');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error);
                setLoading(false);
            });
        
    }, [pageId]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('Jsonfolder/dsHeaderData.json');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();

    //             // Fetch data for three pages
    //             const MDSPageData = data.MDSpage[pageId];
    //             const MDAPageData = data.MDAPage[pageId];
    //             // const MDCPageData = data.MDCPage[pageId]; // Assuming pageId is the same for all pages

    //             if (MDSPageData || MDAPageData ) {
    //                 setData({ MDSPageData, MDAPageData});
    //             } else {
    //                 throw new Error('Page data not found');
    //             }

    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Fetch error:', error);
    //             setError(error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [pageId]);

    const handleOpenContactForm = (courseName) => {
        setCourse(courseName);
        setShowContactForm(true);
    };

    const handleCloseContactForm = () => {
        setShowContactForm(false);
        setCourse('');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    if (!data) {
        return <div>No data available for the specified page.</div>;
    }

    return (
        <div className="container-it-ds-header">
            <div className="left-section-it-ds">
                <h1><span className='ds-header-span'>{data.title}</span></h1>
                <h2><span className='ds-header-span-2'>{data.subtitle}</span></h2>
                <p>{data.description}</p>
                <ul className="features-it-ds">
                    {data.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="alumni-it-ds">
                    <span>Find our Alumni at -</span>
                    <div className="alumni-logos-it-ds">
                        {data.alumni.map((company, index) => (
                            <img key={index} src={company.logo} alt={`${company.name} logo`} />
                        ))}
                    </div>
                </div>
                <div className="buttons-it-ds">
                    {data.buttons.map((button, index) => (
                        <button 
                            key={index} 
                            className="batch-button-it-ds" 
                            onClick={() => handleOpenContactForm(button.courseName)}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>
            <div className="right-section-it-ds">
                <h3>{data.form.title}</h3>
                <form 
                    action="#" 
                    method="POST" 
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                    {data.form.inputs.map((input, index) => (
                        input.countryCode ? (
                            <div key={index} className="phone-input-it-ds" style={{ display: 'flex', gap: '0.5rem', maxWidth: '23.5vw' }}>
                                <select style={{ flex: '0 0 80px', padding: '0.5rem', height: '3.5vw', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}>
                                    <option>{input.countryCode}</option>
                                    {/* Add more country codes as needed */}
                                </select>
                                <input 
                                    type={input.type} 
                                    name={input.name} 
                                    placeholder={input.placeholder} 
                                    style={{ flex: '1', padding: '0.5rem', height: '3.5vw', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} 
                                />
                            </div>
                        ) : (
                            <input 
                                key={index}
                                type={input.type} 
                                name={input.name} 
                                placeholder={input.placeholder} 
                                style={{ width: '100%', padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }} 
                            />
                        )
                    ))}
                    <button 
                        type="submit" 
                        className="submit-button-it-ds" 
                        style={{ backgroundColor: '#dc2626', color: 'white', padding: '0.5rem', borderRadius: '0.375rem' }}
                        onClick={() => alert('You Have Booked a Live Demo!')}
                    >
                        {data.form.submitText}
                    </button>
                </form>
            </div>
            {showContactForm && (
                <ContactForm onClose={handleCloseContactForm} course={course} />
            )}
        </div>
    );
};

export default DSHeader;
