import Link from "next/link";
import Styles from "../styles/page.module.css";
import { Satisfy } from "next/font/google";
import LeaderboardTable from "@/components/LeaderboardTable";

import DancePic from "../public/assets/images/home/dance.jpeg";
import MusicPic from "../public/assets/images/home/music.png";
import SpeakingArtsPic from "../public/assets/images/home/sp.png";
import localFont from "next/font/local";
import PageStyles from "./Home.module.css";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

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

export default function Home() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <div
          style={{
            width: "80%",
            minHeight: "80vh",
            borderRadius: 15,
            background: "rgba(0, 0, 0, 0.55)",
          }}
        ></div>
        <h1 className={Styles["heading"]}>Events</h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            fontSize: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: `url(${DancePic.src}) -115% / auto 100%`,
              }}
              className={myFont.className + " " + PageStyles["Event-Card"]}
            >
              Dance
              <hr className={PageStyles["hr"]}></hr>
            </div>
            <div
              style={{
                background: `url(${MusicPic.src}) -80% / auto 100%`,
              }}
              className={myFont.className + " " + PageStyles["Event-Card"]}
            >
              Music
              <hr className={PageStyles["hr"]}></hr>
            </div>
            <div
              style={{
                background: `url(${SpeakingArtsPic.src}) 5% / auto 100%`,
              }}
              className={myFont.className + " " + PageStyles["Event-Card"]}
            >
              Speaking Arts
              <hr className={PageStyles["hr"]}></hr>
            </div>
          </div>
          <Link
            href="/events"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            See more...
          </Link>
        </div>
        <h1 className={Styles["heading"]}>360 Degrees View of Campus</h1>
        <div
          style={{
            width: "80%",
            minHeight: "80vh",
            borderRadius: 15,
            background: "rgba(0, 0, 0, 0.55)",
          }}
        ></div>
        <h1 className={Styles["heading"]}>Overall Leaderboard</h1>
        <LeaderboardTable data={data} />
      </section>
    </main>
  );
}
