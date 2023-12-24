import ModelView from "@/components/ModelView";
import { Handlee } from "next/font/google";
import Image from "next/image";
import PageStyles from "./CampusMap.module.css";

export const metadata = {
  title: "Campus Map",
};

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

export default function CampusMap() {
  return (
    <main className={handlee.className}>
      <section>
        <h1 className={PageStyles["heading"]}>3D Map</h1>
        <ModelView />

        <h3 className={PageStyles.head2}>Please right click and drag to Pan</h3>
      </section>

      <h1 className={PageStyles["heading"]}>2D Map</h1>
      <Image
        height={1000}
        width={1000}
        alt="2D Map"
        className={PageStyles.map}
        src="/assets/images/map.jpg"
      />
    </main>
  );
}
