import LoanCalc from '@/components/LoanCalc'

export default function Home() {
  return (
    <div>
      <main>
        <LoanCalc />
      </main>
      <footer>
        <div>
          Made with 💪 by
          <a href="https://www.jhordyess.com" target="_blank" rel="noreferrer">
            Jhordyess
          </a>
        </div>
        <div>
          👉
          <a
            href="https://github.com/jhordyess/simple-loan-calculator"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
