// src/components/TopicPage.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topicData from '../data/topicData';
import './TopicPage.css';

function TopicPage() {
  const { technology } = useParams();
  const navigate = useNavigate();
  const techTopics = topicData[technology]?.topics || {};

  return (
    <div className="topic-page-container">
      {/* Close Button */}
      <button className="close-button" onClick={() => navigate('/')}>
        ✕
      </button>
      <h2 className="topic-title">{topicData[technology]?.name}</h2>
      <div className="card-grid">
        {Object.keys(techTopics).map((topic) => (
          <div
            key={topic}
            className="card"
            style={{ backgroundImage: `url(${techTopics[topic].image || 'https://via.placeholder.com/300x200'})` }}
            onClick={() => navigate(`/topic/${technology}/${topic}`)}
          >
            <div className="card-overlay">
              <h4>{techTopics[topic].title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;
