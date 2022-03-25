import { REQUEST_SONGS_BEGIN, REQUEST_SONGS_SUCCESS, REQUEST_SONGS_FAILURE } from './action'

const initialState = {
  items: [],
  loading: false,
  error: null
};
let songsReducer

export default songsReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_SONGS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case REQUEST_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.songs
      };

    case REQUEST_SONGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}