export const REQUEST_SONGS_BEGIN = 'REQUEST_SONGS_BEGIN'
export const REQUEST_SONGS_SUCCESS = 'REQUEST_SONGS_SUCCESS'
export const REQUEST_SONGS_FAILURE = 'REQUEST_SONGS_FAILURE'

export const requestSongsBegin = categoryId => ({
  type: REQUEST_SONGS_BEGIN,
  categoryId
})

export const requestSongsSuccess = songs => ({
  type: REQUEST_SONGS_SUCCESS,
  payload: {songs}
})

export const requestSongsFailure = error => ({
  type: REQUEST_SONGS_FAILURE,
  payload: { error }
})

export const fetchSongs = (categoryId) => async (dispatch) => {
  dispatch(requestSongsBegin(categoryId))
  // return fetch(`/${categoryId}`)
  return await fetch(`https://my-json-server.typicode.com/typicode/demo/posts`)
    .then(response => response.json())
    .then(json => {
      dispatch(requestSongsSuccess(json));
      return json
    })
    .catch(error => dispatch(requestSongsFailure(error)));
}
