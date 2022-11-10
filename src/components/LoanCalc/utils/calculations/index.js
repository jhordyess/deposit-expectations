//? https://www.investopedia.com/terms/a/amortization.asp#toc-amortization-of-loans
export function monthyPayment(amount = 5000, years = 10, interest = 0.01) {
  const months = 12;
  const i = interest / months;
  const n = months * years;
  const aux = (1 + i) ** n;
  return amount * ((i * aux) / (aux - 1));
}
