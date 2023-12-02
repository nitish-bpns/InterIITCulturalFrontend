import Styles from "./genre.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import data from "../data.json";
import Link from "next/link";
import Image from "next/image";
import left1 from "../../../public/assets/images/events/genre/left_01.png";
import left2 from "../../../public/assets/images/events/genre/left_02.png";
import left3 from "../../../public/assets/images/events/genre/left_03.png";
import left4 from "../../../public/assets/images/events/genre/left_04.png";
import left5 from "../../../public/assets/images/events/genre/left_05.png";
import left6 from "../../../public/assets/images/events/genre/left_06.png";
import right1 from "../../../public/assets/images/events/genre/right_01.png";
import right2 from "../../../public/assets/images/events/genre/right_02.png";
import right3 from "../../../public/assets/images/events/genre/right_03.png";
import right4 from "../../../public/assets/images/events/genre/right_04.png";
import right5 from "../../../public/assets/images/events/genre/right_05.png";

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
        {/* <h1>{data[genre].properName}</h1> */}
        <div className={Styles["events-frame"]}>
          {Object.keys(events).map((event, id) => (
            <Link 
              key={id} 
              href={"/events/" + genre + "/" + event} 
              className={Styles["event"]}
            >
              <Image src={right1} alt="event" className={Styles["plank"]}/>
              <h2 className={Styles["event-name"]}>{events[event]}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}