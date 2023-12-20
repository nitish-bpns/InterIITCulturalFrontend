import PageStyles from "./Table.module.css";
import localFont from "next/font/local";
import { Roboto_Mono } from "next/font/google";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });
const roboto_Mono = Roboto_Mono({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export default function Table(props) {
	const { cols, rows } = props.data;

	return (
		<div className={PageStyles["table"]}>
			<div
				className={PageStyles["tr"]}
				style={{
					background: "#FCDDBB",
				}}
			>
				{cols.map((col, index) => (
					<div
						style={{
							width: col.width,
						}}
						className={PageStyles["th"] + " " + myFont.className}
						key={index}
					>
						{col.name}
					</div>
				))}
			</div>
			{rows.map((value, idx) => (
				<div
					className={PageStyles["tr"] + " " + roboto_Mono.className}
					key={idx}
				>
					{cols.map((col, index) => (
						<div
							style={{
								width: col.width,
							}}
							className={PageStyles["td"]}
							key={index}
						>
							{value[col.name]}
						</div>
					))}
				</div>
			))}
		</div>
	);
}
