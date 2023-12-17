"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, toastDict } from "@/lib/toastify";
import data from "@/data/institutes.json";

export default function RegisterUser() {
	const router = useRouter();

	const [formData, setFormData] = useState({
		// pid: "KGP-0001",
		// name: "Saharsh Agrawal",
		// email: "saharshagrawalindia@gmail.com",
		// phone: "1234567890",
		// gender: "M",
		// instituteID: "IITKGP",
		// hall: "RP",
		// mess: "RK",
		pid: "",
		name: "",
		email: "",
		phone: "",
		gender: "",
		instituteID: "",
		hall: "",
		mess: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("../../api/user/register", {
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
		const { name, value } = e.target;
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	return (
		<div>
			<h1>Register User</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="pid">PID </label>
				<input
					type="text"
					id="pid"
					name="pid"
					value={formData.pid}
					onChange={handleChange}
					required
				/>
				<br />
				<label htmlFor="name">Name </label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<br />
				<label htmlFor="email">Email </label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<br />
				<label htmlFor="phone">Phone Number</label>
				<input
					type="text"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					required
				/>
				<br />
				<label htmlFor="gender">Gender </label>
				<select
					id="gender"
					name="gender"
					value={formData.gender}
					onChange={handleChange}
					required
				>
					<option value="">Select</option>
					<option value="M">Male</option>
					<option value="F">Female</option>
				</select>
				<br />
				<label htmlFor="instituteID">Institute </label>
				<select
					id="instituteID"
					name="institudeID"
					value={formData.instituteID}
					onChange={handleChange}
					required
				>
					<option value="">Select IIT</option>
					{Object.keys(data).map((ID, index) => {
						return (
							<option value={ID} key={index}>
								{data[ID]}
							</option>
						);
					})}
				</select>
				<br />
				<label htmlFor="hall">Hall </label>
				<input
					type="text"
					id="hall"
					name="hall"
					value={formData.hall}
					onChange={handleChange}
				/>
				<br />
				<label htmlFor="mess">Mess </label>
				<input
					type="text"
					id="mess"
					name="mess"
					value={formData.mess}
					onChange={handleChange}
				/>
				<br />
				<button>Register</button>
			</form>
		</div>
	);
}
