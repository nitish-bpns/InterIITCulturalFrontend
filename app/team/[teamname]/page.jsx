import Image from "next/image";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Styles from "@/styles/page.module.css";
import PageStyles from "./core.module.css";
import localFont from "next/font/local";
import BackButton from "@/components/BackButton";
import ErrorPage from "@/components/ErrorPage";
import data from "@/data/team.json";
import ImageVariableCoordinators from "./images_coordis";
import ImageVariableHeads from "./images_heads";

const myFont = localFont({
  src: "../../../public/assets/fonts/Dreaming.woff2",
});

const TeamName = ({ params }) => {
  const teamname = params.teamname;
  if (!data[teamname]) {
    return <ErrorPage statusCode={404} />;
  }

  const coordinators = data[teamname].coordinators;
  const heads = data[teamname].heads;

  return (
    <main>
      <BackButton href={`/team`} />
      <section className={Styles.main}>
        {/* Heading for Coordinators */}
        <h1 className={myFont.className}>
          <div className={Styles.heading}>
            {data[teamname].title} Coordinators
          </div>
        </h1>

        {/* Grid of coordinator images */}
        <div className={PageStyles.imageGrid}>
          {coordinators.map((coordinator, index) => (
            <figure className={PageStyles.figure} key={index}>
              <Image
                src={ImageVariableCoordinators[coordinator.name]}
                alt={coordinator.name}
                className={PageStyles.coordinatorImage}
                width={500}
                height={500}
              />
              <figcaption className={PageStyles.figcaption}>
                <div className={PageStyles.memberInfo}>
                  <div className={PageStyles.memberName}>
                    {coordinator.name}
                  </div>
                  <div className={PageStyles.socialIcons}>
                    <a
                      href={coordinator.fblink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className={PageStyles.icon} size={30} />
                    </a>
                    <a
                      href={coordinator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className={PageStyles.icon} size={30} />
                    </a>
                    <a
                      href={"mailto:" + coordinator.mail}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelope className={PageStyles.icon} size={30} />
                    </a>
                  </div>
                </div>
                {/* </div> */}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Heading for Heads */}
        <h2 className={myFont.className}>
          <div className={Styles.heading}>{data[teamname].title} Heads</div>
        </h2>

        {/* Grid of head images */}
        <div className={PageStyles.imageGrid}>
          {heads.map((head, index) => (
            <figure className={PageStyles.figure} key={index}>
              <Image
                src={ImageVariableHeads[head.name]}
                alt={head.name}
                className={PageStyles.coordinatorImage}
                // layout="responsive"
                width={500}
                height={500}
              />
              <figcaption className={PageStyles.figcaption}>
                <div className={PageStyles.memberInfo}>
                  <div className={PageStyles.memberName}>{head.name}</div>
                  <div className={PageStyles.socialIcons}>
                    <a
                      href={head.fblink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className={PageStyles.icon} size={25} />
                    </a>
                    <a
                      href={head.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className={PageStyles.icon} size={25} />
                    </a>
                    <a
                      href={"mailto:" + head.mail}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelope className={PageStyles.icon} size={25} />
                    </a>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TeamName;
