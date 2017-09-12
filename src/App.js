import React, { Component } from 'react'
import PetList from './Components/PetList/PetList'
import { Route, Link } from 'react-router-dom'
import './App.css'

export default class App extends Component {

  render() {

    return (
      <div className="main">
        <header className="header">
        <div className='navigation-container'>
          <Link className='nav-link' to='/'><h1>Furever<span> Friends</span></h1></Link>

          <div className='navigations'>
            <Link className='nav-link' to='/dogs'><h3>Dogs</h3></Link>
            <Link className='nav-link' to='/cats'><h3>Cats</h3></Link>
            <Link className='nav-link' to='/favorites'><h3>Favorites</h3></Link>
          </div>
        </div>


        </header>
        <section className="body-container">
          <Route exact path='/' component={ PetList }/>
          <Route exact path='/dogs' render={ () => <PetList dogs={true}/> }/>
          <Route exact path='/cats' render={ () => <PetList cats={true}/>}/>
          <Route exact path='/favorites' render={ () => <PetList favorites={true}/>}/>

        </section>
      </div>
    )
  }
}
