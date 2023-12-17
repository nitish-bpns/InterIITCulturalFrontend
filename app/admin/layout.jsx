"use client";

import { toast, toastDict } from "@/lib/toastify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
	const router = useRouter();

	useEffect(() => {
		if (!localStorage.getItem("interiit-cultural-token")) {
			toast.error(
				"Please sign in with admin access to continue",
				toastDict
			);
			router.push("/signin");
		}
	}, []);

	return children;
}
