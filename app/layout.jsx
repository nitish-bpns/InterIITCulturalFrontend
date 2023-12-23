import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LayoutProvider from "./LayoutProvider";
import "@/styles/globals.css";

export const metadata = {
	title: {
		template: "%s | Inter IIT Cultural Meet 6.0",
		default: "Inter IIT Cultural Meet 6.0",
	},
	description: "The official website for Inter IIT Cultural Meet 6.0",
	keywords: [
		"Inter",
		"IIT",
		"Cultural",
		"Meet",
		"6",
		"6.0",
		"Kharagpur",
		"KGP",
		"competition",
		"championship",
	],
	metadataBase: new URL("https://interiitculturals.org"),
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Google tag (gtag.js) */}
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-ZGCDQ96CQT" />
				<Script id="google-analytics">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
				
						gtag('config', 'G-ZGCDQ96CQT');
					`}
				</Script>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
					integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
					integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</head>
			<body>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
				<LayoutProvider>{children}</LayoutProvider>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
					integrity="sha512-A7AYk1fGKX6S2SsHywmPkrnzTZHrgiVT7GcQkLGDe2ev0aWb8zejytzS8wjo7PGEXKqJOrjQ4oORtnimIRZBtw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				></script>
				<script>AOS.init();</script>
			</body>
		</html>
	);
}
