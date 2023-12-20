"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import bg from "@/public/assets/images/bg-image.png";
import AdminNavbar from "@/components/admin/Navbar";

export default function LayoutProvider({ children }) {
	const pathname = usePathname();
	const isAdmin = pathname.startsWith("/admin");

	if (isAdmin) {
		return (
			<>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
					integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
					crossOrigin="anonymous"
				/>
				<AdminNavbar />
				{children}
			</>
		);
	}

	const isGenrePage = pathname.startsWith("/events/");

	useEffect(() => {
		if (isGenrePage) {
			document.body.style.backgroundImage = "none";
		} else {
			document.body.style.backgroundImage = `url(${bg.src})`;
		}
	}, [isGenrePage]);

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
