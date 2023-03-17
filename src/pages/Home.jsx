import React from "react";
import LoanCalc from "@components/LoanCalc";

export default function Home() {
  return (
    <div>
      <main>
        <LoanCalc />
      </main>
      <footer>
        Made with 💪 by{" "}
        <a href="https://www.jhordyess.com" target="_blank" rel="noreferrer">
          Jhordyess
        </a>
      </footer>
    </div>
  );
}
