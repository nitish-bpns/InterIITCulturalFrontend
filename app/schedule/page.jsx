import Link from "next/link";
import { Satisfy } from "next/font/google";
import Styles from "../../styles/page.module.css";
import PageStyles from "./Schedule.module.css";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Schedule() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>Schedule</h1>
        <div className={PageStyles["outer-box"]}>
          <Link className={PageStyles["inner-box"]} href="/schedule/Day/0">
            Day 0
          </Link>
          <Link className={PageStyles["inner-box"]} href="/schedule/Day/1">
            Day 1
          </Link>
          <Link className={PageStyles["inner-box"]} href="/schedule/Day/2">
            Day 2
          </Link>
          <Link className={PageStyles["inner-box"]} href="/schedule/Day/3">
            Day 3
          </Link>
        </div>
      </section>
    </main>
  );
}
