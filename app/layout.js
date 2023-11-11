import Navbar from "../components/Navbar";
import "../styles/globals.css";

export const metadata = {
	title: "Inter IIT Cultural Meet 6.0",
	description: "Inter IIT Cultural Meet 6.0 Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
