import { useState } from 'react'
import Form from './Form'
import { monthyPaymentCalc } from './utils/calculations'
import Calculator from './Info'

export default function LoanCalc() {
  const [amount, setAmount] = useState('152500')
  const [years, setYears] = useState('20')
  const [interestRate, setInterestRate] = useState('4')
  const [monthlyP, setMonthlyP] = useState('908')

  const execute = (a, b, c) => {
    setAmount(a)
    setYears(b)
    setInterestRate(c)
    const aux = monthyPaymentCalc(Number(a), Number(b), Number(c) / 100)
    setMonthlyP(String(Math.round(aux)))
  }

  return (
    <>
      <Form {...{ execute }} />
      <Calculator {...{ amount, years, interestRate, monthlyP }} />
    </>
  )
}
