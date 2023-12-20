import Link from "next/link";
import Image from "next/image";
import { Cookie } from "next/font/google";
import Styles from "@/styles/page.module.css";

import PageStyles from "../schedule/Schedule.module.css";
import PageStyles2 from "./team.module.css";

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

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Team() {
	return (
		<main className={cookie.className}>
			<section className={Styles["main"]}>
				<div className={PageStyles["plank-container"]}>
					<div
						className={
							PageStyles["column1"] + " " + PageStyles2["column1"]
						}
					>
						<Link href="/team/sponsorship">
							<Image src={Day0Plank} alt="Sponsorship Team" />
							<h1>Sponsorship Team</h1>
						</Link>
						<Link href="/team/outreach-and-hospitality">
							<Image
								src={Day2Plank}
								alt="Media & Publicity Team"
							/>
							<h1>Outreach & Hospitality Team</h1>
						</Link>
						<Link
							href="/team/media-publicity"
							className={PageStyles2["third-plank"]}
						>
							<Image
								src={Day3Plank}
								alt="Media & Publicity Team"
							/>
							<h1>Media & Publicity Team</h1>
						</Link>
					</div>
					<Link
						href="/team/overall-coordinator"
						className={
							PageStyles["main"] + " " + PageStyles2["main"]
						}
					>
						<Image src={MainPlank} alt="Overall Coordinator" />
						<h1>Overall Coordinator</h1>
					</Link>
					<div
						className={
							PageStyles["column2"] + " " + PageStyles2["column2"]
						}
					>
						<Link href="/team/events">
							<Image src={Day1Plank} alt="Events Team" />
							<h1>Events Team</h1>
						</Link>
						<Link href="/team/tech">
							<Image src={Day3Plank} alt="Logistics Team" />
							<h1>Logistics Team</h1>
						</Link>
						<Link
							href="/team/tech"
							className={PageStyles2["third-plank"]}
						>
							<Image src={Day2Plank} alt="Tech Team" />
							<h1>Tech Team</h1>
						</Link>
					</div>
				</div>
				<div
					className={
						PageStyles["plank-container-mob"] +
						" " +
						PageStyles2["plank-container-mob"]
					}
				>
					<Link
						className={PageStyles["main-mob"]}
						href="/team/overall-coordinator"
					>
						<Image src={MainPlankMob} alt="Overall Coordinator" />
						<h1>Overall Coordinator</h1>
					</Link>
					<Link href="/team/events">
						<Image src={Day0PlankMob} alt="Events Team" />
						<h1>Events Team</h1>
					</Link>
					<Link href="/team/logistics">
						<Image src={Day1PlankMob} alt="Logistics Team" />
						<h1>Logistics Team</h1>
					</Link>
					<Link href="/team/tech">
						<Image src={Day2PlankMob} alt="Tech Team" />
						<h1>Tech Team</h1>
					</Link>
					<Link href="/team/sponsorship">
						<Image src={Day3PlankMob} alt="Sponsorship Team" />
						<h1>Sponsorship Team</h1>
					</Link>
					<Link href="/team/media-publicity">
						<Image
							src={Day1PlankMob}
							alt="Media & Publicity Team"
						/>
						<h1>Media & Publicity Team</h1>
					</Link>
					<Link href="/team/outreach-hospitality">
						<Image
							src={Day2PlankMob}
							alt="Outreach & Hospitality Team"
						/>
						<h1>Outreach & Hospitality Team</h1>
					</Link>
				</div>
			</section>
		</main>
	);
}
