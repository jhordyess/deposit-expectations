import React from "react";
import "./style.sass";
import { DownArrow } from "@components/Icons";
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
        <DownArrow />
      </div>
    </section>
  );
}
