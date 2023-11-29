import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import localFont from "next/font/local";
import data from "../../data.json";

const myFont = localFont({
  src: "../../../../public/assets/fonts/Dreaming.woff2",
});

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
        <div
          style={{
            position: "absolute",
            right: "100px",
            borderRadius: 10,
            background: "rgba(0, 0, 0, 0.55)",
            fontSize: "4rem",
            padding: "1rem 2rem",
            color: "#FCDDBB",
          }}
          className={myFont.className}
        >
          Rulebook
        </div>
        <div
          style={{
            width: "90%",
            minHeight: "80vh",
            borderRadius: 15,
            background: "rgba(0, 0, 0, 0.55)",
            marginTop: "130px",
            color: "#FCDDBB",
            padding: "1rem 2rem",
          }}
        >
          {data[genre].events[event]}
        </div>
      </section>
    </main>
  );
}
