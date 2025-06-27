import Titles from "@/components/Titles/Titles";
import Image from "next/image";
import styles from "./titleLearn.module.css";

export default function TitleLearn({ text }) {
  return (
    <div className={styles.wapTitle}>
      <Image
        src="/image/learnMore/leaf@2x.png.xhtml"
        width={800}
        height={800}
        alt="card"
        className={styles.aboutUsMainImg}
      />
      <Titles text={text} customText={styles.title} />
    </div>
  );
}
