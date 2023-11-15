import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import Styles from "../../../../styles/page.module.css";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Page({ params }) {
  const day = params.day;
  if (day > 3 || day < 0) return <h1>404</h1>;

  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <BackButton href={`/schedule`} />
        <h1 className={Styles["heading"]}>Day {day}</h1>
        <div
          style={{
            width: "90%",
            minHeight: "80vh",
            borderRadius: 15,
            background: "rgba(0, 0, 0, 0.55)",
          }}
        ></div>
      </section>
    </main>
  );
}
