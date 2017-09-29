import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import { Route } from 'react-router-dom'
import './PetList.css'

class PetList extends Component {

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

    const { dogs, cats, random } = this.props
    const merged = [...dogs, ...cats]

    const randomPet = <Pet petDetails={ random } toggleFaves={ this.toggleFaves.bind(this) } featured={ true } />

    const allAnimals = merged.map((animal, i) => <Pet key={ i } petDetails={ animal }
    toggleFaves={ this.toggleFaves.bind(this) } /> )

    return (
      <div className='pet-list-container'>
        { randomPet }
        { allAnimals }
      </div>
    )
  }
}

export default PetListContainer(PetList)

export { PetList }
