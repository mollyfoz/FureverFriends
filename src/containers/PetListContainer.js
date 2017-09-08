import { connect } from 'react-redux'
import { fetchPetData } from '../actions/index'
import PetList from '../Components/PetList/PetList'

const mapStateToProps = (state) => {
  return {
    pets: state.pets,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPetData: (url) => dispatch(fetchPetData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetList)
