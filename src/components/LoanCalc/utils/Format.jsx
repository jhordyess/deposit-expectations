import React from "react";
import ReactNumberFormat from "react-number-format";

export const CurrencyFormat = ({ value }) => (
  <ReactNumberFormat
    value={value}
    displayType="text"
    thousandSeparator={true}
    prefix="$"
  />
);
export const NumberFormat = ({ value }) => (
  <ReactNumberFormat
    value={value}
    displayType="text"
    thousandSeparator={true}
  />
);
export const PercentFormat = ({ value }) => (
  <ReactNumberFormat value={value} displayType="text" suffix="%" />
);
