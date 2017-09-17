import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import './PetList.css'

export class PetList extends Component {

  checkFaves(props) {
    if (props.favorite) {
      this.props.removeFavorites(props.id)
      console.log('removing ', props);
      props.favorite = false
    } else {
      this.props.addFavorites(props)
      console.log('adding ', props);
      props.favorite = true
    }
  }

  //check arrays
  //set props
  //use a ternary to decide which one has been chosen
  //use that to filter through and append the correct shit

  render() {

    const { dogs, cats, random } = this.props

    const merged = [...dogs, ...cats]

    const randomPet = <Pet petDetails={ random } checkFaves={ this.checkFaves.bind(this) } />

    const allAnimals = merged.map((animal, i) => <Pet key={ i } petDetails={ animal } checkFaves={ this.checkFaves.bind(this) }/> )

    return (
      <div className='pet-list-container'>
        { randomPet }
        { allAnimals }
      </div>
    )
  }
}

export default PetListContainer(PetList)
