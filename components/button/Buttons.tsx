import { Button } from "antd";
import styles from "./buttons.module.css";
export default function Buttons({ title = "", background = "", onClick }) {
  return (
    <Button
      onClick={onClick}
      className={`${styles.btn} 
        ${background === "orange" && styles.orange}
        ${background === "yellow" && styles.yellow} `}
    >
      {title}
    </Button>
  );
}
