import React from 'react'
import { fetchPets } from './reducers'
import pet from '../mockdata/mockPetData'


describe('actions reducer', () => {

  const action = {
    type: 'FETCH_SUCCESS',
    data: pet
  }

  it('should return the initial state for pets', () => {
  expect(fetchPets(undefined, {}) ).toEqual([])
  })

  it('pet state should return an array of pet objects', () => {
    expect(fetchPets(action.data, action.type)).toEqual(action.data)
  })

})
