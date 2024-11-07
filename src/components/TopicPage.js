// src/components/TopicPage.js

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topicData from '../data/topicData';

function TopicPage() {
  const { technology } = useParams();
  const navigate = useNavigate();
  const techTopics = topicData[technology]?.topics || {};

  return (
    <div className="topic-page app-container">
      <h2>{topicData[technology]?.name}</h2>
      <button className="close-button" onClick={() => navigate(-1)}>Close</button>
      <div className="card-grid">
        {Object.keys(techTopics).map((topic, index) => (
          <div
            key={topic}
            className="card"
            onClick={() => navigate(`/topic/${technology}/${topic}`)}
          >
            <h4>{techTopics[topic].title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
