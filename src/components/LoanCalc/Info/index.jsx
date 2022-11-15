import React from "react";
import "./style.sass";
export default function ({ amount, years, interestRate, monthlyP }) {
  return (
    <section id="info-container">
      <h3>Your Monthly Payments</h3>
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
