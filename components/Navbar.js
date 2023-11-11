"use client";

import Styles from "../styles/Navbar.module.css";
import Link from "next/link";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoInterIIT from "../public/assets/images/logoblack.png";
import logoIITKGP from "../public/assets/images/IIT_KGPLogo.png";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });

export default function Navbar() {
	return (
		<nav className={`${Styles["navbar"]} ${myFont.className}`}>
			<div className={Styles["navbar-logos"]}>
				<Link href="https://www.iitkgp.ac.in">
					<Image src={logoIITKGP} alt="Logo" />
				</Link>
				<Link href="/">
					<Image src={logoInterIIT} alt="Logo" />
				</Link>
			</div>
			<div className={Styles["navbar-nav"]}>
				<Link href="/events">Events</Link>
				<Link href="/campus map">Campus Map</Link>
				<Link href="/leaderboard">Leaderboard</Link>
				<Link href="/schedule">Schedule</Link>
				<Link href="/sign up">Sign Up</Link>
			</div>
		</nav>
	);
}
