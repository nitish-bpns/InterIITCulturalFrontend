import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import Styles from "./Navbar.module.css";
// import logoInterIIT from "../public/assets/images/logoblack.png";
// import logoIITKGP from "../public/assets/images/IIT_KGPLogo.png";
import ILU from "../public/assets/images/ILU.png";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });

export default function Navbar() {
  return (
    <nav className={`${Styles["navbar"]} ${myFont.className}`}>
      <div className={Styles["navbar-logos"]}>
        <Link href="/">
          <Image src={ILU} alt="Logo" />
          {/* <Image src={logoIITKGP} alt="Logo" />
          <Image src={logoInterIIT} alt="Logo" /> */}
        </Link>
      </div>
      <div className={Styles["navbar-nav"]}>
        <Link href="/events">Events</Link>
        <Link href="/campus-map">Campus Map</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/signin">Sign In</Link>
        {/* <Link href="/faqs">FAQs</Link>
        <Link href="/team">Team</Link>
        <Link href="/services">Services</Link>
        <Link href="/sponsors">Sponsors</Link> */}
      </div>
    </nav>
  );
}
