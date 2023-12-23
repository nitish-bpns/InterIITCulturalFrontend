"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { toast, toastDict } from "@/lib/toastify";
import BackButton from "@/components/BackButton";
import Table from "@/components/Table";

import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";
import halls from "@/data/halls.json";
import Styles from "./Profile.module.css";

import Ellipse from "@/public/assets/images/ellipse.png";
import Info from "@/public/assets/images/info_icon.png";
import Events from "@/public/assets/images/events_icon.png";
import Home from "@/public/assets/images/home_icon.png";
import { ThreeDots } from "react-loader-spinner";

const myFont = localFont({ src: "../../public/assets/fonts/Dreaming.woff2" });
const montserrat = Montserrat({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

function findEventByCode(code) {
	for (const genre in eventsData) {
		for (const event in eventsData[genre].events) {
			if (eventsData[genre].events[event].code === code) {
				return {
					...eventsData[genre].events[event],
					link: "/events/" + genre + "/" + event,
				};
			}
		}
	}
	return null;
}

export default function Profile() {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				const res = await fetch("api/user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						token: localStorage.getItem("interiit-cultural-token"),
					}),
				});
				const { user, events } = await res.json();
				if (!user) {
					toast.error("User not found.", toastDict);
					return;
				}
				setUser({
					...user,
					events: events,
				});
			} catch (error) {
				toast.error(
					"Something went wrong! Please try again.",
					toastDict
				);
			}
		};
		if (!localStorage.getItem("interiit-cultural-token")) {
			router.push("/signin");
		} else {
			loadData();
		}
	}, []);

	const [page, setPage] = useState(0);

	const MainPage = () => {
		return (
			<main className={montserrat.className + Styles["main"]}>
				<section className={Styles["profile-wrapper"]}>
					<div className={Styles["title-bar"]}>
						{user.isAdmin ? (
							<Link href="/admin" className={Styles["admin-btn"]}>
								Admin Panel
							</Link>
						) : (
							<div className={Styles["no-admin-btn"]}>Text</div>
						)}
						<h1>My Profile</h1>
						<div
							onClick={() => {
								localStorage.removeItem(
									"interiit-cultural-token"
								);
								router.push("/");
							}}
							className={Styles["sign-out-btn"]}
						>
							Sign Out
						</div>
					</div>

					<div className={Styles["profile"]}>
						<div className={Styles["profile-img"]}>
							<Image src={Ellipse} />
						</div>
						<div className={Styles["profile-btns"]}>
							<div
								onClick={() => setPage(1)}
								className={Styles["btn"]}
							>
								<Image src={Info} />
								<p>Personal Information</p>
							</div>
							<div
								onClick={() => setPage(2)}
								className={Styles["btn"]}
							>
								<Image src={Events} />
								<p>Event Details</p>
							</div>
							<div
								onClick={() => setPage(3)}
								className={Styles["btn"]}
							>
								<Image src={Home} />
								<p>Accomodation Details</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	};

	const PersonalInfoPage = () => {
		return (
			<main className={montserrat.className + Styles["main"]}>
				<section className={Styles["personal-info-wrapper"]}>
					<h1>Personal Info</h1>
					<div className={Styles["personal-info"]}>
						<p>
							<span>Name : </span>
							{user.name}
						</p>
						<p>
							<span>Institute : </span>
							{institutes[user.instituteID]}
						</p>
						<p>
							<span>Phone Number : </span>
							{user.phone}
						</p>
						<p>
							<span>Email : </span>
							{user.email}
						</p>
						<p>
							<span>Gender : </span>
							{user.gender}
						</p>
					</div>
				</section>
			</main>
		);
	};

	const EventDetailsPage = () => {
		return (
			<main className={montserrat.className + Styles["main"]}>
				<section className={Styles["event-details"]}>
					<h1>Registered Event Details</h1>
					<Table
						data={{
							cols: [
								{
									name: "Event",
									width: "70%",
								},
								{
									name: "Score",
									width: "30%",
								},
							],
							rows: user.events.map((event) => {
								event = {
									...event,
									...findEventByCode(event.eventCode),
								};
								return {
									Event: (
										<Link href={event.link}>
											{event.name}
										</Link>
									),
									Institute: institutes[event.instituteID],
									Score: event.score,
								};
							}),
						}}
					/>
				</section>
			</main>
		);
	};

	const AccomodationPage = () => {
		return (
			<main className={montserrat.className + Styles["main"]}>
				<section className={Styles["personal-info-wrapper"]}>
					<h1>Accomodation</h1>
					<div className={Styles["acco-info"]}>
						<div className={Styles["acco-img"]}>
							<Image
								src={halls[user.hall].img}
								width={1000}
								height={1000}
								alt="Accomodation Hall"
							/>
						</div>
						<div className={Styles["acco-text"]}>
							<p>
								<span>Lodging :</span>
							</p>
							<p>
								{halls[user.hall].name}{" "}
								<a
									style={{
										color: "#6bb2ff",
										textDecoration: "none",
									}}
									href={halls[user.hall].location}
									target="_blank"
								>
									<i class="fa-solid fa-map-location-dot"></i>
								</a>
							</p>
							<p>
								<span>Mess : </span>
								{halls[user.mess].name}{" "}
								<a
									style={{
										color: "#6bb2ff",
										textDecoration: "none",
									}}
									href={halls[user.mess].location}
									target="_blank"
								>
									<i class="fa-solid fa-map-location-dot"></i>
								</a>
							</p>
						</div>
					</div>
				</section>
			</main>
		);
	};

	return user ? (
		<>
			{page == 0 ? (
				<MainPage />
			) : (
				<BackButton
					onClick={() => {
						setPage(0);
					}}
				/>
			)}
			{page == 1 && <PersonalInfoPage />}
			{page == 2 && <EventDetailsPage />}
			{page == 3 && <AccomodationPage />}
		</>
	) : (
		<main className={montserrat.className + Styles["main"]}>
			<section className={Styles["loader"]}>
				<ThreeDots
					visible={true}
					height="300"
					width="300"
					color="#E3C7AE"
					radius="9"
					ariaLabel="three-dots-loading"
					wrapperStyle={{}}
					wrapperClass=""
				/>
			</section>
		</main>
	);
}
