import ModelView from "@/components/ModelView";
import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";
import Image from "next/image";
import PageStyles from "./page.module.css";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Campus Map",
};

export default function CampusMap() {
  return (
    <main className={satisfy.className}>
      <section>
        <h1 className={Styles["heading"]}>3D Map</h1>
        <ModelView />

        <h3 className={PageStyles.head2}>Please right click and drag to Pan</h3>
      </section>

      <h1 className={Styles["heading"]}>2D Map</h1>
      <Image
        height={1000}
        width={1000}
        className={PageStyles.map}
        src="/assets/images/map.jpg"
      />
    </main>
  );
}
