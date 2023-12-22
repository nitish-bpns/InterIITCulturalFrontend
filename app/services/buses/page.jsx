import BackButton from "@/components/BackButton";
import Timeline from "@/components/Timeline";
import Styles from "./Buses.module.css";
import { Cookie } from "next/font/google";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Buses() {
	return (
		<main className={cookie.className}>
			<BackButton href="/services" />
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Buses</h1>
				<Timeline />
			</section>
		</main>
	);
}
