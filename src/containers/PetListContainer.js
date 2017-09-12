import { connect } from 'react-redux'
import { fetchDogData, fetchCatData } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    dogs: store.fetchDogs,
    cats: store.fetchCats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDogData: (url) => dispatch(fetchDogData(url)),
    fetchCatData: (url) => dispatch(fetchCatData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
