// pages/core-operations.js
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./core.module.css"; // Import your module CSS file for styling
import profile from "../../../public/assets/images/profile.png";

const myFont = localFont({
  src: "../../../public/assets/fonts/Dreaming.woff2",
});

const data = {
  "core-ops": {
    title: "Core Operations",
    coordinators: [
      { name: "Coordinator 1", image: profile },
      { name: "Coordinator 1", image: profile },
      { name: "Coordinator 1", image: profile },
      { name: "Coordinator 1", image: profile },
    ],
    heads: [
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
    ],
  },
  tech: {
    title: "Tech Team",
    coordinators: [
      { name: "Coordinator 2", image: profile },
      { name: "Coordinator 2", image: profile },
      { name: "Coordinator 2", image: profile },
      { name: "Coordinator 2", image: profile },
    ],
    heads: [
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
    ],
  },
  "media-publicity": {
    title: "Media and Publicity",
    coordinators: [
      { name: "Coordinator 3", image: profile },
      { name: "Coordinator 3", image: profile },
      { name: "Coordinator 3", image: profile },
      { name: "Coordinator 3", image: profile },
    ],
    heads: [
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
    ],
  },
  events: {
    title: "Events",
    coordinators: [
      { name: "Coordinator 4", image: profile },
      { name: "Coordinator 4", image: profile },
      { name: "Coordinator 4", image: profile },
      { name: "Coordinator 4", image: profile },
    ],
    heads: [
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
      { name: "Head 1", image: profile },
    ],
  },
};

const TeamName = ({ params }) => {
  const teamname = params.teamname;
  if (!data[teamname]) {
    return <h1>404</h1>;
  }

  const coordinators = data[teamname].coordinators;
  const heads = data[teamname].heads;

  return (
    <div className={styles.coreOperationsPage}>
      {/* Top left icons */}
      {/* <div className={styles.topLeftIcons}>
          <Image src={logoIITKGP} alt="Icon 1" />
          <Image src={logoInterIIT} alt="Icon 2" />
        </div> */}

      {/* Top right icon */}
      {/* <div className={styles.topRightIcon}>
          <Image src={profile} alt="Icon 3" />
        </div> */}

      {/* Heading */}
      <h1 className={myFont.className}>
        <div className={styles.heading}>
          {data[teamname].title} Coordinators
        </div>
      </h1>

      {/* Grid of coordinator images */}
      <div className={styles.imageGrid}>
        {coordinators.map((coordinator, index) => (
          <Image
            key={index}
            src={coordinator.image}
            alt={coordinator.name}
            className={styles.coordinatorImage}
          />
        ))}
      </div>

      {/* Heading for Heads */}
      <h2 className={myFont.className}>
        <div className={styles.heading}>{data[teamname].title} Heads</div>
      </h2>

      {/* Grid of head images */}
      <div className={styles.imageGridHeads}>
        {heads.map((head, index) => (
          <Image
            key={index}
            src={head.image}
            alt={head.name}
            className={styles.headImage}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamName;
