import SmartPind from "@/public/assets/images/services/food/smart_pind.png";
import BananaLeafBistro from "@/public/assets/images/services/food/banana_leaf.jpg";
import PFC from "@/public/assets/images/services/food/pfc.jpg";
import Biloo from "@/public/assets/images/services/food/biloo.jpg";
import TFC from "@/public/assets/images/services/food/tfc.jpg";
import Sahara from "@/public/assets/images/services/food/sahara.jpg";
import Dreamland from "@/public/assets/images/services/food/dreamland.jpg";
import Heritage from "@/public/assets/images/services/food/heritage.jpg";
import Subway from "@/public/assets/images/services/food/subway.jpg";
import Vegies from "@/public/assets/images/services/food/vegies.jpg";
import Rooster from "@/public/assets/images/services/food/rooster.jpg";
import HJB from "@/public/assets/images/services/food/hjb.jpg";
import JCB from "@/public/assets/images/services/food/hjb.jpg";

const restaurants = [
	{
		name: "Technology Food Court",
		location: "Location: South of Clock Tower, beside TATA steel complex",
		timing: "9:00 AM to 10:00 PM",
		description:
			"Technology Food Court (TFC) is the largest food court in the campus. It has a wide variety of food options, including North Indian, South Indian, Chinese, and Continental. It also has a bakery and a juice shop.",
		image: TFC,
	},
	{
		name: "HJB Aastha Night Canteen",
		location: "Inside HJB Hall",
		timing: "8:00 PM to 4:00 AM",
		additional:
			"One of the co-ed canteen will remain open during the night-time.",
		description:
			"HJB Aastha Night Canteen is the largest food court in the campus. It has a wide variety of food options, including North Indian, South Indian, Chinese, and Continental. It also has a bakery and a juice shop.",
		image: HJB,
	},
	{
		name: "JCB Night Canteen",
		location: "Inside JCB Hall",
		timing: "7:00 PM to 2:00 AM",
		additional:
			"Another co-ed canteen which remain open during the night-time.",
		description:
			"JCB Night Canteen is the largest food court in the campus. It has a wide variety of food options, including North Indian, South Indian, Chinese, and Continental. It also has a bakery and a juice shop.",
		image: JCB,
	},
	{
		name: "Amigos and Sahara",
		location: "Near Staff Quarters",
		timing: "10:00 AM to 9:00 PM",
		description:
			"Amigos and Sahara is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
		image: Sahara,
	},
	{
		name: "Dreamland",
		location: "Near Staff Quarters",
		timing: "10:00 AM to 9:00 PM",
		description:
			"Dreamland is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
		image: Dreamland,
	},
	{
		name: "Heritage Complex",
		location: "IIT Avenue Road, Scholar Canvas Stadium",
		timing: "9:00 AM to 10:00 PM",
		additional: "Heritage complex consists of various food outlets:",
		list: [
			{
				name: "Heritage Restaurant:",
				timing: "9:00 AM to 9:00 PM",
			},
			{
				name: "Café Coffee Day:",
				timing: "10:00 AM to 9:00 PM",
			},
			{
				name: "Baskin Robbins:",
				timing: "10:00 AM to 11:00 PM",
			},
			{
				name: "Mio Amore:",
				timing: "9:30 AM to 10:00 PM",
			},
			{
				name: "Coffee Xpress:",
				timing: "10:00 AM to 9:30 PM",
			},
			{
				name: "Smart Pind:",
				timing: "9:00 AM to 10:00 PM",
			},
			{
				name: "Banana Leaf Bistro:",
				timing: "9:00 AM to 10:00 PM",
			},
			{
				name: "Momos Mania:",
				timing: "10:00 AM to 10:00 PM",
			},
			{
				name: "Amul and Iosys:",
				timing: "10:00 AM to 10:00 PM",
			},
		],
		image: Heritage,
	},
	{
		name: "Smart Pind",
		location:
			"Scholars Avenue Road, near Cafe Coffee Day (CCD) and Jnan Ghosh Stadium",
		timing: "74199 66000",
		description:
			"Smart Pind offers a unique blend of traditional Indian cuisine with a modern twist. Known for its warm ambiance and delicious food, it's a favorite among students and locals alike. Don't miss their signature butter chicken and garlic naan.",
		image: SmartPind,
	},
	{
		name: "Banana Leaf Bistro",
		location: "Near Cafe Coffee Day (CCD) and Jnan Ghosh Stadium",
		timing: "99320 22622",
		description:
			"Banana Leaf Bistro is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
		image: BananaLeafBistro,
	},
	{
		name: "Panloop Food Center (PFC)",
		location: "Near Patel Hall, PAN Loop",
		timing: "99320 22622",
		description:
			"PFC is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
		image: PFC,
	},
	{
		name: "Biloo's Restaurant",
		location: "Near RK Hall",
		timing: "99320 22622",
		description:
			"Biloo's Restaurant is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
		image: Biloo,
	},
	{
		name: "Subway",
		location: "Nalanda Complex, Near Agricultural department",
		timing: "10:00 AM to 8:00 PM",
		description:
			"Subway is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
		image: Subway,
	},
	{
		name: "Rooster",
		location: "Nala Complex",
		timing: "10:00 AM to 9:00 PM",
		description:
			"Rooster is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
		image: Rooster,
	},
	{
		name: "Veggies",
		location: "Near Heritage Complex",
		timing: "10:00 AM to 8:00 PM",
		description:
			"Veggies is a popular restaurant among students for its delicious South Indian food. It's a great place to hang out with friends and enjoy some authentic South Indian cuisine.",
		additional: "Veggies serves only vegetarian food on campus.",
		image: Vegies,
	},
];

export default restaurants;
