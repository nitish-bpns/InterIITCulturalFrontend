import Link from "next/link";
import Image from "next/image";
import { Satisfy } from "next/font/google";
import Styles from "../../styles/page.module.css";
import PageStyles from "./Schedule.module.css";

import MainPlank from "../../public/assets/images/schedule_team/main.png";
import Day0Plank from "../../public/assets/images/schedule_team/Day0.png";
import Day1Plank from "../../public/assets/images/schedule_team/Day1.png";
import Day2Plank from "../../public/assets/images/schedule_team/Day2.png";
import Day3Plank from "../../public/assets/images/schedule_team/Day3.png";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Schedule() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <div className={PageStyles["plank-container"]}>
          <div className={PageStyles["column1"]}>
            <Link href="/schedule/Day/0">
              <Image src={Day0Plank} alt="Day0" />
              <h1>Day 0</h1>
            </Link>
            <Link href="/schedule/Day/2">
              <Image src={Day2Plank} alt="Day2" />
              <h1>Day 2</h1>
            </Link>
          </div>
          <div className={PageStyles["main"]}>
            <Image src={MainPlank} alt="Schedule" />
            <h1>Schedule</h1>
          </div>
          <div className={PageStyles["column2"]}>
            <Link href="/schedule/Day/1">
              <Image src={Day1Plank} alt="Day1" />
              <h1>Day 1</h1>
            </Link>
            <Link href="/schedule/Day/3">
              <Image src={Day3Plank} alt="Day3" />
              <h1>Day 3</h1>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
