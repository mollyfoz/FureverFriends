import { connect } from 'react-redux'
import { fetchDogData, fetchCatData, fetchRandomPet } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    dogs: store.fetchDogs,
    cats: store.fetchCats,
    random: store.fetchRandom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDogData: (url) => dispatch(fetchDogData(url)),
    fetchCatData: (url) => dispatch(fetchCatData(url)),
    fetchRandomPet: (url) => dispatch(fetchRandomPet(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
