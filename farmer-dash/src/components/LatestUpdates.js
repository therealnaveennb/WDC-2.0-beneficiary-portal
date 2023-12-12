import React from "react";
import "./LatestUpdates.css"; // Assuming you put your styles in a separate CSS file

const LatestUpdates = ({ updates }) => {
  return (
    <div className="latest-updates-container">
      {updates.map((update, index) => (
        <div key={index} className="update-item">
          <div className="date-column">
            <div className="date">{update.date}</div>
            <div className="month">{update.month}</div>
          </div>
          <div className="description-column">
            <div className="description">{update.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const updates = [
    { date: "01", month: "Jan", description: "Lorem ipsum dolor sit amet." },
    { date: "15", month: "Feb", description: "Consectetur adipiscing elit." },
    { date: "15", month: "Feb", description: "Consectetur adipiscing elit." },
    { date: "15", month: "Feb", description: "Consectetur adipiscing elit." },
    { date: "15", month: "Feb", description: "Consectetur adipiscing elit." },
    
  ];

  return (
    <div className="container">
      <h1>Latest Updates</h1><br/>
      <LatestUpdates updates={updates} />
    </div>
  );
};

export default App;
