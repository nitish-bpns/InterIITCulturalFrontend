import Styles from "./Food.module.css";
import BackButton from "@/components/BackButton";
import { Cookie } from "next/font/google";
import Image from "next/image";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

import restaurants from "./restaurants";

export default function Food() {
	return (
		<main className={cookie.className}>
			<BackButton href="/services" />
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Restraunts/Eateries</h1>
				<p className={Styles["description"]}>
					The following are some of the most popular restaurants in
					the IIT Kharagpur campus. For more options, check out{" "}
					<a href="https://www.zomato.com/kharagpur">Zomato</a>.
				</p>
				<ul className={Styles["restaurant-wrapper"]}>
					{restaurants.map((restaurant, index) => (
						<li key={index} className={Styles["restaurant"]}>
							<Image src={restaurant.image}></Image>
							<div className={Styles["restaurant-info"]}>
								<h2 className={Styles["restaurant-name"]}>
									{restaurant.name}
								</h2>
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
								{restaurant.description && (
									<p>
										<strong>Description :</strong>{" "}
										{restaurant.description}
									</p>
								)}
							</div>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
