import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'


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
    this.props.fetchDogData(`https://api.petfinder.com/pet.find?location=${zip}&animal=dog&age=senior&count=25&key=8ff0079b584547c25b3295dd09e2e6af&format=json`)
    this.props.fetchCatData(`https://api.petfinder.com/pet.find?location=${zip}&animal=cat&age=senior&count=25&key=8ff0079b584547c25b3295dd09e2e6af&format=json`)
  }

  render() {

      console.log('search ', this.props)

    return (
      <div className='search'>
        <p>Enter your zip code to see adoptable pets near you </p>
        <input type='number' placeholder='Search By Zip Code' onChange={ (e) => this.handleInput(e) } value={this.state.input} />
        <input type='submit' name='Search' onClick={ (e) => {
                e.preventDefault()
                this.fireSearch(this.state.input)}
        } />
      </div>
    )
  }
}

export default PetListContainer(Search)
