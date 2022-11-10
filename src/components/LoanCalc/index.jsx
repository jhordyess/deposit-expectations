import React from "react";
import NumberFormat from "react-number-format";
import Form from "./Form";
import { monthyPayment } from "./utils/calculations";
import Calculator from "./Info";

const NF_params = {
  currency: { displayType: "text", thousandSeparator: true, prefix: "$" },
  percent: { displayType: "text", suffix: "% yearly" },
};

export default function () {
  const [amount, setAmount] = React.useState("152500");
  const [years, setYears] = React.useState("20");
  const [interestRate, setInterestRate] = React.useState("4");
  const [monthlyP, setMonthlyP] = React.useState("908");

  const execute = (a, b, c, d) => {
    setAmount(a);
    setYears(b);
    setInterestRate(c);
    const aux = monthyPayment(Number(a), Number(b), Number(c) / 100);
    setMonthlyP(String(Math.round(aux)));
  };

  return (
    <main className="container">
      <Form {...{ execute }} />
      <Calculator {...{ amount, years, interestRate, monthlyP }} />
    </main>
  );
}
