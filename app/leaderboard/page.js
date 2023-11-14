import Styles from "../../styles/page.module.css";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Leaderboard() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <div>
          <h1 className={Styles["heading"]}>Leaderboard</h1>
        </div>
      </section>
    </main>
  );
}
