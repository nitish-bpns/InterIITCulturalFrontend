import Styles from "./Services.module.css";
import { Cookie } from "next/font/google";
import Image from "next/image";

import ServicesPlank from "../../public/assets/images/services/services.png";
import FoodPlank from "../../public/assets/images/services/food.png";
import CyclesPlank from "../../public/assets/images/services/cycles.png";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Services() {
  return (
    <main className={cookie.className}>
      <section className={Styles["main"]}>
        <div className={Styles["plank-container"]}>
          <div className={Styles["food"]}>
            <Image src={FoodPlank} alt="Food" />
            <h1>Food</h1>
          </div>
          <div className={Styles["services"]}>
            <Image src={ServicesPlank} alt="Services" />
            <h1>Services</h1>
          </div>
          <div className={Styles["cycles"]}>
            <Image src={CyclesPlank} alt="Cycles" />
            <h1>Cycles</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
