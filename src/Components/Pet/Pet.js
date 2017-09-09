import React from 'react'
import './Pet.css'

export const Pet = ( {petDetails} ) => {

  return (
    <div className='card-container'>
        <div className='image'>
        </div>
        <div className="pet-details">
          <h4>{ petDetails.name }</h4>
          <p className="pet-info">{ petDetails.age } :: { petDetails.gender }</p>
        </div>
    </div>
  )
}
