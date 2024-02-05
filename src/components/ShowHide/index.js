import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameClicked: false,
    isLastNameClicked: false,
  }

  firstName = () => {
    this.setState(prevState => ({
      isFirstNameClicked: !prevState.isFirstNameClicked,
    }))
  }

  lastName = () => {
    this.setState(prevState => ({
      isLastNameClicked: !prevState.isLastNameClicked,
    }))
  }

  render() {
    const {isLastNameClicked, isFirstNameClicked} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container-names">
          <div className="firstname">
            <button
              type="button"
              onClick={this.firstName}
              className="show-hide-btn"
            >
              Show/Hide Firstname
            </button>
            {isFirstNameClicked && <p className="name">Joe</p>}
          </div>
          <div className="lastname">
            <button
              type="button"
              onClick={this.lastName}
              className="show-hide-btn"
            >
              Show/Hide Lastname
            </button>
            {isLastNameClicked && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
