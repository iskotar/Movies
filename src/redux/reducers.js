import { combineReducers } from 'redux'
import searchResult from './reducers/searchResult'
import currentItem from './reducers/currentItem'

export const rootReducer = combineReducers({
  searchResult,
  currentItem
})
