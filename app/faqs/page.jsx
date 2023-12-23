import FAQsComponent from "./FAQsComponent";
import { Cookie } from "next/font/google";
import faqs from "@/data/faqs.json";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "FAQs",
};

const FAQs = () => {
	return (
		<main className={cookie.className}>
			<FAQsComponent faqs={faqs} />
		</main>
	);
};

export default FAQs;
