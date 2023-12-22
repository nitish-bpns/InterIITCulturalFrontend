"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { toast, toastDict } from "@/lib/toastify";
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import bg from "@/public/assets/images/bg-image.png";
import AdminNavbar from "@/components/admin/Navbar";

export default function LayoutProvider({ children }) {
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (
			pathname.startsWith("/admin") &&
			!localStorage.getItem("interiit-cultural-token")
		) {
			toast.error(
				"Please sign in with admin access to continue",
				toastDict
			);
			router.push("/signin");
		}

		const isGenrePage = pathname.startsWith("/events/");
		if (isGenrePage || pathname.startsWith("/admin")) {
			document.body.style.backgroundImage = "none";
		} else {
			document.body.style.backgroundImage = `url(${bg.src})`;
		}
	}, [pathname]);

	if (pathname.startsWith("/admin")) {
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

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
