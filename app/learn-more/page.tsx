import Section1 from "./1/Section1";
import Section2 from "./2/Section2";
import Section3 from "./3/Section3";
import Section4 from "./4/Section4";
import styles from "./learnMore.module.css";

export default function index() {
  return (
    <div className={styles.learnMore}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
