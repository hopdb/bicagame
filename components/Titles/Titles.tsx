"use client";
import { Typography } from "antd";
import styles from "./titles.module.css";
const { Title } = Typography;

export default function Titles({ text, customText }) {
  return <h3 className={`${styles.text} ${customText}`}>{text}</h3>;
}
