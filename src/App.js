import React, { Component } from 'react'
import PetList from './Components/PetList/PetList'
import Search from './Components/Search/Search'
import PetListContainer from './containers/PetListContainer'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import './App.css'


export class App extends Component {

  componentDidMount() {
    this.props.fetchRandomPet('https://api.petfinder.com/pet.getRandom?location=80210&animal=dog&output=basic&key=8ff0079b584547c25b3295dd09e2e6af&format=json')
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
          <Switch>
            <Route exact path='/' component={ PetList }/>
            <Route exact path='/dogs' render={ () => <PetList dogs={true}/> } />
            <Route exact path='/cats' render={ () => <PetList cats={true}/> }  />
            <Route exact path='/favorites' render={ () => <PetList fave={true} /> }/>
          </Switch>
        </section>
      </div>
    )
  }
}

export default PetListContainer(App)
