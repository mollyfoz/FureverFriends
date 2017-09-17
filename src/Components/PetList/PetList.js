import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import './PetList.css'

export class PetList extends Component {

  favorite(props) {
    console.log('clicked', props)

  }

  //check arrays
  //set props
  //use a ternary to decide which one has been chosen
  //use that to filter through and append the correct shit

  render() {

    const { dogs, cats, random, featured } = this.props
    const merged = [...dogs, ...cats]

    const randomPet = <Pet petDetails={ random } favorite={ this.favorite } featured={ true }/>

    const allAnimals = merged.map((animal, i) => <Pet key={ i }
                                                      petDetails={ animal }
                                                      favorite={ this.favorite }/> )

    return (
      <div className='pet-list-container'>
        { randomPet }
        { allAnimals }
      </div>
    )
  }
}

export default PetListContainer(PetList)
