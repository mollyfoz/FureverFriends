import React, { Component } from 'react'


export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleInput(e) {
    this.setState({ input: e.target.value })
  }

  render() {

    return (
      <div className='search'>
        <input type='text' placeholder='Search By Location' value={this.state.input} />
        <input type='submit' name='Seach' onClick={ (e) => {
          e.preventDefault()
          this.handleInput(e) }}/>
      </div>
    )
  }
}
