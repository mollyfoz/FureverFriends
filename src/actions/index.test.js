import React from 'react'
import * as actions from '../actions'
import pet from '../mockdata/mockPetData'


describe('Actions', () => {

  it('should create an action to fetch dog data', () => {
    const data = pet
    const expectedAction = {
      type: 'FETCH_DOG_SUCCESS',
      data
    }
    expect(actions.fetchDogs(data)).toEqual(expectedAction)
  })

  it('should create an action to fetch cat data', () => {
    const data = pet
    const expectedAction = {
      type: 'FETCH_CAT_SUCCESS',
      data
    }
    expect(actions.fetchCats(data)).toEqual(expectedAction)
  })

  it('should create an action to fetch a random pet data', () => {
    const data = pet
    const expectedAction = {
      type: 'FETCH_RANDOM',
      data
    }
    expect(actions.fetchRandom(data)).toEqual(expectedAction)
  })

})
