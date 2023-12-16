import Styles from "./Food.module.css";
import BackButton from "@/components/BackButton";
import { Cookie } from "next/font/google";
import Image from "next/image";

import SmartPind from "@/public/assets/images/services/food/smart_pind.png";
import BananaLeafBistro from "@/public/assets/images/services/food/banana_leaf.jpg";
import PFC from "@/public/assets/images/services/food/pfc.jpg";
import Biloo from "@/public/assets/images/services/food/biloo.jpg";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Food() {
  const restaurants = [
    {
      name: "Smart Pind",
      location:
        "Scholars Avenue Road, near Cafe Coffee Day (CCD) and Jnan Ghosh Stadium",
      contact: "74199 66000",
      description:
        "Smart Pind offers a unique blend of traditional Indian cuisine with a modern twist. Known for its warm ambiance and delicious food, it's a favorite among students and locals alike. Don't miss their signature butter chicken and garlic naan.",
      image: SmartPind,
    },
    {
      name: "Banana Leaf Bistro",
      location: "Near Cafe Coffee Day (CCD) and Jnan Ghosh Stadium",
      contact: "99320 22622",
      description:
        "Banana Leaf Bistro is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
      image: BananaLeafBistro,
    },
    {
      name: "Panloop Food Center (PFC)",
      location: "Near Patel Hall, PAN Loop",
      contact: "99320 22622",
      description:
        "PFC is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
      image: PFC,
    },
    {
      name: "Biloo's Restaurant",
      location: "Near RK Hall",
      contact: "99320 22622",
      description:
        "Biloo's Restaurant is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
      image: Biloo,
    },
  ];

  return (
    <main className={cookie.className}>
      <BackButton href="/services" />
      <section className={Styles["main"]}>
        <h1 className={Styles["heading"]}>Restraunts/Eateries</h1>
        <p className={Styles["description"]}>
          The following are some of the most popular restaurants in the IIT
          Kharagpur campus. For more options, check out{" "}
          <a href="https://www.zomato.com/kharagpur">Zomato</a>.
        </p>
        <ul className={Styles["restaurant-wrapper"]}>
          {restaurants.map((restaurant, index) => (
            <li key={index} className={Styles["restaurant"]}>
              <Image src={restaurant.image}></Image>
              <div className={Styles["restaurant-info"]}>
                <h2 className={Styles["restaurant-name"]}>{restaurant.name}</h2>
                <p>
                  <strong>Location:</strong> {restaurant.location}
                </p>
                <p>
                  <strong>Contact:</strong> {restaurant.contact}
                </p>
                <p>
                  <strong>Description:</strong> {restaurant.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
