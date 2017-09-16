import { combineReducers } from 'redux'
import { fetchDogs, fetchCats, fetchRandom } from './reducers'

const rootReducer = combineReducers({
  fetchDogs,
  fetchCats,
  fetchRandom
})

export default rootReducer
