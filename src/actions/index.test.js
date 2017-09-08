import React from 'react'
import * as actions from '../actions'
import pet from '../mockdata/mockPetData'


describe('Actions', () => {

  it('should create an action to fetch pet data', () => {
    const data = pet
    const expectedAction = {
      type: 'FETCH_SUCCESS',
      data
    }
    expect(actions.fetchPets(data)).toEqual(expectedAction)
  })

})
