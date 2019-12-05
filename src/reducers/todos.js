import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/todos";

const initialState = [
  {
    id: 0,
    text: 'HW6',
    description: 'Use bootstrap',
    priority: 'high',
    done: false,
    showMenu: false
  }
];

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          description: payload.description,
          priority: payload.priority,
          done: false,
          showMenu: false
        }
      ];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== payload.id)

    case UPDATE_TODO:
      return state.map(todo => {
        return todo.id === payload.id ? {
          id: payload.id,
          title: payload.title,
          description: payload.description,
          priority: payload.priority
        } : todo
      })
    default:
      return state
  }
};
