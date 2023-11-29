import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import data from "../../data.json";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Event({ params }) {
  const genre = params.genre;
  if (!data[genre]) {
    return <h1>404</h1>;
  }
  const event = params.event;
  if (!data[genre].events[event]) {
    return <h1>404</h1>;
  }

  return (
    <main
      className={satisfy.className}
      style={{
        backgroundImage: `url(${data[genre].bg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className={Styles["main"]}>
        <BackButton href={"/events/" + genre} />
        <h1>{data[genre].events[event]}</h1>
      </section>
    </main>
  );
}
