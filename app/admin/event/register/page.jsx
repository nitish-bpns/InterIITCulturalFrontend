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
		<div>
			<h1>Register for Event (Enter Team Details)</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="eventCode">Event </label>
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
				<label htmlFor="instituteID">Institute </label>
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
				<label htmlFor="emails">Emails </label>
				<button
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
				{formData.emails.map((email, index) => {
					return (
						<div key={index}>
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
							/>
							<button
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
						</div>
					);
				})}
				<br />
				<button>Register</button>
			</form>
		</div>
	);
}
