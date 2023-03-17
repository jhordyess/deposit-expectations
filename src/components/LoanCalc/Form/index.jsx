import React from "react";
import "./style.sass";
import { CurrencyFormat } from "../utils/Format";
import { DownArrow, UpArrow } from "@components/Icons";
const InputR = ({ min = 0, max = 100, step = 1, Element, value, onChange }) => {
  return (
    <div className="inputR">
      <div>
        <div>{Element ? <Element value={min} /> : min}</div>
        <div>{Element ? <Element value={max} /> : max}</div>
      </div>
      <div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default function ({ execute }) {
  const minAmount = 5000;
  const maxAmount = 300000;
  const minYears = 10;
  const maxYears = 30;
  const minInterest = 1;
  const maxInterest = 10;

  const [amount, setAmount] = React.useState("152500");
  const [years, setYears] = React.useState("20");
  const [interestRate, setInterestRate] = React.useState("4");

  const toogleRangeAmount = ({ target }) => {
    setAmount(target.value);
  };

  const toogleYears = ({ target }) => {
    setYears(target.value);
  };

  const interestRateUp = () => {
    const curr = Number(interestRate);
    if (curr != maxInterest) setInterestRate(curr + 1);
  };
  const interestRateDown = () => {
    const curr = Number(interestRate);
    if (curr != minInterest) setInterestRate(curr - 1);
  };

  const compute = async () => {
    await execute(amount, years, interestRate);
    setbtnTxt("Calculate");
  };

  return (
    <section id="form-container">
      <div>
        <div>Amount:</div>
        <div className="input">
          <InputR
            onChange={toogleRangeAmount}
            value={amount}
            step={1000}
            min={minAmount}
            max={maxAmount}
            Element={CurrencyFormat}
          />
        </div>
        <div className="output">
          <span>USD</span>
          <output>
            <CurrencyFormat value={amount} />
          </output>
        </div>
        <div>Number of years:</div>
        <div className="input">
          <InputR
            onChange={toogleYears}
            value={years}
            step={1}
            min={minYears}
            max={maxYears}
          />
        </div>
        <div className="output">
          <span>years</span>
          <output>{years}</output>
        </div>
        <div>Interest rate:</div>
        <div id="Irate">
          <span>%</span>
          <output>{interestRate}</output>
          <aside>
            <button onClick={interestRateUp}>
              <UpArrow />
            </button>
            <button onClick={interestRateDown}>
              <DownArrow />
            </button>
          </aside>
        </div>
      </div>
      <button onClick={compute}>Calculate</button>
    </section>
  );
}
