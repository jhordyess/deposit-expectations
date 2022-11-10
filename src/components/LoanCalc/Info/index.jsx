import React from "react";
import "./style.sass";
export default function ({ amount, years, interestRate, monthlyP }) {
  return (
    <section>
      <div>Your Monthly Payments</div>
      <div>
        <div>{amount}</div>
        <div>{years}</div>
        <div>{interestRate}</div>
        <div>{monthlyP}</div>
      </div>
      <button>Get Started</button>
    </section>
  );
}
