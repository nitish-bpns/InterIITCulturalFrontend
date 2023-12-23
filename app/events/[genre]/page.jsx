import { Cookie } from "next/font/google";
import BackButton from "@/components/BackButton";
import ErrorPage from "@/components/ErrorPage";
import data from "@/data/events.json";
import Link from "next/link";
import Image from "next/image";

import Styles from "@/styles/page.module.css";
import PageStyles from "./genre.module.css";

import mainPlank from "@/public/assets/images/events/genre/main.png";
import plank1 from "@/public/assets/images/events/genre/1.png";
import plank2 from "@/public/assets/images/events/genre/2.png";
import plank3 from "@/public/assets/images/events/genre/3.png";
import plank4 from "@/public/assets/images/events/genre/4.png";
import plank5 from "@/public/assets/images/events/genre/5.png";

const planks = [plank1, plank2, plank3, plank4, plank5];

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export function generateMetadata({ params }) {
	const genre = params.genre;
	if (!data[genre]) {
		return {
			title: "404",
		};
	}
	return {
		title: data[genre].properName + " Events",
	};
}

export default function Genre({ params }) {
	const genre = params.genre;
	if (!data[genre]) {
		return <ErrorPage statusCode={404} />;
	}

	const events = data[genre].events;

	return (
		<main
			className={cookie.className}
			style={{
				backgroundImage: `url(${data[genre].bg})`,
				backgroundAttachment: "fixed",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<BackButton href={`/events`} />
			<section className={Styles["main"] + " " + PageStyles["main"]}>
				<a className={PageStyles["main-plank-container"]}>
					<Image
						src={mainPlank}
						alt={data[genre].properName}
						className={PageStyles["plank"]}
					/>
					<h1 className={PageStyles["main-plank-name"]}>
						{data[genre].properName}
					</h1>
				</a>
				{Object.keys(events).map((event, id) => (
					<Link
						key={id}
						href={"/events/" + genre + "/" + event}
						className={PageStyles["plank-container"]}
					>
						<Image
							src={planks[id % planks.length]}
							alt={events[event].name}
							className={
								PageStyles["plank"] +
								" " +
								PageStyles["plank-" + (id + 1)]
							}
						/>
						<h2 className={PageStyles["event-name"]}>
							{events[event].name}
						</h2>
					</Link>
				))}
			</section>
		</main>
	);
}
