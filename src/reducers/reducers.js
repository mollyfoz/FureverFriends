export const fetchPets = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.pets

    default:
      return state;
  }
}
