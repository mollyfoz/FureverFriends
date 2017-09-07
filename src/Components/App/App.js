import React, { Component } from 'react'
import { Route, NavLink, Link } from 'react-router-redux'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="main">
        <header className="header">
          <NavLink to='/' className='nav'><h1>Furever Friends</h1></NavLink>
        </header>
        <section className="body-container">
          <Route exact path='/dogs' component={ PetList } />
          <Route exact path='/cats' component={ PetList } />
          <Route exact path='/all' component={ PetList } />
        </section>
      </div>
    )
  }
}
