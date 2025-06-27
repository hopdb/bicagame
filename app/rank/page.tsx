import styles from "./rank.module.css";
export default function index() {
  return (
    <div className={styles.rank}>
      <p className={styles.titles}>Bảng xếp hạng</p>
      <p className={styles.description}>
        Và trò chơi được chọn cho event này là...
      </p>
      <div className={styles.content}>
        <p className={styles.titleCompetition}>
          Hiện tại, chương trình khuyến mại đã kết thúc, vui lòng đợi kỳ tiếp
          theo. Trân trọng cảm ơn!
        </p>
      </div>
    </div>
  );
}
