// Import necessary React components
import React from "react";
import Styles from "./team.module.css"; // Import your updated CSS file for styling
import localFont from "next/font/local";
const myFont = localFont({ src: "../../public/assets/fonts/Dreaming.woff2" });

// OrganisingTeam component
const OrganisingTeam = () => {
  // Dummy data for teams
  const teams = [
    { name: "Core Operations", link: "./team/core-ops" },
    { name: "Events", link: "./team/events" },
    {
      name: "Media and Publicity",
      link: "./team/media-publicity",
    },
    { name: "Tech Team", link: "./team/tech" },
  ];

  return (
    <div className={Styles["organising-team-container"]}>
      <h1 className={myFont.className}> <div className={Styles["organising-team-heading"]}>Organising Team</div></h1>
      {/* Display on computers */}
      <div className={Styles["team-container"]}>
        {teams.map((team, index) => (
          <a key={index} href={team.link} className={Styles["team-item"]}>
            <h2 className={myFont.className}>{team.name}</h2>
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
