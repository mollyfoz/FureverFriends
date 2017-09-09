import { combineReducers } from 'redux'
import { fetchPets } from './reducers'

const rootReducer = combineReducers({
  fetchPets
})

export default rootReducer
