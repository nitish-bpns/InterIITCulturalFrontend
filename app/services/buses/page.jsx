import BackButton from "@/components/BackButton";
import Timeline from "@/components/Timeline";
import Styles from "./Buses.module.css";
import { Cookie } from "next/font/google";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Buses",
};

export default function Buses() {
	return (
		<main className={cookie.className}>
			<BackButton href="/services" />
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Buses</h1>
				<div className={Styles["description"]}>
					<p>
						Beginning at 2:00 PM on December 26, when the main event
						activities on campus commence, bus service will start in
						campus with the following schedule and route:
					</p>
					<br />
					<br />
					<ul>
						<li>
							<strong>First Bus:</strong> 2:00 PM, followed by
							<> </>
							<strong>Second Bus:</strong> 2:30 PM on December 26
						</li>
						<li>
							<strong>First Bus:</strong> 7:00 AM followed by
							<> </> <strong>Second Bus:</strong> 7:30 AM on
							December 27 - 29
						</li>
						<li>Continuous loop every hour till 9:00 PM</li>
					</ul>
				</div>
				<br />
				<br />
				<Timeline />
			</section>
		</main>
	);
}
