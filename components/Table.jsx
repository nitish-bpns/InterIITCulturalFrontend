import PageStyles from "./Table.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });

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
				<div className={PageStyles["tr"]} key={idx}>
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
