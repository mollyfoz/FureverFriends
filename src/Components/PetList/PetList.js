import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import './PetList.css'

export class PetList extends Component {

  componentDidMount() {
     this.props.fetchDogData('https://api.petfinder.com/pet.find?location=80210&animal=dog&age=senior&count=50&key=8ff0079b584547c25b3295dd09e2e6af&format=json')
     this.props.fetchCatData('https://api.petfinder.com/pet.find?location=80210&animal=cat&age=senior&count=50&key=8ff0079b584547c25b3295dd09e2e6af&format=json')
  }

  visitProfile(props) {
    console.log('clicked', props)

  }

  dogEarPet(props) {
    console.log('clicked', props)

  }

  render() {

    const { dogs, cats } = this.props

    const allDogs = dogs.map((dog, i) => <Pet key={ i } petDetails={ dog } visitProfile={ this.visitProfile } dogEarPet={ this.dogEarPet }/> )

    const allCats = cats.map((cat, i) => <Pet key={ i } petDetails={ cat } visitProfile={ this.visitProfile } dogEarPet={ this.dogEarPet }/> )

    return (
      <div className='pet-list-container'>
        { allDogs }
        { allCats }
      </div>
    )
  }
}

export default PetListContainer(PetList)
