export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FILTER_BY_PRIORITY= 'FILTER_BY_PRIORITY';

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
