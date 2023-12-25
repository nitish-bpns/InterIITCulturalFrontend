import Styles from "./Food.module.css";
import BackButton from "@/components/BackButton";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

import restaurants from "@/data/restaurants";

export const metadata = {
	title: "Food",
};

export default function Food() {
	return (
		<main className={montserrat.className}>
			<BackButton href="/services" />
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Restaurants/Eateries</h1>
				<p className={Styles["description"]}>
					The following are the{" "}
					<strong>Restaurants and Eateries</strong> available in the
					IIT Kharagpur campus. For more options, check out{" "}
					<a href="https://www.zomato.com/kharagpur">Zomato</a>.
				</p>
				<ul className={Styles["restaurant-wrapper"]}>
					{restaurants.items.map((restaurant, index) => (
						<li key={index} className={Styles["restaurant"]}>
							<div className={Styles["restaurant-box"]}>
								<Image
									src={restaurant.image}
									width={1000}
									height={1000}
								/>
								<div className={Styles["restaurant-info"]}>
									<Link href={restaurant.link}>
										<h2>
											{restaurant.name + " "}
											<i className="fa-solid fa-map-location-dot"></i>
										</h2>
									</Link>
									<p>
										<strong>Location :</strong>{" "}
										{restaurant.location}
									</p>
									<p>
										<strong>Timing :</strong>{" "}
										{restaurant.timing}
									</p>
									{restaurant.additional && (
										<p>{restaurant.additional}</p>
									)}
									{restaurant.list ? (
										<ul>
											{restaurant.list.map(
												(listItem, index) => (
													<li key={index}>
														<strong>
															{listItem.name}
														</strong>{" "}
														{listItem.timing}
													</li>
												)
											)}
										</ul>
									) : null}
								</div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
