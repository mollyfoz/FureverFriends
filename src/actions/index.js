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
      .then(pets => dispatch(fetchPets(pets)))
      .then(response => console.log(response))
      .catch(error => console.log('ERROR ', error))
  }
}
