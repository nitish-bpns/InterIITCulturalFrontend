import Styles from "./events.module.css";
import { Satisfy } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import left_frame from "../../public/assets/images/left_frame.png";
import right_frame from "../../public/assets/images/right_frame.png";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export default function Events() {
  return (
    <main className={satisfy.className}>
      <section className={Styles["main"]}>
        {/* <h1 className={Styles["heading"]}>Events</h1> */}
        <div className={Styles["frame"]}>
            <div className={Styles["left_frame"]}>
              <Image className={Styles["left_image"]}
                src={left_frame}
                alt="left frame"
                width={647}
                height={1000}
              />
              <Link href="/" className={Styles["culinary"]}>Culinary</Link>
              <Link href="/" className={Styles["dance"]}>Dance</Link>
              <Link href="/" className={Styles["dramatics"]}>Dramatics</Link>
              <Link href="/" className={Styles["fashion"]}>Fashion</Link>
              <Link href="/" className={Styles["filmmaking"]}>Filmmaking</Link>
              <Link href="/" className={Styles["digital_arts"]}>Digital Arts</Link>
            </div>
            <div className={Styles["right_frame"]}>
            <Image className={Styles["right_image"]}
                src={right_frame}
                alt="right frame"
                width={647}
                height={1000}
              />
              <Link href="/" className={Styles["fine_arts"]}>Fine Arts</Link>
              <Link href="/" className={Styles["literary_arts"]}>Literary Arts</Link>
              <Link href="/" className={Styles["music"]}>Music</Link>
              <Link href="/" className={Styles["speaking_arts"]}>Speaking Arts</Link>
              <Link href="/" className={Styles["quiz"]}>Quiz</Link>
            </div>
        </div>
      </section>
    </main>
  );
}
