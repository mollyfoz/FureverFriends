import React from 'react'
import './Pet.css'

export const Pet = ({ petDetails, favorite, toggleFaves, featured }) => {

  const addContainerClass = featured ? 'featured-container' : 'card-container'
  const activeFaveClass = favorite ? 'svg-active' : 'svg-inactive'

  return (
    <div className={ addContainerClass }>
      <div className='button-div'>
      <button className='dog-ear-btn' type='button' onClick={ () => toggleFaves(petDetails) }>    <svg className={ activeFaveClass } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.882 61.882" width="40" height="40"><path d="M31.003 56.22S50.87 40.075 57.335 32.89c5.893-6.55 6.23-16.33 0-22.56-6.23-6.228-16.328-6.228-22.558 0l-3.774 3.773-.063-.06-.064.062-3.772-3.772c-6.23-6.23-16.327-6.23-22.557 0s-5.893 16.01 0 22.56c6.464 7.185 26.33 23.33 26.33 23.33"/></svg></button>
      </div>
      <div className='image'>
        <img src={ petDetails.image } alt='pet' />
      </div>
      <div className="pet-details">
        <h4>{ petDetails.name } ({ petDetails.gender })</h4>
        <p className="pet-info">{ petDetails.age } { petDetails.type }</p>
      </div>
      <div className='pet-description'>
        <p>{ petDetails.desc }</p>
      </div>
      {
        (featured) && <div className='featured-desc'>
          <h3>Featured Pet</h3>
          <p>{ petDetails.desc }</p>
          </div>
      }
    </div>
  )
}
