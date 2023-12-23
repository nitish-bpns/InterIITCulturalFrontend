import Styles from "./Services.module.css";
import { Cookie } from "next/font/google";
import Image from "next/image";

import ServicesPlank from "@/public/assets/images/services/services.png";
import FoodPlank from "@/public/assets/images/services/food.png";
import BusesPlank from "@/public/assets/images/services/buses.png";

import ServicesPlankMob from "@/public/assets/images/services/services_mob.png";
import FoodPlankMob from "@/public/assets/images/services/food_mob.png";
import BusesPlankMob from "@/public/assets/images/services/buses_mob.png";
import Link from "next/link";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Services",
};

export default function Services() {
	return (
		<main className={cookie.className}>
			<section className={Styles["main"]}>
				<div className={Styles["plank-container"]}>
					<Link href="/services/food/" className={Styles["food"]}>
						<Image src={FoodPlank} alt="Food" />
						<h1>Food</h1>
					</Link>
					<div className={Styles["services"]}>
						<Image src={ServicesPlank} alt="Services" />
						<h1>Services</h1>
					</div>
					<Link href="/services/buses/" className={Styles["buses"]}>
						<Image src={BusesPlank} alt="Buses" />
						<h1>Buses</h1>
					</Link>
				</div>
				<div className={Styles["plank-container-mob"]}>
					<div className={Styles["services"]}>
						<Image src={ServicesPlankMob} alt="Services" />
						<h1>Services</h1>
					</div>
					<Link href="/services/food/" className={Styles["food"]}>
						<Image src={FoodPlankMob} alt="Food" />
						<h1>Food</h1>
					</Link>
					<Link href="/services/buses/" className={Styles["buses"]}>
						<Image src={BusesPlankMob} alt="Buses" />
						<h1>Buses</h1>
					</Link>
				</div>
			</section>
		</main>
	);
}
