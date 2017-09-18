import React from 'react'
import { fetchDogs, fetchCats, fetchRandom } from './reducers'
import { pet } from '../mockdata/mockPetData'


describe('actions reducers', () => {

  const dogAction = {
    type: 'FETCH_DOG_SUCCESS',
    data: pet
  }

  it('should return the initial state for dogs', () => {
  expect(fetchDogs(undefined, {}) ).toEqual([])
  })

  it('dog state should return an array of dog objects', () => {
    expect(fetchDogs(dogAction.data, dogAction.type)).toEqual(dogAction.data)
  })

  const catAction = {
    type: 'FETCH_CAT_SUCCESS',
    data: pet
  }

  it('should return the initial state for cats', () => {
  expect(fetchCats([], {}) ).toEqual([])
  })

  it('cat state should return an array of cat objects', () => {
    expect(fetchCats(catAction.data, catAction.type)).toEqual(catAction.data)
  })

  const randomAction = {
    type: 'FETCH_RANDOM',
    data: pet
  }

  it('should return the initial state for random pet', () => {
  expect(fetchRandom(undefined, {}) ).toEqual({})
  })

  it('pet state should return a pet object', () => {
    expect(fetchRandom(randomAction.data, randomAction.type)).toEqual(randomAction.data)
  })

  const addFavoriteAction = {
    type: 'ADD_FAVORITES',
    data: pet
  }

  it.skip('should return the initial state for favorited pet', () => {
  expect(handleFavorites(undefined, {}) ).toEqual([])
  })

  it.skip('pet state should return a pet object', () => {
    expect(handleFavorites(addFavoriteAction.data, addFavoriteAction.type)).toEqual(addFavoriteAction.data)
  })
})
