import { combineReducers } from 'redux'
import { todos } from './todos';
import filterByPriority from './visibilityFilter'

export const reducers =  combineReducers({
  todos,
  filterByPriority
})