import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import { Route } from 'react-router-dom'
import './PetList.css'

export class PetList extends Component {

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

    const { dogs, cats, random, handleFavorites } = this.props
    const merged = [...dogs, ...cats]

    const randomPet = <Pet petDetails={ random } toggleFaves={ this.toggleFaves.bind(this) } favorite={ handleFavorites } featured={ true } />

    const allAnimals = merged.map((animal, i) => <Pet key={ i } petDetails={ animal }
    toggleFaves={ this.toggleFaves.bind(this) } favorite={ handleFavorites } /> )

    return (
      <div className='pet-list-container'>
      <Route exact path='/dogs' render={() => <p>DOGS</p>} />
      <Route exact path='/cats' render={() => <p>CATS</p>} />
      <Route exact path='/favorites' render={() => <p>FAVORITES</p>} />
        { randomPet }
        { allAnimals }
      </div>
    )
  }
}

export default PetListContainer(PetList)
