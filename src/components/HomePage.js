// src/components/HomePage.js

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
        const response = await axios.get(`https://ipinfo.io?token=df2eeeb69b4fd7`);
        const userInfo = response.data;

        // Log data to Logflare
        await axios.post('https://api.logflare.app/logs', {
          log_key: '38b11f8f-9c8d-4b0a-b71b-c94d40d2a6ba',  // Replace with your actual Logflare source key
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
            'X-API-KEY': 'fabe2d6c6a0cfe3fd28c59c810c7e3b72262a628ef10912c2def3d4e527b55aa',  // Replace with your Logflare API key
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
