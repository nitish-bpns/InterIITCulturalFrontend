"use client";

import Image from "next/image";
import Styles from "./HomeCarousel.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "@/public/assets/images/home/carousel/campus_1.jpg";
import img2 from "@/public/assets/images/home/carousel/campus_2.jpg";
import img3 from "@/public/assets/images/home/carousel/campus_3.jpg";
import img4 from "@/public/assets/images/home/carousel/campus_4.jpg";
import img5 from "@/public/assets/images/home/carousel/campus_5.jpg";
import img6 from "@/public/assets/images/home/carousel/campus_6.jpg";
import img7 from "@/public/assets/images/home/carousel/campus_7.jpg";

export default function HomeCarousel() {
	const carousel = [img7, img1, img2, img3, img4, img5, img6];

	return (
		<Carousel
			showArrows={true}
			swipeable={true}
			autoPlay={true}
			infiniteLoop={true}
			showStatus={false}
			showThumbs={false}
		>
			{carousel.map((item, index) => {
				return (
					<div className={Styles["carousel-img"]} key={index}>
						<Image src={item} alt="campus-img" />
					</div>
				);
			})}
		</Carousel>
	);
}
