import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import '../PetList/PetList.css'

export class DogList extends Component {

  toggleFaves(props) {
    if (props.favorite) {
      this.props.removeFavorites(props.id)
      props.favorite = false
    } else {
      this.props.addFavorites(props)
      props.favorite = true
    }
  }

  render() {

    const { dogs } = this.props

    const allDogs = dogs.map((animal, i) => <Pet key={ i } petDetails={ animal }
    toggleFaves={ this.toggleFaves.bind(this) } /> )

    return (
      <div className='pet-list-container'>
      {
        (dogs.length === 0) && <h1>Search to see adoptable dogs!</h1>
      }
        { allDogs }
      </div>
    )
  }
}

export default PetListContainer(DogList)
