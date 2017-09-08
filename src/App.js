import React, { Component } from 'react'
import Navigation from './Components/Navigation/Navigation'
import PetList from './Components/PetList/PetList'
import './App.css'
// import { Link } from 'react-router-redux'
// import { Route, NavLink, Link } from 'react-router-dom'
import PetListContainer from './containers/PetListContainer'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="main">
        <header className="header">
          <Navigation />

        </header>
        <section className="body-container">
          <PetList />
        </section>
      </div>
    )
  }
}
