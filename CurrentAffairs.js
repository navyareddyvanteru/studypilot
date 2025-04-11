// CurrentAffairs.js
import React from 'react';
import './CurrentAffairs.css'; // Optional CSS for styling

const CurrentAffairs = () => {
  const currentAffairsData = [
    {
      title: "NASA’s Crew-8 Mission Delayed by Severe Florida Weather",
      date: "Nov 11, 2024",
      description: "NASA’s SpaceX Crew-8 mission is currently delayed in returning to Earth due to severe weather in Florida’s splashdown zones. Consecutive hurricanes, Helene and Milton, have caused disruption and danger.",
      category: "International / World Current Affairs",
    },
    {
      title: "New Snake Species Named After Leonardo DiCaprio",
      date: "nov 11, 2024",
      description: "A new snake species has been identified in the Western Himalayas. Scientists named it Anguiculus dicaprioi to honor actor and environmentalist Leonardo DiCaprio for his wildlife conservation efforts.",
      category: "Science & Technology Current Affairs",
    },
    {
      title: "India-China Sign Border Deal After Four-Year Negotiations",
      date: "nov 11, 2024",
      description: "India and China signed a border deal after four years of negotiations focusing on disengagement along the Line of Actual Control (LAC) in eastern Ladakh.",
      category: "International / World Current Affairs",
    },
    {
      title: "Pink Cocaine: Risks and Recent Controversies",
      date: "nov 11, 2024",
      description: "Pink cocaine has recently gained notoriety as a party drug. Reports indicate that it has sparked discussions about its risks and controversies.",
      category: "Science & Technology Current Affairs",
    },
    {
      title: "US Detains $43 Million in Indian Solar Panel Shipments",
      date: "nov 11, 2024",
      description: "In August 2024, the US Customs and Border Protection (CBP) detained shipments of solar panels from India valued at nearly $43 million.",
      category: "International / World Current Affairs",
    },
  ];

  return (
    <div className="current-affairs">
      <h2>Current Affairs Today</h2>
      <h3>Latest Updates - 2024</h3>
      {currentAffairsData.map((article, index) => (
        <div key={index} className="current-affair-item">
          <h4>{article.title}</h4>
          <p><strong>Date:</strong> {article.date}</p>
          <p>{article.description}</p>
          <p><em>Category: {article.category}</em></p>
        </div>
      ))}
    </div>
  );
};

export default CurrentAffairs;
