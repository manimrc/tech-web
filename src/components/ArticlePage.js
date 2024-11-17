// src/components/ArticlePage.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topicData from '../data/topicData';
import ReactMarkdown from 'react-markdown'; // Install this library using npm or yarn
import './ArticlePage.css';

function ArticlePage() {
  const { technology, subtopic } = useParams();
  const navigate = useNavigate();
  const article = topicData[technology]?.topics[subtopic];

  return (
    <div className="article-page">
      <div className="close-button-container">
        <button className="close-button" onClick={() => navigate(-1)}>✕</button>
      </div>
      <div className="article-content">
        <h1>{article?.title}</h1>
        <ReactMarkdown>{article?.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ArticlePage;
