import React from 'react'
import './Pet.css'

export const Pet = ({ petDetails, favorite, featured }) => {

  return (
    <div className='card-container'>
        <div className='button-div'>
          <button className='dog-ear-btn' type='button' onClick={ () => favorite(petDetails) }></button>
          {
            (featured) && <p className='featured'>Featured Pet</p>
          }
        </div>
        <div className='image'>
        <img src={ petDetails.image } alt='pet' />
        </div>
        <div className="pet-details">
          <h4>{ petDetails.name } ( { petDetails.gender })</h4>
          <p className="pet-info">{ petDetails.age } { petDetails.type }</p>
        </div>
        <p className='pet-description'>{ petDetails.desc }</p>
    </div>
  )
}


// <p>{ petDetails.gender }</p>
