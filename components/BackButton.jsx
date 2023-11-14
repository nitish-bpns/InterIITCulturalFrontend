import Image from "next/image";
import back from "../public/assets/images/back.png";
import Styles from "./BackButton.module.css";
import Link from "next/link";

export default function BackButton({ href }) {
  return (
    <Link href={href}>
      <Image
        src={back}
        width={50}
        height={50}
        className={Styles["back-button"]}
      />
    </Link>
  );
}
