import React from "react";
import "./style.sass";
export default function ({ amount, years, interestRate, monthlyP }) {
  return (
    <section id="info-container">
      <table>
        <tr>
          <td colSpan={4}>Your Monthly Payments</td>
        </tr>
        <tr>
          <td colSpan={4}>Base Calculations</td>
        </tr>
        <tr>
          <td>$&nbsp;{amount}</td>
          <td>{years}</td>
          <td>{interestRate}%</td>
          <td>{monthlyP}</td>
        </tr>
        <tr>
          <td>Loan Amount</td>
          <td>Number of years</td>
          <td>Interest Rate</td>
          <td>Monthly Payments</td>
        </tr>
      </table>
      <button>Get Started</button>
      <div>
        See your options
        <br />
        <svg
          width="15"
          height="8"
          viewBox="-2.5 -5 75 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 l35,50 l35,-50"
            fill="none"
            stroke="black"
            stroke-linecap="round"
            stroke-width="12"
          />
        </svg>
      </div>
    </section>
  );
}
