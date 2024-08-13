import React, { memo, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import './Achievements.css';


const achievementsData = [
  { src: 'src/Logos/Acheivements/Achiv1.jpg', alt: 'Achievement 1' },
  { src: 'src/Logos/Acheivements/Achiv2.png', alt: 'Achievement 2' },
  { src: 'src/Logos/Acheivements/Achiv7.jpg', alt: 'Achievement 3' },
  { src: 'src/Logos/Acheivements/Achiv4.jpg', alt: 'Achievement 4' },
  { src: 'src/Logos/Acheivements/Achiv5.jpg', alt: 'Achievement 5' },
  { src: 'src/Logos/Acheivements/Achiv6.jpg', alt: 'Achievement 6' },
];

// LazyImage component within the same file
const LazyImage = ({ src, alt }) => (
  <img src={src} alt={alt} loading="lazy" width="100%" height="auto" />
);

const Achievements = () => {
  return (
    <>
      <Helmet>
        <title>Connecting Dots </title>
        <meta name="description" content="Showcasing our most significant achievements." />
        <link rel="preload" as="image" href="src/Logos/Acheivements/Achiv1.jpg" />
      </Helmet>
      <div className="achievements">
        <h1>OUR ACHIEVEMENTS</h1>
        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => (
            <div className={`achievement-item item-${index + 1}`} key={index}>
              <LazyImage src={achievement.src} alt={achievement.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(Achievements);
