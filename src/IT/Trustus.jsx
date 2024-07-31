import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [speed, setSpeed] = useState(10); // Initialize speed state with default value 10

  // Effect hook to update the CSS variable when speed changes
  useEffect(() => {
    document.documentElement.style.setProperty('--speed', ${speed}s);
  }, [speed]); // Dependency array with speed to trigger the effect when speed changes

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value); // Update the speed state
  };

  return (
    <div>
      <a 
        target="_blank" 
        rel="noreferrer noopener" 
        className="dev-link" 
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
      >
        <svg className="w-9" viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20"></circle>
          <circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20"></circle>
          <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor"></circle>
          <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor"></circle>
          <path 
            d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z" 
            fill="currentColor"
          ></path>
          <rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E"></rect>
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z" 
            fill="currentColor"
          ></path>
        </svg>
        <span className="sr-only">jhey.dev</span>
      </a>

      <label htmlFor="theme">
        <span className="sr-only">Toggle Theme</span>
        <input className="sr-only" type="checkbox" id="theme" />
        <svg 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6"
        >
          <path 
            d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" 
          />
          <path 
            fillRule="evenodd" 
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" 
            clipRule="evenodd" 
          />
        </svg>
      </label>

      <div className="controls">
        <label htmlFor="dimension">3D</label>
        <input type="checkbox" id="dimension" defaultChecked />
        <label htmlFor="overflow">Overflow</label>
        <input type="checkbox" id="overflow" />
        <label htmlFor="speed">Speed (s)</label>
        <input 
          type="range" 
          min="2" 
          step="1" 
          max="20" 
          value={speed} 
          onChange={handleSpeedChange} 
          id="speed" 
        />
      </div>

      <main>
        <article>
          <div className="header">
            <h2><span>CSS</span><span>Masters</span></h2>
            <p>
              All the skills you need to take your styling to the next level.
              Learn to think with a CSS first mindset. Approach problems
              leveraging the platform. Use the platform. Embrace the platform.
            </p>
            <a href="https://twitter.com/intent/follow?screen_name=jh3yy" target="_blank" rel="noreferrer noopener">Follow</a>
          </div>

          <div className="window">
            <div className="scene">
              <ul className="grid">
                <li>
                  <div className="item">
                    <div className="item__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path 
                          fillRule="evenodd" 
                          d="M17.834 6.166a8.25 8.25 0 1 0 1.06 1.06l1.59-1.59a.75.75 0 1 0-1.06-1.061l-1.591 1.59ZM12 18.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5Zm0 1.5c4.54 0 8.25-3.71 8.25-8.25S16.54 3.75 12 3.75 3.75 7.46 3.75 12 7.46 20.25 12 20.25Zm0-2.25a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <div className="item__label">
                      <h2>CSS <span>is</span> Awesome</h2>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path 
                          fillRule="evenodd" 
                          d="M16.5 3a.75.75 0 0 1 .75.75V6.3A9.002 9.002 0 0 1 12 21a9.002 9.002 0 0 1-5.25-14.7V3.75a.75.75 0 0 1 1.5 0v2.08A9.048 9.048 0 0 1 12 3c1.448 0 2.82.324 4.05.83V3.75a.75.75 0 0 1 .75-.75Zm-6.75 1.949a7.5 7.5 0 1 0-6.501 0 7.5 7.5 0 1 0 6.501 0Zm6.752 1.207a7.501 7.501 0 0 0-6.998 0 7.5 7.5 0 0 0 6.998 0ZM12 13.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-1.5-5.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <div className="item__label">
                      <h2>CSS <span>is</span> Cool</h2>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path 
                          fillRule="evenodd" 
                          d="M7.5 2.25A.75.75 0 0 0 6 2.25v7.5H3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75v-8.25A.75.75 0 0 0 7.5 2.25Zm8.25 0a.75.75 0 0 1 .75.75v7.5H21a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-8.25a.75.75 0 0 1 .75-.75ZM3 16.5A.75.75 0 0 1 3.75 16.5h4.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Zm15 0a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75Z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <div className="item__label">
                      <h2>CSS <span>is</span> Fun</h2>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default MyComponent;