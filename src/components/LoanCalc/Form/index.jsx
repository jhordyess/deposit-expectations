import React from "react";
import "./style.sass";

export default function ({ execute }) {
  const [sw, setSW] = React.useState(false);
  const toogleSW = () => {
    setSW(!sw);
  };

  const minAmount = 5000;
  const maxAmount = 300000;

  const [amount, setAmount] = React.useState("152500");
  const [years, setYears] = React.useState("20");
  const [interestRate, setInterestRate] = React.useState("4");
  const [btnTxt, setbtnTxt] = React.useState("Calculate");
  const [lock, setLock] = React.useState(false);

  const toogleRangeAmount = ({ target }) => {
    setAmount(target.value);
  };

  const toogleYears = ({ target }) => {
    setYears(target.value);
  };

  const toogleInterestRate = ({ target }) => {
    setInterestRate(target.value);
  };

  const compute = async () => {
    if (!sw) {
      await execute(amount, years, interestRate);
      setbtnTxt("Reset");
      toogleSW();
      setLock(true);
    } else {
      // setAmount("152500");
      // setYears("20");
      // setInterestRate("4");
      setbtnTxt("Calculate");
      toogleSW();
      setLock(false);
    }
  };

  return (
    <section id="form-container">
      <div>
        <div>Amount:</div>
        <div>
          <input
            type="range"
            min={minAmount}
            max={maxAmount}
            value={amount}
            step={1000}
            onChange={toogleRangeAmount}
            disabled={lock}
          />
        </div>
        <div>
          <output>{amount}</output>
        </div>
        <div>Number of years:</div>
        <div>
          <input
            type="range"
            min={10}
            max={30}
            value={years}
            onChange={toogleYears}
            disabled={lock}
          />
        </div>
        <div>
          <output>{years}</output>
        </div>
        <div>Interest rate:</div>
        <div id="Irate">
          <input defaultValue={4} />
        </div>
      </div>
      <button onClick={compute}>{btnTxt}</button>
    </section>
  );
}
