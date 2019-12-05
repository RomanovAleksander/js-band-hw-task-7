import { combineReducers } from 'redux'
import { todos } from './todos';
import filterByPriority from './visibilityFilter';
import filterDone from './visibilityDone';
import searchText from './searchTodo';
import visibleTodos from './visibleTodos';

export const reducers = combineReducers({
  todos,
  filterPriority: filterByPriority,
  filterDone,
  searchText,
  visibleTodos
});