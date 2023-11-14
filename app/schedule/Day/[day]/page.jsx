import Styles from "../../../../styles/page.module.css";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Page({ params }) {
  const day = params.day;
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>Day {day}</h1>
      </section>
    </main>
  );
}
