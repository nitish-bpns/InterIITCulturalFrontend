"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, toastDict } from "@/lib/toastify";
import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";

export default function RegisterUser() {
	const router = useRouter();

	const [formData, setFormData] = useState({
		eventCode: "",
		instituteID: "",
		emails: [],
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("../../api/admin/event/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...formData,
					token: localStorage.getItem("interiit-cultural-token"),
				}),
			});
			const json = await res.json();
			if (res.ok) {
				toast.success(json.message, toastDict);
				setFormData({
					...formData,
					emails: [],
				});
			} else {
				toast.error(json.message, toastDict);
				if (res.status === 401) router.push("/");
			}
		} catch (error) {
			toast.error("Something went wrong! Please try again.", toastDict);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<center>
			<h1>Register Participating Teams for Event (Enter Team Details)</h1>
			<br />
			<form onSubmit={handleSubmit}>
				<label htmlFor="eventCode">Event</label>{" "}
				<select
					name="eventCode"
					value={formData.eventCode}
					onChange={handleChange}
					required
				>
					<option value="">Choose Event</option>
					{Object.keys(eventsData).map((genre) => {
						const events = eventsData[genre].events;
						const obj = Object.keys(events).map((event, index) => (
							<option value={events[event].code} key={index}>
								{eventsData[genre].properName +
									" - " +
									events[event].name}
							</option>
						));
						return obj;
					})}
				</select>
				<br />
				<br />
				<label htmlFor="instituteID">Institute</label>{" "}
				<select
					name="instituteID"
					value={formData.instituteID}
					onChange={handleChange}
					required
				>
					<option value="">Choose Institute</option>
					{Object.keys(institutes).map((ID, index) => {
						return (
							<option value={ID} key={index}>
								{institutes[ID]}
							</option>
						);
					})}
				</select>
				<br />
				<br />
				<label htmlFor="emails">
					Add Participants Emails (members of same team, add only 1
					email if individual)
				</label>
				<br />
				<br />
				{formData.emails.map((email, index) => {
					return (
						<div key={index}>
							{index + 1 + ". "}
							<input
								type="text"
								value={email}
								onChange={(e) => {
									const newEmails = formData.emails;
									newEmails[index] = e.target.value;
									setFormData({
										...formData,
										emails: newEmails,
									});
								}}
								required
							/>{" "}
							<button
								style={{
									padding: "0px 5px",
								}}
								onClick={(e) => {
									e.preventDefault();
									const newEmails = formData.emails;
									newEmails.splice(index, 1);
									setFormData({
										...formData,
										emails: newEmails,
									});
								}}
							>
								X
							</button>
							<br />
							<br />
						</div>
					);
				})}
				<br />
				<button
					style={{ padding: "0px 5px" }}
					onClick={(e) => {
						e.preventDefault();
						setFormData({
							...formData,
							emails: [...formData.emails, ""],
						});
					}}
				>
					Add Email
				</button>
				<br />
				<br />
				<button style={{ padding: "0px 5px" }}>Register</button>
			</form>
		</center>
	);
}
