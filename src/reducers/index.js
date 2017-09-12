import { combineReducers } from 'redux'
import { fetchDogs, fetchCats } from './reducers'

const rootReducer = combineReducers({
  fetchDogs,
  fetchCats
})

export default rootReducer
