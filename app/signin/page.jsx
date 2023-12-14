import SignInForm from "@/components/SignInForm";
import Styles from "./Signin.module.css";

import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/assets/fonts/Dreaming.woff2",
});

export default async function SignIn() {
  return (
    <div className={Styles["signin-container"]}>
      <div className={Styles["signin-box"]}>
        <h1 className={`${myFont.className} ${Styles["heading"]}`}>Sign In</h1>
        <SignInForm />
      </div>
    </div>
  );
}
