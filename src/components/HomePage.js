// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import topicData from '../data/topicData';
// import Header from './Header'; // Import the Header component
import './HomePage.css';
import bannerVid from '../assets/bannerVid.mp4';


function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Log the page view for the home page
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, []);

  return (
    <div className="home-page app-container">
      

      {/* Banner Section */}
<div className="banner">
  <video
    className="banner-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={bannerVid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="banner-overlay">
    <div className="banner-text">
      <h2>Welcome to Our Knowledge Base</h2>
      <p>Dive into topics and stay ahead in the tech world!</p>
    </div>
  </div>
</div>


      {/* Cards Grid */}
      <div className="card-grid">
        {Object.keys(topicData).map((tech) => (
          <div
            key={tech}
            className={`card card-${tech.toLowerCase()}`}
            onClick={() => {
              ReactGA.event({
                category: 'Navigation',
                action: 'Click on Technology Card',
                label: tech
              });
              navigate(`/topic/${tech}`);
            }}
          >
            <h3>{topicData[tech].name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
