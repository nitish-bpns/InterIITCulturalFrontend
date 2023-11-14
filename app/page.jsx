import Link from "next/link";
import Styles from "../styles/page.module.css";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>
          Welcome to Inter IIT Cultural Meet 6.0 Website
        </h1>
        <Link href="/events">Events</Link>
        <Link href="/campus-map">Campus Map</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/signin">Sign In</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/team">Team</Link>
        <Link href="/services">Services</Link>
        <a href="#">Sponsors</a>
      </section>
    </main>
  );
}
