// src/components/HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import topicData from '../data/topicData';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page app-container">
      <h1>Technology Topics</h1>
      <div className="card-grid">
        {Object.keys(topicData).map((tech, index) => (
          <div
            key={tech}
            className={`card card-${tech.toLowerCase()}`}
            onClick={() => navigate(`/topic/${tech}`)}
          >
            <h3>{topicData[tech].name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
