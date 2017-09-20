import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import '../PetList/PetList.css'

export class FavoriteList extends Component {

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

    const { faves } = this.props

    const allFaves = faves.map((animal, i) => <Pet key={ i } petDetails={ animal }
    toggleFaves={ this.toggleFaves.bind(this) } /> )

    return (
      <div className='pet-list-container'>
      {
        (faves.length === 0) && <h1>Add some favorites!</h1>
      }
        { allFaves }
      </div>
    )
  }
}

export default PetListContainer(FavoriteList)
