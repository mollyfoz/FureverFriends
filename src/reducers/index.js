import { combineReducers } from 'redux'
import { fetchDogs, fetchCats, fetchRandom, handleFavorites } from './reducers'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  fetchDogs,
  fetchCats,
  fetchRandom,
  handleFavorites,
  router: routerReducer
})

export default rootReducer
