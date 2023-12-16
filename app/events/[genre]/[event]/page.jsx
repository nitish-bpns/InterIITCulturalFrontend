import Styles from "./event.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import localFont from "next/font/local";
import data from "@/data/events.json";

const myFont = localFont({
	src: "../../../../public/assets/fonts/Dreaming.woff2",
});

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Event({ params }) {
	const genre = params.genre;
	if (!data[genre]) {
		return <h1>404</h1>;
	}

	let event = params.event;

	if (!data[genre].events[event]) {
		return <h1>404</h1>;
	}

	event = data[genre].events[event];
	const rules = require("@/data/rules.json")[event.code];

	return (
		<main
			className={`${satisfy.className} ${Styles["main-wrapper"]}`}
			style={{
				backgroundImage: `url(${data[genre].bg})`,
				backgroundAttachment: "fixed",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<BackButton href={"/events/" + genre} />
			<section className={Styles["main"]}>
				<div className={`${myFont.className} ${Styles["heading"]}`}>
					Rulebook
				</div>
				<div className={Styles["rulebook-wrapper"]}>
					<h1 className={Styles["event-name"]}>
						{event.name} {rules && "(" + rules.points + ")"}
					</h1>
					<h2>Genre : {data[genre].properName}</h2>
					{rules && (
						<>
							{rules.description && (
								<>
									<h2>Description :</h2>
									<p>{rules.description}</p>
								</>
							)}
							{rules.submissions && (
								<>
									<h2>Number of Submissons per IIT :</h2>
									<p>{rules.submissions}</p>
								</>
							)}
							{rules.photoLimit && (
								<>
									<h2>Photo-limit :</h2>
									<p>{rules.photoLimit}</p>
								</>
							)}
							{(rules.teams || rules.participants) && (
								<>
									<h2>
										No. of{" "}
										{rules.isTeam
											? "teams"
											: "participants"}{" "}
										per IIT :
									</h2>
									<p>
										{rules.isTeam
											? rules.teams
											: rules.participants}
									</p>
								</>
							)}
							{rules.isTeam && (
								<>
									<h2>No of participants per team :</h2>
									<p>{rules.perteam}</p>
								</>
							)}
							{rules.time && (
								<>
									<h2>Time Limit :</h2>
									<p>{rules.time}</p>
								</>
							)}
							{rules.theme && (
								<>
									<h2>Theme :</h2>
									<p>{rules.theme}</p>
								</>
							)}
							{rules.deadline && (
								<>
									<h2>Submission Deadline :</h2>
									<p>{rules.deadline}</p>
								</>
							)}
							{rules.submission && (
								<>
									<h2>Submisson :</h2>
									<p>{rules.submission}</p>
								</>
							)}
							{rules.street && (
								<>
									<h2>
										The following is a list of street styles
										allowed :
									</h2>
									<ul>
										{rules.street.map((style, idx) => (
											<li key={idx}>
												<p>{style}</p>
											</li>
										))}
									</ul>
								</>
							)}
							{rules.struct && (
								<>
									<h2>Tournament Structure :</h2>
									<ol>
										{rules.struct.map((rule, idx) => (
											<li key={idx}>
												<p>{rule}</p>
											</li>
										))}
									</ol>
								</>
							)}
							{rules.rules && (
								<>
									<h2>Rules :</h2>
									<ol>
										{rules.rules.map((rule, idx) => (
											<li key={idx}>
												<p>{rule}</p>
											</li>
										))}
									</ol>
								</>
							)}
							{rules.penalty && (
								<>
									<h2>Penalty :</h2>
									{rules.isPenaltyTable ? (
										<ul>
											{rules.penalty.map(
												(penalty, idx) => (
													<li key={idx}>{penalty}</li>
												)
											)}
										</ul>
									) : (
										<p>{rules.penalty}</p>
									)}
								</>
							)}
							{rules.criteria && (
								<>
									<h2>Judging Criteria :</h2>
									{rules.isCriteriaTable ? (
										<ul>
											{rules.criteria.map(
												(criteria, idx) => (
													<li key={idx}>
														{criteria}
													</li>
												)
											)}
										</ul>
									) : (
										<p>{rules.criteria}</p>
									)}
								</>
							)}
							{rules.image && (
								<img
									src={rules.image}
									alt={event.name}
									className={Styles["event-img"]}
								/>
							)}
							{rules.dimension && (
								<>
									<h2>Stage Dimensions</h2>
									<p>{rules.dimension}</p>
								</>
							)}
							{rules.additional && (
								<>
									<p>{rules.additional}</p>
								</>
							)}
						</>
					)}
				</div>
			</section>
		</main>
	);
}
