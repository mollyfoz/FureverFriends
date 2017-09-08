export const fetchPets = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return [...state, action.pets]

    default:
      return state;
  }
}
