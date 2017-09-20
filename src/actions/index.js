import { cleanData, cleanRandomData } from '../helper'

export const fetchDogs = (dogs) => {
  return {
    type: 'FETCH_DOG_SUCCESS',
    dogs
  }
}

export const fetchDogData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(object => object.petfinder.pets.pet)
      .then(result => cleanData(result))
      .then(pets => dispatch(fetchDogs(pets)))
      .catch(error => console.log('ERROR ', error))
  }
}

export const fetchCats = (cats) => {
  return {
    type: 'FETCH_CAT_SUCCESS',
    cats
  }
}

export const fetchCatData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(object => object.petfinder.pets.pet)
      .then(result => cleanData(result))
      .then(pets => dispatch(fetchCats(pets)))
      .catch(error => console.log('ERROR ', error))
  }
}

export const fetchRandom = (pet) => {
  return {
    type: 'FETCH_RANDOM',
    pet
  }
}

export const fetchRandomPet = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(object => object.petfinder.pet)
      .then(pet => cleanRandomData(pet))
      .then(pet => dispatch(fetchRandom(pet)))
      .catch(error => console.log('ERROR ', error))
  }
}

export const addFavorites = (fave) => {
  return {
    type: 'ADD_FAVORITES',
    fave
  }
}

export const removeFavorites = (fave) => {
  return {
    type: 'REMOVE_FAVORITES',
    fave
  }
}
