"use client";

import { useState, useEffect } from "react";
import { toast, toastDict } from "@/lib/toastify";
import { useRouter } from "next/navigation";

import localFont from "next/font/local";
import Styles from "./SignInForm.module.css";

const myFont = localFont({
	src: "../../public/assets/fonts/Dreaming.woff2",
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
				body: JSON.stringify({
					...data,
					step: "otp" in data ? 2 : 1,
				}),
			});
			const json = await res.json();
			if (res.status === 200) {
				toast.success(json.message, toastDict);
				localStorage.setItem("interiit-cultural-token", json.token);
				router.push("/profile");
			} else if (res.status === 201) {
				toast.success(json.message, toastDict);
				setData({
					...data,
					otp: "",
				});
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
				<label className={myFont.className}>Email:</label>
				<input
					name="email"
					type="email"
					placeholder="Email"
					required
					value={data.email}
					onChange={handleChange}
				/>
			</div>
			{"otp" in data && (
				<div className={Styles["input-container"]}>
					<label className={myFont.className}>OTP:</label>
					<input
						name="otp"
						type="text"
						placeholder={"OTP sent to " + data.email}
						required
						value={data.otp}
						onChange={handleChange}
					/>
				</div>
			)}
			<button type="submit" className={myFont.className}>
				{"otp" in data ? "Login" : "Send OTP"}
			</button>
		</form>
	);
}
