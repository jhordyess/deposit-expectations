import PropTypes from 'prop-types'

export const CurrencyFormat = ({ value, sign = true }) => (
  <span>
    {new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      signDisplay: sign ? 'auto' : 'never'
    }).format(value)}
  </span>
)

CurrencyFormat.propTypes = {
  value: PropTypes.number.isRequired,
  sign: PropTypes.bool
}

export const PercentFormat = ({ value }) => (
  <span>
    {new Intl.NumberFormat('en-US', {
      style: 'percent'
    }).format(value / 100)}
  </span>
)

PercentFormat.propTypes = {
  value: PropTypes.number.isRequired
}
