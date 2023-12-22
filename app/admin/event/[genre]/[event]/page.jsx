"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, toastDict } from "@/lib/toastify";
import { Container } from "react-bootstrap";
import DataTable from "@/components/admin/DataTable";
import DownloadButton from "@/components/admin/DownloadButton";
import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";

export default function Events({ params }) {
	const genre = params.genre;
	const event = params.event;
	const router = useRouter();

	if (!eventsData[genre] || !eventsData[genre].events[event]) {
		router.push("/admin");
	}

	const [tableControls, setTableControls] = useState({
		page: 1,
		length: 20,
		sortField: "_id",
		sortDir: 1,
	});

	const [teams, setTeams] = useState([]);
	const [count, setCount] = useState(0);

	const [searchField, setSearchField] = useState("institutionID");
	const [search, setSearch] = useState("");

	const loadData = async () => {
		if (!localStorage.getItem("interiit-cultural-token")) {
			router.push("/");
		}
		try {
			const res = await fetch("../../../../api/admin/event/all", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token: localStorage.getItem("interiit-cultural-token"),
					code: eventsData[genre].events[event].code,
					sortField: tableControls.sortField,
					sortDir: tableControls.sortDir,
					first: tableControls.length * (tableControls.page - 1),
					limit: tableControls.length,
					searchField:
						document.querySelector("[name=searchField]").value,
					search: document.querySelector("[name=search]").value,
				}),
			});
			const { teams, count } = await res.json();
			if (!teams) {
				toast.error("User not found.", toastDict);
				router.push("/admin");
				return;
			}
			setTeams(teams);
			setCount(count);
		} catch (error) {
			toast.error("Something went wrong! Please try again.", toastDict);
		}
	};

	useEffect(() => {
		loadData();
	}, [tableControls]);

	const columns = {
		_id: "Serial Number",
		instituteID: "Institute",
		score: "Score",
	};

	let downloadHeaders = [
		{ label: "Institute", key: "instituteID" },
		{ label: "Score", key: "score" },
	];

	return (
		<Container
			style={{
				marginTop: "20px",
				marginBottom: "20px",
			}}
		>
			<h1>
				Event Registrations - {eventsData[genre].events[event].name}
			</h1>
			Search by:&nbsp;&nbsp;
			<select
				name="searchField"
				value={searchField}
				onChange={(e) => {
					setSearchField(e.target.value);
					loadData();
					setTableControls({
						...tableControls,
						page: 1,
					});
				}}
			>
				<option value="instituteID">Institute</option>
			</select>
			&nbsp;&nbsp;Value:&nbsp;&nbsp;
			{searchField === "instituteID" ? (
				<select
					name="search"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						loadData();
						setTableControls({
							...tableControls,
							page: 1,
						});
					}}
				>
					<option value="">All</option>
					{Object.keys(institutes).map((id, index) => (
						<option value={id} key={index}>
							{institutes[id]}
						</option>
					))}
				</select>
			) : (
				<input
					type="text"
					name="search"
					placeholder="Search"
					onChange={() => {
						loadData();
						setTableControls({
							...tableControls,
							page: 1,
						});
					}}
				/>
			)}
			<br />
			<br />
			<DataTable
				columns={columns}
				data={teams}
				count={count}
				tableControls={tableControls}
				setTableControls={setTableControls}
				downloadButton={
					<DownloadButton
						endpoint={"../../../../api/admin/event/all/"}
						downloadHeaders={downloadHeaders}
					/>
				}
			/>
		</Container>
	);
}
