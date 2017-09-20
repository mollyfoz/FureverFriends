import React from 'react'
import * as actions from '../actions'
import pet from '../mockdata/mockPetData'
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


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

  it('should create an action to add a pet to faves', () => {
    const data = pet
    const expectedAction = {
      type: 'ADD_FAVORITES',
      data
    }
    expect(actions.addFavorites(data)).toEqual(expectedAction)
  })

  it('should create an action to remove a pet from faves', () => {
    const data = pet
    const expectedAction = {
      type: 'REMOVE_FAVORITES',
      data
    }
    expect(actions.removeFavorites(data)).toEqual(expectedAction)
  })

})

describe('fetch data', () => {

  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)

  let wrapper;

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  it('creates FETCH_DOG_SUCCESS when it has fetched dog data', () => {
    const mockDogData = pet

    fetchMock.get('https://api.petfinder.com/pet.find?location=80210&animal=dog&count=25&key=8ff0079b584547c25b3295dd09e2e6af&format=jsons', {
    status: 201,
    body: mockDogData
    })

    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockDogData)
  })

  it('creates FETCH_CAT_SUCCESS when it has fetched cat data', () => {
    const mockCatData = pet

    fetchMock.get('https://api.petfinder.com/pet.find?location=80210&animal=cat&count=25&key=8ff0079b584547c25b3295dd09e2e6af&format=jsons', {
    status: 201,
    body: mockCatData
    })

    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockCatData)
  })

  it('creates FETCH_RANDOM when it has fetched random data', () => {
    const mockRandomData = pet

    fetchMock.get('https://api.petfinder.com/pet.getRandom?location=80210&animal=cat&output=basic&key=8ff0079b584547c25b3295dd09e2e6af&format=json', {
    status: 201,
    body: mockRandomData
    })

    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock._matchedCalls.length).toEqual(0)
    expect(fetchMock.routes[0].response.body).toEqual(mockRandomData)
  })

})
