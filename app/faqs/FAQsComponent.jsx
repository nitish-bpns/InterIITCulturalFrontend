"use client";

import Styles from "./FAQsComponent.module.css";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import downArrow from "@/public/assets/images/down-arrow.svg";
import upArrow from "@/public/assets/images/up-arrow.svg";
import Image from "next/image";

const montserrat = Montserrat({ weight: "300", subsets: ["latin"] });

export default function FAQsComponent(props) {
	const { faqs } = props;
	const [expandedQuestion, setExpandedQuestion] = useState(null);

	const toggleQuestion = (index) => {
		setExpandedQuestion((prev) => (prev === index ? null : index));
	};

	return (
		<section className={Styles["faq-section"]}>
			<h1 className={Styles["faq-heading"]}>FAQs</h1>
			<ul className={`${Styles["faq-wrapper"]} ${montserrat.className}`}>
				{faqs.map((faq, index) => (
					<li
						key={index}
						className={Styles["ques-wrapper"]}
						onClick={() => toggleQuestion(index)}
					>
						<p className={Styles["ques"]}>
							<div>
								<span>Q{index + 1}. </span>
								{faq.question}
							</div>
							<Image
								src={
									expandedQuestion === index
										? upArrow
										: downArrow
								}
								alt="arrow"
							/>
						</p>
						<p
							className={Styles["ans"]}
							style={{
								maxHeight:
									expandedQuestion === index
										? "200px"
										: "0px",
								margin:
									expandedQuestion === index
										? "15px 0 5px 0"
										: "0",
							}}
						>
							{faq.answer}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
