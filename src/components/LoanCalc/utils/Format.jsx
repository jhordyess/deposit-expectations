import React from "react";

export const CurrencyFormat = ({ value, sign = true }) => (
  <span>
    {new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      signDisplay: sign ? "auto" : "never",
    }).format(Number(value))}
  </span>
);
export const PercentFormat = ({ value }) => (
  <span>
    {new Intl.NumberFormat("en-US", {
      style: "percent",
    }).format(Number(value) / 100)}
  </span>
);
