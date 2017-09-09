import { connect } from 'react-redux'
import { fetchPetData } from '../actions/index'

const mapStateToProps = (store) => {
  return {
    pets: store.fetchPets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPetData: (url) => dispatch(fetchPetData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
