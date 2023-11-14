import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import Styles from "./Navbar.module.css";
import logoInterIIT from "../public/assets/images/logoblack.png";
import logoIITKGP from "../public/assets/images/IIT_KGPLogo.png";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });

export default function Navbar() {
  return (
    <nav className={`${Styles["navbar"]} ${myFont.className}`}>
      <div className={Styles["navbar-logos"]}>
        <Link href="/">
          <Image src={logoIITKGP} alt="Logo" />
          <Image src={logoInterIIT} alt="Logo" />
        </Link>
      </div>
      <div className={Styles["navbar-nav"]}>
        <div>
          <Link href="/events">Events</Link>
        </div>
        <div>
          <Link href="/campus-map">Campus Map</Link>
        </div>
        <div>
          <Link href="/leaderboard">Leaderboard</Link>
        </div>
        <div>
          <Link href="/schedule">Schedule</Link>
        </div>
        <div>
          <Link href="/signin">Sign In</Link>
        </div>
        {/* <div>
          <Link href="/faqs">FAQs</Link>
        </div>
        <div>
          <Link href="/team">Team</Link>
        </div>
        <div>
          <Link href="/services">Services</Link>
        </div>
        <div>
          <a href="#">Sponsors</a>
        </div> */}
      </div>
    </nav>
  );
}
