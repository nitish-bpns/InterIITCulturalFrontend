import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";
import LeaderboardComponent from "@/components/LeaderboardComponent";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Leaderboard() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>Leaderboard</h1>
        <LeaderboardComponent allowChange={true} />
      </section>
    </main>
  );
}
