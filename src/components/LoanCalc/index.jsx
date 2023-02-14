import React from "react";
import Form from "./Form";
import { monthyPaymentCalc } from "./utils/calculations";
import Calculator from "./Info";

export default function () {
  const [amount, setAmount] = React.useState("152500");
  const [years, setYears] = React.useState("20");
  const [interestRate, setInterestRate] = React.useState("4");
  const [monthlyP, setMonthlyP] = React.useState("908");

  const execute = (a, b, c, d) => {
    setAmount(a);
    setYears(b);
    setInterestRate(c);
    const aux = monthyPaymentCalc(Number(a), Number(b), Number(c) / 100);
    setMonthlyP(String(Math.round(aux)));
  };

  return (
    <main>
      <Form {...{ execute }} />
      <Calculator {...{ amount, years, interestRate, monthlyP }} />
    </main>
  );
}
