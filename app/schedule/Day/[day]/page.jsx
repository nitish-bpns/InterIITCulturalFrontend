import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import ErrorPage from "@/components/ErrorPage";
import Table from "@/components/Table";

import data from "@/data/schedule.json";

import Styles from "@/styles/page.module.css";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Page({ params }) {
	const day = params.day;
	if (!data[day]) return <ErrorPage statusCode={404} />;

	return (
		<main className={satisfy.className}>
			<BackButton href={`/schedule`} />
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Day {day}</h1>
				<div
					style={{
						width: "90%",
					}}
				>
					<Table
						data={{
							cols: [
								{
									name: "Event",
									width: "50%",
								},
								{
									name: "Venue",
									width: "30%",
								},
								{
									name: "Time",
									width: "20%",
								},
							],
							rows: data[day],
						}}
					/>
				</div>
			</section>
		</main>
	);
}
