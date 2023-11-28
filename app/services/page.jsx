"use client";

import { useState, useEffect } from "react";

import Styles from "./Services.module.css";
import { Cookie } from "next/font/google";
import Image from "next/image";

import ServicesPlank from "../../public/assets/images/services/services.png";
import FoodPlank from "../../public/assets/images/services/food.png";
import FoodPlankMob from "../../public/assets/images/services/food_mob.png";
import CyclesPlank from "../../public/assets/images/services/cycles.png";
import CyclesPlankMob from "../../public/assets/images/services/cycles_mob.png";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Services() {
	const [width, setWidth] = useState(null);
	const [mobSize, setMobSize] = useState(false);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	useEffect(() => {
		setMobSize(width < 1000 ? true : false);
	}, [width]);

	return (
		<main className={cookie.className}>
			<section className={Styles["main"]}>
				<div className={Styles["plank-container"]}>
					{!mobSize ? (
						<div className={Styles["food"]}>
							<Image src={FoodPlank} alt="Food" />
							<h1>Food</h1>
						</div>
					) : null}
					<div className={Styles["services"]}>
						<Image src={ServicesPlank} alt="Services" />
						<h1>Services</h1>
					</div>
					{mobSize ? (
						<div className={Styles["food"]}>
							<Image src={FoodPlankMob} alt="Food" />
							<h1>Food</h1>
						</div>
					) : null}
					<div className={Styles["cycles"]}>
						<Image
							src={mobSize ? CyclesPlankMob : CyclesPlank}
							alt="Cycles"
						/>
						<h1>Cycles</h1>
					</div>
				</div>
			</section>
		</main>
	);
}
