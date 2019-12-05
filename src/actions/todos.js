export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FILTER_BY_PRIORITY = 'FILTER_BY_PRIORITY';
export const FILTER_BY_DONE = 'FILTER_BY_DONE';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SEARCH_TODO = 'SEARCH_TODO';
export const SEARCH_IN_TODOS = 'SEARCH_IN_TODOS';
export const PRIORITY_IN_TODOS = 'PRIORITY_IN_TODOS';
export const DONE_IN_TODOS = 'DONE_IN_TODOS';

let nextTodoId = 1;

export const addTodo = (text, description, priority) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    description,
    priority
  }
});


export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
});

export const updateTodo = (text, description, priority, id) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    text,
    description,
    priority
  }
});

export const filterByPriority = priorityFilter => ({
  type: FILTER_BY_PRIORITY,
  payload: {
    priorityFilter
  }
});

export const VisibilityPriorityFilters = {
  SHOW_ALL: 'all',
  SHOW_HIGH: 'high',
  SHOW_NORMAL: 'normal',
  SHOW_LOW: 'low'
};

export const filterByDone = doneFilter => ({
  type: FILTER_BY_DONE,
  payload: {
    doneFilter
  }
});

export const VisibilityDoneFilters = {
  SHOW_ALL: 'all',
  SHOW_DONE: 'done',
  SHOW_OPEN: 'open',
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

export const searchTodo = (searchText, todos) => ({
  type: SEARCH_TODO,
  payload: {
    searchText,
    todos
  }
});

export const searchInTodos = (todos, searchText) => ({
  type: SEARCH_IN_TODOS,
  payload: {
    searchText,
    todos
  }
});

export const priorityInTodos = (todos, priority) => ({
  type: PRIORITY_IN_TODOS,
  payload: {
    priority,
    todos
  }
});

export const doneInTodos = (todos, done) => ({
  type: DONE_IN_TODOS,
  payload: {
    done,
    todos
  }
});
