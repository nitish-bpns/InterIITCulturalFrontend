import Styles from "@/styles/page.module.css";
import { Handlee } from "next/font/google";
import LeaderboardComponent from "@/components/LeaderboardComponent";

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Leaderboard",
};

export default function Leaderboard() {
	return (
		<main className={handlee.className}>
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Leaderboard</h1>
				<LeaderboardComponent allowChange={true} />
			</section>
		</main>
	);
}
