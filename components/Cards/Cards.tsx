import Image from "next/image";
import styles from "./cards.module.css";

export default function Cards() {
  return (
    <div className={styles.cards}>
      <span className={styles.badge}>
        12+ 1
        <Image
          src="/image/top-game.png.png"
          width={500}
          height={500}
          alt="card"
          className={styles.topGame}
        />
      </span>
      <Image
        src="/image/card.png"
        width={500}
        height={500}
        alt="card"
        className={styles.image}
      />
      <div>
        <h2 className={styles.gameTitle}>Ninja Run</h2>
        <div className={styles.description}>
          <span className={styles.amountMobile}>177 Lượt chơi</span>
        </div>
      </div>
    </div>
  );
}
