import React from "react";
import LoanCalc from "@components/LoanCalc";

export default function Home() {
  return (
    <div>
      <main>
        <LoanCalc />
      </main>
      <footer>
        Made with 💪 by&nbsp;
        <a href="https://www.jhordyess.com" target="_blank">
          Jhordyess
        </a>
        <br />
        <a
          href="https://github.com/jhordyess/simple-loan-calculator"
          target="_blank"
        >
          👉 View on GitHub
        </a>
      </footer>
    </div>
  );
}
