import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import data from "../data.json";
import Link from "next/link";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Genre({ params }) {
  const genre = params.genre;
  if (!data[genre]) {
    return <h1>404</h1>;
  }

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
        <h1>{data[genre].properName}</h1>
        {Object.keys(events).map((event, id) => (
          <Link key={id} href={"/events/" + genre + "/" + event}>
            <h2>{events[event]}</h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
