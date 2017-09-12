import React from 'react'
import './Pet.css'

export const Pet = ({ petDetails, visitProfile }) => {

  return (
    <div className='card-container'>
        <div className='image'>
        <img src="http://placekitten.com/175/150" alt="kitty" />
        </div>
        <div className="pet-details">
          <h4>{ petDetails.name }</h4>
          <p className="pet-info">{ petDetails.age } { petDetails.type }</p>
          <p>{ petDetails.gender }</p>
          <button type='submit' onClick={ () => visitProfile(petDetails) }>Learn About { petDetails.name }</button>
        </div>
    </div>
  )
}
