// src/components/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// src/components/App.js
import HomePage from './HomePage';
import TopicPage from './TopicPage';
import ArticlePage from './ArticlePage';
import '../App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:technology" element={<TopicPage />} />
        <Route path="/topic/:technology/:subtopic" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
