"use client";
import {
  CaretDownOutlined,
  LeftOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Col, Divider, Grid, Row } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Buttons from "../button/Buttons";
import styles from "./header.module.css";
import { useState } from "react";
import Search from "../Search/Search";

const { useBreakpoint } = Grid;

export default function Header({ onSearchClick, handleOpenRegister }) {
  const pathname = usePathname();
  const screens = useBreakpoint();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileSub, setIsMobileSub] = useState(false);

  const handleClickShowMenuMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleClickShowSubMenuMobile = (e) => {
    e.preventDefault();
    setIsMobileSub(!isMobileSub);
  };

  return (
    <header className={`container ${styles.header}`}>
      {screens.lg ? (
        <Row>
          <Col span={2}>
            <Link href={"/"}>
              <svg
                className={styles.logo}
                xmlns="http://www.w3.org/2000/svg"
                width="193"
                height="145"
                viewBox="0 0 193 145"
                fill="none"
              >
                <path
                  d="M25.5701 124.207H29.7201V144.437H25.5701V124.207Z"
                  fill="white"
                />
                <path
                  d="M170.3 124.207H191.97V128.327H174.45V131.907H191.94V136.347H174.45V140.237H192.09V144.457H170.3V124.207Z"
                  fill="white"
                />
                <path
                  d="M104.18 140.338H93.9601C92.3688 140.338 90.8427 139.706 89.7175 138.581C88.5923 137.456 87.9601 135.93 87.9601 134.338C87.9601 132.747 88.5923 131.221 89.7175 130.096C90.8427 128.97 92.3688 128.338 93.9601 128.338H108.29V124.238H93.9601C91.3325 124.321 88.8402 125.423 87.0107 127.311C85.1812 129.199 84.1582 131.724 84.1582 134.353C84.1582 136.982 85.1812 139.508 87.0107 141.396C88.8402 143.284 91.3325 144.386 93.9601 144.468H108.28V136.798H104.18V140.338Z"
                  fill="white"
                />
                <path
                  d="M51.83 140.327H41.62C40.0287 140.327 38.5026 139.694 37.3774 138.569C36.2522 137.444 35.62 135.918 35.62 134.327C35.62 132.735 36.2522 131.209 37.3774 130.084C38.5026 128.959 40.0287 128.327 41.62 128.327H55.94V124.227H41.62C38.9924 124.309 36.5001 125.411 34.6706 127.299C32.8411 129.187 31.8181 131.713 31.8181 134.342C31.8181 136.97 32.8411 139.496 34.6706 141.384C36.5001 143.272 38.9924 144.374 41.62 144.457H55.9301V140.357H51.83V140.327Z"
                  fill="white"
                />
                <path
                  d="M4.11002 136.368H17.41C17.9404 136.368 18.4491 136.579 18.8242 136.954C19.1993 137.329 19.41 137.838 19.41 138.368C19.41 138.899 19.1993 139.407 18.8242 139.783C18.4491 140.158 17.9404 140.368 17.41 140.368H0V144.468H17.39C18.5608 144.468 19.7066 144.129 20.6897 143.493C21.6728 142.857 22.4513 141.951 22.9319 140.884C23.4124 139.816 23.5744 138.632 23.3984 137.475C23.2225 136.317 22.7161 135.235 21.94 134.358C22.7148 133.48 23.2201 132.398 23.3955 131.24C23.5708 130.083 23.4087 128.899 22.9286 127.831C22.4485 126.763 21.6707 125.856 20.6884 125.219C19.706 124.582 18.5609 124.241 17.39 124.238H0.0100098V140.678H4.11002V136.368ZM4.11002 128.308H17.39C17.9204 128.308 18.4292 128.519 18.8042 128.894C19.1793 129.269 19.39 129.778 19.39 130.308C19.39 130.839 19.1793 131.347 18.8042 131.723C18.4292 132.098 17.9204 132.308 17.39 132.308H4.11002V128.308Z"
                  fill="white"
                />
                <path
                  d="M68.3 124.207L57.76 144.437H62.67L64.4 141.017H77.78L79.51 144.437H84.51L73.91 124.207H68.3ZM66.6 136.587L70.51 128.907H71.75L75.64 136.577L66.6 136.587Z"
                  fill="white"
                />
                <path
                  d="M120.17 124.207L109.63 144.437H114.51L116.24 141.017H129.62L131.35 144.437H136.35L125.75 124.207H120.17ZM118.51 136.587L122.39 128.917H123.63L127.52 136.587H118.51Z"
                  fill="white"
                />
                <path
                  d="M160.8 124.207L152.86 139.907L144.91 124.207H138.49V144.437H142.78V129.297L150.31 144.437H155.42L163.02 129.287V144.437H167.35V124.207H160.8Z"
                  fill="white"
                />
                <path
                  d="M64.1201 14.5586L88.7101 45.0786L91.3001 31.0786H123.86C123.86 31.0786 127.93 30.9286 128.15 36.1386C128.37 41.3486 122.32 42.2286 122.32 42.2286H99.8801L96.1401 59.1686H117.7C117.7 59.1686 122.54 58.6186 121.77 63.8986C121.597 65.3332 120.912 66.6572 119.841 67.6272C118.77 68.5972 117.385 69.148 115.94 69.1786H83.5901L85.4601 59.8286L72.2501 43.5486L63.3501 86.3486H113.41C117.691 86.3121 121.893 85.1926 125.624 83.0943C129.355 80.9961 132.495 77.9874 134.75 74.3486C142.75 61.6986 138.49 52.9086 136.62 50.7086C136.62 50.7086 145.62 44.8686 144.54 30.7886C143.46 16.7086 131.89 14.5686 127.93 14.5686L64.1201 14.5586Z"
                  fill="white"
                />
                <path
                  d="M116.51 99.82H45.0601L59.3901 31.91L32.4401 0H128.18C129.13 0 150.02 0.809998 156.96 18.31C159.246 23.8182 160.095 29.8172 159.427 35.7435C158.759 41.6699 156.596 47.3292 153.14 52.19C155.4 58.1803 155.749 64.7232 154.14 70.92C150.52 84.25 138.75 98.85 116.56 99.81L116.51 99.82ZM51.2401 94.82H116.41C135.87 93.95 146.17 81.24 149.32 69.62C150.736 64.0853 150.279 58.2374 148.02 52.99L147.34 51.59L148.28 50.36C151.542 46.1256 153.629 41.1058 154.332 35.807C155.034 30.5082 154.326 25.1179 152.28 20.18C146.56 5.78001 128.28 5.04001 128.08 5.04001H43.2501L64.8101 30.56L51.2401 94.82Z"
                  fill="white"
                />
              </svg>
            </Link>
          </Col>
          <Col span={16}>
            <ul className={styles.menu}>
              <li>
                <Link
                  href={"/"}
                  className={`${pathname === "/home" ? styles.active : ""}`}
                >
                  Trang Chủ
                </Link>
              </li>
              <li className={styles.hasSub}>
                <Link
                  onClick={(e) => e.preventDefault()}
                  href={"/game"}
                  className={`${pathname === "/game" ? styles.active : ""}`}
                >
                  <svg
                    width="24"
                    height="24"
                    aria-label="Gamepad"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M12,6 L12,2 M12,6 C14.4983324,6.0444148 16.0056152,6 17,6 C19,6 21,6.5 22,10 C23,13.5 23,15.5 23,18 C23,20.5 21,21 19,21 C17,21 15.9456522,17 12,17 C8.05434783,17 7,21 5,21 C3,21 1,20.5 1,18 C1,15.5 1,13.5 2,10 C3,6.5 5,6 7,6 C7.99438477,6 9.50166757,6.0444148 12,6 L12,6 L12,6 Z M18,15 C18.5522847,15 19,14.5522847 19,14 C19,13.4477153 18.5522847,13 18,13 C17.4477153,13 17,13.4477153 17,14 C17,14.5522847 17.4477153,15 18,15 Z M14,12 C14.5522847,12 15,11.5522847 15,11 C15,10.4477153 14.5522847,10 14,10 C13.4477153,10 13,10.4477153 13,11 C13,11.5522847 13.4477153,12 14,12 Z M4,12 L10,12 M7,9 L7,15"
                    ></path>
                  </svg>
                  Trò chơi
                  <CaretDownOutlined />
                </Link>
                <ul className={styles.subMenu}>
                  <Row>
                    <Col span={6}>
                      <h3>TRÒ CHƠI 12+</h3>
                    </Col>
                    <Col span={6}>
                      <li>
                        <Link href={"/game"}>Trò chơi kỹ năng</Link>
                      </li>
                      <li>
                        <Link href={"/game"}>Trò chơi tập trung</Link>
                      </li>
                    </Col>
                    <Col span={6}>
                      <li>
                        <Link href={"/game"}>Trò chơi thể thao</Link>
                      </li>
                      <li>
                        <Link href={""}>Thể thao mạo hiểm</Link>
                      </li>
                    </Col>
                    <Col span={6}>
                      <Link href={""}>Trò chơi hành động và phiêu lưu</Link>
                    </Col>
                  </Row>
                </ul>
              </li>
              <li className={styles.titleModal}>
                <Link
                  href={"/rank"}
                  className={`${pathname === "/rank" ? styles.active : ""}`}
                >
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                    <g clipPath="url(#clip0_331_23702)">
                      <path
                        d="M3.66585 11.083C2.79502 11.083 2.08252 11.7955 2.08252 12.6663V17.4163H7.36294V11.083H3.66585Z"
                        stroke="url(#paint0_linear_331_23702)"
                        strokeWidth="1.01786"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.93929 7.91699C8.06846 7.91699 7.35596 8.62949 7.35596 9.50033V17.417H12.6364V9.50033C12.6364 8.62949 11.9318 7.91699 11.053 7.91699H8.93929Z"
                        stroke="url(#paint1_linear_331_23702)"
                        strokeWidth="1.01786"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12.6357 13.458V17.4163H17.9162V15.0413C17.9162 14.1705 17.2037 13.458 16.3328 13.458H12.6357Z"
                        stroke="url(#paint2_linear_331_23702)"
                        strokeWidth="1.01786"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M10.8312 2.47839C10.8866 2.59714 11.037 2.70797 11.1637 2.7238L11.9237 2.85047C12.4066 2.92964 12.5254 3.28587 12.177 3.62629L11.5833 4.22004C11.4804 4.32295 11.4249 4.51296 11.4566 4.64754L11.6229 5.37589C11.7574 5.95381 11.4487 6.17548 10.942 5.87464L10.2295 5.45506C10.1029 5.37589 9.88911 5.37589 9.76244 5.45506L9.04994 5.87464C8.54327 6.17548 8.23452 5.95381 8.3691 5.37589L8.53536 4.64754C8.56702 4.51296 8.51161 4.31504 8.40869 4.22004L7.82285 3.63421C7.47452 3.28588 7.58535 2.93754 8.07619 2.85837L8.83619 2.73172C8.96285 2.70797 9.11327 2.59714 9.16869 2.48631L9.58827 1.64712C9.81785 1.18795 10.182 1.18797 10.4116 1.63922L10.8312 2.47839Z"
                        stroke="url(#paint3_linear_331_23702)"
                        strokeWidth="1.01786"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_331_23702"
                        x1="1294.49"
                        y1="327.75"
                        x2="-1483.31"
                        y2="388.562"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DE5753"></stop>
                        <stop offset="1" stopColor="#E7217B"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_331_23702"
                        x1="6.94643"
                        y1="13.5715"
                        x2="13.7321"
                        y2="13.9108"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E23E66"></stop>
                        <stop offset="1" stopColor="#E46C49"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_331_23702"
                        x1="9.99965"
                        y1="14.2492"
                        x2="27"
                        y2="18"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DE5257"></stop>
                        <stop offset="1" stopColor="#FFF200"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_331_23702"
                        x1="7.28613"
                        y1="3.73242"
                        x2="12.7147"
                        y2="3.73242"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E23E66"></stop>
                        <stop offset="1" stopColor="#ED9931"></stop>
                      </linearGradient>
                      <clipPath id="clip0_331_23702">
                        <rect
                          width="19"
                          height="19"
                          fill="white"
                          transform="translate(0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Bảng Xếp hạng
                </Link>
              </li>
              <li>
                <Link
                  href={"/learn-more"}
                  className={`${
                    pathname === "/learn-more" ? styles.active : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Tìm hiểu thêm
                </Link>
              </li>
            </ul>
          </Col>
          <Col span={6} className={styles.headerRight}>
            <SearchOutlined
              className={styles.icoSearch}
              onClick={onSearchClick}
            />
            <Buttons
              title="Đăng nhập"
              background="orange"
              onClick={handleOpenRegister}
            />
            <Buttons title="Đăng kí" background="orange" />
          </Col>
        </Row>
      ) : (
        <div className={styles.menuMobile}>
          <Link href={"/"}>
            <svg
              className={styles.logoMobile}
              xmlns="http://www.w3.org/2000/svg"
              width="193"
              height="145"
              viewBox="0 0 193 145"
              fill="none"
            >
              <path
                d="M25.5701 124.207H29.7201V144.437H25.5701V124.207Z"
                fill="white"
              />
              <path
                d="M170.3 124.207H191.97V128.327H174.45V131.907H191.94V136.347H174.45V140.237H192.09V144.457H170.3V124.207Z"
                fill="white"
              />
              <path
                d="M104.18 140.338H93.9601C92.3688 140.338 90.8427 139.706 89.7175 138.581C88.5923 137.456 87.9601 135.93 87.9601 134.338C87.9601 132.747 88.5923 131.221 89.7175 130.096C90.8427 128.97 92.3688 128.338 93.9601 128.338H108.29V124.238H93.9601C91.3325 124.321 88.8402 125.423 87.0107 127.311C85.1812 129.199 84.1582 131.724 84.1582 134.353C84.1582 136.982 85.1812 139.508 87.0107 141.396C88.8402 143.284 91.3325 144.386 93.9601 144.468H108.28V136.798H104.18V140.338Z"
                fill="white"
              />
              <path
                d="M51.83 140.327H41.62C40.0287 140.327 38.5026 139.694 37.3774 138.569C36.2522 137.444 35.62 135.918 35.62 134.327C35.62 132.735 36.2522 131.209 37.3774 130.084C38.5026 128.959 40.0287 128.327 41.62 128.327H55.94V124.227H41.62C38.9924 124.309 36.5001 125.411 34.6706 127.299C32.8411 129.187 31.8181 131.713 31.8181 134.342C31.8181 136.97 32.8411 139.496 34.6706 141.384C36.5001 143.272 38.9924 144.374 41.62 144.457H55.9301V140.357H51.83V140.327Z"
                fill="white"
              />
              <path
                d="M4.11002 136.368H17.41C17.9404 136.368 18.4491 136.579 18.8242 136.954C19.1993 137.329 19.41 137.838 19.41 138.368C19.41 138.899 19.1993 139.407 18.8242 139.783C18.4491 140.158 17.9404 140.368 17.41 140.368H0V144.468H17.39C18.5608 144.468 19.7066 144.129 20.6897 143.493C21.6728 142.857 22.4513 141.951 22.9319 140.884C23.4124 139.816 23.5744 138.632 23.3984 137.475C23.2225 136.317 22.7161 135.235 21.94 134.358C22.7148 133.48 23.2201 132.398 23.3955 131.24C23.5708 130.083 23.4087 128.899 22.9286 127.831C22.4485 126.763 21.6707 125.856 20.6884 125.219C19.706 124.582 18.5609 124.241 17.39 124.238H0.0100098V140.678H4.11002V136.368ZM4.11002 128.308H17.39C17.9204 128.308 18.4292 128.519 18.8042 128.894C19.1793 129.269 19.39 129.778 19.39 130.308C19.39 130.839 19.1793 131.347 18.8042 131.723C18.4292 132.098 17.9204 132.308 17.39 132.308H4.11002V128.308Z"
                fill="white"
              />
              <path
                d="M68.3 124.207L57.76 144.437H62.67L64.4 141.017H77.78L79.51 144.437H84.51L73.91 124.207H68.3ZM66.6 136.587L70.51 128.907H71.75L75.64 136.577L66.6 136.587Z"
                fill="white"
              />
              <path
                d="M120.17 124.207L109.63 144.437H114.51L116.24 141.017H129.62L131.35 144.437H136.35L125.75 124.207H120.17ZM118.51 136.587L122.39 128.917H123.63L127.52 136.587H118.51Z"
                fill="white"
              />
              <path
                d="M160.8 124.207L152.86 139.907L144.91 124.207H138.49V144.437H142.78V129.297L150.31 144.437H155.42L163.02 129.287V144.437H167.35V124.207H160.8Z"
                fill="white"
              />
              <path
                d="M64.1201 14.5586L88.7101 45.0786L91.3001 31.0786H123.86C123.86 31.0786 127.93 30.9286 128.15 36.1386C128.37 41.3486 122.32 42.2286 122.32 42.2286H99.8801L96.1401 59.1686H117.7C117.7 59.1686 122.54 58.6186 121.77 63.8986C121.597 65.3332 120.912 66.6572 119.841 67.6272C118.77 68.5972 117.385 69.148 115.94 69.1786H83.5901L85.4601 59.8286L72.2501 43.5486L63.3501 86.3486H113.41C117.691 86.3121 121.893 85.1926 125.624 83.0943C129.355 80.9961 132.495 77.9874 134.75 74.3486C142.75 61.6986 138.49 52.9086 136.62 50.7086C136.62 50.7086 145.62 44.8686 144.54 30.7886C143.46 16.7086 131.89 14.5686 127.93 14.5686L64.1201 14.5586Z"
                fill="white"
              />
              <path
                d="M116.51 99.82H45.0601L59.3901 31.91L32.4401 0H128.18C129.13 0 150.02 0.809998 156.96 18.31C159.246 23.8182 160.095 29.8172 159.427 35.7435C158.759 41.6699 156.596 47.3292 153.14 52.19C155.4 58.1803 155.749 64.7232 154.14 70.92C150.52 84.25 138.75 98.85 116.56 99.81L116.51 99.82ZM51.2401 94.82H116.41C135.87 93.95 146.17 81.24 149.32 69.62C150.736 64.0853 150.279 58.2374 148.02 52.99L147.34 51.59L148.28 50.36C151.542 46.1256 153.629 41.1058 154.332 35.807C155.034 30.5082 154.326 25.1179 152.28 20.18C146.56 5.78001 128.28 5.04001 128.08 5.04001H43.2501L64.8101 30.56L51.2401 94.82Z"
                fill="white"
              />
            </svg>
          </Link>
          <div className={styles.headerRightMobile}>
            <SearchOutlined className={styles.icoSearch} />
            <MenuOutlined onClick={handleClickShowMenuMobile} />
          </div>
          <div className={`${styles.subMenuMobile} ${isMobile && styles.show}`}>
            <div className={styles.actionMobile}>
              <Buttons title="Đăng nhập" background="orange" />
              <Buttons title="Đăng kí" background="orange" />
            </div>
            <ul className={styles.listMenuMobile}>
              <li>
                <Link
                  href={"/"}
                  className={`${pathname === "/home" ? styles.active : ""}`}
                >
                  Trang Chủ
                </Link>
              </li>
              <li className={styles.hasSubMobile}>
                <Link
                  onClick={(e) => handleClickShowSubMenuMobile(e)}
                  href={"/game"}
                  className={`${pathname === "/game" ? styles.active : ""}`}
                >
                  <svg
                    width="24"
                    height="24"
                    aria-label="Gamepad"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M12,6 L12,2 M12,6 C14.4983324,6.0444148 16.0056152,6 17,6 C19,6 21,6.5 22,10 C23,13.5 23,15.5 23,18 C23,20.5 21,21 19,21 C17,21 15.9456522,17 12,17 C8.05434783,17 7,21 5,21 C3,21 1,20.5 1,18 C1,15.5 1,13.5 2,10 C3,6.5 5,6 7,6 C7.99438477,6 9.50166757,6.0444148 12,6 L12,6 L12,6 Z M18,15 C18.5522847,15 19,14.5522847 19,14 C19,13.4477153 18.5522847,13 18,13 C17.4477153,13 17,13.4477153 17,14 C17,14.5522847 17.4477153,15 18,15 Z M14,12 C14.5522847,12 15,11.5522847 15,11 C15,10.4477153 14.5522847,10 14,10 C13.4477153,10 13,10.4477153 13,11 C13,11.5522847 13.4477153,12 14,12 Z M4,12 L10,12 M7,9 L7,15"
                    ></path>
                  </svg>
                  Trò chơi
                  <CaretDownOutlined />
                </Link>
                <ul
                  className={`${styles.listSubMenuMobile} ${
                    isMobileSub && styles.showSub
                  }`}
                >
                  <div className={styles.arrowMobile}>
                    <LeftOutlined
                      onClick={(e) => handleClickShowSubMenuMobile(e)}
                    />
                    <span>Trò chơi</span>
                  </div>
                  <li>
                    <Link href={"/game"}>Trò chơi kỹ năng</Link>
                  </li>
                  <li>
                    <Link href={"/game"}>Trò chơi thể thao</Link>
                  </li>
                  <li>
                    <Link href={""}>Trò chơi hành động và phiêu lưu</Link>
                  </li>
                  <li>
                    <Link href={"/game"}>Trò chơi tập trung</Link>
                  </li>
                  <li>
                    <Link href={""}>Thể thao mạo hiểm</Link>
                  </li>
                </ul>
              </li>
              <li className={`${styles.titleModal} ${styles.titleModalMobile}`}>
                <Link
                  href={"/rank"}
                  className={`${pathname === "/rank" ? styles.active : ""}`}
                >
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                    <g clipPath="url(#clip0_331_23702)">
                      <path
                        d="M3.66585 11.083C2.79502 11.083 2.08252 11.7955 2.08252 12.6663V17.4163H7.36294V11.083H3.66585Z"
                        stroke="url(#paint0_linear_331_23702)"
                        strokeWidth="1.01786"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.93929 7.91699C8.06846 7.91699 7.35596 8.62949 7.35596 9.50033V17.417H12.6364V9.50033C12.6364 8.62949 11.9318 7.91699 11.053 7.91699H8.93929Z"
                        stroke="url(#paint1_linear_331_23702)"
                        strokeWidth="1.01786"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12.6357 13.458V17.4163H17.9162V15.0413C17.9162 14.1705 17.2037 13.458 16.3328 13.458H12.6357Z"
                        stroke="url(#paint2_linear_331_23702)"
                        strokeWidth="1.01786"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M10.8312 2.47839C10.8866 2.59714 11.037 2.70797 11.1637 2.7238L11.9237 2.85047C12.4066 2.92964 12.5254 3.28587 12.177 3.62629L11.5833 4.22004C11.4804 4.32295 11.4249 4.51296 11.4566 4.64754L11.6229 5.37589C11.7574 5.95381 11.4487 6.17548 10.942 5.87464L10.2295 5.45506C10.1029 5.37589 9.88911 5.37589 9.76244 5.45506L9.04994 5.87464C8.54327 6.17548 8.23452 5.95381 8.3691 5.37589L8.53536 4.64754C8.56702 4.51296 8.51161 4.31504 8.40869 4.22004L7.82285 3.63421C7.47452 3.28588 7.58535 2.93754 8.07619 2.85837L8.83619 2.73172C8.96285 2.70797 9.11327 2.59714 9.16869 2.48631L9.58827 1.64712C9.81785 1.18795 10.182 1.18797 10.4116 1.63922L10.8312 2.47839Z"
                        stroke="url(#paint3_linear_331_23702)"
                        strokeWidth="1.01786"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_331_23702"
                        x1="1294.49"
                        y1="327.75"
                        x2="-1483.31"
                        y2="388.562"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DE5753"></stop>
                        <stop offset="1" stopColor="#E7217B"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_331_23702"
                        x1="6.94643"
                        y1="13.5715"
                        x2="13.7321"
                        y2="13.9108"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E23E66"></stop>
                        <stop offset="1" stopColor="#E46C49"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_331_23702"
                        x1="9.99965"
                        y1="14.2492"
                        x2="27"
                        y2="18"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DE5257"></stop>
                        <stop offset="1" stopColor="#FFF200"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_331_23702"
                        x1="7.28613"
                        y1="3.73242"
                        x2="12.7147"
                        y2="3.73242"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E23E66"></stop>
                        <stop offset="1" stopColor="#ED9931"></stop>
                      </linearGradient>
                      <clipPath id="clip0_331_23702">
                        <rect
                          width="19"
                          height="19"
                          fill="white"
                          transform="translate(0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Bảng Xếp hạng
                </Link>
              </li>
              <li>
                <Link
                  href={"/learn-more"}
                  className={`${
                    pathname === "/learn-more" ? styles.active : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Tìm hiểu thêm
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
