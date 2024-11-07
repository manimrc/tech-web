// src/components/ArticlePage.js

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topicData from '../data/topicData';

function ArticlePage() {
  const { technology, subtopic } = useParams();
  const navigate = useNavigate();
  const article = topicData[technology]?.topics[subtopic] || {
    title: "Not Found",
    content: "Content not available.",
  };

  return (
    <div className="article-page">
      <button className="close-button" onClick={() => navigate(-1)}>
        &times;
      </button>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  );
  
}

export default ArticlePage;
