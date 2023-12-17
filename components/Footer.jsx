import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import Styles from "./Footer.module.css";
import ILU from "@/public/assets/images/logowhite.png";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });

export default function Footer() {
	return (
		<nav className={`${Styles["footer"]} ${myFont.className}`}>
			<Link href="/">
				<Image className={Styles["footer-logo"]} src={ILU} alt="Logo" />
			</Link>
			<div className={Styles["footer-nav"]}>
				<Link href="/faqs" className={Styles["nav-link"]}>
					FAQs
				</Link>
				<Link href="/team" className={Styles["nav-link"]}>
					Team
				</Link>
				<Link href="/services" className={Styles["nav-link"]}>
					Services
				</Link>
			</div>
			<div className={Styles["footer-socials"]}>
				<a target="_blank" href="https://www.facebook.com/InterIITCult">
					<i className="fab fa-facebook-square"></i>
				</a>
				<a
					target="_blank"
					href="https://www.instagram.com/interiit_culturals/"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/company/inter-iit-cultural-meet1/"
				>
					<i className="fab fa-linkedin"></i>
				</a>
				<a
					target="_blank"
					href="https://www.youtube.com/@interiitculturalmeet1758"
				>
					<i className="fab fa-youtube"></i>
				</a>
			</div>
		</nav>
	);
}
