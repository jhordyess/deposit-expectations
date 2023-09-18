import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.sass'
import { CurrencyFormat } from '../utils/Format'
import { DownArrow, UpArrow } from '@/components/Icons'

const InputR = ({ min = 0, max = 100, step = 1, Element, value, onChange }) => {
  return (
    <div className="inputR">
      <div>
        <div>{Element ? <Element value={min} /> : min}</div>
        <div>{Element ? <Element value={max} /> : max}</div>
      </div>
      <div>
        <input type="range" min={min} max={max} value={value} step={step} onChange={onChange} />
      </div>
    </div>
  )
}

InputR.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  Element: PropTypes.elementType,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

function Form({ execute }) {
  const minAmount = 5000
  const maxAmount = 300000
  const minYears = 10
  const maxYears = 30
  const minInterest = 1
  const maxInterest = 10

  const [amount, setAmount] = useState('152500')
  const [years, setYears] = useState('20')
  const [interestRate, setInterestRate] = useState('4')

  const toggleRangeAmount = ({ target }) => {
    setAmount(target.value)
  }

  const toggleYears = ({ target }) => {
    setYears(target.value)
  }

  const interestRateUp = () => {
    const curr = Number(interestRate)
    if (curr != maxInterest) setInterestRate(curr + 1)
  }
  const interestRateDown = () => {
    const curr = Number(interestRate)
    if (curr != minInterest) setInterestRate(curr - 1)
  }

  const compute = async () => {
    await execute(amount, years, interestRate)
  }

  return (
    <section id="form-container">
      <div>
        <div>Amount:</div>
        <div className="input">
          <InputR
            onChange={toggleRangeAmount}
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
            <CurrencyFormat value={Number(amount)} />
          </output>
        </div>
        <div>Number of years:</div>
        <div className="input">
          <InputR onChange={toggleYears} value={years} step={1} min={minYears} max={maxYears} />
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
  )
}

Form.propTypes = {
  execute: PropTypes.func.isRequired
}

export default Form
