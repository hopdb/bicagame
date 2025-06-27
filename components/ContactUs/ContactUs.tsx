import Image from "next/image";
import styles from "./contactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <p>Gọi ngay 1800888811 (miễn phí)</p>
      <Image
        src="/image/contact.png.xhtml"
        width={100}
        height={100}
        alt="Contact-Us"
        className={styles.image}
      />
    </div>
  );
}
