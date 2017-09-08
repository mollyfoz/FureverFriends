import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import Pet from '../Pet/Pet'
import './PetList.css'

export class PetList extends Component {

  componentDidMount() {
    this.props.fetchPetData('https://api.petfinder.com/pet.find?location=80210&animal=cat&age=senior&count=50&key=8ff0079b584547c25b3295dd09e2e6af&format=json')
  }

  render() {

    // const { data } = this.props
    //
    // const allPets = data.map((pet, i) => {
    //   return <Pet key={ i } {...pet} />
    // })

    return (
      <div className='pet-list-container'>

      </div>
    )
  }
}

export default PetListContainer(PetList)
