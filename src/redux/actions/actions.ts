import { httpRequestMovies, httpRequestShows } from '../../services/API'
import { Dispatch } from "redux";

interface IQuery {
  title:string;
  page:number;
}

export const searchByQueryDispatcher = (query:IQuery) => {

  return (dispatch:Dispatch) => {
    httpRequestMovies(`&s=${query.title}&page=${query.page || 1}`)
    .then((response:any) => {
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

export const searchByIdDispatcher = (id:string) => {
  return (dispatch:Dispatch) => {
    httpRequestMovies(`&i=${id}&plot=full`)
    .then((res) => {
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


export const searchShowsByQueryDispatcher = (query:IQuery) => {

  return (dispatch:Dispatch) => {
    httpRequestShows(`&q=${query.title}&page=${query.page || 1}`)
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
