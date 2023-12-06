import Image from "next/image";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import the required icons
import styles from "./core.module.css"; // Import your module CSS file for styling
import profile from "../../../public/assets/images/profile.png";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/assets/fonts/Dreaming.woff2",
});

const data = {
  "core-ops": {
    title: "Core Operations",
    coordinators: [
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
    ],
    heads: [
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
    ],
  },
  tech: {
    title: "Tech Team",
    coordinators: [
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
    ],
    heads: [
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
    ],
  },
  "media-publicity": {
    title: "Media and Publicity",
    coordinators: [
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Coordinator 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
    ],
    heads: [
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
      {
        name: "Head 1",
        image: profile,
        fblink: "https://www.facebook.com",
        mail: "test@gmail.com",
        linkedin: "https://www.linkedin.com",
      },
    ],
    events: {
      title: "Media and Publicity",
      coordinators: [
        {
          name: "Coordinator 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Coordinator 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Coordinator 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Coordinator 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
      ],
      heads: [
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
        {
          name: "Head 1",
          image: profile,
          fblink: "https://www.facebook.com",
          mail: "test@gmail.com",
          linkedin: "https://www.linkedin.com",
        },
      ],
    },
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
      <h1 className={myFont.className}>
        <div className={styles.heading}>
          {data[teamname].title} Coordinators
        </div>
      </h1>

      {/* Grid of coordinator images */}
      <div className={styles.imageGrid}>
        {coordinators.map((coordinator, index) => (
          <div key={index} className={styles.memberContainer}>
            <Image
              src={coordinator.image}
              alt={coordinator.name}
              className={styles.coordinatorImage}
            />
            <div className={styles.socialIcons}>
              <a
                href={coordinator.fblink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={styles.icon} size={30} />
              </a>
              <a
                href={coordinator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.icon} size={30} />
              </a>
              <a
                href={"mailto:" + coordinator.mail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className={styles.icon} size={30} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Heading for Heads */}
      <h2 className={myFont.className}>
        <div className={styles.heading}>{data[teamname].title} Heads</div>
      </h2>

      {/* Grid of head images */}
      <div className={styles.imageGridHeads}>
        {heads.map((head, index) => (
          <div key={index} className={styles.memberContainer}>
            <Image
              src={head.image}
              alt={head.name}
              className={styles.headImage}
            />
            <div className={styles.socialIcons}>
              <a href={head.fblink} target="_blank" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} size={25} />
              </a>
              <a href={head.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} size={25} />
              </a>
              <a
                href={"mailto:" + head.mail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className={styles.icon} size={25} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamName;
