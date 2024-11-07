// src/components/TopicPage.js

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topicData from '../data/topicData';

function TopicPage() {
  const { technology } = useParams();
  const navigate = useNavigate();
  const techTopics = topicData[technology]?.topics || {};

   return (
    <div className="grid-container">
      {Object.keys(topicData[technology].topics).map((subtopic) => (
        <div className="card" key={subtopic} onClick={() => navigate(`/topics/${technology}/${subtopic}`)}>
          <h4>{topicData[technology].topics[subtopic].title}</h4>
          <p>{topicData[technology].topics[subtopic].content.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
  
}

export default TopicPage;
