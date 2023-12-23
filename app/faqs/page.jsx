import FAQsComponent from "./FAQsComponent";
import { Handlee } from "next/font/google";
import faqs from "@/data/faqs.json";

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "FAQs",
};

const FAQs = () => {
	return (
		<main className={handlee.className}>
			<FAQsComponent faqs={faqs} />
		</main>
	);
};

export default FAQs;
