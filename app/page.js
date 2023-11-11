import Styles from "../styles/page.module.css";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Home() {
	return (
		<main className={satisfy.className}>
			<section className={Styles["main"]}>
				<div>
					<h1 className={Styles["heading"]}>
						Welcome to Inter IIT Cultural Meet 6.0 Website
					</h1>
				</div>
			</section>
		</main>
	);
}
