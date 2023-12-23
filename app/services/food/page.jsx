import Styles from "./Food.module.css";
import BackButton from "@/components/BackButton";
import { Cookie } from "next/font/google";
import Image from "next/image";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

import restaurants from "@/data/restaurants";

export const metadata = {
	title: "Food",
};

export default function Food() {
	return (
		<main className={cookie.className}>
			<BackButton href="/services" />
			<section className={Styles["main"]}>
				<h1 className={Styles["heading"]}>Restraunts/Eateries</h1>
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
								</div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
