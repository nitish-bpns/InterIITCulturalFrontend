import Styles from "./Spons.module.css";
import { Cookie } from "next/font/google";
import spons from "@/public/assets/images/profile.png";

import Image from "next/image";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Sponsors",
};

const Spons = () => {
	const sponsors = [
		{
			name: "Sponsor 1",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 2",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 3",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 4",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 5",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 6",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 7",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 8",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 9",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 10",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 11",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 12",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 13",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 14",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 15",
			image: spons,
			link: "https://www.google.com",
		},
		{
			name: "Sponsor 16",
			image: spons,
			link: "https://www.google.com",
		},
	];

	return (
		<section className={cookie.className}>
			<div className={Styles["spons-wrapper"]}>
				<h1>Our Sponsors</h1>
				<div className={Styles["spons-grid"]}>
					{sponsors.map((sponsor) => (
						<a
							key={sponsor.name}
							href={sponsor.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={sponsor.image} alt={sponsor.name} />
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Spons;
