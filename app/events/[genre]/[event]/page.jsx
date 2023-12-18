import Styles from "./event.module.css";
import { Satisfy } from "next/font/google";
import BackButton from "@/components/BackButton";
import ErrorPage from "@/components/ErrorPage";
import localFont from "next/font/local";
import data from "@/data/events.json";
import Image from "next/image";

// Judges Images
import Ishika from "@/public/assets/images/events/judges/ishika.jpg";
import Shailendra from "@/public/assets/images/events/judges/shailendra.jpeg";
import Abhisek from "@/public/assets/images/events/judges/abhisek.jpg";
import Rupali from "@/public/assets/images/events/judges/rupali.jpg";
import Masood from "@/public/assets/images/events/judges/masood.jpg";
import Ankit from "@/public/assets/images/events/judges/ankit.jpg";
import Hiba from "@/public/assets/images/events/judges/hiba.jpg";
import Sammya from "@/public/assets/images/events/judges/sammya.jpeg";
import Lokesh from "@/public/assets/images/events/judges/lokesh.jpg";
import Anand from "@/public/assets/images/events/judges/anand.jpg";
import Parag from "@/public/assets/images/events/judges/parag.jpg";
import Darniya from "@/public/assets/images/events/judges/darniya.jpg";
import Jayati from "@/public/assets/images/events/judges/jayati.jpg";
import Samarth from "@/public/assets/images/events/judges/samarth.jpeg";
import Sabyasachi from "@/public/assets/images/events/judges/sabyasachi.jpeg";
import John from "@/public/assets/images/events/judges/john.jpg";
import Anubrato from "@/public/assets/images/events/judges/anubrato.jpeg";
import Devyani from "@/public/assets/images/events/judges/devyani.jpg";
import Adnan from "@/public/assets/images/events/judges/adnan.jpg";
import Shiraz from "@/public/assets/images/events/judges/shiraz.jpg";
import Talha from "@/public/assets/images/events/judges/talha.jpg";
import Rishi from "@/public/assets/images/events/judges/rishi.jpg";
import Pranisha from "@/public/assets/images/events/judges/pranisha.jpg";
import Tanmoy from "@/public/assets/images/events/judges/tanmoy.jpg";
import Yuteka from "@/public/assets/images/events/judges/yuteka.jpg";
import Divyam from "@/public/assets/images/events/judges/divyam.jpeg";
import Ram from "@/public/assets/images/events/judges/ram.jpg";
import Bijay from "@/public/assets/images/events/judges/bijay.jpg";
import Ruchira from "@/public/assets/images/events/judges/ruchira.jpg";
import Argha from "@/public/assets/images/events/judges/argha.jpg";
import Asim from "@/public/assets/images/events/judges/asim.jpg";
import Shrikanth from "@/public/assets/images/events/judges/shrikanth.jpg";
import Arindam from "@/public/assets/images/events/judges/arindam.jpg";
import Samanway from "@/public/assets/images/events/judges/samanway.jpg";
import Debanjan from "@/public/assets/images/events/judges/debanjan.jpg";
import Partha from "@/public/assets/images/events/judges/partha.jpg";
import Major from "@/public/assets/images/events/judges/major.jpg";

// Auditorium Images
import Kalidas from "@/public/assets/images/events/kalidas.png";
import Netaji from "@/public/assets/images/events/netaji.png";
import SNBose from "@/public/assets/images/events/SNBose.png";

const myFont = localFont({
	src: "../../../../public/assets/fonts/Dreaming.woff2",
});
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Event({ params }) {
	const genre = params.genre;
	if (!data[genre]) {
		return <ErrorPage statusCode={404} />;
	}

	let event = params.event;

	if (!data[genre].events[event]) {
		return <ErrorPage statusCode={404} />;
	}

	event = data[genre].events[event];
	const rules = require("@/data/rules.json")[event.code];

	const judges = [
		{
			code: "Q1",
			images: [
				{
					name: "Major Chandrakant Nair",
					image: Major,
				},
			],
		},
		{
			code: "Q2",
			images: [
				{
					name: "Major Chandrakant Nair",
					image: Major,
				},
			],
		},
		{
			code: "Q3",
			images: [
				{
					name: "Dr.Partha Sarthi Ghatak",
					image: Partha,
				},
			],
		},
		{
			code: "Q4",
			images: [
				{
					name: "Samanway Banerjee",
					image: Samanway,
				},
			],
		},
		{
			code: "Q5",
			images: [
				{
					name: "Debanjan Bose",
					image: Debanjan,
				},
			],
		},
		{
			code: "Q6",
			images: [
				{
					name: "Samanway Banerjee",
					image: Samanway,
				},
			],
		},
		{
			code: "L1",
			images: [
				{
					name: "Arindam Basu",
					image: Arindam,
				},
			],
		},
		{
			code: "L2",
			images: [
				{
					name: "Shrikanth T",
					image: Shrikanth,
				},
			],
		},
		{
			code: "L3",
			images: [
				{
					name: "Asim Mondal",
					image: Asim,
				},
			],
		},
		{
			code: "L4",
			images: [
				{
					name: "Ram Ahlad Chaudhary",
					image: Ram,
				},
				{
					name: "Bijay Kumar Shaw",
					image: Bijay,
				},
			],
		},
		{
			code: "L5",
			images: [
				{
					name: "Ruchira Mandal",
					image: Ruchira,
				},
				{
					name: "Argha Kumar Banerjee",
					image: Argha,
				},
			],
		},
		{
			code: "L6",
			images: [
				{
					name: "Ram Ahlad Chaudhary",
					image: Ram,
				},
				{
					name: "Bijay Kumar Shaw",
					image: Bijay,
				},
			],
		},
		{
			code: "L7",
			images: [
				{
					name: "Ruchira Mandal",
					image: Ruchira,
				},
				{
					name: "Argha Kumar Banerjee",
					image: Argha,
				},
			],
		},
		{
			code: "S1",
			images: [],
		},
		{
			code: "S2",
			images: [],
		},
		{
			code: "S3",
			images: [],
		},
		{
			code: "S4",
			images: [],
		},
		{
			code: "S5",
			images: [],
		},
		{
			code: "S6",
			images: [],
		},
		{
			code: "D1",
			images: [
				{
					name: "Divyam Vijay",
					image: Divyam,
				},
				{
					name: "Yuteka Trripati",
					image: Yuteka,
				},
			],
		},
		{
			code: "D2",
			images: [
				{
					name: "Divyam Vijay",
					image: Divyam,
				},
				{
					name: "Yuteka Trripati",
					image: Yuteka,
				},
			],
		},
		{
			code: "D3",
			images: [
				{
					name: "Pranisha Sunwar",
					image: Pranisha,
				},
				{
					name: "Tanmoy Karmokar",
					image: Tanmoy,
				},
			],
		},
		{
			code: "T1",
			images: [
				{
					name: "Adnan Khurram",
					image: Adnan,
				},
				{
					name: "Md Shiraz Alam",
					image: Shiraz,
				},
			],
		},
		{
			code: "T2",
			images: [
				{
					name: "Rishi Kumar Yadav",
					image: Rishi,
				},
				{
					name: "Talha Thakur",
					image: Talha,
				},
			],
		},
		{
			code: "T3",
			images: [
				{
					name: "Rishi Kumar Yadav",
					image: Rishi,
				},
				{
					name: "Talha Thakur",
					image: Talha,
				},
			],
		},
		{
			code: "T4",
			images: [
				{
					name: "Adnan Khurram",
					image: Adnan,
				},
				{
					name: "Md Shiraz Alam",
					image: Shiraz,
				},
			],
		},
		{
			code: "M1",
			images: [
				{
					name: "John Paul",
					image: John,
				},
				{
					name: "Sabyasachi Deb",
					image: Sabyasachi,
				},
			],
		},
		{
			code: "M2",
			images: [
				{
					name: "Devyani Pareek",
					image: Devyani,
				},
			],
		},
		{
			code: "M3",
			images: [
				{
					name: "Anubrato Ghatak",
					image: Anubrato,
				},
			],
		},
		{
			code: "M4",
			images: [
				{
					name: "Sabyasachi Deb",
					image: Sabyasachi,
				},
				{
					name: "John Paul",
					image: John,
				},
			],
		},
		{
			code: "V1",
			images: [
				{
					name: "Samarth Mahajan",
					image: Samarth,
				},
			],
		},
		{
			code: "V2",
			images: [
				{
					name: "Samarth Mahajan",
					image: Samarth,
				},
			],
		},
		{
			code: "A1",
			images: [
				{
					name: "Lokesh Nayak",
					image: Lokesh,
				},
				{
					name: "M.L. Anand Rao",
					image: Anand,
				},
			],
		},
		{
			code: "A2",
			images: [
				{
					name: "Parag Roy",
					image: Parag,
				},
				{
					name: "M.L. Anand Rao",
					image: Anand,
				},
			],
		},
		{
			code: "A3",
			images: [
				{
					name: "Lokesh Nayak",
					image: Lokesh,
				},
				{
					name: "M.L. Anand Rao",
					image: Anand,
				},
			],
		},
		{
			code: "A4",
			images: [
				{
					name: "Darniya Roy",
					image: Darniya,
				},
				{
					name: "Jayati Mukherjeee",
					image: Jayati,
				},
				{
					name: "Hiba Khan",
					image: Hiba,
				},
			],
		},
		{
			code: "G1",
			images: [
				{
					name: "Masood Shaikh",
					image: Masood,
				},
				{
					name: "Ankit Mukherjee",
					image: Ankit,
				},
			],
		},
		{
			code: "G2",
			images: [
				{
					name: "Masood Shaikh",
					image: Masood,
				},
				{
					name: "Hiba Khan",
					image: Hiba,
				},
				{
					name: "Ankit Mukherjee",
					image: Ankit,
				},
			],
		},
		{
			code: "G3",
			images: [
				{
					name: "Ankit Mukherjee",
					image: Ankit,
				},
				{
					name: "Hiba Khan",
					image: Hiba,
				},
			],
		},
		{
			code: "G4",
			images: [],
		},
		{
			code: "G5",
			images: [
				{
					name: "Sammya Brata Mullick",
					image: Sammya,
				},
			],
		},
		{
			code: "G6",
			images: [
				{
					name: "Sammya Brata Mullick",
					image: Sammya,
				},
			],
		},
		{
			code: "G7",
			images: [
				{
					name: "Sammya Brata Mullick",
					image: Sammya,
				},
			],
		},
		{
			code: "F1",
			images: [
				{
					name: "Abhisek Roy",
					image: Abhisek,
				},
				{
					name: "Rupali Timungpi",
					image: Rupali,
				},
			],
		},
		{
			code: "F2",
			images: [
				{
					name: "Rupali Timungpi",
					image: Rupali,
				},
			],
		},
		{
			code: "C1",
			images: [
				{
					name: "Ishika Konar",
					image: Ishika,
				},
				{
					name: "Shailendra Kekade",
					image: Shailendra,
				},
			],
		},
		{
			code: "C2",
			images: [
				{
					name: "Ishika Konar",
					image: Ishika,
				},
				{
					name: "Shailendra Kekade",
					image: Shailendra,
				},
			],
		},
		{
			code: "C3",
			images: [
				{
					name: "Ishika Konar",
					image: Ishika,
				},
				{
					name: "Shailendra Kekade",
					image: Shailendra,
				},
			],
		},
	];

	const stages = [
		{
			code: "T2",
			image: Kalidas,
		},
		{
			code: "D1",
			image: Netaji,
		},
		{
			code: "D2",
			image: Netaji,
		},
		{
			code: "T3",
			image: SNBose,
		},
		{
			code: "F1",
			image: Kalidas,
		},
	];

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
							{stages.map(
								(stage, idx) =>
									stage.code === event.code && (
										<>
											<h2>Auditorium :</h2>
											<Image
												key={idx}
												src={stage.image}
												alt={event.name}
												className={Styles["event-img"]}
											/>
										</>
									)
							)}
							{rules.dimension && (
								<>
									<h2>Stage Dimensions :</h2>
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
				<div className={Styles["rulebook-wrapper"]}>
					<h1 className={Styles["event-name"]}>
						Judges for the Event :
					</h1>
					<div className={Styles["judge-wrapper"]}>
						{judges.map(
							(judge) =>
								judge.code === event.code && (
									<>
										{judge.images.map((person, idx) => (
											<div
												key={idx}
												className={Styles["judge-card"]}
											>
												<Image
													src={person.image}
													alt={person.name}
												/>
												<h3>{person.name}</h3>
											</div>
										))}
									</>
								)
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
