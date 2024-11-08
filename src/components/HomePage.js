// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import topicData from '../data/topicData';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Log the page view for the home page
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, []);

  return (
    <div className="home-page app-container">
      <h1>Please Wait Loading...</h1>
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
