import React from 'react'
import './Navigation.css'
// import Search from '../Search/Search'

const Navigation = () => {

  return (
    <div className='navigation-container'>
      <h1>Furever<span> Friends</span></h1>
      <div className='nav-links'>
        <h3>Dogs</h3>
        <h3>Cats</h3>
        <h3>All Pets</h3>
      </div>
      <div className='search-container'>
      </div>
    </div>
  )
}

export default Navigation
