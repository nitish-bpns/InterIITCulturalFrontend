"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { Single_Day } from "next/font/google";
import Image from "next/image";
import Styles from "./Navbar.module.css";
import ILU from "@/public/assets/images/ILU.png";
import hamburger from "@/public/assets/images/hamburger.png";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });
const single_Day = Single_Day({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Navbar() {
	const pathname = usePathname();
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const [isSignedIn, setIsSignedIn] = useState(false);
	useEffect(() => {
		setIsSignedIn(localStorage.getItem("interiit-cultural-token") !== null);
	}, [pathname]);

	return (
		<nav className={`${Styles["navbar"]} ${myFont.className}`}>
			<div className={Styles["navbar-header"]}>
				<Link href="/">
					<Image
						src={ILU}
						alt="Logo"
						className={Styles["navbar-logo"]}
					/>
				</Link>
				<Image
					src={hamburger}
					onClick={() => {
						setDropdownVisible(!dropdownVisible);
					}}
					alt="menu button"
				/>
			</div>
			<div
				className={Styles["navbar-nav"]}
				style={{
					maxHeight: dropdownVisible ? "100vh" : "0px",
				}}
			>
				<Link
					href="/"
					className={Styles["only-mobile"]}
					onClick={() => {
						setDropdownVisible(false);
					}}
				>
					Home
				</Link>
				<Link
					href="/events"
					onClick={() => {
						setDropdownVisible(false);
					}}
				>
					Events
				</Link>
				<Link
					href="/campus-map"
					onClick={() => {
						setDropdownVisible(false);
					}}
				>
					Campus Map
				</Link>
				<Link
					href="/leaderboard"
					onClick={() => {
						setDropdownVisible(false);
					}}
				>
					Leaderboard
				</Link>
				<Link
					href="/schedule"
					onClick={() => {
						setDropdownVisible(false);
					}}
				>
					Schedule
				</Link>
				<a
					href="https://www.spons.interiitculturals.org"
					target="_blank"
				>
					Sponsors
				</a>
				<Link
					href={isSignedIn ? "/profile" : "/signin"}
					onClick={() => {
						setDropdownVisible(false);
					}}
				>
					{isSignedIn ? "Profile" : "Sign In"}
				</Link>
			</div>
		</nav>
	);
}
