import Image from "next/image";
import TitleLearn from "../component/Titles/TitleLearn";
import styles from "./section2.module.css";
import LayoutItem from "../component/LayoutItem/LayoutItem";

export default function Section2() {
  return (
    <div className={styles.section2}>
      <Image
        src="/image/learnMore/arrow@2x.png.xhtml"
        width={153}
        height={60}
        alt="card"
        className={styles.image}
      />
      <div className={styles.updateTitle}>
        <div className={styles.title}>
          <TitleLearn text="Arabica Game hoạt động như thế nào?" />
        </div>
        <p>Khám phá những lợi ích độc quyền của nó</p>
        <div className={styles.decorator1}>
          <svg width="147" height="85" viewBox="0 0 147 85">
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="aegpm6m2qa"
              >
                <stop stopColor="#3F0A7C" offset="0%"></stop>
                <stop stopColor="#F04774" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              d="M7 912c9.622 24.28 21.566 37.331 35.832 39.156 21.399 2.738 25.576-19.817 23.694-28.738-1.882-8.92-15.546-4.943-18.245 12.787-2.7 17.73 8.275 49.143 41.763 57.702 22.326 5.705 42.991-.396 61.997-18.304"
              transform="matrix(-1 0 0 1 153.04 -911)"
              stroke="url(#aegpm6m2qa)"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.updateHowList}>
        <div className={styles.howItem}>
          <Image
            src="/image/learnMore/Screenshot.png"
            width={525}
            height={655}
            alt="card"
            className={styles.image}
          />
          <LayoutItem children="01" />
          <div className={styles.itemTitle}>
            <h4>Vào Đăng nhập Arabica Game</h4>
          </div>
          <div className={styles.itemContent}>
            <p>
              Nếu bạn đã có tài khoản Arabica Game, hãy đăng nhập bằng tài khoản
              và bắt đầu chơi.
            </p>
            <p>
              Nếu bạn chưa có tài khoản của Arabica Game, hãy nhấp vào nút
              <span>"Đăng ký"</span> để tạo tài khoản.
            </p>
          </div>
        </div>
        <div className={styles.howItem}>
          <Image
            src="/image/learnMore/Screenshot.png"
            width={525}
            height={655}
            alt="card"
            className={styles.image}
          />
          <LayoutItem children="02" />
          <div className={styles.itemTitle}>
            <h4>Vào Đăng nhập Arabica Game</h4>
          </div>
          <div className={styles.itemContent}>
            <p>
              Nếu bạn đã có tài khoản Arabica Game, hãy đăng nhập bằng tài khoản
              và bắt đầu chơi.
            </p>
            <p>
              Nếu bạn chưa có tài khoản của Arabica Game, hãy nhấp vào nút
              <span>"Đăng ký"</span> để tạo tài khoản.
            </p>
          </div>
        </div>
        <div className={styles.howItem}>
          <Image
            src="/image/learnMore/Screenshot.png"
            width={525}
            height={655}
            alt="card"
            className={styles.image}
          />
          <LayoutItem children="03" />
          <div className={styles.itemTitle}>
            <h4>Vào Đăng nhập Arabica Game</h4>
          </div>
          <div className={styles.itemContent}>
            <p>
              Nếu bạn đã có tài khoản Arabica Game, hãy đăng nhập bằng tài khoản
              và bắt đầu chơi.
            </p>
            <p>
              Nếu bạn chưa có tài khoản của Arabica Game, hãy nhấp vào nút
              <span>"Đăng ký"</span> để tạo tài khoản.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
