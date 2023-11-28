import BackButton from "@/components/BackButton";
import Styles from "../../../styles/page.module.css";
import { Cookie } from "next/font/google";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Food() {
  return (
    <main className={cookie.className}>
      <section className={Styles["main"]}>
        <BackButton href="/services" />
        <h1 className={Styles["heading"]}>Food</h1>
      </section>
    </main>
  );
}
