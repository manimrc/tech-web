// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import any global CSS
import App from './components/App'; // Import App.js from the components folder
import './index.css';


// Find the root element in the HTML where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the entire App component inside the root element
root.render(<App />);
