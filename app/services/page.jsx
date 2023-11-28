"use client";

import { useState, useEffect } from "react";

import Styles from "./Services.module.css";
import { Cookie } from "next/font/google";
import Image from "next/image";

import ServicesPlank from "../../public/assets/images/services/services.png";
import FoodPlank from "../../public/assets/images/services/food.png";
import CyclesPlank from "../../public/assets/images/services/cycles.png";

import ServicesPlankMob from "../../public/assets/images/services/services_mob.png";
import FoodPlankMob from "../../public/assets/images/services/food_mob.png";
import CyclesPlankMob from "../../public/assets/images/services/cycles_mob.png";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Services() {
  //   const [mobSize, setMobSize] = useState(false);

  //   useEffect(() => {
  //     setMobSize(window.innerWidth < 1000 ? true : false);
  //     function handleResize() {
  //       setMobSize(window.innerWidth < 1000 ? true : false);
  //     }
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

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
        <div className={Styles["plank-container-mob"]}>
          <div className={Styles["services"]}>
            <Image src={ServicesPlankMob} alt="Services" />
            <h1>Services</h1>
          </div>
          <div className={Styles["food"]}>
            <Image src={FoodPlankMob} alt="Food" />
            <h1>Food</h1>
          </div>
          <div className={Styles["cycles"]}>
            <Image src={CyclesPlankMob} alt="Cycles" />
            <h1>Cycles</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
