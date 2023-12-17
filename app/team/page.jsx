import Link from "next/link";
import Image from "next/image";
import { Satisfy } from "next/font/google";
import Styles from "../../styles/page.module.css";
import PageStyles from "../schedule/Schedule.module.css";
import PageStyles2 from "./team.module.css";

import MainPlank from "../../public/assets/images/schedule_team/main.png";
import Day0Plank from "../../public/assets/images/schedule_team/Day0.png";
import Day1Plank from "../../public/assets/images/schedule_team/Day1.png";
import Day2Plank from "../../public/assets/images/schedule_team/Day2.png";
import Day3Plank from "../../public/assets/images/schedule_team/Day3.png";

import MainPlankMob from "../../public/assets/images/schedule_team/main_mob.png";
import Day0PlankMob from "../../public/assets/images/schedule_team/Day0_mob.png";
import Day1PlankMob from "../../public/assets/images/schedule_team/Day1_mob.png";
import Day2PlankMob from "../../public/assets/images/schedule_team/Day2_mob.png";
import Day3PlankMob from "../../public/assets/images/schedule_team/Day3_mob.png";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Team() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <div className={PageStyles["plank-container"]}>
          <div className={PageStyles["column1"] + " " + PageStyles2["column1"]}>
            <Link href="/team/core-ops">
              <Image src={Day0Plank} alt="Core Operations Team" />
              <h1>Core Operations Team</h1>
            </Link>
            <Link href="/team/media-publicity">
              <Image src={Day2Plank} alt="Media & Publicity Team" />
              <h1>Media & Publicity Team</h1>
            </Link>
          </div>
          <div className={PageStyles["main"] + " " + PageStyles2["main"]}>
            <Image src={MainPlank} alt="Overall Coordinator" />
            <h1>Overall Coordinator</h1>
          </div>
          <div className={PageStyles["column2"] + " " + PageStyles2["column2"]}>
            <Link href="/team/events">
              <Image src={Day1Plank} alt="Events Team" />
              <h1>Events Team</h1>
            </Link>
            <Link href="/team/tech">
              <Image src={Day3Plank} alt="Tech Team" />
              <h1>Tech Team</h1>
            </Link>
          </div>
        </div>
        <div
          className={
            PageStyles["plank-container-mob"] +
            " " +
            PageStyles2["plank-container-mob"]
          }
        >
          <a className={PageStyles["main-mob"]} href="/team/overall-coordinator">
            <Image src={MainPlankMob} alt="Overall Coordinator" />
            <h1>Overall Coordinator</h1>
          </a>
          <Link href="/team/core-ops">
            <Image src={Day0PlankMob} alt="Core Operations Team" />
            <h1>Core Operations Team</h1>
          </Link>
          <Link href="/team/events">
            <Image src={Day1PlankMob} alt="Events Team" />
            <h1>Events Team</h1>
          </Link>
          <Link href="/team/media-publicity">
            <Image src={Day2PlankMob} alt="Media & Publicity Team" />
            <h1>Media & Publicity Team</h1>
          </Link>
          <Link href="/team/tech">
            <Image src={Day3PlankMob} alt="Tech Team" />
            <h1>Tech Team</h1>
          </Link>
        </div>
      </section>
    </main>
  );
}
