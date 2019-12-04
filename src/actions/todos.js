export const ADD_TODO = 'GET_POSTS';
export const DELETE_TODO = 'GET_POSTS_SUCCESS';
export const TOGGLE_TODO = 'GET_POSTS_SUCCESS';
let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

