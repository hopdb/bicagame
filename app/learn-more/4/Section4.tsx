import Image from "next/image";
import styles from "./section4.module.css";

export default function Section4() {
  return (
    <div className={styles.section4}>
      <div className={styles.updateMore}>
        <div className={styles.updateMoreImage}>
          <Image
            src="/image/learnMore/hazte-premium-1.svg.svg"
            width={800}
            height={800}
            alt="card"
            className={styles.image}
          />
        </div>
        <div className={styles.updateMoreTitle}>
          <div>
            <Image
              src="/image/learnMore/leaf@2x.png.xhtml"
              width={800}
              height={800}
              alt="card"
              className={styles.aboutUsMainImg}
            />
            <h3>
              Hãy tận hưởng trò chơi và tham gia đua TOP từ{" "}
              <span>Chương trình khuyến mại.</span>
            </h3>
          </div>
          <p>Top 20 người đứng đầu Bảng xếp hạng sẽ nhận được giải thưởng.</p>
        </div>
      </div>
      <div className={styles.updateMore}>
        <div className={styles.updateMoreImage}>
          <Image
            src="/image/learnMore/img-more-1@2x.png.xhtml"
            width={800}
            height={800}
            alt="card"
            className={styles.image}
          />
        </div>
        <div className={styles.updateMoreTitle}>
          <div>
            <Image
              src="/image/learnMore/leaf@2x.png.xhtml"
              width={800}
              height={800}
              alt="card"
              className={styles.aboutUsMainImg}
            />
            <h3>Làm cách nào để trở thành khách hàng Cao cấp?</h3>
          </div>
          <p>
            Đơn giản! Nhấp vào nút "Đăng ký gói", chọn đúng nhà mạng viễn thông
            và gói đăng kí mong muốn.
          </p>
        </div>
      </div>
      <div className={styles.updateMore}>
        <div className={styles.updateMoreImage}>
          <Image
            src="/image/learnMore/img-more-2@2x.png.xhtml"
            width={800}
            height={800}
            alt="card"
            className={styles.image}
          />
        </div>
        <div className={styles.updateMoreTitle}>
          <div>
            <Image
              src="/image/learnMore/leaf@2x.png.xhtml"
              width={800}
              height={800}
              alt="card"
              className={styles.aboutUsMainImg}
            />
            <h3>Quyền lợi của Khách hàng cao cấp!</h3>
          </div>
          <p>Tham gia chơi tất cả các game hiện có.</p>
          <p>
            Tham gia đua TOP, nhận những phần thưởng hấp dẫn từ Chương trình
            khuyến mại
          </p>
        </div>
      </div>
    </div>
  );
}
