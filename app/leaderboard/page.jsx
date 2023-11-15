import Styles from "../../styles/page.module.css";
import { Satisfy } from "next/font/google";
import PageStyles from "./Leaderboard.module.css";
import localFont from "next/font/local";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });
const myFont = localFont({ src: "../../public/assets/fonts/Dreaming.woff2" });

const colWidth = [27, 53, 20];

const data = [
  {
    position: 1,
    collegeName: "IIT Bombay",
    points: 100,
  },
  {
    position: 2,
    collegeName: "IIT Delhi",
    points: 90,
  },
  {
    position: 3,
    collegeName: "IIT Madras",
    points: 80,
  },
  {
    position: 4,
    collegeName: "IIT Kanpur",
    points: 70,
  },
  {
    position: 5,
    collegeName: "IIT Kharagpur",
    points: 60,
  },
];

export default function Leaderboard() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>Leaderboard</h1>
        <div className={PageStyles["table"]}>
          <div
            className={PageStyles["tr"]}
            style={{
              background: "#FCDDBB",
            }}
          >
            <div
              style={{
                width: colWidth[0] + "%",
              }}
              className={PageStyles["th"] + " " + myFont.className}
            >
              Position
            </div>
            <div
              style={{
                width: colWidth[1] + "%",
              }}
              className={PageStyles["th"] + " " + myFont.className}
            >
              College Name
            </div>
            <div
              style={{
                width: colWidth[2] + "%",
              }}
              className={PageStyles["th"] + " " + myFont.className}
            >
              Points
            </div>
          </div>
          {data.map((value, index) => (
            <div className={PageStyles["tr"]} key={index}>
              <div
                style={{
                  width: colWidth[0] + "%",
                }}
                className={PageStyles["td"]}
              >
                {value.position}
              </div>
              <div
                style={{
                  width: colWidth[1] + "%",
                }}
                className={PageStyles["td"]}
              >
                {value.collegeName}
              </div>
              <div
                style={{
                  width: colWidth[2] + "%",
                }}
                className={PageStyles["td"]}
              >
                {value.points}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
