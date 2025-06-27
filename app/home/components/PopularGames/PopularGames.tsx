"use client";
import Cards from "@/components/Cards/Cards";
import Titles from "@/components/Titles/Titles";
import Slider from "react-slick";
import styles from "../home.module.css";

export default function PopularGames() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`container ${styles.popularGames}`}>
      <Titles text="Trò chơi phổ biến" customText={styles.titles}/>
      <div className={styles.slider}>
        <Slider {...settings}>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className={styles.slideItem}>
              <Cards />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
