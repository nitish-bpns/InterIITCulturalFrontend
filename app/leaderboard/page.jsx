import Styles from "../../styles/page.module.css";
import { Satisfy } from "next/font/google";
import PageStyles from "./Leaderboard.module.css";
import LeaderboardTable from "@/components/LeaderboardTable";

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

const events = [
  {
    name: "Event 1",
    value: 1,
  },
  {
    name: "Event 2",
    value: 2,
  },
  {
    name: "Event 3",
    value: 3,
  },
  {
    name: "Event 4",
    value: 4,
  },
  {
    name: "Event 5",
    value: 5,
  },
];

export default function Leaderboard() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>Leaderboard</h1>
        <select className={PageStyles["select"]}>
          <option value="overall" className={PageStyles["option"]}>
            Overall
          </option>
          {events.map((value, index) => (
            <option
              value={value.value}
              className={PageStyles["option"]}
              key={index}
            >
              {value.name}
            </option>
          ))}
        </select>
        <LeaderboardTable data={data} />
      </section>
    </main>
  );
}
