import Styles from "@/styles/page.module.css";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function CampusMap() {
	return (
		<main className={satisfy.className}>
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Campus Map</h1>
			</section>
		</main>
	);
}
