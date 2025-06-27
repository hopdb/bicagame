"use client";
import Slider from "react-slick";
import styles from "./swipers.module.css";
import Image from "next/image";

export default function Swipers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.swipers}>
      <Slider {...settings}>
        <div className={styles.items}>
          <Image
            src="/image/swipers/21022025110523748La5PvH7VaPG0ftiR.png"
            width={900}
            height={900}
            alt="card"
            className={styles.image}
          />
        </div>
        <div className={styles.items}>
          <Image
            src="/image/swipers/210220251106464518I3MhGH3ZephWJta.png"
            width={900}
            height={900}
            alt="card"
            className={styles.image}
          />
        </div>
        <div className={styles.items}>
          <Image
            src="/image/swipers/21022025111030158Fkvek2BKbNw9GHjr.png"
            width={900}
            height={900}
            alt="card"
            className={styles.image}
          />
        </div>
      </Slider>
    </div>
  );
}
