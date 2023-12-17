"use client";

import { useEffect, useState } from "react";

import Table from "@/components/Table";
import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";

export default function LeaderboardComponent({ allowChange }) {
	const [eventCode, setEventCode] = useState("all");
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch("api/event/score/", {
				method: "POST",
				body: JSON.stringify({
					eventCode: eventCode,
				}),
			});
			const data = await res.json();
			setData(data);
		};
		getData();
	}, [eventCode]);

	return (
		<>
			{allowChange && (
				<select
					style={{
						width: "100%",
						height: "100%",
						background: "#fef0df",
						borderRadius: "20px",
						padding: "20px",
						fontSize: "40px",
						fontWeight: "200",
						marginBottom: "40px",
					}}
					onChange={(e) => {
						setEventCode(e.target.value);
					}}
				>
					<option value="all">Overall</option>
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
			)}
			<Table
				data={{
					cols: [
						{
							name: "Position",
							width: "27%",
						},
						{
							name: "Institute",
							width: "53%",
						},
						{
							name: "Points",
							width: "20%",
						},
					],
					rows: data
						.sort((a, b) => b.score - a.score)
						.map((value, index) => {
							return {
								Position: index + 1,
								Institute: institutes[value.institute],
								Points: value.score,
							};
						}),
				}}
			/>
		</>
	);
}
