export const fetchDogs = (dogs) => {
    return {
        type: 'FETCH_DOG_SUCCESS',
        dogs
    }
}

const proxyURL = 'https://cors-anywhere.herokuapp.com/'

export const fetchDogData = (url) => {
  return (dispatch) => {
    fetch(proxyURL + url)
      .then(response => response.json())
      .then(object => object.petfinder.pets.pet)
      .then(result => result.map(pet => Object.assign({}, { name: pet.name.$t, age: pet.age.$t, type: pet.animal.$t, gender: pet.sex.$t, desc: pet.description.$t, id: pet.id.$t } )))
      .then(pets => dispatch(fetchDogs(pets)))
      .then(results => console.log(results))
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
    fetch(proxyURL + url)
      .then(response => response.json())
      .then(object => object.petfinder.pets.pet)
      .then(result => result.map(pet => Object.assign({}, { name: pet.name.$t, age: pet.age.$t, type: pet.animal.$t, gender: pet.sex.$t, desc: pet.description.$t, id: pet.id.$t } )))
      .then(pets => dispatch(fetchCats(pets)))
      .then(results => console.log(results))
      .catch(error => console.log('ERROR ', error))
  }
}
