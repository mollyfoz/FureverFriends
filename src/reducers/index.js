import { combineReducers } from 'redux'
import { fetchDogs, fetchCats, fetchRandom, handleFavorites } from './reducers'

const rootReducer = combineReducers({
  fetchDogs,
  fetchCats,
  fetchRandom,
  handleFavorites
})

export default rootReducer
