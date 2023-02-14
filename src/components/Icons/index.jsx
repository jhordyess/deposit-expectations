import React from "react";

export const DownArrow = ({ width = 10, height = 6 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-2.5 -5 75 60"
      preserveAspectRatio="none"
    >
      <path
        d="M 0 0 L 35 50 L 70 0"
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeWidth="16"
      />
    </svg>
  );
};
export const UpArrow = ({ width = 10, height = 6 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-2.5 -5 75 60"
      preserveAspectRatio="none"
    >
      <path
        d="M 0 50 L 35 0 L 70 50"
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeWidth="16"
      />
    </svg>
  );
};
