"use client";

import { useState, useEffect } from "react";
import { toast, toastDict } from "@/lib/toastify";
import { useRouter } from "next/navigation";

import { Handlee } from "next/font/google";
import Styles from "./SignInForm.module.css";

const handlee = Handlee({
	weight: "400",
	subsets: ["latin"],
});

export default function SignInForm() {
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem("interiit-cultural-token")) {
			router.push("/profile");
		}
	}, []);

	const [data, setData] = useState({
		email: "",
		phone: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/user/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const json = await res.json();
			if (res.ok) {
				toast.success(json.message, toastDict);
				localStorage.setItem("interiit-cultural-token", json.token);
				router.push("/profile");
			} else {
				toast.error(json.message, toastDict);
			}
		} catch (error) {
			toast.error("Something went wrong! Please try again.", toastDict);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={Styles["form"]}>
			<div className={Styles["input-container"]}>
				<label className={handlee.className}>Email</label>
				<input
					name="email"
					type="email"
					placeholder="Email"
					required
					value={data.email}
					onChange={handleChange}
				/>
			</div>

			<div className={Styles["input-container"]}>
				<label className={handlee.className}>
					Regsitered Phone Number
				</label>
				<input
					name="phone"
					type="text"
					placeholder="Registered Phone Number"
					required
					value={data.phone}
					onChange={handleChange}
				/>
			</div>
			<button type="submit" className={handlee.className}>
				Login
			</button>
		</form>
	);
}
