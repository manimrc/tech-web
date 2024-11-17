// src/components/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga4';
import HomePage from './HomePage';
import TopicPage from './TopicPage';
import ArticlePage from './ArticlePage';
import Header from './Header'; // Import the Header component
import '../App.css';

function App() {
  ReactGA.initialize("G-6PSML37BDX"); // Replace with your Measurement ID

  return (
    <Router>
      <Header /> {/* Add Header component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:technology" element={<TopicPage />} />
        <Route path="/topic/:technology/:subtopic" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
