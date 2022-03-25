export const REQUEST_SONGS_BEGIN = 'REQUEST_SONGS_BEGIN'
export const REQUEST_SONGS_SUCCESS = 'REQUEST_SONGS_SUCCESS'
export const REQUEST_SONGS_FAILURE = 'REQUEST_SONGS_FAILURE'

export const requestSongsBegin = categoryId => ({
  type: REQUEST_SONGS_BEGIN,
  categoryId
})

export const requestSongsSuccess = songs => ({
  type: REQUEST_SONGS_SUCCESS,
  payload: { songs }
})

export const requestSongsFailure = error => ({
  type: REQUEST_SONGS_FAILURE,
  payload: { error }
})

export const fetchSongs = (categoryId) => (dispatch) => {
  dispatch(requestSongsBegin(categoryId))
  // return fetch(`/${categoryId}`)
  return fetch(`https://623df5c1e8fbc4f1626a135b.mockapi.io/api/v1/songs`)
    .then(response => response.json())
    .then(json => {
      dispatch(requestSongsSuccess(categoryId, json));
      return json.songs
    })
    .catch(error => dispatch(requestSongsFailure(error)));
}
