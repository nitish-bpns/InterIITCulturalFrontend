import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import localFont from "next/font/local";
import data from "@/data/events.json";

const myFont = localFont({
  src: "../../../../public/assets/fonts/Dreaming.woff2",
});

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Event({ params }) {
  const genre = params.genre;
  if (!data[genre]) {
    return <h1>404</h1>;
  }

  let event = params.event;

  if (!data[genre].events[event]) {
    return <h1>404</h1>;
  }

  event = data[genre].events[event];
  const rules = require("@/data/rules.json")[event.code];

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
      <BackButton href={"/events/" + genre} />
      <section className={Styles["main"]}>
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
            borderRadius: 15,
            background: "rgba(0, 0, 0, 0.55)",
            marginTop: "130px",
            color: "#FCDDBB",
            padding: "1rem 2rem",
          }}
        >
          <h1>
            {event.name} {rules && "(" + rules.points + ")"}
          </h1>
          <h2>Genre : {data[genre].properName}</h2>
          {rules && (
            <>
              <h2>Description</h2>
              {rules.description}

              <h2>No. of {rules.isTeam ? "teams" : "participants"} per IIT</h2>
              {rules.isTeam ? rules.teams : rules.participants}

              {rules.isTeam && (
                <>
                  <h2>No of participants per team</h2>
                  {rules.perteam}
                </>
              )}
              {rules.time && (
                <>
                  <h2>Time Limit</h2>
                  {rules.time}
                </>
              )}
              <h1>Rules</h1>
              <ol>
                {rules.rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ol>
              {rules.criteria && (
                <>
                  <h2>Judging Criteria</h2>
                  {rules.criteria}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
