// pages/core-operations.js
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./core.module.css"; // Import your module CSS file for styling
import logoInterIIT from "../../../public/assets/images/logoblack.png";
import logoIITKGP from "../../../public/assets/images/IIT_KGPLogo.png";
import profile from "../../../public/assets/images/profile.png";

const myFont = localFont({
  src: "../../../public/assets/fonts/Dreaming.woff2",
});

const TeamName = ({params}) => {
  // Dummy data for coordinators and heads
  const coordinators = [
    { name: "Coordinator 1", image: profile },
    { name: "Coordinator 2", image: profile },
    { name: "Coordinator 3", image: profile },
    { name: "Coordinator 4", image: profile },
    // Add more coordinators as needed
  ];

  const heads = [
    { name: "Head 1", image: profile },
    { name: "Head 2", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    { name: "Head 3", image: profile },
    // Add more heads as needed
  ];

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
        <div className={styles.heading}>Core Operations Coordinators</div>
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
        <div className={styles.heading}>Core Operations Heads</div>
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
