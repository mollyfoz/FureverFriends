import React, { Component } from 'react'
import PetListContainer from '../../containers/PetListContainer'
import { Pet } from '../Pet/Pet'
import { Route } from 'react-router-dom'
import './PetList.css'

export class PetList extends Component {

  // componentWillReceiveProps(nextProps) {
  //   if (this.props !== nextProps.dogs.type) {
  //     console.log('dog props', nextProps.dogs);
  //     return nextProps.dogs.map(dog => console.log(dog))
  //   } else if (this.props.cats !== nextProps.cats) {
  //     console.log('cat props', nextProps.cats);
  //   } else {
  //     console.log('fave props', nextProps.faves);
  //   }
  //     //if they dont equal next props, update
  // }

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
      <Route exact path='/dogs' render={() => <p>DOGS</p>} />
      <Route exact path='/cats' render={() => <p>CATS</p>} />
      <Route exact path='/favorites' render={() => <p>FAVORITES</p> } />
        { randomPet }
        { allAnimals }
      </div>
    )
  }
}

export default PetListContainer(PetList)
