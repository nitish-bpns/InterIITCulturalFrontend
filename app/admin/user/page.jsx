"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, toastDict } from "@/lib/toastify";
import { Container } from "react-bootstrap";
import DataTable from "@/components/admin/DataTable";
import DownloadButton from "@/components/admin/DownloadButton";
import institutes from "@/data/institutes.json";

export default function Users() {
	const router = useRouter();

	const [tableControls, setTableControls] = useState({
		page: 1,
		length: 20,
		sortField: "_id",
		sortDir: 1,
	});

	const [users, setUsers] = useState([]);
	const [count, setCount] = useState(0);

	const [searchField, setSearchField] = useState("name");
	const [search, setSearch] = useState("");

	const loadData = async () => {
		if (!localStorage.getItem("interiit-cultural-token")) {
			router.push("/");
		}
		try {
			const res = await fetch("../../api/admin/user/all", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token: localStorage.getItem("interiit-cultural-token"),
					sortField: tableControls.sortField,
					sortDir: tableControls.sortDir,
					first: tableControls.length * (tableControls.page - 1),
					limit: tableControls.length,
					searchField:
						document.querySelector("[name=searchField]").value,
					search: document.querySelector("[name=search]").value,
				}),
			});
			const { users, count } = await res.json();
			if (!users) {
				toast.error("User not found.", toastDict);
				router.push("/admin");
				return;
			}
			setUsers(users);
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
		name: "Name",
		instituteID: "Institute",
		email: "Email",
		gender: "Gender",
		hall: "Hall",
		mess: "Mess",
	};

	let downloadHeaders = [
		{ label: "Name", key: "name" },
		{ label: "Email Address", key: "email" },
		{ label: "Phone Number", key: "phone" },
		{ label: "Gender", key: "gender" },
		{ label: "Institute", key: "instituteID" },
		{ label: "Hall", key: "hall" },
		{ label: "Mess", key: "mess" },
	];

	return (
		<Container
			style={{
				marginTop: "20px",
				marginBottom: "20px",
			}}
		>
			<h1>All Users</h1>
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
				<option value="name">Name</option>
				<option value="email">Email</option>
				<option value="hall">Hall</option>
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
				data={users}
				count={count}
				tableControls={tableControls}
				setTableControls={setTableControls}
				downloadButton={
					<DownloadButton
						endpoint={"../../api/admin/user/all/"}
						downloadHeaders={downloadHeaders}
					/>
				}
			/>
		</Container>
	);
}
