"use client";
import Cards from "@/components/Cards/Cards";
import Titles from "@/components/Titles/Titles";
import Link from "next/link";
import Slider from "react-slick";
import styles from "../home.module.css";

export default function ListGame({ title, length }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    draggable: true,
    swipe: true,
    touchMove: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          draggable: true,
          swipe: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
          draggable: true,
          swipe: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          draggable: true,
          swipe: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    <div className={`container ${styles.newGame}`}>
      <div className={styles.heading}>
        <Titles text={title ?? ""} />
        {length > 6 && (
          <Link href={""} className={styles.readMore}>
            Xem thêm
          </Link>
        )}
      </div>
      <div className={styles.slider}>
        <Slider {...settings}>
          {Array.from({ length: length }).map((_, index) => (
            <div key={index} className={styles.slideItem}>
              <Cards />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
