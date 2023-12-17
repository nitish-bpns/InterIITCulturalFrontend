"use client";

import Image from "next/image";
import back from "@/public/assets/images/back.png";
import Styles from "./BackButton.module.css";
import Link from "next/link";

export default function BackButton({ onClick, href }) {
	if (!onClick) onClick = () => {};
	if (!href) href = "#";

	return (
		<Link href={href} onClick={onClick}>
			<Image
				alt="back button"
				src={back}
				width={50}
				height={50}
				className={Styles["back-button"]}
			/>
		</Link>
	);
}
