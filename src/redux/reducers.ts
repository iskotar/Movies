import { combineReducers } from 'redux'
import movieSearchResult from './reducers/movies/MovieSearchResult'
import currentItem from './reducers/currentItem'
import showsSearchResult from "./reducers/shows/ShowsSearchResult";

export const rootReducer = combineReducers({
  movieSearchResult,
  showsSearchResult,
  currentItem
})
