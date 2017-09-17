import React from 'react'
import './Pet.css'

export const Pet = ({ petDetails, favorite }) => {

  return (
    <div className='card-container'>
        <div className='button-div'>
          <button className='dog-ear-btn' type='button' onClick={ () => favorite(petDetails) }></button>
        </div>
        <div className='image'>
        <img src="http://placekitten.com/175/150" alt="kitty" />
        </div>
        <div className="pet-details">
          <h4>{ petDetails.name }</h4>
          <p className="pet-info">{ petDetails.age } { petDetails.type }</p>
          <p>{ petDetails.gender }</p>
          <p className='pet-description'>{ petDetails.desc }</p>
        </div>
    </div>
  )
}
