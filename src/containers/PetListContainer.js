import { connect } from 'react-redux'
import { fetchPetData, fetchCatData } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    pets: store.fetchPets,
    cats: store.fetchCats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPetData: (url) => dispatch(fetchPetData(url)),
    fetchCatData: (url) => dispatch(fetchCatData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
