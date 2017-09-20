import React, { Component } from 'react'
import PetList from './Components/PetList/PetList'
import Search from './Components/Search/Search'
import PetListContainer from './containers/PetListContainer'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import './App.css'


export class App extends Component {

  componentDidMount() {
    this.props.fetchRandomPet('https://api.petfinder.com/pet.getRandom?location=80210&animal=cat&output=basic&key=8ff0079b584547c25b3295dd09e2e6af&format=json')
  }

  filterData() {
    if (this.props.location.pathname === '/dogs') {
      return (this.props.dogs)
    } else if (this.props.location.pathname === '/cats') {
      return (this.props.cats)
    } else if (this.props.location.pathname === '/favorites') {
      return (this.props.faves)
    }
  }

  render() {

    return (
      <div className="main">
        <header className="header">
          <div className='navigation-container'>
            <Link className='nav-link' to='/'><h1>Furever Friends</h1></Link>

            <div className='navigations'>
              <Link className='nav-link' to='/dogs'><h3>Dogs</h3></Link>
              <Link className='nav-link' to='/cats'><h3>Cats</h3></Link>
              <Link className='nav-link' to='/favorites'><h3>Favorites</h3></Link>
            </div>
          </div>
        </header>

        <section className='search-container'>
          <Search fireSearch={this.props.fireSearch} />
        </section>

        <section className='body-container'>

            <Route exact path='/' component={ PetList }/>
            <Route exact path='/dogs' render={ () => <PetList type={ this.filterData() } /> } />
            <Route exact path='/cats' render={ () => <PetList type={ this.filterData() } /> }  />
            <Route exact path='/favorites' render={ () => <PetList type={ this.filterData() } /> }/>

        </section>
      </div>
    )
  }
}

export default PetListContainer(App)
