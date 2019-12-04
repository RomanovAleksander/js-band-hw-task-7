import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "../actions/todos";

const initialState = [];

export const todos = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          description: action.description,
          priority: action.priority,
          done: false,
          showMenu: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo) => (
        (todo.id === action.id)
          ? {...todo, done: !todo.done}
          : todo
      ));
    case DELETE_TODO:
      const idx = state.findIndex(el => el.id === action.id);
      const before = state.slice(0, idx);
      const after = state.slice(idx + 1);
      const newArray = [...before, ...after];
      return {
        state: newArray
      };
    default:
      return state
  }
};