export function monthyPaymentCalc(amount = 5000, years = 10, interest = 0.01) {
  const months = 12;
  const i = interest / months;
  const n = months * years;
  const aux = (1 + i) ** n;
  return amount * ((i * aux) / (aux - 1));
}
