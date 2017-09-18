import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
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

  // renderArrays() {
  //   if (this.props.dogs) {
  //     <PetList dogs={this.props.dogs} />
  //   } else if (this.props.cats) {
  //     <PetList cats ={this.props.cats}
  //   } else {
  //     <PetList fave={this.props.fave}
  //   }
  //   <PetList />
  // }

  //check arrays
  //set props
  //use a ternary to decide which one has been chosen
  //use that to filter through and append the correct shit

  render() {

    const { dogs, cats, random, handleFavorite } = this.props
    const merged = [...dogs, ...cats]

    const randomPet = <Pet petDetails={ random } toggleFaves={ this.toggleFaves.bind(this) } favorite={ handleFavorite } featured={true} />

    const allAnimals = merged.map((animal, i) => <Pet key={ i } petDetails={ animal }
    toggleFaves={ this.toggleFaves.bind(this) } favorite={ handleFavorite } /> )

    return (
      <div className='pet-list-container'>
        { randomPet }
        { allAnimals }
      </div>
    )
  }
}

export default PetListContainer(PetList)
