import Styles from "./Services.module.css";
import { Cookie } from "next/font/google";
import Image from "next/image";
import Plank from "../../public/assets/images/plank_services.png";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Sercices() {
	return (
		<main className={cookie.className}>
			<section className={Styles["main"]}>
				<div className={Styles["plank-container"]}>
					<Image src={Plank} alt="Services" />
					<h1 className={Styles["services"]}>Services</h1>
					<h2 className={Styles["food"]}>Food</h2>
					<h2 className={Styles["cycles"]}>Cycles</h2>
				</div>
			</section>
		</main>
	);
}
