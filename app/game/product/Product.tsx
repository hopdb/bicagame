import Cards from "@/components/Cards/Cards";
import styles from "./product.module.css";

export default function Product() {
  return (
    <div className={styles.product}>
      {Array.from({ length: 10 }).map((_, index) => {
        return <Cards key={index} />;
      })}
    </div>
  );
}
