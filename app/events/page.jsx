import Styles from "./Events.module.css";
import { Cookie } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import CulinaryPlank from "../../public/assets/images/events/planks/culinary.png";
import DancePlank from "../../public/assets/images/events/planks/dance.png";
import DramaticsPlank from "../../public/assets/images/events/planks/dramatics.png";
import FashionPlank from "../../public/assets/images/events/planks/fashion.png";
import FilmmakingPlank from "../../public/assets/images/events/planks/filmmaking.png";
import DigitalArtsPlank from "../../public/assets/images/events/planks/digital_arts.png";
import FineArtsPlank from "../../public/assets/images/events/planks/fine_arts.png";
import LiteraryArtsPlank from "../../public/assets/images/events/planks/literary_arts.png";
import MusicPlank from "../../public/assets/images/events/planks/music.png";
import SpeakingArtsPlank from "../../public/assets/images/events/planks/speaking_arts.png";
import QuizPlank from "../../public/assets/images/events/planks/quiz.png";

const cookie = Cookie({ weight: "400", subsets: ["latin"] });

export default function Events() {
  return (
    <main className={cookie.className}>
      <section className={Styles["main"]}>
        <div className={Styles["events-frame"]}>
          <div className={Styles["left-frame"]}>
            <Link href="/events/culinary" className={Styles["culinary"]}>
              <Image src={CulinaryPlank} alt="Culinary" />
              <h1>Culinary</h1>
            </Link>
            <Link href="/events/dance" className={Styles["dance"]}>
              <Image src={DancePlank} alt="Dance" />
              <h1>Dance</h1>
            </Link>
            <Link href="/events/theatre-arts" className={Styles["dramatics"]}>
              <Image src={DramaticsPlank} alt="Dramatics" />
              <h1>Dramatics</h1>
            </Link>
            <Link href="/events/fashion" className={Styles["fashion"]}>
              <Image src={FashionPlank} alt="Fashion" />
              <h1>Fashion</h1>
            </Link>
            <Link href="/events/filmmaking" className={Styles["filmmaking"]}>
              <Image src={FilmmakingPlank} alt="Filmmaking" />
              <h1>Filmmaking</h1>
            </Link>
            <Link
              href="/events/digital-arts"
              className={Styles["digital-arts"]}
            >
              <Image src={DigitalArtsPlank} alt="Digital Arts" />
              <h1>Digital Arts</h1>
            </Link>
          </div>
          <div className={Styles["right-frame"]}>
            <Link href="/events/fine-arts" className={Styles["fine-arts"]}>
              <Image src={FineArtsPlank} alt="Fine Arts" />
              <h1>Fine Arts</h1>
            </Link>
            <Link href="/events/literary" className={Styles["literary-arts"]}>
              <Image src={LiteraryArtsPlank} alt="Literary Arts" />
              <h1>Literary Arts</h1>
            </Link>
            <Link href="/events/music" className={Styles["music"]}>
              <Image src={MusicPlank} alt="Music" />
              <h1>Music</h1>
            </Link>
            <Link
              href="/events/speaking-arts"
              className={Styles["speaking-arts"]}
            >
              <Image src={SpeakingArtsPlank} alt="Speaking Arts" />
              <h1>Speaking Arts</h1>
            </Link>
            <Link href="/events/quiz" className={Styles["quiz"]}>
              <Image src={QuizPlank} alt="Quiz" />
              <h1>Quiz</h1>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
