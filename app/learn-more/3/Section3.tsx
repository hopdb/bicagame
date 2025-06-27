import Buttons from "@/components/button/Buttons";
import Titles from "@/components/Titles/Titles";
import LayoutItem2 from "../component/LayoutItem/LayoutItem2";
import TitleLearn from "../component/Titles/TitleLearn";
import styles from "./section3.module.css";

export default function Section3() {
  return (
    <>
      <div className={styles.section3}>
        <div className={styles.updateTitle}>
          <div className={styles.title}>
            <TitleLearn text="Tìm hiểu các gói đăng ký của chúng tôi!" />
          </div>
          <p>Dành cho thuê bao Vinaphone</p>
          <div className={styles.decorator1}>
            <svg width="144" height="85" viewBox="0 0 144 85">
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="3v6lv1nc2a"
                >
                  <stop stopColor="#3F0A7C" offset="0%"></stop>
                  <stop stopColor="#F04774" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                d="M1289 2021c9.622 24.28 21.566 37.331 35.832 39.156 21.399 2.738 25.576-19.817 23.694-28.738-1.882-8.92-15.546-4.943-18.245 12.787-2.7 17.73 8.275 49.143 41.763 57.702 22.326 5.705 42.991-.396 61.997-18.304"
                transform="translate(-1288 -2020)"
                stroke="url(#3v6lv1nc2a)"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div className={styles.updateHowList}>
          <div className={styles.howItem}>
            <Titles text="Gói 24 giờ" customText={styles.titleList} />
            <LayoutItem2 />
            <div className={styles.itemTitle}>
              <h4>3.000đ</h4>
            </div>
            <div className={styles.itemContent}>
              <p>Đã bao gồm VAT</p>
            </div>
          </div>
          <div className={styles.howItem}>
            <Titles text="Gói 24 giờ" customText={styles.titleList} />
            <LayoutItem2 />
            <div className={styles.itemTitle}>
              <h4>3.000đ</h4>
            </div>
            <div className={styles.itemContent}>
              <p>Đã bao gồm VAT</p>
            </div>
          </div>
          <div className={styles.howItem}>
            <Titles text="Gói 24 giờ" customText={styles.titleList} />
            <LayoutItem2 />
            <div className={styles.itemTitle}>
              <h4>3.000đ</h4>
            </div>
            <div className={styles.itemContent}>
              <p>Đã bao gồm VAT</p>
            </div>
          </div>
          {/* ---------------- */}
          <div className={styles.decorator2}>
            <svg width="72" height="188" viewBox="0 0 72 188">
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="87f85z26ra"
                >
                  <stop stopColor="#3F0A7C" offset="0%"></stop>
                  <stop stopColor="#F04774" offset="100%"></stop>
                </linearGradient>
              </defs>
              <ellipse
                transform="rotate(-21 -5762.887 1161.28)"
                cx="2.223"
                cy="2229.78"
                rx="63.5"
                ry="97.5"
                stroke="url(#87f85z26ra)"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              ></ellipse>
            </svg>
          </div>
        </div>
        <div className={styles.btn}>
          <Buttons title="Đăng ký" background="yellow" />
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.updateTitle}>
          <div className={styles.title}>
            <TitleLearn text="Tìm hiểu các gói đăng ký của chúng tôi!" />
          </div>
          <p>Dành cho thuê bao Vinaphone</p>
        </div>

        <div className={styles.updateHowList}>
          <div className={styles.howItem}>
            <Titles text="Gói 24 giờ" customText={styles.titleList} />
            <LayoutItem2 />
            <div className={styles.itemTitle}>
              <h4>3.000đ</h4>
            </div>
            <div className={styles.itemContent}>
              <p>Đã bao gồm VAT</p>
            </div>
          </div>
          <div className={styles.howItem}>
            <Titles text="Gói 24 giờ" customText={styles.titleList} />
            <LayoutItem2 />
            <div className={styles.itemTitle}>
              <h4>3.000đ</h4>
            </div>
            <div className={styles.itemContent}>
              <p>Đã bao gồm VAT</p>
            </div>
          </div>
          <div className={styles.howItem}>
            <Titles text="Gói 24 giờ" customText={styles.titleList} />
            <LayoutItem2 />
            <div className={styles.itemTitle}>
              <h4>3.000đ</h4>
            </div>
            <div className={styles.itemContent}>
              <p>Đã bao gồm VAT</p>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <Buttons title="Đăng ký" background="yellow" />
        </div>
      </div>
    </>
  );
}
