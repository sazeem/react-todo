import { combineReducers } from 'redux'
import listItems from './listItems'
import searchItems from './searchItems'

export default combineReducers({
  listItems,
  searchItems
})
