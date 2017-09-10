export const fetchPets = (pets) => {
    return {
        type: 'FETCH_SUCCESS',
        pets
    }
}

const proxyURL = 'https://cors-anywhere.herokuapp.com/'

export const fetchPetData = (url) => {
  return (dispatch) => {
    fetch(proxyURL + url)
      .then(response => response.json())
      .then(object => object.petfinder.pets.pet)
      .then(result => result.map(pet => Object.assign({}, { name: pet.name.$t, age: pet.age.$t, type: pet.animal.$t, gender: pet.sex.$t, desc: pet.description.$t } )))
      .then(pets => dispatch(fetchPets(pets)))
      .catch(error => console.log('ERROR ', error))
  }
}
