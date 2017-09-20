import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.setState({ input: e.target.value })
  }

  handleEnter(e) {
    e.preventDefault()
  }

  fireSearch(zip) {
    this.promiseFetch(zip)
    this.setState({ input: '' })
  }

  promiseFetch(zip) {
    const dogFetch =  this.props.fetchDogData(`https://api.petfinder.com/pet.find?location=${zip}&animal=dog&count=25&key=8ff0079b584547c25b3295dd09e2e6af&format=json`)
    const catFetch = this.props.fetchCatData(`https://api.petfinder.com/pet.find?location=${zip}&animal=cat&count=25&key=8ff0079b584547c25b3295dd09e2e6af&format=json`)
    return Promise.all([catFetch, dogFetch])
  }

  render() {

    return (
      <section className='search'>
        <p>Search to see adoptable pets near you</p>
        <form className='form' onSubmit={ this.handleEnter }>
          <input type='number'
                 className='input-box'
                 placeholder='Search By Zip Code'
                 value={this.state.input}
                 onChange={ (e) => this.handleInput(e) }
          />
          <input type='submit'
                 className='submit-btn'
                 name='Search'
                 onClick={ (e) => {
                  e.preventDefault()
                  this.fireSearch(this.state.input) } }
          />
        </form>
      </section>
    )
  }
}

export default PetListContainer(Search)
