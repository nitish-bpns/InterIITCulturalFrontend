import Link from "next/link";
import Styles from "../../styles/page.module.css";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Schedule() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>Schedule</h1>
        <ul>
          <Link href="/schedule/Day/0">
            <li>Day 0</li>
          </Link>
          <Link href="/schedule/Day/1">
            <li>Day 1</li>
          </Link>
          <Link href="/schedule/Day/2">
            <li>Day 2</li>
          </Link>
          <Link href="/schedule/Day/3">
            <li>Day 3</li>
          </Link>
        </ul>
      </section>
    </main>
  );
}
