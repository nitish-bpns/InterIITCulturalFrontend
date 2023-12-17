import Link from "next/link";
import Image from "next/image";
import { Satisfy } from "next/font/google";
import Styles from "@/styles/page.module.css";
import PageStyles from "./Schedule.module.css";

import MainPlank from "@/public/assets/images/schedule_team/main.png";
import Day0Plank from "@/public/assets/images/schedule_team/Day0.png";
import Day1Plank from "@/public/assets/images/schedule_team/Day1.png";
import Day2Plank from "@/public/assets/images/schedule_team/Day2.png";
import Day3Plank from "@/public/assets/images/schedule_team/Day3.png";

import MainPlankMob from "@/public/assets/images/schedule_team/main_mob.png";
import Day0PlankMob from "@/public/assets/images/schedule_team/Day0_mob.png";
import Day1PlankMob from "@/public/assets/images/schedule_team/Day1_mob.png";
import Day2PlankMob from "@/public/assets/images/schedule_team/Day2_mob.png";
import Day3PlankMob from "@/public/assets/images/schedule_team/Day3_mob.png";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Schedule() {
	return (
		<main className={satisfy.className}>
			<section className={Styles["main"]}>
				<div className={PageStyles["plank-container"]}>
					<div className={PageStyles["column1"]}>
						<Link href="/schedule/Day/0">
							<Image src={Day0Plank} alt="Day 0" />
							<h1>Day 0</h1>
						</Link>
						<Link href="/schedule/Day/2">
							<Image src={Day2Plank} alt="Day 2" />
							<h1>Day 2</h1>
						</Link>
					</div>
					<div className={PageStyles["main"]}>
						<Image src={MainPlank} alt="Schedule" />
						<h1>Schedule</h1>
					</div>
					<div className={PageStyles["column2"]}>
						<Link href="/schedule/Day/1">
							<Image src={Day1Plank} alt="Day 1" />
							<h1>Day 1</h1>
						</Link>
						<Link href="/schedule/Day/3">
							<Image src={Day3Plank} alt="Day 3" />
							<h1>Day 3</h1>
						</Link>
					</div>
				</div>
				<div className={PageStyles["plank-container-mob"]}>
					<a className={PageStyles["main-mob"]}>
						<Image src={MainPlankMob} alt="Schedule" />
						<h1>Schedule</h1>
					</a>
					<Link href="/schedule/Day/0">
						<Image src={Day0PlankMob} alt="Day 0" />
						<h1>Day 0</h1>
					</Link>
					<Link href="/schedule/Day/1">
						<Image src={Day1PlankMob} alt="Day 1" />
						<h1>Day 1</h1>
					</Link>
					<Link href="/schedule/Day/2">
						<Image src={Day2PlankMob} alt="Day 2" />
						<h1>Day 2</h1>
					</Link>
					<Link href="/schedule/Day/3">
						<Image src={Day3PlankMob} alt="Day 3" />
						<h1>Day 3</h1>
					</Link>
				</div>
			</section>
		</main>
	);
}
