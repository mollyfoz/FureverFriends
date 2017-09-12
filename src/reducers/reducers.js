export const fetchPets = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.pets

    default:
      return state;
  }
}

export const fetchCats = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CAT_SUCCESS':
      return action.cats

    default:
      return state;
  }
}
