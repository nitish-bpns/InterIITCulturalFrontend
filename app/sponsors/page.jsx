"use client";
import { useState, useRef } from "react";
import Styles from "./Spons.module.css";
import { Cookie } from "next/font/google";
import sponsors from "./data";
import Image from "next/image";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Sponsors() {
	const [isVisible, setIsVisible] = useState(false);
	const [sponsData, setSponsData] = useState({});
	const videoRef = useRef(null);
	const popupBoxRef = useRef(null);

	const handlePopupToggle = () => {
		if (isVisible) {
			// Pause the video when the popup is closed
			videoRef.current.pause();
		} else {
			// Start playing the video in a loop when the popup is opened
			videoRef.current.play();
			videoRef.current.loop = true;
			// Smooth scroll to the video
			popupBoxRef.current.scrollIntoView({ behavior: "smooth" });
		}
		setIsVisible(!isVisible);
	};

	return (
		<main className={cookie.className}>
			<section className={Styles["spons-wrapper"]}>
				{isVisible && (
					<div
						className={Styles["popup-wrapper"]}
						onClick={() => setIsVisible(false)}
					>
						<div
							className={Styles["popup-box"]}
							onClick={(e) => e.stopPropagation()}
							ref={popupBoxRef}
						>
							<h1>{sponsData.name}</h1>
							<Image
								src={sponsData.image}
								alt={sponsData.name}
								width={150} // Adjust the width as needed
								height={150} // Adjust the height as needed
							/>
							{sponsData.video !== "" && ( // Check if video link is not empty
								<div
									className={Styles["popup-video-container"]}
								>
									<video
										ref={videoRef}
										src={sponsData.video}
										controls
										autoPlay={true}
										alt="video"
										className={Styles["popup-video"]}
										width={400}
										height={400}
									></video>
								</div>
							)}
						</div>
					</div>
				)}
				<h1>Our Sponsors</h1>
				<div className={Styles["spons-flex-container"]}>
					{sponsors.map((sponsor) => (
						<div
							key={sponsor.name}
							className={Styles["spons-flex-item"]}
						>
							<Image
								src={sponsor.image}
								alt={sponsor.name}
								onClick={() => {
									setIsVisible(true);
									setSponsData({ ...sponsor });
								}}
							/>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
