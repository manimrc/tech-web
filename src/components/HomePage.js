// src/components/HomePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import topicData from '../data/topicData';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="grid-container">
      {Object.keys(topicData).map((topic) => (
        <div className="card" key={topic} onClick={() => navigate(`/topics/${topic}`)}>
          <h3>{topicData[topic].title}</h3>
          <p>{topicData[topic].description}</p>
        </div>
      ))}
    </div>
  );
  
}

export default HomePage;
