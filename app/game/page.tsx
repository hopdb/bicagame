import styles from "./game.module.css";
import Product from "./product/Product";

export default function index() {
  return (
    <div className={styles.game}>
      <h1 className={styles.gameSlide}>Trò chơi kỹ năng</h1>
      <Product />
    </div>
  );
}
