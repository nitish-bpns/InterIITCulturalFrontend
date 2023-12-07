"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import Styles from "./Navbar.module.css";
import ILU from "../public/assets/images/ILU.png";
import hamburger from "../public/assets/images/hamburger.png";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });

export default function Navbar() {
  const { data: session } = useSession();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className={`${Styles["navbar"]} ${myFont.className}`}>
      <div className={Styles["navbar-header"]}>
        <Link href="/">
          <Image src={ILU} alt="Logo" className={Styles["navbar-logo"]} />
        </Link>
        <Image
          src={hamburger}
          onClick={() => {
            setDropdownVisible(!dropdownVisible);
          }}
          alt="menu button"
        />
      </div>
      <div
        className={Styles["navbar-nav"]}
        style={{
          maxHeight: dropdownVisible ? "100vh" : "0px",
        }}
      >
        <Link
          href="/"
          className={Styles["only-mobile"]}
          onClick={() => {
            setDropdownVisible(false);
          }}
        >
          Home
        </Link>
        <Link
          href="/events"
          onClick={() => {
            setDropdownVisible(false);
          }}
        >
          Events
        </Link>
        <Link
          href="/campus-map"
          onClick={() => {
            setDropdownVisible(false);
          }}
        >
          Campus Map
        </Link>
        <Link
          href="/leaderboard"
          onClick={() => {
            setDropdownVisible(false);
          }}
        >
          Leaderboard
        </Link>
        <Link
          href="/schedule"
          onClick={() => {
            setDropdownVisible(false);
          }}
        >
          Schedule
        </Link>
        <Link
          href="/signin"
          onClick={() => {
            setDropdownVisible(false);
          }}
        >
          {session ? "Profile" : "Sign In"}
        </Link>
      </div>
    </nav>
  );
}
