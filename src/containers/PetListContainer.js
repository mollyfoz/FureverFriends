import { connect } from 'react-redux'
import { fetchDogData, fetchCatData, fetchRandomPet, addFavorites, removeFavorites } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    dogs: store.fetchDogs,
    cats: store.fetchCats,
    random: store.fetchRandom,
    faves: store.handleFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDogData: (url) => dispatch(fetchDogData(url)),
    fetchCatData: (url) => dispatch(fetchCatData(url)),
    fetchRandomPet: (url) => dispatch(fetchRandomPet(url)),
    addFavorites: (fave) => dispatch(addFavorites(fave)),
    removeFavorites: (fave) => dispatch(removeFavorites(fave))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
