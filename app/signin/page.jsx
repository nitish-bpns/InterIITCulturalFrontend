import SignInForm from "./SignInForm";
import Styles from "./Signin.module.css";

import localFont from "next/font/local";

const myFont = localFont({
	src: "../../public/assets/fonts/Dreaming.woff2",
});

export const metadata = {
	title: "Sign In",
};

export default async function SignIn() {
	return (
		<div className={Styles["signin-container"]}>
			<div className={Styles["signin-box"]}>
				<h1 className={`${myFont.className} ${Styles["heading"]}`}>
					Sign In
				</h1>
				<SignInForm />
			</div>
		</div>
	);
}
