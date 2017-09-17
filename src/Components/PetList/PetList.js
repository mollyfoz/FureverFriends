import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import './PetList.css'

export class PetList extends Component {

  favorite(props) {
    console.log('clicked', props)

  }

  render() {

    const { dogs, cats, random } = this.props
    const merged = [...dogs, ...cats]
    const randomPet = <Pet petDetails={ random } favorite={ this.favorite } />
    const allAnimals = merged.map((animal, i) => <Pet key={ i } petDetails={ animal } favorite={ this.favorite }/> )

    return (
      <div className='pet-list-container'>
        { randomPet }
        { allAnimals }
      </div>
    )
  }
}

export default PetListContainer(PetList)
