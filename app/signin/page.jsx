import Styles from "./signin.module.css";
import { Satisfy } from "next/font/google";
import localFont from "next/font/local";
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });
const myFont = localFont({
  src: "../../public/assets/fonts/Dreaming.woff2",
});
export default function SignIn() {
  return (
    <div className={Styles["signin-container"]}>
      <div className={Styles["signin-box"]}>
        <h1 className={`${myFont.className} ${Styles["heading"]}`}>Sign In</h1>
        <form>
          <div className={Styles["input-container"]}>
            <label className={myFont.className}>Email:</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className={Styles["input-container"]}>
            <label className={myFont.className}>Password:</label>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className={myFont.className}>Sign In</button>
        </form>
      </div>
    </div>
  );
}
