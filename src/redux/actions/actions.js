import { httpRequest } from '../../services/API'

export const searchByQueryDispatcher = (query) => {

  return dispatch => {
    httpRequest(`&s=${query.title}&page=${query.page || 1}`)
    .then(response => {
      dispatch({
        type: 'BY_QUERY',
        payload: {
          title: query.title,
          page: query.page,
          response
        }
      })
    })
  }
}

export const searchByIdDispatcher = (id) => {
  return dispatch => {
    httpRequest(`&i=${id}`)
    .then(res => {
      dispatch({
        type: 'BY_ID',
        payload: res
      })
    })
  }
}

export const clearErrorDispatcher = () => {
  return {
    type: 'CLEAR_ERROR'
  }
}
