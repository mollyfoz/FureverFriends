import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import '../PetList/PetList.css'

export class CatList extends Component {

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

    const { cats } = this.props

    const allCats = cats.map((animal, i) => <Pet key={ i } petDetails={ animal }
    toggleFaves={ this.toggleFaves.bind(this) } /> )

    return (
      <div className='pet-list-container'>
      {
        (cats.length === 0) && <h1>Search to see adoptable cats!</h1>
      }
        { allCats }
      </div>
    )
  }
}

export default PetListContainer(CatList)
