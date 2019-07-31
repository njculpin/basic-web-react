
// import { } from './StoreActions'

export const StoreReducer = (state, action) => {
  switch (action.type) {

    // MARK: INITIAL LOAD
    case 'loadingApp':
      return {
        ...state,
        loadingApp: action.payload
      }

    case 'loadingCards':
      return {
        ...state,
        loadingCards: action.payload
      }

    case 'setUser':
      return {
        ...state,
        user: action.payload
      }

    case 'setAuthed':
      return {
        ...state,
        authed: action.payload
      }

    default:
      return state;
  }
};
