import { combineReducers } from 'redux'
import { fetchPets, fetchCats } from './reducers'

const rootReducer = combineReducers({
  fetchPets,
  fetchCats
})

export default rootReducer
