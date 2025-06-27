import React from "react";
import styles from "./layoutItem.module.css";

export default function LayoutItem({ children }) {
  return (
    <div className={styles.itemRank}>
      <svg width="70" height="70" viewBox="0 0 70 70">
        <defs>
          <linearGradient
            x1="86.167%"
            y1="10.29%"
            x2="31.242%"
            y2="89.968%"
            id="7ogzqq89oac"
          >
            <stop stopColor="#3F0A7C" offset="0%"></stop>
            <stop stopColor="#F04774" stopOpacity=".233" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <circle fill="url(#7ogzqq89oac)" cx="35" cy="35" r="35"></circle>
          <text
            fontFamily="AvertaPE-Black, Averta PE"
            fontSize="31"
            fontWeight="800"
            fill="#FFF"
          >
            <tspan x="19.256" y="46">
              {children}
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}
