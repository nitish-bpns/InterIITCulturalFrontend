"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, toastDict } from "@/lib/toastify";
import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";

function findEventByCode(code) {
	for (const genre in eventsData) {
		for (const event in eventsData[genre].events) {
			if (eventsData[genre].events[event].code === code) {
				return {
					...eventsData[genre].events[event],
					link: "/admin/event/" + genre + "/" + event,
				};
			}
		}
	}
	return null;
}

export default function Events({ params }) {
	const router = useRouter();

	//url decode the id
	const id = decodeURIComponent(params.id);
	if (!id) {
		router.push("/admin");
	}

	const [reg, setReg] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				const res = await fetch("../../../../api/admin/event", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						token: localStorage.getItem("interiit-cultural-token"),
						id: id,
					}),
				});
				const { reg } = await res.json();
				if (!reg) {
					toast.error("Event Registration not found.", toastDict);
					router.push("/admin");
					return;
				}
				setReg(reg);
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
			<h1>Event Registration Details</h1>
			{reg && (
				<>
					<h2>Event: {findEventByCode(reg.eventCode).name}</h2>
					<h2>Institute: {institutes[reg.instituteID]}</h2>
					<p>Emails:</p>
					{reg.emails.map((email) => (
						<p>
							<Link href={"/admin/user/" + email}>{email}</Link>
						</p>
					))}
					<p>Score: {reg.score}</p>
				</>
			)}
		</div>
	);
}
