import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import ErrorPage from "@/components/ErrorPage";
import Table from "@/components/Table";

import data from "@/data/schedule.json";

import Styles from "@/styles/page.module.css";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export function generateMetadata({ params }) {
	const day = params.day;
	if (!data[day]) {
		return {
			title: "404",
		};
	}
	return {
		title: "Day " + day + " Schedule",
	};
}

export default function Page({ params }) {
	const day = params.day;
	if (!data[day]) return <ErrorPage statusCode={404} />;

	return (
		<main className={satisfy.className}>
			<BackButton href={`/schedule`} />
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Day {day}</h1>
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
						rows: data[day].map((row) => {
							return {
								...row,
								Venue: (
									<a
										href={row.Location}
										target="_blank"
										style={{
											color: "#000",
											textDecoration: "none",
										}}
									>
										<i class="fa-solid fa-map-location-dot"></i>{" "}
										{row.Venue}
									</a>
								),
							};
						}),
					}}
				/>
			</section>
		</main>
	);
}
