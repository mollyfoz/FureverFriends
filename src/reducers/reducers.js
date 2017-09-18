export const fetchDogs = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DOG_SUCCESS':
      return action.dogs

    default:
      return state
  }
}

export const fetchCats = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CAT_SUCCESS':
      return action.cats

    default:
      return state
  }
}

export const fetchRandom = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_RANDOM':
      return action.pet

    default:
      return state
  }
}

export const handleFavorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITES':
      return [...state, Object.assign({}, action.fave, { favorite: true })]

    case 'REMOVE_FAVORITES':
      return state.filter(fave => fave.id !== action.fave)

    default:
      return state
  }
}
