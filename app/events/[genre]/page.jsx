import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import data from "../data.json";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Genre({ params }) {
  const genre = params.genre;
  if (!data[genre]) {
    return <h1>404</h1>;
  }

  const name = data[genre].properName;
  const events = data[genre].events;

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
        <BackButton href={`/events`} />
        <h1>{name}</h1>
        {events.map((event) => (
          <div key={event.id}>
            <h2>{event}</h2>
          </div>
        ))}
      </section>
    </main>
  );
}
