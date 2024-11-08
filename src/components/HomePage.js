import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import topicData from '../data/topicData';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAndLogUserInfo() {
      try {
        // Fetch user info from IPinfo
        const response = await axios.get(`https://ipinfo.io?token=${process.env.REACT_APP_IPINFO_TOKEN}`);
        const userInfo = response.data;

        // Log data to Logflare
        await axios.post('https://api.logflare.app/logs', {
          log_key: process.env.REACT_APP_LOGFLARE_SOURCE_ID,
          message: "User Visit",
          metadata: {
            ip: userInfo.ip,
            city: userInfo.city,
            region: userInfo.region,
            country: userInfo.country,
            location: userInfo.loc,
            org: userInfo.org,
            timestamp: new Date().toISOString(),
          }
        }, {
          headers: {
            'X-API-KEY': process.env.REACT_APP_LOGFLARE_API_KEY,
          }
        });

        console.log("User info successfully logged to Logflare:", userInfo);
      } catch (error) {
        console.error("Error fetching or logging user info:", error);
      }
    }

    fetchAndLogUserInfo();
  }, []);

  return (
    <div className="home-page app-container">
      <h1>Please Wait Loading...</h1>
      <div className="card-grid">
        {Object.keys(topicData).map((tech) => (
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
