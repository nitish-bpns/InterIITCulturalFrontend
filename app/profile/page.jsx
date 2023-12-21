"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import Styles from "./Profile.module.css";

import { useRouter } from "next/navigation";
import { toast, toastDict } from "@/lib/toastify";
import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";
import BackButton from "@/components/BackButton";
import Table from "@/components/Table";
import Ellipse from "@/public/assets/images/ellipse.png";
import Info from "@/public/assets/images/info_icon.png";
import Events from "@/public/assets/images/events_icon.png";
import Home from "@/public/assets/images/home_icon.png";

const myFont = localFont({ src: "../../public/assets/fonts/Dreaming.woff2" });

import Acco from "@/public/assets/images/home/carousel/campus_1.jpg";

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
			<main className={myFont.className}>
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
			<main className={myFont.className}>
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
			<main className={myFont.className}>
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
			<main className={myFont.className}>
				<section className={Styles["personal-info-wrapper"]}>
					<h1>Accomodation</h1>
					<div className={Styles["acco-info"]}>
						<div className={Styles["acco-img"]}>
							<Image src={Acco} alt="accomodation" />
						</div>
						<div className={Styles["acco-text"]}>
							<p>
								<span>Hall of Residence : </span>
								{user.hall}
							</p>
							<p>
								<span>Mess : </span>
								{user.mess}
							</p>
							<p>
								<span>Contact Details : </span>+91876543210
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
		"Loading..."
	);
}
