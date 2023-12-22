"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, toastDict } from "@/lib/toastify";
import Table from "@/components/Table";
import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";

function findEventByCode(code) {
	for (const genre in eventsData) {
		for (const event in eventsData[genre].events) {
			if (eventsData[genre].events[event].code === code) {
				return eventsData[genre].events[event];
			}
		}
	}
	return null;
}

export default function Events({ params }) {
	const router = useRouter();

	//url decode the email
	const email = decodeURIComponent(params.email);
	if (!email) {
		router.push("/admin");
	}

	const [user, setUser] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				const res = await fetch("../../api/admin/user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						token: localStorage.getItem("interiit-cultural-token"),
						email: email,
					}),
				});
				const { user, events } = await res.json();
				if (!user) {
					toast.error("User not found.", toastDict);
					router.push("/admin");
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
			router.push("/");
		} else {
			loadData();
		}
	}, []);

	return (
		<div>
			<h1>User Info</h1>
			{user && (
				<>
					<h2>Personal Info</h2>
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
					<h2>Registered Event Details</h2>
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
										<Link
											href={
												"/admin/event/details/" +
												event._id.valueOf()
											}
										>
											{event.name}
										</Link>
									),
									Institute: institutes[event.instituteID],
									Score: event.score,
								};
							}),
						}}
					/>
					<h2>Accomodation</h2>
					<p>
						<span>Hall of Residence : </span>
						{user.hall}
					</p>
					<p>
						<span>Mess : </span>
						{user.mess}
					</p>
				</>
			)}
		</div>
	);
}
