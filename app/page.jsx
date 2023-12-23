import Link from "next/link";
import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";

import DancePic from "@/public/assets/images/home/dance.jpeg";
import MusicPic from "@/public/assets/images/home/music.png";
import SpeakingArtsPic from "@/public/assets/images/home/sp.png";
import SeeMore from "@/public/assets/images/home/see_more.png";
import localFont from "next/font/local";
import PageStyles from "./Home.module.css";
import LeaderboardComponent from "@/components/LeaderboardComponent";

import HomeCarousel from "@/components/HomeCarousel";
import ModelView from "@/components/ModelView";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <div className={PageStyles["carousel"]}>
          <HomeCarousel />
        </div>
        <h1 data-aos="fade-up" className={Styles["heading"]}>
          Events
        </h1>
        <div
          data-aos="fade-up"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            fontSize: "2rem",
          }}
        >
          <div className={PageStyles["card-wrapper"]}>
            <Link
              href="/events/dance"
              style={{
                background: `url(${DancePic.src}) -115% / auto 100%`,
                color: "black",
              }}
              className={myFont.className + " " + PageStyles["Event-Card"]}
            >
              Dance
              <hr className={PageStyles["hr"]}></hr>
            </Link>
            <Link
              href="/events/music"
              style={{
                background: `url(${MusicPic.src}) -80% / auto 100%`,
                color: "black",
              }}
              className={myFont.className + " " + PageStyles["Event-Card"]}
            >
              Music
              <hr className={PageStyles["hr"]}></hr>
            </Link>
            <Link
              href="/events/speaking-arts"
              style={{
                background: `url(${SpeakingArtsPic.src}) 5% / auto 100%`,
                color: "black",
              }}
              className={myFont.className + " " + PageStyles["Event-Card"]}
            >
              Speaking Arts
              <hr className={PageStyles["hr"]}></hr>
            </Link>
            <Link
              href="/events"
              style={{
                background: `url(${SeeMore.src}) 1% / auto 100%`,
                color: "black",
              }}
              className={myFont.className + " " + PageStyles["Event-Card"]}
            >
              See more...
              <hr className={PageStyles["hr"]}></hr>
            </Link>
          </div>
        </div>
        <h1 data-aos="fade-up" className={Styles["heading"]}>
          360 Degrees View of Campus
        </h1>
        {/* <div
					data-aos="fade-up"
					style={{
						width: "80%",
						minHeight: "40vh",
						borderRadius: 15,
						background: "rgba(0, 0, 0, 0.55)",
					}}
				></div> */}
        <ModelView />
        <h1 className={Styles["heading"]}>Overall Leaderboard</h1>
        <LeaderboardComponent allowChange={false} />
      </section>
    </main>
  );
}
