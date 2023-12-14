import BackButton from "@/components/BackButton";
import Styles from "@/styles/page.module.css";
import { Cookie } from "next/font/google";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Cycles() {
  return (
    <main className={cookie.className}>
      <BackButton href="/services" />
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>Cycles</h1>
      </section>
    </main>
  );
}
