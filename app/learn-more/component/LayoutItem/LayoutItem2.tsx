import React from "react";
import styles from "./layoutItem.module.css";
export default function LayoutItem2() {
  return (
    <div className={styles.itemRank}>
      <svg width="44" height="44" viewBox="0 0 44 44">
        <defs>
          <linearGradient
            x1="86.167%"
            y1="10.29%"
            x2="31.242%"
            y2="89.968%"
            id="gru4e1lf3B"
          >
            <stop stopColor="#3F0A7C" offset="0%"></stop>
            <stop stopColor="#F04774" stopOpacity=".233" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <circle fill="url(#gru4e1lf3B)" cx="22" cy="22" r="22"></circle>
          <path
            d="m23.217 27.202 6-6.095a3.084 3.084 0 0 0 0-4.31 2.954 2.954 0 0 0-2.12-.892c-.802 0-1.556.317-2.122.893l-3.879 3.94-3.88-3.94a2.957 2.957 0 0 0-2.12-.893c-.802 0-1.555.317-2.122.893a3.051 3.051 0 0 0-.879 2.154c0 .814.312 1.579.88 2.155l6 6.095c.565.576 1.32.893 2.121.893.801 0 1.556-.317 2.121-.893zm-3.182-1.077-6-6.095c-.567-.578-.567-1.577 0-2.155a1.485 1.485 0 0 1 2.121 0l4.94 5.018 4.94-5.018c.283-.288.66-.446 1.06-.446.401 0 .778.158 1.061.446a1.537 1.537 0 0 1 .002 2.155l-6 6.095a1.484 1.484 0 0 1-2.124 0z"
            fill="#FFF"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    </div>
  );
}
