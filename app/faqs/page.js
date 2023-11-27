"use client";

import Styles from "./FAQs.module.css";
import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

const FAQs = () => {
	const [expandedQuestion, setExpandedQuestion] = useState(null);

	const faqs = [
		{
			question: "What is Inter IIT Cultural Meet?",
			answer: "Inter IIT Cultural Meet is an annual cultural competition between all the IITs. It is a 4 day event where students from all the IITs compete in various cultural events.",
		},
		{
			question: "When does Inter IIT Cultural Meet happening?",
			answer: "Inter IIT Cultural Meet 6.0 will be held from 26th to 29th December 2023.",
		},
		{
			question: "Where is Inter IIT Cultural Meet happening?",
			answer: "Inter IIT Cultural Meet 6.0 will be held at IIT Kharagpur.",
		},
		{
			question: "Who can participate in Inter IIT Cultural Meet?",
			answer: "Only students from IITs can participate in Inter IIT Cultural Meet.",
		},
		{
			question: "How can I participate in Inter IIT Cultural Meet?",
			answer: "You can participate in Inter IIT Cultural Meet by getting selected in the auditions conducted by your respective IITs.",
		},
	];

	const toggleQuestion = (index) => {
		setExpandedQuestion((prev) => (prev === index ? null : index));
	};

	return (
		<section className={`${Styles["faq-section"]} ${montserrat.className}`}>
			<h1 className={Styles["faq-heading"]}>FAQs</h1>
			<ul className={Styles["faq-wrapper"]}>
				{faqs.map((faq, index) => (
					<li
						key={index}
						className={Styles["ques-wrapper"]}
						onClick={() => toggleQuestion(index)}
					>
						<h2 className={Styles["ques"]}>
							<span>Q{index + 1}. </span>
							{faq.question}
						</h2>
						<p
							className={Styles["ans"]}
							style={{
								maxHeight:
									expandedQuestion === index
										? "200px"
										: "0px",
							}}
						>
							{faq.answer}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default FAQs;
