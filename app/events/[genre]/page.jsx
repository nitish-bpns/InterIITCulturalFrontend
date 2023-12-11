import Styles from "./genre.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import data from "@/data/events.json";
import Link from "next/link";
import Image from "next/image";
import right1 from "../../../public/assets/images/events/genre/1.png";

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
        <div className={Styles["events-frame"]}>
          {Object.keys(events).map((event, id) => (
            <Link
              key={id}
              href={"/events/" + genre + "/" + event}
              className={Styles["event"]}
            >
              <Image src={right1} alt="event" className={Styles["plank"]} />
              <h2 className={Styles["event-name"]}>{events[event].name}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
