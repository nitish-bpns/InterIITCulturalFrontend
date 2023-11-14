// Import necessary React components
import React from 'react';
import Styles from './team.module.css'; // Import your CSS file for styling

// OrganisingTeam component
const OrganisingTeam = () => {
  // Dummy data for teams
  const teams = [
    { name: 'Core Operations', link: 'https://example.com/core-operations' },
    { name: 'Events', link: 'https://example.com/events' },
    { name: 'Media and Publicity', link: 'https://example.com/media-publicity' },
    { name: 'Tech Team', link: 'https://example.com/tech-team' },
  ];

  return (
    <div className="organising-team-container">
      <h1 className="organising-team-heading">Organising Team</h1>
      {/* Display on computers */}
      <div className={Styles["team-container"]}>
        {teams.map((team, index) => (
          <a key={index} href={team.link} target="_blank" rel="noopener noreferrer" className={Styles["team-item"]}>
            <h2>{team.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

// App component
const App = () => {
  return (  
    <div>
      {/* Render OrganisingTeam component */}
      <OrganisingTeam />
    </div>
  );
};

export default App;
