import {httpRequestShows} from '../../../services/API'
import {Dispatch} from "redux";

interface IQuery {
  title: string;
  page: number;
}

export const searchShowsByQueryDispatcher = (query: IQuery) => {

  return (dispatch: Dispatch) => {
    httpRequestShows(`search/shows?&q=${query.title}`)
      .then(response => {
        dispatch({
          type: 'SHOW_BY_QUERY',
          payload: {
            title: query.title,
            page: query.page,
            response
          }
        })
      })
  }
}

export const clearShowsSearchResultDispatcher = () => {
  return {
    type: 'CLEAR_SHOWS'
  }
}

export const searchShowsByIdDispatcher = (id: number) => {
  return (dispatch: Dispatch) => {
    httpRequestShows(`shows/${id}`)
      .then((res) => {
        dispatch({
          type: 'BY_ID',
          payload: res
        })
      })
  }
}

export const getCastByShowIdDispatcher = (id: number) => {
  return (dispatch: Dispatch) => {
    httpRequestShows(`shows/${id}/cast`)
      .then((res) => {
        dispatch({
          type: 'CAST',
          payload: res
        })
      })
  }
}
