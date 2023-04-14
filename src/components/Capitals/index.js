import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    console.log(event.target.value)
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const country = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeId,
    )
    return country
  }

  render() {
    const {activeId} = this.state
    const {country} = this.getCountry(activeId)
    return (
      <div className="container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <select
            className="select"
            id="label"
            onChange={this.onChangeCapital}
            value={activeId}
          >
            {countryAndCapitalsList.map(eachCapital => (
              <option
                className="option"
                value={eachCapital.id}
                key={eachCapital.id}
              >
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="label" className="question">
            is capital of which country?
          </label>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
