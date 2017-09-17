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

  fireSearch(zip) {
    this.hideFeature()
    this.props.fetchDogData(`https://api.petfinder.com/pet.find?location=${zip}&animal=dog&count=100&key=8ff0079b584547c25b3295dd09e2e6af&format=json`)
    this.props.fetchCatData(`https://api.petfinder.com/pet.find?location=${zip}&animal=cat&age=senior&count=25&key=8ff0079b584547c25b3295dd09e2e6af&format=json`)
  }

  hideFeature() {
    return this.props.featured ? false : true
  }

  // promiseFetch(zip) {

    // return Promise.all([catFetch, dogFetch])

  // }

  render() {

    return (
      <section className='search'>
        <p>See adoptable pets near you </p>
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
                  this.fireSearch(this.state.input)}}
          />
      </section>
    )
  }
}

export default PetListContainer(Search)
