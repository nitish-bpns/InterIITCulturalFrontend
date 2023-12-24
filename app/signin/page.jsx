import SignInForm from "./SignInForm";
import Styles from "./Signin.module.css";

import { Handlee } from "next/font/google";

const handlee = Handlee({
	weight: "400",
	subsets: ["latin"],
});

export const metadata = {
	title: "Sign In",
};

export default async function SignIn() {
	return (
		<div className={Styles["signin-container"]}>
			<div className={Styles["signin-box"]}>
				<h1 className={`${handlee.className} ${Styles["heading"]}`}>
					Sign In
				</h1>
				<SignInForm />
			</div>
		</div>
	);
}
