// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }


  render() {
    // debugger;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>enter band name:</label>
          <input onChange={this.handleChange} value={this.state.name} type="text"/>
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
